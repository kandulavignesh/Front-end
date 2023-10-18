'use strict';
var colors=['red','white','blue','green','yellow','violet','skyblue'];
var len=colors.length-1;
var buttonControl=document.getElementById("btn");
var spanControl=document.querySelector('.color');


buttonControl.addEventListener('click',()=>{
    var index=generateRandomNum();
    document.body.style.backgroundColor=colors[index];
    spanControl.textContent=colors[index];
})
function generateRandomNum(){
    return Math.round(Math.random()*len);
}