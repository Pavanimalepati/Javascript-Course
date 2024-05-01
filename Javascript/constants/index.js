// const = a variable that can't be changed.
// capitilizing your constants is usually done with premitive data type such as booleans, reference data types such as strings normally follow this convention.
// let replaced by const
/* const PI = 3.14159;
// let pi = 3.14159;
let radius;
let circumference;

PI = 420.69;

radius = window.prompt('Enter the radius of a  circle');
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);*/
// *****
const PI = 3;
let radius;
let circumference;

// PI = 420.69;
document.getElementById("mySubmit").onclick = function(){
 radius = document.getElementById("myText").value;
 radius = Number(radius);
 circumference = 2 * PI * radius;
 document.getElementById("myH3").textContent = circumference;
}