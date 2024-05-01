// function = a section of reusable code.
// declare code onces, use it whenever you want.
// call the function to execute that Code.

// ******
/*function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear you!");
    console.log(`Happy birthday ${username} `);
    console.log("Happy birthday to you!");
    console.log(` you are ${age} years old!`);
}
happyBirthday("BroCode", 25);
happyBirthday("spongebob", 30);
happyBirthday("patrick", 37);*/

// *****
/*function add(x,y){
    let result = x + y;
    return result;
}
let answer = add(2,3);
console.log(answer);*/
    //    (or)

    /*function add(x,y){
    let result = x + y;
    return result;
}
console.log(add(2,3));*/

// (or)
/*function add(x,y){

    return x + y;
}
console.log(add(2,3));*/

// (or)
function add(x,y){
    return x + y;
}
function substract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
/*function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
    
} */ 
// or
function isEven(number){
    return number % 2 === 0 ? true : false;
}
/*function isvalidEmail(email){
if(email.includes("@")){
    return true;
}
else{
    return false;
}
}*/
// or
function isvalidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(substract(2,3));
console.log(add(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
// console.log(isEven(10));
console.log(isEven(11));
console.log(isvalidEmail("Bro@fake.com"));