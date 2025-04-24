console.log("I'm coming from javascript ")
console.log("document")
console.log(document.getElementsByTagName("span"))
console.log(document.getElementsByTagName("h1")[0].innerHTML);
document.getElementsByTagName("span")[0].innerHTML="I'm coming from js";

document.getElementById("primary-btn-id").addEventListener('click',function(){
    alert("Hello i'm clicked");
});
function dontClickButtom(){
    alert("Hello i'm not clicked");
}
/*Bulb on to off */
function changeImage(){
    let bulbVal=document.getElementById("bulb");
    if(bulbVal.src.match("ON")){
        bulbVal.src="./assets/OFF.png";
    }
    else{
        bulbVal.src="./assets/ON.png";
    }
}
/*Password show to hide */
const showPassword=()=>{
    let inputValue=document.getElementById("inputVal");
    let buttonValue=document.getElementById("change-id");
    if(inputValue.type=='password'){
        inputValue.type='text';
        buttonValue.innerHTML='HIDE'
    }else{
        inputValue.type='password';
        buttonValue.innerHTML='SHOW'
    }
}
/* 
function showPassword(){
    let inputValue=document.getElementById("inputVal");
    let buttonValue=document.getElementById("change-id");
    if(inputValue.type=='password'){
        inputValue.type='text';
        buttonValue.innerHTML='HIDE'
    }else{
        inputValue.type='password';
        buttonValue.innerHTML='SHOW'
    }
}
*/
