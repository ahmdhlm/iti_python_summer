// alert("welcome from external js")

// one line comment
/*
multiLine
comment 
*/

// JS is case sensitive online != Online

// reserved keywords ==> for | while | break | continue ...

// Identifying a variable
// you can start with $ | letter | underscore
// in js we use camelCase notation

// var myVar = "dfsf";
// examples for legal identifiers
// var myName12 ="omar";
// var my_name = "omar";
// var $myName = "omar";
// var _myName = "omar";

// LITERALS
/**
 * 12 => number 12
 * 1.2 => number 1.2
 * "hello world"=> string
 *  "c" => string
 * true => boolean
 * false => boolean
 *
 *
 */
// var num1= 15;
// console.log(typeof(num1));
// var num1= 1.5;
// console.log(typeof(num1));

//javascript is OBJECT based

// TYPES
// primitive types in javascript ==> number | string | boolean | undefined | null
// object types in javascript ==> language objects | browser objects | document objects | user defined objects

// var i;
// console.log(i);
// // console.log(o);
// // variable declaration
// var i, name1; //declaration
// console.log(name1);
// name1 = "omar"; // initialization
// console.log(name1);

// var name2 = "ahmed";
// console.log(name2);
// var name3 = "alaa", name4="aya";
// console.log(name1, name2, name3, name4);

// var myNum = 10;
// var myNum2 = "10";
// var myStr = "python group";
// var myLongString = 'omar mustafa\
//  ahmed';
// var anotherStr = 'this isn\'t true';
// var myLongString2 = 'hello \n omar';
// console.log(typeof(myNum));
// console.log(typeof(myNum2));
// console.log(myStr);
// console.log(myLongString);
// console.log(anotherStr);
// console.log(myLongString2);
// console.log("my score is : ", myNum);
// var score = "my score is : " + myNum;
// console.log(score);
// console.log(typeof(score));
// console.log("welcome to ", myStr);

// var myTemplateLiteralString = `this is ${myStr} ${anotherStr}` // es6 only
// console.log(myTemplateLiteralString);

// var bool =true;
// console.log(bool);
// console.log(typeof(bool));

// // literal creation
// var myStr="hello";
// //constructor creation
// var myStr2 = new String("welcome");
// console.log(myStr2);
// console.log(typeof(myStr2));

// var myUndef = undefined;
// console.log(myUndef);
// console.log(typeof(myUndef));
// var myNull = null;
// console.log(myNull);
// console.log(typeof(myNull));

// var flag1 = true;
// var flag2 = true;
// console.log(flag2 + flag1);

// var myNan = 6 + undefined; //
// console.log(myNan);
// console.log(typeof(myNan));
// console.log(isNaN(10));
// console.log(isNaN(myNan));
// console.log(isNaN("hello"));

// let | const ==> block scoped

// var myVar =5 ;
// var myVar = 2;
// console.log(myVar);

// let myLet = 5;
// let myLet = 3;

// let myLet = 5;
// myLet = 3;
// console.log(myLet);
// const myConst = 10;
// myConst= 8;
// console.log(myConst);
// let myLet = new String("welcome");
// console.log(myLet);

//arithmetic operators in JavaScript
// + | - | * | / | % | ++ | --
// console.log("ahmed & "+ "mona");
// var newVar = 1 + "2";
// console.log(newVar);
// var newVar = 1 + 2;
// console.log(newVar);
// newVar = 5 + null;
// console.log(newVar);
// newVar = 5 + undefined;
// console.log(newVar);
// newVar = 5 + NaN;
// console.log(newVar);

// var num1 = 10;
// var num2 = 5;
// var result = num1 + num2;
// console.log(result);
// result = num1 - num2;
// console.log(result);
// result = num1 / num2;
// console.log(result);
// result = num1 % num2;
// console.log(result);
// result = 5;
// var newRes = result++;
// console.log(result);
// console.log(newRes);
// var newRes = ++result;
// console.log(result);
// console.log(newRes);
// var newRes = result--;
// console.log(result);
// console.log(newRes);
// var newRes = --result;
// console.log(result);
// console.log(newRes);
// result = 10;

// result += 5; // result = result + 5 ;
// console.log(result);
// result -= 5; // result = result - 5 ;
// console.log(result);
// result *= 5; // result = result * 5 ;
// console.log(result);
// result /= 5; // result = result / 5 ;
// console.log(result);
// result %= 5; // result = result % 5 ;
// console.log(result);

// comparison operators in JavaScript ==> boolean;

// var num1 = 10;
// var num2 = "10";
// console.log(num1 == num2 );
// console.log(num1 === num2 );
// console.log(num1 != num2 );
// console.log(num1 !== num2 );
// var num3 = 8;
// var num4 = 10;
// console.log(num3 > num4 );
// console.log(num3 < num4 );
// console.log(num3 <= num4 );
// console.log(num3 >= num4 );


// logical operators in JavaScript ==> boolean
// var flag1 = true;
// var flag2 = false;
// console.log( 0 && false && null && 0 && flag2);
// console.log(false || 15 || flag1 || 20 || flag2);
// console.log(!flag1);

// conditional --ternary--  operators in JavaScript 

// var myFlag = false;
// var myName = (myFlag ? "omar" : "no user");
// console.log(myName);
// console.log(false == false);

// conditionals 

// var userName = "alaa";

// if(userName == "ahmed"){
//     console.log("welcome " + userName);
// };


// if(userName == "ahmed"){
//     console.log("welcome " + userName);
// }else{
//     console.log("you are not ahmed");
// }




// if(userName == "ahmed"){
//     console.log("welcome " + userName);
// }else if(userName == "omar"){
//     console.log("welcome " + userName);
// }else {
//     console.log("you are not ahmed or omar");
// }

// let day = new Date();
// let dayNum = day.getDay();
// dayNum = 10;
// console.log(dayNum);

// switch (dayNum){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// loops 

// var count = 0;
// while (count < 10){
//     console.log(count);
//     count++;
// }

// for (var i=0; i<=10; i++){
//     if(i == 5){
//         continue;
//     }
//     // continue will skip the logic for this iteration only 
//     console.log(i);
// }

// for (i in myProucts){
//     console.log(myProucts[i])
// }