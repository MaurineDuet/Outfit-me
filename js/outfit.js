class Outfit {
    constructor(jsonOutfit) {
        this.id = jsonOutfit.id
        this.color = jsonOutfit.color
        this.img = jsonOutfit.img
        this.weather = jsonOutfit.weather
        this.style = jsonOutfit.style
    }
}

const templateOutfitLine = document.querySelector("#templateOutfitLine")
const outfitSection = document.querySelector("[outfit_line]")

fetch("db/db.json")
.then(data => data.json())
.then(jsonListOutfits => {
    
    let randomOufit = jsonListOutfits[Math.floor(Math.random()*jsonListOutfits.length)]
    console.log(randomOufit)
    
    for (const [index,jsonOutfit] of jsonListOutfits.entries()) {
        let outfit = new Outfit(jsonOutfit)
        console.log(outfit)
        
            if (index % 4 === 0) {
                const outfitLine = templateOutfitLine.content.cloneNode(true)
                outfitSection.append(outfitLine)
            }
            const outfitOfTheDay = document.querySelector(".outfitOfTheDay")
            const allOutfitItems = document.querySelectorAll(".outfit_pics")
            const outfitItems = allOutfitItems[allOutfitItems.length-1]
            
            if (outfit.id === randomOufit.id) { 
                outfitOfTheDay.innerHTML =  
                `<figure data-outfit-id="${outfit.id}" data-outfit-color="${outfit.color}" data-outfit-weather="${outfit.weather} data-outfit-style="${outfit.style}">
                <div>
                <img src="${outfit.img}">
                </div>
                </figure>`
                
            } else {
                outfitItems.innerHTML += 
                `<figure class="outfitItem" data-outfit-id="${outfit.id}" data-outfit-color="${outfit.color}" data-outfit-weather="${outfit.weather} data-outfit-style="${outfit.style}">                             
                
                <div>
                <img class="outfitPic" src="${outfit.img}">
                </div>

                <img class="outfitBorder" src="assets/outfit/pic_background.png" alt="">

                </figure>`
            }
            
        }

        
    })
    
    /*
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
    
    
    */