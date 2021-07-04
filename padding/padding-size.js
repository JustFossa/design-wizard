function size() {
    let padding = localStorage.getItem("padding")
    let thickness = localStorage.getItem("thickness")
    console.log(padding)
    console.log(thickness)
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