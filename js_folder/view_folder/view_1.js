"use strict" ;

import {header,node_list_div_slide} from "../config.js"



// Event Listeners
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
export function add_event_listener_function_keyboard__buttons(recieved_control_left_right_buttons_working_function)
{
    document.addEventListener("keydown" , 
    function(event_info_object)
    {
        const pressed_key = event_info_object.key ;

        if(pressed_key === `ArrowRight`)
        {
            recieved_control_left_right_buttons_working_function(`btn_forward`) ;
        }
        else if(pressed_key === `ArrowLeft`)
        {
            recieved_control_left_right_buttons_working_function(`btn_back`) ;
        }

    })
}
export function add_event_listener_function_dots(recieved_control_dot_pressing)
{
    document.querySelector(".div_dots").addEventListener("click",
    function(event_info_object)
    {
        

        const dot = event_info_object.target.closest(".button_dot") ;
        if(!dot) return ;

        const dot_number = `${[...dot.classList[1]].splice(-1)}` ;
        recieved_control_dot_pressing(dot_number) ;

    })
}










// Functionalities
function calculation(new_curr_slide)
{
    document.querySelectorAll(".div_slide").forEach( (val, i) => {  

        // console.log(val)
        // 1 : adjusting the translateX of each img 
        val.style.transform = `translateX(${100 * ( i - new_curr_slide)}%)` ;

        // 2 : removing active class 
        val.classList.remove("active") ;   
        
        // 3 : 
        document.querySelector(`.button_dot_${i}`).style.backgroundColor = "rgba(255, 255, 255, 0.3)"  ;           
    })

    const active_slide = "" ;

}
export function btn_forward_working_function(curr_slide ,max_slides)
{

    // console.log(`btn_forward_clicked`)
    // console.log(curr_slide)

    // 1 : makgin the dot color low of previous dot
    document.querySelector(`.button_dot_${curr_slide}`).style.backgroundColor = "rgba(255, 255, 255, 0.3)" ;

    // 2 : adjusting variables 
    let new_curr_slide = curr_slide ;
 

    // 2 : if we are at last slide so return to slide 0
    (new_curr_slide === max_slides-1 ) ? ( new_curr_slide = 0 ) : ( new_curr_slide ++ ) ;


    // 3 : calculation
    calculation(new_curr_slide) ;


    // 4 : adding active class to the currnt img on display
    document.querySelector(`.div_slide_${new_curr_slide}`).classList.add("active") ;


    // 5 : making background color dark of active dot 
    document.querySelector(`.button_dot_${new_curr_slide}`).style.backgroundColor = "rgba(255, 255, 255, 0.5)" ;


    // 6 : return values  
    return new_curr_slide ;

}
export function btn_back_working_function(curr_slide ,max_slides)
{
    // console.log(`btn_back_clicked`)


    // 1 : makgin the dot color low of previous dot
    document.querySelector(`.button_dot_${curr_slide}`).style.backgroundColor = "rgba(255, 255, 255, 0.3)" ;
    

    // 2 : adjusting variables 
    let new_curr_slide = curr_slide ;


    // 3 : if we are at slide 0 and we click back so the curr slide should become the last slide
    (new_curr_slide === 0) ? (new_curr_slide = max_slides-1) : (new_curr_slide --) ;


    // 4 : calculation
    calculation(new_curr_slide) ;


    // 5 : adding active class to the currnt img on display
    document.querySelector(`.div_slide_${new_curr_slide}`).classList.add("active") ;

    
    // 6 : making the background color dark
    document.querySelector(`.button_dot_${new_curr_slide}`).style.backgroundColor = "rgba(255, 255, 255, 0.5)" ;


    // 4 : return values 
    return new_curr_slide ;
    
}
export function initial_working()
{

    // 1 : making the size smaller
    header.style.transform = "scale(0.9)" ;


    // 2 : initially setting all the slides side by side using tranformX
    document.querySelectorAll(".div_slide").forEach( (val, i) => { val.style.transform = `translateX(${100*i}%)`}) ; 

    // 3 : adding actuve class to initial img
    document.querySelector(".div_slide_0").classList.add("active") ;

    // 4 : making the background color dark 
    document.querySelector(`.button_dot_0`).style.backgroundColor = "rgba(255, 255, 255, 0.5)";



}
export function preparing_images(img_array)
{
    // 1 : prepare an empty markup             
    let mark_up = "" ;
    let mark_up_dots = "" ;

    
    // 2 : empty the targeted element
    document.querySelector(`.div_all_slides`).innerHTML = mark_up ;
    document.querySelector(".div_dots").innerHTML = mark_up_dots ;

    
    // 3 : pre_paring the strings
    img_array.forEach( (val , i) =>
    {
        mark_up += ` <div class="div_slide div_slide_${i}" >
                          <img class="img_slide img_slide_${i}" src="${val}.jpg" alt="error">
                     </div>`

        mark_up_dots += `<button class="button_dot button_dot_${i}"></button>`
    })
    // console.log(mark_up) ;


    // 4 : push it to DOM 
    document.querySelector(`.div_all_slides`).insertAdjacentHTML("afterbegin" , mark_up) ;
    document.querySelector(".div_dots").insertAdjacentHTML("afterbegin" , mark_up_dots) ;
    

    // 5 : returning the max_slide_number
    return document.querySelectorAll(".div_slide").length ;


    // console.log("")
    // console.log(div_all_slides.innerHTML)

}
export function dot_wokring_function(dot_number)
{
    // document.querySelector(`.button_dot_${i}`).style.backgroundColor = "rgba(255, 255, 255, 0.3)"  ; 
        
    calculation(dot_number) ;

    // 4 : adding active class to the currnt img on display
    document.querySelector(`.div_slide_${dot_number}`).classList.add("active") ;


    // 5 : making background color dark of active dot 
    document.querySelector(`.button_dot_${dot_number}`).style.backgroundColor = "rgba(255, 255, 255, 0.5)" ;
}