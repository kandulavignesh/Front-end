// document.write("The day when you feel are you in depressed then try to laugh as much as you can")
// a=10
// console.log(a)
// console.log(typeof(a))
// console.log("hello world")
// console.debug("hello world")
// console.warn("hello world")
// console.error("hello world")
// console.info("hello world")
// var person={
//     name:"vignesh",
//     age:22,
//     email:"vignesh@gmail.com",
//     gender:"male",
//     dance:function(){
//             console.log("dancing is a dancing")
//     }

// }
// person.dance()

// console.log(person)
// var keys=Object.keys(person)
// console.log(keys)
// var values=Object.values(person)
// console.log(values)
// var person=new Object();
// person.name="vignesh",
// person.gender="male",
// person.age=22
// console.log(person['name'])
// console.log(person.gender)
// console.log(person.age)
// console.log('ba'+100/"s"+'a')
// var s="vigneh"
// var t="gAneSh"
// console.log(t.toLowerCase())
// console.log(t.toUpperCase())

// console.log(s+t)
// console.log("it's fine")
// console.log(s===t)
// var p=new String("vignesh")
// var s="vignesh world vignesh vignesh"
// console.log(s===p)
// console.log(s.replaceAll("vignesh","hi"))
// console.log(s.substr(5,6))


// push method
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// a.push(10)
// pop method delete the last element in anrray
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];


// a.pop()
// console.log(a)
// a.pop()
// console.log(a)

// unshift method used to add alement in firstv index
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"]
// a.unshift("virat")
// console.log(a)

// shift ()is used to delete the first one
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// a.shift()
// console.log(a)


// indexof method gives index of element
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// console.log(a.indexOf(true))


// join() will join all the element sin array and return as a string
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// console.log(a.join('-'))

// includes() method given true if the elements present in array
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// console.log(a.includes("vingesh.."))


// reverse() it reverse the entire array
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// console.log(a.reverse())


// slice() slicing the array
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// console.log(a.slice(2,6))

// splice() 
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// console.log(a.splice(2))
// below one gives ramaining array afeter splicing
// console.log(a)



// splicing
// var a=[1,"vingesh",true,{},'a',78,[10,"ganesh",true],89,"rajesh"];
// a.splice(a.indexOf(5),1)
// console.log(a)


// var arr=[10,20,30,40,50,60,70,80,90]
// console.log(arr)
// var [num1,num2,...rest]=arr
// console.log(num1+" "+num2)
// console.log(rest)


// var {firstname="ramu",lastname="somu"}=arr
// console.log(firstname+" "+lastname)



// Loops in javascript
// for , while , do while ,for in , for of


// 
// while loop in javascript
// var a=[1,"vingesh",true,{},'a',78,89,"rajesh"];
// var count=0
// while(count<a.length){
//     console.log(a[count])
//     count++
// }



// for in loop 
// var a={
//     name:"vignesh",
//     gmail:"vignesh@gmail.com",
//     gender:"male",
//     age:22,
//     nationality:"indian"
// }
// for(data in a){
//     console.log(a[data])
// }



// for of loop
// var b=[1,2,3,4,4,5,6];
// for(data of b){
//     console.log(b[data])
// }



// sorting
// var arr=["vignresh","bala","rishi","poorna","reddy","amar"]
// console.log(arr.sort())

// var arrr=[1,56,23,7723,55,33,75,78,3,1,97]
// var arrr=arrr.sort((a,b)=>{
//     return b-a
// })
// console.log(arrr)


// fliter method
// var arrr=[1,56,23,7723,55,33,75,78,3,1,97]
// var arr=arrr.filter((ele)=>{
//     return ele>20;
// })
// console.log(arr)



// var a=[1,"vingesh",true,'a',78,89,"rajesh"];
// for(var i=0;i<a.length;i++){
//     console.log(a[i])
// }
// document.write("the answer is",a)
// alert("hello");
// var isConfirmed = confirm("Are you sure to continue?");
// if(isConfirmed == true){
//  document.write("Thank you. Your image is deleted    from the database.")
// } else {
//  document.write("Thank you. Your image is not deleted from the database.")
// }

// var res = prompt("Please Enter your Name?");
// console.log("RESPONSE ",res);
// document.write("Your Name is "+res);


// document.getElementById("para").innerHTML = "Hello guys. I hope you are enjoying holidays.."
// document.getElementById('div').innerHTML = "This is the division"


// document.getElementById('div').innerHTML = "<i>This is the division</i>"



// finding the elements by using getelement by id

document.getElementById("para").innerHTML = "hii guys i am going to commit suicide"

document.getElementById("div").innerHTML = "hii guys i am going to commit suicide"

