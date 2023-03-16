
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

const form = document.querySelector("[form]")

if (form) {
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        const data = new FormData(form)

        if (data.get("weather")===null || data.get("color")===null || data.get("style")===null ) {
            alert("Please complete the form.")
            return
        } else {
        setTimeout(() => {
            document.location = `loading.html?weather=${data.get("weather")}&color=${data.get("color")}&style=${data.get("style")}`
        }, 1500) }
    })

    
}

if (location.pathname === "/loading.html") {
    setTimeout(() => {
        document.location = `outfit.html${location.search}`
    }, 5000)
}

