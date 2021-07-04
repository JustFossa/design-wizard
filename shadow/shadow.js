import { shadowtype } from "design-wizard/shadow/shadow_type"

function shadowbool() {

    shadowtype()

    let shadow = localStorage.getItem("shadow")
    let shadow_type = localStorage.getItem("shadow_type")
    let shadow_color = localStorage.getItem("shadow_color")

  
    let images = document.querySelectorAll(".shadow")


    if(shadow === "true") {
       console.log(`✅ | Shadows are now enabled`)
       console.log(`✅ | Shadow type was set to: ${shadow_type}`) 
       console.log(`🎨 | Shadow color was set to: ${shadow_color}`)
        
    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${shadow_type} 1px rgba(${shadow_color})`;
    })
    } else {
        console.log(`❌ | Shadows are now disabled`)
    }
    
    
}
module.exports.shadowbool = shadowbool