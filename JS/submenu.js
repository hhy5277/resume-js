let liTags = document.querySelectorAll(' nav.menu > ul > li')
for(let i = 0;i<liTags.length;i++){
    liTags[i].onmouseenter = function(x){
        let targetMenu = x.currentTarget
        targetMenu.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
        let targetMenu = x.currentTarget
        targetMenu.classList.remove('active')
    }
}
