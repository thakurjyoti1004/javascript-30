let stars = document.querySelectorAll("li");
let outputMessage = document.querySelector("div")
for(let i=0; i<stars.length;i++){
   stars[i].starValue =(i+1);
  
  console.log(this.starValue,"lll");
   ["mouseover","mouseout","click"].forEach(function(ele){
      stars[i].addEventListener(ele,starRating);   
      
   });

}


function starRating(e){
   let starRate = this.starValue;
   stars.forEach(function(ele,ind) {
      if(e.type === "click"){
         if(ind<starRate){
            ele.classList.add("orange");
            outputMessage.innerHTML =`You rated this ${starRate} Stars.`;
         }else{
            ele.classList.remove("orange");
         }
      }
      if(e.type === "mouseover"){
         if(ind<starRate){
            ele.classList.add("yellow");
         }else{
            ele.classList.remove("yellow");
         }
      }
      if(e.type === "mouseout"){
         if(ind<starRate){
            ele.classList.remove("yellow");
         }
      }
    
   })

}
   
