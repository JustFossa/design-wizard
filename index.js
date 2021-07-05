import { size } from "./padding/padding-size"
import { shadowbool } from "design-wizard/shadow/shadow"
import { border } from "./border/border"
import { outlinefunc } from "./outline/outline"

function designer(options) {
    

    let padding = options.padding
    
    let thickness = options.padding_size
    
    let shadow_type = options.shadow_type
  
    let shadow = options.shadow

    let border_type = options.border_type

    let border_color = options.border_color

    let border_bool = options.border

    let border_style =  options.border_style

    let border_width = options.border_width

    let outline = options.outline

    let outline_clr = options.outline_color

    let outline_style = options.outline_style

    let outline_thckns = options.outline_thickness

    localStorage.setItem("padding", padding)
    
    localStorage.setItem("shadow_type", shadow_type)

    localStorage.setItem("shadow", shadow)

    localStorage.setItem("outline", options.outline)

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
    if(!outline_clr){
        localStorage.setItem("outline_clr", "black")
    } else 
        localStorage.setItem("outline_clr", outline_clr)

    if(!outline_style) {
        localStorage.setItem("outline_style", "solid")
    } else 
        localStorage.setItem("outline_style", outline_style)

    if(!outline_thckns) {
        localStorage.setItem("outline_thickness", "5px")
    } else
        localStorage.setItem("outline_thickness", outline_thckns)

    size()
    shadowbool()
    border()
    outlinefunc()
}


module.exports.designer = designer;