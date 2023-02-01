// Audio button play //

const hover = new Audio()
hover.src = "../assets/sounds/hover2.mp3"

const playBtn = document.querySelector("[data-play-btn]")

if(playBtn) {

playBtn.addEventListener("mouseover", (play)=> {
    hover.play()
})

playBtn.addEventListener("mouseleave", (play)=> {
    hover.pause()
})

}

// Audio button play on click //

if(playBtn) {

const playStart = new Audio()
playStart.src = "../assets/sounds/play.mp3"

playBtn.addEventListener("click", (play) => {
    playStart.play()

    setTimeout(() => {
    document.location = 'form.html' }, 1500)
})

}


// Audio button footer //

const hoverFooter = new Audio()
hoverFooter.src = "../assets/sounds/hover3.mp3"

const footerBtn = document.querySelectorAll("[data-play-footer]")

footerBtn.forEach(element => {
    
element.addEventListener("mouseover", (play)=> {
    hoverFooter.play()
})

element.addEventListener("mouseleave", (play)=> {
    hoverFooter.pause()
})

});