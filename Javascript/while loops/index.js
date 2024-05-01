// while loop = repeat some code WHILE some condition is true.

// *****
/*let username ="";
if(username === ""){
    console.log('you did not enter your name');
}
else{
    console.log('Hello ${username}');
}*/

// *****
// let username ="";
/*let username = "Bro Code";
while(username === ""){
    console.log('you did not enter your name');
}
console.log(`Hello ${username}`);
    */

    // while loop will  continous code infinitly. while the condition is true. if no longer is true then we skip  while loop.

    // ***** while loop
/*let username = "";
// while(username === ""){
    while(username === ""  || username === null){
    username = window.prompt(`Enter your name`);
}
console.log(`Hello ${username}`);*/

// **** do while loop

/*let username;
do{
    username = window.prompt(`Enter your name`);
}while(username === " || username === null")
console.log('Hello ${username}');*/

// ******
/*let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(username === "myUsername"  && password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in!");
    }
    else{
        console.log("Invalid credentials please try again");
    }
}*/


// *****
let loggedIn = true;
let username;
let password;

do{
    username = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(username === "myUsername"  && password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in!");
    }
    else{
        console.log("Invalid credentials please try again");
    }
}while(!loggedIn)















