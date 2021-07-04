function border() {
    let border_type = localStorage.getItem("border_type")
    let border_color = localStorage.getItem("border_color")
    let border_bool = localStorage.getItem("border_bool")
    let border_style = localStorage.getItem("border_style")
    let border_width = localStorage.getItem("border_width")

   

    if(border_bool === "true") {

        console.log(`✅ | Borders were enabled`)
        console.log(`✅ | Border type was set to: ${border_type}`)
        console.log(`✅ | Border color was set to: ${border_color}`)
        console.log(`✅ | Border width was set to: ${border_width}`)
        console.log(`✅ | Border style was set to: ${border_style} `)

      let toborder = document.querySelectorAll(".border")
       
       toborder.forEach(borders => {
           borders.style.border =`${border_width} ${border_style} ${border_color}`
       })
        
    

    } else console.log(`❌ | Borders were disabled`)

}

module.exports.border = border