import { size } from "./padding/padding-size"


function designer(options) {

    size()
    let images = document.querySelectorAll(".designer")

    if (options.shadow_type === "hard")
        options.shadow_type = "0px"
    else 
        options.shadow_type = "15px"
    
    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
    })

 
    let padding = options.padding
    localStorage.setItem("padding", padding)
    let thickness = options.size
    localStorage.setItem("thickness", thickness)

}

module.exports.designer = designer;