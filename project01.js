let lstbtn= document.getElementById('Send');
let lgnbtn=document.getElementById('Login');
const pattern =/^[^ ]+\.[a-z]{2,3}$/;




lstbtn.addEventListener("click",function(){
    alert(" Message Sent");
});

lgnbtn.addEventListener("click",function(){
    alert("You are already logged in!")
})
