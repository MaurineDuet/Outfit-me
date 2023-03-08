class Outfit {
    constructor(jsonOutfit) {
        this.id = jsonOutfit.id
        this.color = jsonOutfit.color
        this.img = jsonWork.imageUrl
        this.weather = jsonWork.weather
        this.style = jsonOutfit.style
    }
}

await fetch("db/db.json")
    .then(data => data.json())
    .then(jsonListOutfits => {

        for (let jsonOutfit of jsonListOutfits) {
            let outfit = new Outfit(jsonOutfit)
            document.querySelector(".outfit_article").append(createOutfit(outfit, false))
        }
    })


    function createOutfit(outfit, areWeInOtherOutfit = true) {
        const newOutfit = document.createElement("figure")
        if (areWeInOtherOutfit) {
            newOutfit.setAttribute("data-piece-of-outfit", "")
            newOutfit.setAttribute("data-piece-of-outfit-id", outfit.id)
            newOutfit.setAttribute("data-piece-of-outfit-color", outfit.color)
            newOutfit.setAttribute("data-piece-of-outfit-weather", outfit.weather)
            newOutfit.setAttribute("data-piece-of-outfit-style", outfit.style)
            newOutfit.setAttribute("data-miniature", "")
            newOutfit.innerHTML +=
                `
                <div class="outfit-minia">
                    <img src="assets/outfit/pic_background.png" class="other-outfit-img">
                    <img src="${outfit.img}" class="other-outfit-img">
                </div>
            `
        } else {
            newOutfit.setAttribute("data-outfit", "")
            newOutfit.setAttribute("data-outfit-id", outfit.id)
            newOutfit.setAttribute("data-outfit-color", outfit.color)
            newOutfit.setAttribute("data-outfit-weather", outfit.weather)
            newOutfit.setAttribute("data-outfit-style", outfit.style)
            newOutfit.setAttribute("data-miniature", "")
            newOutfit.innerHTML +=
                `
                <div class="outfit-main">
                    <img src="${outfit.img}" class="outfit-img">
                </div>
            `
        }
    
        return newOutfit
    }