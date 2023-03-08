
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
        document.location = 'outfit.html'
    }, 5000)
}

