!function(){
    var view = document.querySelectorAll('[data-x]')
    var controller={
        view:null, 
        highlightTag:null,
        highlightTags:null,
        minIndex:null,
        init: function(view){
            this.view = view
            this.deactiveTag()
            this.activeTag()
            this.bindEvent()
            console.log('1')
        },
        activeTag: function(){
            this.minIndex = 0
            this.view[this.minIndex].classList.remove('offset')
            for(let i=1; i < this.view.length; i++){
                if(Math.abs(this.view[i].offsetTop - window.scrollY) < Math.abs(this.view[this.minIndex].offsetTop-window.scrollY))
                {
                    this.minIndex = i
                }
                this.highlightTag = document.querySelector('a[href="#' + this.view[this.minIndex].id +'"]' )
                this.highlightTag.parentElement.classList.add('highlight')
                this.view[this.minIndex].classList.remove('offset')	
            } 
        },
        deactiveTag: function(){
            for(let i = 0;i<this.view.length;i++){
                this.highlightTags = document.querySelector('a[href="#' +this.view[i].id+'"]')
                this.highlightTags.parentElement.classList.remove('highlight')
                this.view[i].classList.add('offset')
            }
        },
        bindEvent: function(){
            window.addEventListener('scroll',()=>{
                this.deactiveTag()
                this.activeTag()
                console.log(4)
            })
        }
    }
    
    controller.init(view)

    

}.call()
