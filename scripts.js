xtag.registerResponsive('x-nature', {
    lifecycle: {
        created: function(){
        }
    },
    queries: {
        'max(200)' : function () {
            this.innerHTML = '<div class="tree tree-1"></div>';
        },
        'min(201) and max(400)' : function () {
            this.innerHTML =
            '<div class="forest">'+
                '<div class="tree tree-1"></div>'+
                '<div class="tree tree-2"></div>'+
                '<div class="tree tree-3"></div>'+
                '<div class="tree tree-4"></div>'+
            '</div>';
        },
        'min(401)' : function () {
            this.innerHTML =
            '<div class="jungle">'+
                '<div class="tree tree-1"></div>'+
                '<div class="tree tree-2"></div>'+
                '<div class="tree tree-3"></div>'+
                '<div class="tree tree-4"></div>'+
                '<div class="tree tree-1"></div>'+
                '<div class="tree tree-2"></div>'+
                '<div class="tree tree-3"></div>'+
                '<div class="tree tree-4"></div>'+
                '<div class="tree tree-1"></div>'+
                '<div class="tree tree-2"></div>'+
                '<div class="tree tree-3"></div>'+
                '<div class="tree tree-4"></div>'+
                '<div class="tree tree-1"></div>'+
                '<div class="tree tree-2"></div>'+
                '<div class="tree tree-3"></div>'+
                '<div class="tree tree-4"></div>'+
            '</div>';
        }
    },
    accessors: {
        languages : {
            get : function () {
                return this.jsonData;
            },
            set : function (json) {
                this.jsonData = json;
            }
        }
    },
    events: {

    },
    methods: {
        foo : function () {

        }
    }
});