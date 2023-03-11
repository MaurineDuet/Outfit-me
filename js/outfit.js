
//Crée une classe Outfit
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

let goodOutfits = []
let outfit


//Fait réagir le lancement du fetch quand la bonne page est chargée

if (location.pathname === `/outfit.html`) {
    
    fetch("db/db.json")
    .then(data => data.json())
    .then(jsonListOutfits => { 
        //jsonListOutfits me donne un array rempli d'objets, chaque objet étant un outfit
        
        for (const jsonOutfit of jsonListOutfits) {
            outfit = new Outfit(jsonOutfit)
            //un outfit = un objet qui correspond à un outfit. 
            // A cette étape on se retrouve avec un objet par outfit
            
            //Récupère les paramètres dans l'URL de outfit.html
            
            const outfitUrl = window.location.search
            const outfitUrlParams = new URLSearchParams(outfitUrl)
            const outfitWeather = outfitUrlParams.get('weather')
            const outfitColor = outfitUrlParams.get('color')
            const outfitStyle = outfitUrlParams.get('style')

            //On remplit le tableay avec les bonnes réponses
            
            if (outfitWeather === outfit.weather && outfitColor === outfit.color && outfitStyle === outfit.style) {
                goodOutfits.push(outfit)
            }
            
        }

        if (goodOutfits.length === 0) {
            document.location = "nooutfit.html"
            return
        }

        //Création du visuel en fonction du nombre de réponse dans le tableau

        for (const [index, goodOutfit] of goodOutfits.entries()) {
            if (index % 4 === 0) {
                const outfitLine = templateOutfitLine.content.cloneNode(true)
                outfitSection.append(outfitLine)
            }
        }

        //On pique le random
        
        let randomOufit = goodOutfits[Math.floor(Math.random()*goodOutfits.length)]     
        
        const outfitOfTheDay = document.querySelector(".outfitOfTheDay")
        const allOutfitItems = document.querySelectorAll(".outfit_pics")
        const outfitItems = allOutfitItems[allOutfitItems.length-1]

        //On rempli le visuel avec les bonnes photos
        
        goodOutfits.forEach(goodOutfit => {
            console.log(goodOutfit)
            
            if (goodOutfit.id === randomOufit.id) { 
                outfitOfTheDay.innerHTML =  
                `<figure data-outfit-id="${goodOutfit.id}" data-outfit-color="${goodOutfit.color}" data-outfit-weather="${goodOutfit.weather} data-outfit-style="${goodOutfit.style}">
                <div>
                <img src="${goodOutfit.img}">
                </div>
                </figure>`
                
            } else {
                outfitItems.innerHTML += 
                `<figure class="outfitItem" data-outfit-id="${goodOutfit.id}" data-outfit-color="${goodOutfit.color}" data-outfit-weather="${goodOutfit.weather} data-outfit-style="${goodOutfit.style}">                             
                
                <div>
                <img class="outfitPic" src="${goodOutfit.img}">
                </div>
                
                <img class="outfitBorder" src="assets/outfit/pic_background.png" alt="">
                
                </figure>`
            }
        })
        
        
    })
    
}