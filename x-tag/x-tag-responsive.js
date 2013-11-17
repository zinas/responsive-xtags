(function () {
        xtag.registerResponsive = function (name, options) {

            // Pre-initialization (work on options)
            var element, _name;
            if (typeof name == 'string') {
                _name = name.toLowerCase();
            } else if (name.nodeName == 'ELEMENT') {
                element = name;
                _name = element.getAttribute('name').toLowerCase();
            } else {
                return;
            }

            // "hijack" created method of lifecycle
            var _created = function () {};
            if (options && options.lifecycle) {
                _created = options.lifecycle.created;
            }

            options.lifecycle = options.lifecycle || {};
            options.lifecycle.created = function () {
                _created.apply(this);
                this.respond.apply(this);

                var self = this;
                window.setInterval(function () {
                    self.respond();
                }, 500);
            }


            options.methods = options.methods || {};
            options.methods.respond = function () {
                var sizes, i, width = this.offsetWidth;
                if (this.lastWidth && this.lastWidth==width) {
                    return;
                }
                for (i in options.queries) {
                    sizes = __getMinMax(i);
                    if (width >= sizes.min && width <= sizes.max) {
                        options.queries[i].apply(this);
                    }
                }
                this.lastWidth = width;
            }

            // Initialize
            xtag.register(name, options);

            // After Initialization (work on tag)
            var tag = xtag.tags[_name];
            if (options && options.queries) {
                tag.queries = options.queries;
            }

            xtag.tags[_name] = tag;
            return;
        };


        function __getMinMax(query) {
            var min = query.match(/min\(\s*(\d+)\s*\)/);
            var max = query.match(/max\(\s*(\d+)\s*\)/);

            min = min&&min[1]?min[1]:"0";
            max = max&&max[1]?max[1]:"99999";

            return {min:parseInt(min), max:parseInt(max)};
        }
})();