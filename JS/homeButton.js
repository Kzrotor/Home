let homeButton = document.querySelector('.homeButton')

window.addEventListener('scroll', ()=> {

    let winScroll = document.documentElement.scrollTop;
    if (winScroll > 10) { 
        homeButton.classList.remove('closed') 
        }
        else {
        homeButton.classList.add('closed') }
})
