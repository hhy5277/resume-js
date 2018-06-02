!function(){
    var view = document.querySelectorAll(' nav.menu > ul > li')
    // let liTags = document.querySelectorAll(' nav.menu > ul > li')
    var controller={
        view:null,
        init:function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            for(let i = 0;i<this.view.length;i++){
                this.view[i].onmouseenter = function(x){
                    let targetMenu = x.currentTarget
                    targetMenu.classList.add('active')
                }
                this.view[i].onmouseleave = function(x){
                    let targetMenu = x.currentTarget
                    targetMenu.classList.remove('active')
                }
            }
        }
    }
    
    controller.init(view)
}.call()

