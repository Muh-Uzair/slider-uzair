"use strict" ;

import * as view_1 from "./view_folder/view_1.js" ;
import * as model from "./model.js"
import {header,node_list_div_slide} from "./config.js"



let max_slides = node_list_div_slide.length ;
let curr_slide = 0 



function initial_working()
{
    // making the size smaller
    header.style.transform = "scale(0.5)" ;


    // initially setting all the slides side by side using tranformX
    node_list_div_slide.forEach( (val, i) => { val.style.transform = `translateX(${100*i}%)`}) ;   
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
    initial_working() ;
}
init() ;