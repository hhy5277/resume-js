!function(){
        var view = document.querySelector('#navBar')
        var controller = {
                view: null,
                init: function(view){
                        this.view = view
                        window.onscroll =()=>{
                                window.scrollY !== 0 ? this.active():this.deactive()
                        }       
                },
                active: function(){
                        this.view.classList.add('sticky')
                },
                deactive: function(){
                        this.view.classList.remove('sticky')
                },
        }

        controller.init(view)
}.call()      
       