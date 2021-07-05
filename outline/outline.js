function outlinefunc() {
let outlinebool = localStorage.getItem("outline")
let outline_clr = localStorage.getItem("outline_clr")
let outline_thickness = localStorage.getItem("outline_thickness")
let outline_style = localStorage.getItem("outline_style")
let text = document.querySelectorAll(".outline")

if (outlinebool === "true") {
    console.log(`✅ | Outlines were enabled`)
    console.log(`✅ | Outline color was set to: ${outline_clr}`)
    console.log(`✅ | Outline thickness was set to: ${outline_thickness}`)
    console.log(`✅ | Outline style was set to: ${outline_style}`)
}
if(outlinebool === "true") {
    
    text.forEach(texts => {
        texts.style.outline = `${outline_thickness} ${outline_style} ${outline_clr}`
    }) 
} else console.log(`❌ | Outlines were disabled`)

}

module.exports.outlinefunc = outlinefunc