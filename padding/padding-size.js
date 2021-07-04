function size() {
    let padding = localStorage.getItem("padding")
    let thickness = localStorage.getItem("thickness")

    if(padding === "true") {
    console.log(`✅ | Padding was enabled`)
    console.log(`✅ | Padding size was set to: ${thickness}`)
    } else console.log(`❌ | Padding was diabled`)

    let images = document.querySelectorAll(".padding")



    if(padding && thickness)
        thickness = thickness
    
    else if(padding) 
        thickness = "1em"

    images.forEach(image => {
        image.style.padding = thickness
    })
}

module.exports.size = size