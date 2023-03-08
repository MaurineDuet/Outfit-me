// Sounds import //

const playStart = new Audio()
playStart.src = "../assets/sounds/play.mp3"

const hover = new Audio()
hover.src = "../assets/sounds/hover2.mp3"

// pause and reset function //

function pauseAndReset (sound) {
    sound.pause()
    sound.currentTime = 0
}

// Audio "play" button hover //

const playBtn = document.querySelector("[data-play-btn]")

if (playBtn) {
    
    playBtn.addEventListener("mouseover", () => {
        hover.play()
    })
    
    playBtn.addEventListener("mouseleave", () => {
        pauseAndReset(hover)
    })
    
}

// Audio "play" button on click and page redirection with timeout //

if (playBtn) {
    
    playBtn.addEventListener("click", () => {
        pauseAndReset(hover)
        playStart.play()
        
        setTimeout(() => {
            document.location = 'form.html'
        }, 1500)
    })
    
}

// Audio "other outfits" button on click and other outfits section display //

const otherBtn = document.querySelector("[data-other-btn]")
const showOtherOutfits = document.querySelector("[show-other-outfits]")

if (otherBtn) {
    
    otherBtn.addEventListener("mouseover", () => {
        hover.play()
    })
    
    otherBtn.addEventListener("mouseleave", () => {
        pauseAndReset(hover)
    })
}

if(otherBtn) {

    otherBtn.addEventListener("click", () => {
    showOtherOutfits.classList.remove("hidden")})
    
}


// Audio footer and form options buttons on click and hover //


const hoverFooter = new Audio()
hoverFooter.src = "../assets/sounds/hover3.mp3"

const selectChoice = new Audio()
selectChoice.src = "../assets/sounds/select.mp3"

const footerBtn = document.querySelectorAll("[data-play-footer]")

footerBtn.forEach(element => {
    
    element.addEventListener("mouseover", () => {
        hoverFooter.play()
    })
    
    element.addEventListener("mouseleave", () => {
        pauseAndReset(hoverFooter)
    })
    
    element.addEventListener("click", ()  => {
        pauseAndReset(hoverFooter)
        pauseAndReset(selectChoice)
        selectChoice.play()

    })
    
})