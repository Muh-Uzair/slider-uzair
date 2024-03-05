"use strict" ;

import {header,node_list_div_slide} from "../config.js"


export function add_event_listener_function_left_right_buttons(recieved_control_left_right_buttons_working_function)
{

    header.addEventListener("click",
    function(event_info_object)
    {
        // 1 : using event deligation to make the event happen on the .btn
        const btn = event_info_object.target.closest(".btn") ;
        // console.log(btn)


        // 2 : if user clicke at any other place othen then button then return
        if(!btn) return ;


        // 3 : storing exactly which button user clicked forwar or backward
        const exact_btn = btn.classList[1]
        // console.log(exact_btn)


        recieved_control_left_right_buttons_working_function(exact_btn) ;
    })
    

}











export function btn_forward_working_function(curr_slide ,max_slides)
{

    // console.log(`btn_forward_clicked`)

    // 1 : 
    let new_curr_slide = curr_slide ;

    // 2 : if we are at last slide so return to slide 0
    new_curr_slide === max_slides-1 ? new_curr_slide = 0 : new_curr_slide ++ ;

    // 3 : calculation
    node_list_div_slide.forEach( (val, i) => {  

        val.style.transform = `translateX(${100 * (i - new_curr_slide)}%)`
    })

    // 4 : 
    return new_curr_slide ;


}
export function btn_back_working_function(curr_slide ,max_slides)
{
    // console.log(`btn_back_clicked`)
    
    // 1 : 
    let new_curr_slide = curr_slide ;

    // 2 : if we are at slide 0 and we click back so the curr slide should become the last slide
    (new_curr_slide === 0) ? (new_curr_slide = max_slides-1) : (new_curr_slide --) ;

    // 3 : calculation
    node_list_div_slide.forEach( (val, i) => { 

        val.style.transform = `translateX(${100 * (i - new_curr_slide)}%)`
    })

    // 4 : return 
    return new_curr_slide ;
    
}