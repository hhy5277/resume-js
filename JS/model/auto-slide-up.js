!function(){

    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
    }	
    requestAnimationFrame(animate);

    for(let i=0;i<aTags.length;i++){
        aTags[i].onclick = function(x){
            //settingSlideTime
            let a = x.currentTarget
            let href = a.getAttribute('href')
            let selectElement = document.querySelector(href)
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
        }
    }
}.call()