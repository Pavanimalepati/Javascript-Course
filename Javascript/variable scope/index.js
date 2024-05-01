// variable scope = where a variable is recognized and accessible (local vs global)




//  local variable declare in {}.
// function1();
/*function1();
function function1(){
let x = 1;
console.log(x);
}
function function2(){
let x = 2;
console.log(x);
}*/


// Any variable declare outside of the function has a global scope.

let x = 3
function2();
function function1(){
console.log(x);
}
function function2(){
console.log(x);
}



