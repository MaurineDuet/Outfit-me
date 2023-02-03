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

// Ajout de la classe sélectionnée selon les réponses//

const answersContainers = document.querySelectorAll("[data-answers]")

if (answersContainers) {
    answersContainers.forEach(answersContainer => {
        const answers = answersContainer.querySelectorAll("[data-answer]")
        
        answers.forEach(answer => {
            answer.addEventListener("click", e => {
                const previousSelected = answersContainer.querySelector(".selected")
                if (previousSelected) {
                    previousSelected.classList.remove("selected")
                }       
                answer.classList.add("selected")
            })
        })
        
    })
}

// Chargement de la page outfit après la page loading //

const outfitBtn = document.querySelector("[data-outfit-btn]")

if (outfitBtn) {
    
    outfitBtn.addEventListener('click', e => {
        e.preventDefault()
        setTimeout(() => {
            document.location = 'loading.html'
        }, 1500)
    })
    
}

if (location.pathname === "/loading.html") {
    setTimeout(() => {
        document.location = 'index.html'
    }, 5000)
}










