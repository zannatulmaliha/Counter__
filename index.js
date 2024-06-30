const increase=document.getElementById("increase");

const decrease=document.getElementById("decrease");

const reset=document.getElementById('reset');

const content=document.getElementById('content');

let count=0;

increase.onclick=function(){
    count++;
    content.textContent=count;
}

decrease.onclick=function(){
    count--;
    content.textContent=count;
}

reset.onclick=function(){
    count=0;
    content.textContent=count;
}