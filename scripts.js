xtag.registerResponsive('x-nature', {
    lifecycle: {
        created: function(){
        }
    },
    queries: {
        'max(200)' : function () {
            this.innerHTML = '<h4>I am just a tree</h4><div class="tree tree-1"></div>';
        },
        'min(201) and max(400)' : function () {
            this.innerHTML =
            '<h4>I am a forest!</h4>'+
            '<div class="forest">'+
                '<div class="tree tree-1"></div>'+
                '<div class="tree tree-2"></div>'+
                '<div class="tree tree-3"></div>'+
                '<div class="tree tree-4"></div>'+
            '</div>';
        },
        'min(401)' : function () {
            this.innerHTML =
            '<h4>I am a whole jungle!</h4>'+
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