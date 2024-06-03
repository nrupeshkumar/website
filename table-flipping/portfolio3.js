
const list=document.querySelector(".navlist");
const menu=document.querySelector(".icon");
const body=document.querySelector(".cancelbar");

menu.addEventListener("click",()=>{
    //alert("ht")
    list.classList.add("lists");

});

body.addEventListener("click",()=>{
    //alert("ht")
    list.classList.remove("lists");

});


    

