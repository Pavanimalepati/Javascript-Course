// string methods = allow you to manipulate and work with text (strings)

// *****
/*let userName = "BroCode";
//  console.log(userName.charAt(0));
 console.log(userName.charAt(1));*/

//  *****
// let userName = "BroCode";
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// console.log(userName.length);

// *****
/*let userName = "BroCode";
// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
userName = userName.repeat(3);
console.log(userName);*/
// *****
/*let userName = "BroCode";
let result = userName.startsWith(" ");
console.log(result);
// ("")-- without space true.  (" ")-- with space false. and also in username*/
            //    (or)
 /*let userName = "Bro code";
//  let result = userName.startsWith("") ;
// let result = userName.endsWith(" ") ;
 let result = userName.includes(" ") ;
//  includes is bro code like that
 if(result){
    console.log("your username can't begin with ''");
 }
else{
    console.log(userName)
}*/

// ******
let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-","/");
// phoneNumber = phoneNumber.padStart(20,"0");
phoneNumber = phoneNumber.padEnd(15,"0");
console.log(phoneNumber);


