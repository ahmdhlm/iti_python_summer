// function statment es5 | function expression es5 | arrow function es6


// Function Statement ==> is hoisted

/**
 * function [name] ([params]){
 *  statements
 * }
 */


// declare function
// function square(myNumber){
//     console.log(myNumber * myNumber );
//     return undefined;
// };

// call function

// square(5);

// var x = square(5);
// console.log(x);

// function add(number1 , number2){
//     return number1 + number2;
// };

// var result = add(5, 3);
// console.log(result);
// result = add(5);
// console.log(result);
// var result = add(5);
// console.log(result);
// result = add();
// console.log(result);



// add(10,4);

// function add(number1 , number2){
//     console.log(number1 + number2);
// };


// console.log(y);
// console.log(x);
// var x = 5 ;

// function expression => is not hoisted;



// console.log(myGreet);
// // myGreet("malak");

// console.log(typeof(myGreet));

// var myGreet = function(userName){
//     console.log("Hello " + userName);
// };

// console.log(typeof(myGreet));
// myGreet("kareem");

// var myVar;
// console.log(myVar*2);
// var myVar = 15;
// var myVar = 20;
// var myVar =30;
// console.log(myVar);


// console.log(myLet);
// let myLet;
// console.log(myLet);

// console.log(myLet);
// let myLet=10;
// console.log(myLet);
// let myLet = 20;


// // unacceptable 
// var x = 20;
// let x =10;
// // unacceptable
// let x =10;
// var x = 20;

// const myConst; //==> error
// const myConst = 15;
// console.log(myConst);


// var myScope = "global scope";
// function checkScope(){
//     var functionScope = "local scope";
//     console.log(myScope);
//     console.log(functionScope);
// };
// // console.log(myScope);
// // console.log(functionScope);


// checkScope();
// console.log(myScope);
// console.log(functionScope);


// number7 = 35;
// console.log(number7);
// console.log(typeof(number7));

// var myScope = "global scope";
// function checkScope(){
//     var functionScope = "local scope";
//     userKareem = "kareem"; // totally not recommended
//     console.log(userKareem);
//     console.log(myScope);
//     console.log(functionScope);
// };
// checkScope();
// console.log(userKareem);

// console.log(userKareem);
// checkScope();
// console.log(userKareem);// it will turn to global scope after calling the function



// var x =5;
// if(x== 5){
//     let x= 10;
//     let y = 15;
// }else{
//     let x= 20;
//     let y = 25
// }



// function myFun(){
//     let numx = 15;
//     let numy = 7;
//     console.log(numy);
//     if(true){
//         let numy = 10;
//         console.log(numy);
//         console.log(numx);
//     }
//     console.log(numy);
//     console.log(numx);
// };


// myFun();


// shadowing ==> when you have a variable declared within 
// a certain scope has the same name as the variable in it's outer scope

// var x = 5;
// function myFun(){
//     var x = 10;
//     console.log(x);
// };
 
// myFun();

// legal shadowing

// function testShadowing(){
//     let lang = "javascript";
//     if(true){
//         let lang = "python";
//         console.log(lang);
//     }
//     console.log(lang);
// };
// testShadowing();

// illegal shadowing

// function testShadowing(){
//     var x = "python";
//     let y= "javascript";
//     if(true){
//         let x = "c";
//         var y= "java";
//         console.log(x);
//     }
//     console.log(x);
// }
// testShadowing();


// closures ==> self study 


// nested function 
// function hypotenuse(m, n){
//     function square(num){
//         return num * num;
//     }
//     return Math.sqrt(square(m)+ square(n));
// } 
// var result = hypotenuse(3, 4);
// console.log(result);

// function sum(a,b){
//     return a + b;
// }
// console.log(sum(5,6,7, 8));


// function statement has its own (this keyword) and arguments object 
// function checkArgs(){
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[2]);
//     console.log(arguments);
//     //console.log(this);
// };

// checkArgs(10, 20, 30);


// function sumAll(){
//     var total =0;
//     for(var i=0; i< arguments.length; i++){
//         total += arguments[i];
//     }
    
//     return total;
// };


// console.log(sumAll(5,10,30,40));

// function getProduct(price=100, type="unknown"){
//     console.log("the price is : ", price ,"for the type : ", type);

// };

// getProduct(10, "book");
// getProduct(50);

// let baseDiscount = 0.5;
// function getProduct(price , type="other", discount=baseDiscount){
//     console.log("the price is : ", price * (1 - discount)," for the type : ", type);
// };

// getProduct(10, "book");
// getProduct(100);


// function getBase(){
//     return 0.3;
// }
// function getProduct(price , type="other", discount=getBase()){
//     console.log("the price is : ", price * (1 - discount)," for the type : ", type);
// };

// getProduct(10, "book");
// getProduct(100);

// function getProduct(price , type="other", discount=price * 0.6){
//     console.log("the price is : ", discount," for the type : ", type);
// };

// getProduct(10, "book");
// getProduct(100);
// function getProduct(price = price * discount , type="other", discount= 0.6){
//     console.log("the price is : ", price," for the type : ", type);
// };

// getProduct(10, "book");
// getProduct(100);

// earlier arguments don't have access to later arguments

// let sayHi = ()=> "hi";
// console.log(sayHi());
// let sayHi = (name1)=> "hi " + name1;
// console.log(sayHi("aly"));
// let getBase = () => 0.3;
// console.log(getBase());

// let getPrice = (product, price) => {
//     let result;
//     if(price > 70){
//         result = product + " : " + price * 0.5;
//     }else{
//         result = product + " : " + price;
//     }
//     return result;
// };

// console.log(getPrice("book", 600));

// arrow functions doesn't have arguments object and it doesn't have it's own this


