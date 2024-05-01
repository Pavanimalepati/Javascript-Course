// Method chaining = calling one method after another in one continuous line of code.

//  No Method Chaining
/*let username = window.prompt("Enter uour username:");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username); */

// METHOD CHAINING
let username = window.prompt("Enter username:");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);