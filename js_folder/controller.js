"use strict" ;

import * as view_1 from "./view_folder/view_1.js" ;
import * as model from "./model.js"
import {header, node_list_div_slide, div_all_slides } from "./config.js"



let max_slides = "" ;
let curr_slide = 0 ;
const img_array = model.state_object.img_array ;





function control_initial_working()
{
    view_1.initial_working() ;
}
function control_preparing_images()
{
    max_slides = view_1.preparing_images(img_array) ;
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
function control_dot_pressing(dot_number)
{
    
    view_1.dot_wokring_function(dot_number) ;
}







function init()
{

    view_1.add_event_listener_function_keyboard__buttons(control_left_right_buttons_working_function)
    view_1.add_event_listener_function_left_right_buttons(control_left_right_buttons_working_function) ;
    view_1.add_event_listener_function_dots(control_dot_pressing) ;
    control_preparing_images() ;
    control_initial_working() ;
}
init() ;