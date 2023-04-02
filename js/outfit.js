
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

            //Récupère les paramètres dans l'URL de outfit.html

            const outfitUrl = window.location.search
            const outfitUrlParams = new URLSearchParams(outfitUrl)
            const outfitWeather = outfitUrlParams.get('weather')
            const outfitColor = outfitUrlParams.get('color')
            const outfitStyle = outfitUrlParams.get('style')


            //jsonListOutfits me donne un array rempli d'objets, chaque objet étant un outfit

            for (const jsonOutfit of jsonListOutfits) {
                outfit = new Outfit(jsonOutfit)
                //un outfit = un objet qui correspond à un outfit. 
                // A cette étape on se retrouve avec un objet par outfit

                //On remplit le tableau avec les bonnes réponses

                /* if (outfitWeather === outfit.weather && outfitColor === outfit.color && outfitStyle === outfit.style) {                  
                 }*/

                let validated = true

                for (const [name, value] of outfitUrlParams.entries()) {
                    if (outfit[name].includes(value) === false && value !== "idk") {

                        validated = false
                    }
                }

                if (validated) {
                    goodOutfits.push(outfit)
                }

            }

            if (goodOutfits.length === 0) {
                document.location = "nooutfit.html"
                return
            }

            //On pique le random et on l'ajoute et on le supprime du tableau des gootoutfits

            let randomOutfit = goodOutfits[Math.floor(Math.random() * goodOutfits.length)]
            goodOutfits.splice(goodOutfits.indexOf(randomOutfit), 1)

            const outfitOfTheDay = document.querySelector(".outfitOfTheDay")
            outfitOfTheDay.innerHTML =
                `<figure data-outfit-id="${randomOutfit.id}" data-outfit-color="${randomOutfit.color}" data-outfit-weather="${randomOutfit.weather}" data-outfit-style="${randomOutfit.style}">
            <div>
            <img src="${randomOutfit.img}">
            </div>
            </figure>`

            //On remplace le titre

            const otherOutfitTitle = document.querySelector(".other_outfit_title h2")
            otherOutfitTitle.innerText = `Other looks for ${outfitWeather}, ${outfitColor} and ${outfitStyle} !`

            if (goodOutfits.length === 0) {
                otherOutfitTitle.innerText = "There are no other outfits !"
                //otherOutfitLine.classList.add('hidden')
            } else {

                //On rempli le visuel avec les bonnes photos

                goodOutfits.forEach((goodOutfit, index) => {

                    //Création du visuel en fonction du nombre de réponse dans le tableau

                    if (index % 3 === 0) {
                        const outfitLine = templateOutfitLine.content.cloneNode(true)
                        outfitSection.append(outfitLine)
                        console.log(outfitLine, index)
                    }

                    const otherOutfitLine = document.querySelector(".outfit_line")

                    const allOutfitItems = document.querySelectorAll(".outfit_pics")
                    const outfitItems = allOutfitItems[allOutfitItems.length - 1]
                    outfitItems.innerHTML +=
                        `<figure class="outfitItem" data-outfit-id="${goodOutfit.id}" data-outfit-color="${goodOutfit.color}" data-outfit-weather="${goodOutfit.weather}" data-outfit-style="${goodOutfit.style}">                             
                
                            <div>
                            <img class="outfitPic" src="${goodOutfit.img}">
                            </div>
                
                            <img class="outfitBorder" src="assets/outfit/pic_background.png" alt="">
                
                        </figure>`

                })

            }


        })

}

/* for (const [index, goodOutfit] of goodOutfits.entries()) {
     console.log([index, goodOutfit])
     if (index % 4 === 0) {
         const outfitLine = templateOutfitLine.content.cloneNode(true)
         console.log(outfitLine)
         outfitSection.append(outfitLine)
     }
 } */