// var a=[23,44,23,44,233]
// console.log(a)

// var res=prompt("enter your name")
// document.write(res);

// var res=document.getElementById("myelement")
// console.log(res)


// document.getElementById("par").innerHTML="<i>paragragh was not about life</i>"

// document.getElementById('myelement').textContent="<i>Love is always looks like a blind until you fall</i>";





// var num=prompt("enter a number")
// var para=document.getElementById("par")

// if(num<20){
//     para.innerHTML="<i>the num is less than 20</i>"
//     para.style.color="green"
// }else{
//     para.innerHTML="<i>the num is greater than 20</i>"
//     para.style.color="red"
// }



// var first=document.getElementsByName("firstName")
// first[0].focus();
// var second=document.getElementsByName("lastName")
// second[0].focus();



// var input=document.getElementsByTagName("input");
// console.log(input)


// for(let i=0;i<input.length;i++){
//     console.log(input[i]);
//     input[i].focus();
// }


// var para=document.getElementById("par")
// para.innerHTML="this paragraph have shades"
// para.style.color="blue";
// para.style.background.color="red"
// para.style.border="1px solid black";
// para.style.fontWeight="bolder"



// var num=prompt("enter a number")
// var para=document.getElementById("par")
// if(num <20){
//     para.innerHTML=`<i>the num is ${num}</i>`;
//     para.style.color="red";
// }else{
//     para.innerHTML=`<i>the num is ${num}</i>`
//     para.style.color="green"
// }



var para=document.getElementById("par")

var newpara=document.createElement('p')
newpara.innerHTML="this is new paragraph"
para.appendChild(newpara)
