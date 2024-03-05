"use strict" ;

import * as view_1 from "./view_folder/view_1.js" ;
import * as model from "./model.js"
import {header, node_list_div_slide, div_all_slides } from "./config.js"



let max_slides = "" ;
let curr_slide = 0 





function initial_working()
{
    // making the size smaller
    // header.style.transform = "scale(0.5)" ;

    // initially setting all the slides side by side using tranformX
    
    document.querySelectorAll(".div_slide").forEach( (val, i) => { val.style.transform = `translateX(${100*i}%)`}) ; 

    
}
function preparing_images()
{
    // 1 : prepare an empty markup             
    let mark_up = ""

    
    // 2 : empty the targeted element
    div_all_slides.innerHTML = mark_up ;

    
    // 3 : pre_paring the string
    model.state_object.img_array.forEach( (val , i) =>
    {
        mark_up += ` <div class="div_slide div_slide_${i}" >
                          <img class="img_slide img_slide_${i}" src="${val}.jpg" alt="error">
                     </div>`
    })
    // console.log(mark_up) ;

    // 4 : push it to DOM 
    div_all_slides.insertAdjacentHTML("afterbegin" , mark_up) ;

    max_slides = document.querySelectorAll(".div_slide").length ;

    // console.log("")
    // console.log(div_all_slides.innerHTML)
}
function control_left_right_buttons_working_function(exact_btn)
{
    // console.log(exact_btn)

    if(exact_btn === "btn_forward")
    {
        curr_slide = view_1.btn_forward_working_function(curr_slide , max_slides) ;        
    }
    else if(exact_btn === "btn_back")
    {
        curr_slide = view_1.btn_back_working_function(curr_slide , max_slides) ;              
    }

}








function init()
{

    view_1.add_event_listener_function_left_right_buttons(control_left_right_buttons_working_function) ;
    preparing_images() ;
    initial_working() ;
}
init() ;