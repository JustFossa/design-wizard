import { size } from "./padding/padding-size"
import { shadowbool } from "design-wizard/shadow/shadow"
import { border } from "./border/border"

function designer(options) {
    size()
    shadowbool()
    border()

    let padding = options.padding
    
    let thickness = options.padding_size
    
    let shadow_type = options.shadow_type
  
    let shadow = options.shadow

    let border_type = options.border_type

    let border_color = options.border_color

    let border_bool = options.border

    let border_style =  options.border_style

    let border_width = options.border_width

    localStorage.setItem("padding", padding)
    
    localStorage.setItem("shadow_type", shadow_type)

    localStorage.setItem("shadow", shadow)

    localStorage.setItem("border_bool", border_bool)

    if(border_color) {
        localStorage.setItem("border_color", border_color)
    } else localStorage.setItem("border_color", "#000000")

    if(border_style) {
        localStorage.setItem("border_style", border_style)
    } else localStorage.setItem("border_style", "solid")

    if(border_type) {
        localStorage.setItem("border_type", border_type)
    } else localStorage.setItem("border_type", "border")
   
    if(border_width) {
        localStorage.setItem("border_width", border_width)
    } else localStorage.setItem("border_width", "5px")

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