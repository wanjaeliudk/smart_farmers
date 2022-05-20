const form =document.getElementById('form')
const userName =document.getElementById('username')
const phoneNumber=document.getElementById('phoneNumber')
const lastName =document.getElementById('lastname')
const passWord =document.getElementById('passWord')
const cpassWord=document.getElementById('cpassWord')
const register=document.getElementById('sign')
const regEl=document.getElementById('reg')
const phoneEl=document.getElementById('phone')
const lastEl=document.getElementById('last')

register.addEventListener('click', ()=>{
    if(userName.value ==''){
        regEl.style.display ="block";
    }

    if(phoneNumber.value ==''){
        phoneEl.style.display ="block";
    }

    if(lastName.value ==''){
        lastEl.style.display ="block";
    }
    else{
        passWord.style.dis
    }

})

