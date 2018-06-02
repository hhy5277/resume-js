!function(){
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.initAnimate()
            this.bindEvents()
        },
        initAnimate: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }	
            requestAnimationFrame(animate);
        },
        bindEvents: function(){
            let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
            for(let i=0;i<aTags.length;i++){
                aTags[i].onclick = (x)=>{
                    let selectElement = document.querySelector(x.currentTarget.getAttribute('href'))
                    this.scrollToElement(selectElement)
                }
            }
        },
        scrollToElement:function(selectElement){
            let currentTop = {y: window.scrollY}
            let targetTop = { y:(selectElement.offsetTop-80)}
            t = (Math.abs(targetTop.y - currentTop.y)/100)*300
            if(t>500){t=500}
            //TWEEN
            let tween = new TWEEN.Tween(currentTop) 
                .to({ y: targetTop.y },t) 
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(
                    function() { 
                        window.scrollTo(0,currentTop.y)
                    })	
                .start(); 
        },
    }
    controller.init(view)
}.call()