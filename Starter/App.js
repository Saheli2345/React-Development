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