let divOutput = document.getElementsByClassName("output");
divOutput[0].setAttribute("id","outputDiv");
let outputDiv = document.getElementById("outputDiv");

let h1 = document.createElement("h1");
h1.innerText = "Output";
outputDiv.appendChild(h1);
let input = document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("value","100");

outputDiv.append(input);
let button = document.createElement("button");
button.setAttribute("type","button");
button.innerText = "Tip";
outputDiv.append(button);


button.addEventListener("click",function(){
    let tipOutput = (input.value* 0.15).toFixed(2);
    input.innerText = tipOutput;
    h1.innerHTML = `You should tip On $${tipOutput} on $${input.value}.`;
    
})
