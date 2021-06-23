faculty_seach_input.addEventListener("input",function(e){
    let allFaculties = document.querySelectorAll(".faculty");
    let val = e.target.value;
    val = val.toLowerCase();
    for(let i=0;i<allFaculties.length;i++){
        let innerVal = allFaculties[i].querySelector("span").innerHTML.toLowerCase();;
        if(val == ""){
            allFaculties[i].style.display = "flex"
        }else if(innerVal.includes(val)){
            allFaculties[i].style.display = "flex"
        }else{
            
            allFaculties[i].style.display = "none"
        }
    }
})
