let mainDiv = document.querySelectorAll(".mainText");
let contentDiv = document.querySelectorAll(".content");

for(let i=0; i<mainDiv.length;i++){
    mainDiv[i].addEventListener("click",function(){
        clearActive();
        mainDiv[i].nextElementSibling.classList.toggle("active");
        
    })
}
function clearActive(){
    for(let i=0;i<contentDiv.length;i++){
        contentDiv[i].classList.remove("active");
    }
}