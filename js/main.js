// Audio button play //

const hover = new Audio()
hover.src = "../assets/sounds/hover2.mp3"

const playBtn = document.querySelector("[data-play-btn]")

if (playBtn) {

    playBtn.addEventListener("mouseover", (play) => {
        hover.play()
    })

    playBtn.addEventListener("mouseleave", (play) => {
        hover.pause()
    })

}

// Audio button play on click //

if (playBtn) {

    const playStart = new Audio()
    playStart.src = "../assets/sounds/play.mp3"

    playBtn.addEventListener("click", (play) => {
        playStart.play()

        setTimeout(() => {
            document.location = 'form.html'
        }, 1500)
    })

}


// Audio button footer et form //

const hoverFooter = new Audio()
hoverFooter.src = "../assets/sounds/hover3.mp3"

const selectChoice = new Audio()
selectChoice.src = "../assets/sounds/select.mp3"

const footerBtn = document.querySelectorAll("[data-play-footer]")

footerBtn.forEach(element => {

    element.addEventListener("mouseover", (play) => {
        hoverFooter.play()
    })

    element.addEventListener("mouseleave", (play) => {
        hoverFooter.pause()
    })

    element.addEventListener("click", (play)  => {
        hoverFooter.pause()
        selectChoice.play()
    })

})

// Ajout de la classe sélectionnée selon les réponse//

const answers = document.querySelectorAll("[data-answer]")
const answersContainer = document.querySelector("[data-answers]")

answers.forEach(answer => {
    answer.addEventListener("click", e => {
        const previousSelected = answersContainer.querySelector(".selected")
        if (previousSelected) {
            previousSelected.classList.remove("selected")
        }       
        answer.classList.add("selected")
    })
})



