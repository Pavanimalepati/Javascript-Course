// SWITCH = Can be an efficient replacement to many else if statements.

// *****
/*let day =1;
// let day = "pizza";
switch(day){
    case 1:
        console.log("It is monday");
        break;
        case 2:
        console.log("It is tuesday");
        break;
        case 3:
        console.log("It is wednesday");
        break;
        case 4:
        console.log("It is thursday");
        break;
        case 5:
        console.log("It is friday");
        break;
        case 6:
        console.log("It is saturday");
        break;
        case 7:
        console.log("It is sunday");
        break;
        default:
        console.log(`${day} is not a day`);
}*/

// the reason we have break statement is break out of the the switch onces we have magic case.
//  we remove break statement o/p will be all days comming.

// *****
// let testScore = 92;
// let testScore = 85;
// let testScore = 75;
//  let testScore = 65;
let testScore = 33;
let letterGrade ;
switch(true){
   case testScore >=90:
   letterGrade = "A";
   break;
case testScore >=80:
   letterGrade = "B";
   break;
   case testScore >=70:
   letterGrade = "C";
   break;
case testScore >=60:
   letterGrade = "D";
   break;
   default:
    letterGrade = "F";
}
console.log(letterGrade);