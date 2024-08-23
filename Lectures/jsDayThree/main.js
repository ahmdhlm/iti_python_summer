// js ==> object based

// BOM | DOM | language objects | user-defined objects

// object ==> properties | methods (functions)



// var name1 = "kareem"; 

// var person = {
//     firstName : "tarek",
//     lastName : "ahmed",
//     age: 25,

//     sayHi : function(){
//         console.log(`welcome ${this.firstName} ${person.lastName}`);
//     }
// };

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.sayHi());

// language objects ==> String | Number | Boolean | Array  | Date | Math ...


// var myStr = "ahmed";
// var myStr2 = new String("kareem");
// console.log(myStr2);

// console.log(myStr.length);
// console.log(myStr2.length);

// let str = "hello, _ world _ omar";
// console.log(str.charAt(0));
// console.log(str.charAt(str.length - 1));
// console.log(str.substring(1,4));
// console.log(str.slice(1,4));
// console.log(str.substring(4));
// console.log(str.slice(4));
// console.log(str.slice(-5));
// console.log(str.indexOf("o"));
// console.log(str.indexOf("k"));
// console.log(str.indexOf("z"));
// console.log(str.lastIndexOf("o"));
// console.log(str.indexOf("o", 6));
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split("_"));
// console.log(str.split(","));
// console.log(str.replace("w", "u"));
// console.log(str.replace("world", "universe"));
// console.log(str.toUpperCase());

// function vowelCount(str){
//     var vowels ="aeiouAEIOU";
//     var vowelCount = 0;
//     for(let i =0; i< str.length; i++){
//         if(vowels.indexOf(str[i]) != -1){
//            vowelCount ++; 
//         }
//     }
//     return vowelCount;
// }

// console.log(vowelCount("hi kareem"));


// Boolean


// var flag = true;
// console.log(typeof flag);


// var flag = new Boolean();
// console.log(flag);
// var flag = new Boolean(undefined);
// console.log(flag);
// var flag = new Boolean("");
// console.log(flag);
// var flag = new Boolean(null);
// console.log(flag);
// var flag = new Boolean(false);
// console.log(flag);
// var flag = new Boolean(0);
// console.log(flag);
// var flag = new Boolean(NaN);
// console.log(flag);

// console.log("***************************************")

// var flag = new Boolean(" ");
// console.log(flag);
// var flag = new Boolean([]);
// console.log(flag);
// var flag = new Boolean({});
// console.log(flag);
// var flag = new Boolean("ahmed");
// console.log(flag);
// var flag = new Boolean(true);
// console.log(flag);
// var flag = new Boolean(10);
// console.log(flag);


// Number
// var myNum = 17;
// console.log(typeof myNum);

// var myNum2 = new Number(20);
// console.log(myNum2);

// console.log(Number.isInteger(myNum));
// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.5));


// var myNum3 = Number.parseInt("700$");
// console.log(myNum3);
// console.log(typeof(myNum3));
// var myNum3 = Number.parseFloat("100.16$");
// console.log(myNum3);
// console.log(typeof(myNum3));

// var strNum = myNum.toString();
// console.log(strNum);
// console.log(typeof(strNum));
// var strNum = myNum.toString(16);
// console.log(strNum);
// console.log(typeof(strNum));


// var myNum4 = Number("100");
// console.log(myNum4);
// console.log(typeof(myNum4));
// var myNum4 = Number("100.15");
// console.log(myNum4);
// console.log(typeof(myNum4));
// var myNum4 = Number("0x11");
// console.log(myNum4);
// console.log(typeof(myNum4));
// var myNum4 = Number("100$");
// console.log(myNum4);
// console.log(typeof(myNum4));

// var n = 17 ;
// var hex_str = "0x" + n.toString(16);
// console.log(hex_str);
// var hex_str = "0" + n.toString(8);
// console.log(hex_str);


// var str_bool = String(false);
// console.log(str_bool);
// console.log(typeof(str_bool));


// console.log(15+"10");
// console.log(true + true);
// console.log(1+{});
// console.log(2+null);
// console.log(2+undefined);


// Array

/**
 * -- untyped
 * -- zero-based indexed
 * -- dynamic
 */

//literal creation
// var empty = [];
// console.log(typeof(empty));
// var arr1= [1, 5 , 9 , 48];
// console.log(arr1);
// console.log(typeof(arr1));
// var arr2 = [1.1, 15, "ahmed", true, ["kareem", "aly", "tarek"]];
// console.log(arr2);
// console.log(arr2.length);
// console.log(arr2[4]);
// console.log(arr2[4][1]);
// var newArr= [10];
// console.log(newArr);


// var myArr = new Array();
// console.log(myArr);
// var myArr = new Array(7);
// console.log(myArr[0]);
// var myArr = new Array(5 ,4, 7, 12, "kareem" , "rana");
// console.log(myArr);


// var myArr= [];
// myArr[0] = "ahmed";
// // arr[5] = "kareem";
// myArr.push("mona")
// myArr.push("soha")
// myArr.pop();
// myArr.push("toqa");
// myArr.push("ola");

// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift("hassan");
// console.log(myArr);

// var arr = [1, 2, null, undefined, "value", "another-value", 0];
// for(let i=0; i< arr.length; i++){
//    if(!arr[i]){
//     continue;
//    }
//     console.log(arr[i])
// }

// var myArr = ["apple", "orange", "strawberry", "mango"];
// myArr.forEach(function(e, i){
//     console.log("your element is " + i + " and the index is " )
// })


// var myArr = [1,15,3,0,99];
// var myArrJoined = myArr.join("_-_");
// console.log(myArrJoined);
// console.log(typeof myArrJoined);

// var arrRev = myArr.reverse();
// console.log(myArr);
// console.log(arrRev);

// var myArr = ["apple", "orange", "strawberry", "mango"];
// console.log(myArr);
// myArr.splice(1,2)
// console.log(myArr)
// var myArr = ["apple", "orange", "strawberry", "mango"];
// console.log(myArr);
// myArr.splice(1,0,"cherry", "tomato", true)
// console.log(myArr)


// var myArr = ["apple", "orange", "strawberry", "mango"];
// let newFruits = myArr.slice(1);
// console.log(myArr);
// console.log(newFruits);

// let numArr = [1, 3, 6 , 9, 18];
// let newArr= numArr.map((element)=> element *3 );
// console.log(numArr);
// console.log(newArr);

// let numArr= [1, 10, 20, 30];
// var sum = numArr.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
// var sum = numArr.reduce((accumulator, currentValue)=> accumulator + currentValue, 100);
// console.log(sum);

// var numArr = [7, 18 , 20, 9, 33, 12];
// var filteredArr = numArr.filter((element)=> element%2 == 0  );
// console.log(numArr);
// console.log(filteredArr);

// var myArr = ["apple", "orange", "strawberry", "mango", "cherry", "banana"];

// var sortedArr = myArr.sort();
// console.log(sortedArr);


// var myArr = [80,11,240,3000,550,150,8];

// var sortedArr = myArr.sort((a,b)=> (a-b));
// var sortedArr = myArr.sort((a,b)=> (b-a));
// console.log(sortedArr);


//self study ==> Math | Date ==>  array methods what mutates the array and what doesn't