// ternary operator = a shortcut to if{}and else{} statements helps to assign a variable based on a condition 
// condition? codeIfTrue  :  codeIfFalse;


/*let age=21;
let message;
if(age>= 18){
    message="you're an adult";
}
else{
    message="you're an minor";
}*/
// (or)
// *****
/*let age=21;
let message = age >= 18 ? "you're an adult" :"you're a minor";
console.log(message);*/

// *****
/*let time = 16;
let greeting = time < 12 ? "good morning" :"good afternoon";
console.log(greeting);*/
// *****
/*let isStudent = true;
let message = isStudent ? "you are a student" : "you are NOT a student";
console.log(message);*/

// *****
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(discount);
console.log(`your total is $${ purchaseAmount-purchaseAmount *(discount/100)}`);