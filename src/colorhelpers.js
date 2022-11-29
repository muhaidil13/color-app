
import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function generatepallete(startpalet){
    let newPallete = {
        palletName: startpalet.paletteName,
        id: startpalet.id,
        emoji: startpalet.emoji,
        colors: {}
    };

    for(let level of levels){
        newPallete.colors[level] = [];
    };

    for(let color of startpalet.colors){
        let scale = generateScalle(color.color, 10).reverse()
        for(let i in scale){
          newPallete.colors[levels[i]].push({
            name:`${color.name} ${levels[i]}`,
            id: color.name.toLowerCase().replace(/ /g, "-"),
            hex:scale[i],
            rgb: chroma(scale[i]).css(),
            rgba:chroma(scale[i]).css().replace("rgba","rgba").replace(")",",1.0)")
            })
        }
    }
    return newPallete
}


function getRange(hexcolor){
    const end = "#fff";
    return [
        chroma(hexcolor)
            .darken(1.4)
            .hex(),
        hexcolor,
        end
    ]
}


function generateScalle(hexcolor, numberofColors){
    return chroma
    .scale(getRange(hexcolor))
    .mode("lab")
    .colors(numberofColors)
}


export {generatepallete};