

function shadowtype(options) {

    let shadow = localStorage.getItem("shadow")
    let shadow_type = localStorage.getItem("shadow_type")


    if(shadow && shadow_type) {
        if(shadow_type === "hard") {
             shadow_type = "0px"
        } else if(shadow_type === "medium") {
             shadow_type = "8px"
        } else if(shadow_type === "soft") {
             shadow_type = "15px"
        } 
    } else if (shadow && ! shadow_type) {
         shadow_type = "8px"
    }


    localStorage.setItem("shadow_type", shadow_type)
}

module.exports.shadowtype = shadowtype