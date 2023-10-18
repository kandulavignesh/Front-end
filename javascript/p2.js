var retrunid=(id)=>{
    return document.getElementById(id);
}
var myform=retrunid('myForm');
var fname=retrunid('firstName');
var sname=retrunid('secondName');
var email=retrunid('ema');
var gender=retrunid('gen');
var quali=retrunid('qua');
var nation=retrunid('nat');
var martial=retrunid('mar');
var percent=retrunid('perc');
var sts=retrunid('status');

myform.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(fname.value == ''){
        fname.style.border='2px solid red';
        return;
    }
    else{
        fname.style.border='none';
    }
    if(sname.value==''){
        sname.style.border='2px solid red';
        return;
    }
    else{
        sname.style.border='none';
    }
    if(email.value == ''){
        email.style.border='2px solid red';
        return;
    }
    else{
        email.style.border='none';
    }
    if(gender.value == ''){
        gender.style.border='2px solid red';
        return;
    }
    else{
        gender.style.border='none';
    }
    if(quali.value == ''){
        quali.style.border='2px solid red';
        return;
    }
    else{
        quali.style.border='none';
    }
    if(nation.value == ''){
        nation.style.border='2px solid red';
        return;
    }
    else{
        nation.style.border='none';
    }
    if(martial.value == ''){
        martial.style.border='2px solid red';
        return;
    }
    else{
        martial.style.border='none';
    }
    if(percent.value == ''){
        percent.style.border='2px solid red';
        return;
    }
    else{
        percent.style.border='none';
    }
    if(fname.value!='' && sname.value!='' && email.value!='' && gender.value!='' && quali.value!='' && martial.value!='' && nation.value!='' && percent.value!=''){
        sts.textContent="Form is getting submitted please wait!!!";
        sts.style.color='blue'
        alert("Form is getting submitted please wait")
        setTimeout(()=>{
            sts.textContent="Form submitted successfully";
            sts.style.color='green';
            alert("Succusfully submitted")
        },3000)
        myform.style.border='3px solid green';
    }
})

