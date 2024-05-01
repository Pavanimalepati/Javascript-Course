// how to accept user input

// 1. easy way= window prompt
// 2. professional way= HTML textbox

// ***** EASY WAY
/*let username;
username= window.prompt("what's  your username");
console.log(username);*/

// ***** PROFESSIONAL WAY 
let username;

document.getElementById("myButton").onclick=function(){
username= document.getElementById("myText").value;
console.log(username);
document.getElementById("myLabel").innerHTML= "hello " + username;
}


