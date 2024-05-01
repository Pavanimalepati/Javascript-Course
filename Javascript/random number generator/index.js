const min = 1;
const max = 6;
let randomNum;

document.getElementById("myButton").onclick = function() {
    randomNum = Math.floor(Math.random() * max) +min;
    myLabel.textContent = randomNum;
}



