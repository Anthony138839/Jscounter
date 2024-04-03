const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const myLabel = document.getElementById("myLabel");


let count = 0;

decrease.onclick = function(){
    count --;
    myLabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    myLabel.textContent = count;
}

increase.onclick = function(){
    count ++;
    myLabel.textContent = count;
}



let lst = [];
var i;
for(i = 1; i <= 5; i ++){
    element = prompt(`Element ${i}: `);
    lst.push(i, element);
}
console.log(lst);