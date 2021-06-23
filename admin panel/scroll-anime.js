
left.addEventListener("mouseenter",function(){
    left.classList.add("show-scroll")
})
left.addEventListener("mouseleave",function(){
    left.classList.remove("show-scroll")
})
right_div.addEventListener("mouseenter",function(){
    right_div.classList.add("right-scroll")
})
right_div.addEventListener("mouseleave",function(){
    right_div.classList.remove("right-scroll")
})

left.addEventListener("scroll",function(e){
    if(nav_calender.getBoundingClientRect().top<175){
        todays_btn_wrapper.style.borderBottom = "1px solid rgb(153 153 153 / 46%)"
    }else{
        todays_btn_wrapper.style.borderBottom = "none"
    }
})

right_div.addEventListener("scroll",function(){
    if(((window.innerWidth*.2)-10) > daily_time.getBoundingClientRect().left && daily_time.getBoundingClientRect().left !=0 ){
        right_div.style.borderLeft = "1px solid ";
    }else{
        right_div.style.borderLeft = "none";

    }
})

three_dots.addEventListener("click",function(){
    if(three_dots_options_div.classList.contains("show-more")){
        three_dots_options_div.classList.remove("show-more")
    }else{
        three_dots_options_div.classList.add("show-more")
    }
})
