// if statements = if a condition is true, execute some code if Notification, do something else.

/*let age=25;
if(age>=18){
    console.log("you are old enough to enter this site");
}*/

// *****
/*let age=12;
if(age>=18){
    console.log("you are old enough to enter this site");
}*/

// *****
/*let age=12;
if(age>=18){
    console.log("you are old enough to enter this site");
}
else{
    console.log("you must be 18+ to enter this site");
}*/

// *****
/*let time=9;
if(time<12){
    console.log("good morning!")
}
else{
    console.log("good afternoon!");
}*/

// *****
/*let isStudent = true;
if(isStudent){
    console.log("you are a student!");
}
else{
    console.log("you are NOT a student!");
}*/


// *****
/*let age = 25;
let hasLicense = true;
if(age>=16){
    console.log("you are old enough to drive");
}
else{
    console.log("you must be 16+ to have a license");
}*/

// *****
/*let age = 25;
let hasLicense = false;
if(age>=16){
    console.log("you are old enough to drive");
    if(hasLicense){
        console.log("you have your license");
    }
    else{
        console.log("you do not have your license yet");
    }
}
else{
    console.log("you must be 16+ to have a license");
}*/

// *****
/*let age = -1;
if(age >= 18){
    console.log("you are old is enough to enter this site");
}
else if (age<0){
    console.log("your age can't be below 0");
}
else if (age==0){
    console.log("your age can't enter.  you were just born");
}
else{
    console.log("you must be 18+ to enter this site");
}*/

// *****
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElement.textContent = "You are TOO OLD to eneter this site";
    }
    else if (age == 0) {
        resultElement.textContent = "You can't enter. you are not born yet";
    }
    if(age >= 18) {
        resultElement.textContent = "You are old is enough to enter this site";
    }
    else if(age < 0) {
        resultElement.textContent = "You are age can't be below 0";
    }
    else {
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}




