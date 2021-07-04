import { size } from "./padding/padding-size"
import { shadowbool } from "design-wizard/shadow/shadow"


function designer(options) {
    size()
    shadowbool()


    let padding = options.padding
    
    let thickness = options.padding_size
    
    let shadow_type = options.shadow_type
  
    let shadow = options.shadow


    localStorage.setItem("padding", padding)
    
    localStorage.setItem("shadow_type", shadow_type)
    localStorage.setItem("shadow", shadow)


    if(!options.shadow_color) {
    localStorage.setItem("shadow_color", "0,0,0,0.12")
    } else 
        localStorage.setItem("shadow_color", options.shadow_color)
    
    if(!thickness){
        localStorage.setItem("thickness", "1em")
    } else 
        localStorage.setItem("thickness", thickness)

}


module.exports.designer = designer;