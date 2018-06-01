xx()
window.addEventListener('scroll',xx)
function xx(){
    let specialTags = $('[data-x]')
    let minIndex = 0
    specialTags[minIndex].classList.remove('offset')	
    for(let i=1; i < specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop-window.scrollY))
        {
            minIndex = i
        }
        let id = specialTags[minIndex].id
        let highlightTag = document.querySelector('a[href="#' + id +'"]' )
        for(let i = 0;i<specialTags.length;i++){
            let highlightTags = document.querySelector('a[href="#' +specialTags[i].id+'"]')
            highlightTags.parentElement.classList.remove('highlight')
            specialTags[i].classList.add('offset')
        }
        highlightTag.parentElement.classList.add('highlight')
        specialTags[minIndex].classList.remove('offset')			
    }
}
