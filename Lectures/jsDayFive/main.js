//EVENTS

/***
 * mouse ==> onclick | onmouseover | onmouseout | onmousemove
 * keyboard ==> onkeydown | onkeypress | onkeyup
 * form ==> onsubmit | onreset
 * other ==> onfocus | onblur | onload | onerror ...
 */

// console.log(document.images[0]);

// function changeImg(){
//     document.images[0].src = "assets/img2.jpg"
// }

// function returnImg(){
//     document.images[0].src = "assets/img1.jpg"
// }

// let i=0;
// let timerId;
// function changeImgs(){
//     timerId =setTimeout(changeImgs,1500);
//     i++;
//     if(i>5){
//         i =1;
//     }
//     document.images[0].src = `assets/img${i}.jpg`;
//     // document.images[0].src = "assets/img" + i + ".jpg";
// }

// function returnImg(){
//     clearTimeout(timerId);
//     document.images[0].src = "assets/img1.jpg"
//}

// function funOne(){
//     let myInput = document.getElementById("fname");
//     myInput.value = myInput.value.toUpperCase();
//     myInput.style.backgroundColor= "aqua" ;
// }
// function funTwo(){
//     let myInput = document.getElementById("fname");
//     myInput.style.backgroundColor= "yellow" ;
// }

// function funThree(){
//     alert("you clicked on the keyboard")
// }

// keydown | keyup | keypress

// function loadHandler(){
//     alert("page is fully loaded")
// }

// function imgError(){
//     console.log("Error loading the img")
// }

// DROPDOWN LIST
// option.selected | option.text | option.value

// document.getElementById("btn1").onclick = function(){
//     var mySelect = document.getElementById("menu");
//     // console.log("btn clicked");
//     // console.log(mySelect.length);
//     // console.log(mySelect.options[0].value);
//     document.getElementById("value").innerHTML = "your values : "
//     document.getElementById("text").innerHTML = "your text : "

//     for(let i=0; i<mySelect.length; i++){
//        if(mySelect.options[i].selected){
//         document.getElementById("value").innerHTML += " " + mySelect.options[i].value ;
//         var myText = document.getElementById("text");
//         myText.innerText += " " +  mySelect.options[i].text;
//        }
//     }
// }

//this

// let myButton = document.getElementById("mybtn");

// myButton.addEventListener("click",function(){
//    // this.className += " btn btn-primary";
//    this.classList.add("btn-primary");
//    this.classList.add("btn");
//     this.innerHTML = "Button Clicked!";
//     this.style.backgroundColor = "blue";
//     this.style.color = "white";
//     console.log(this);
// });

// function fun(x){
//     console.log(x);
//     x.innerHTML = "hello";
// }

// function resetCheck (myEvent){
//     let myResponse = confirm("Are you sure you want to reset");
//     if(myResponse == false){
//         myEvent.preventDefault()
//     }
// }

// capturing vs bubbling

//bubbling
// function clickHandler(element, e){
//     console.log(element.id);
//     e.stopPropagation();
// }


// capturing
// document.getElementById("id1").addEventListener(
//   "click",
//   function (event) {
//     console.log(this.id);
//     event.stopPropagation();
//   },true
// );
// document.getElementById("id2").addEventListener(
//   "click",
//   function (event) {
//     console.log(this.id);
//     event.stopPropagation();
//   },true
// );
// document.getElementById("id3").addEventListener(
//   "click",
//   function (event) {
//     console.log(this.id);
//     event.stopPropagation();
//   },true
// );

// it is not recommended to work in capture mode


// PROMISE IN JS

// let myPromise = new Promise((resolve, reject)=>{
//     const success = false;
//     if(success){
//         resolve("promise resolved")
//     }else{
//         reject(new Error("couldn't resolve the success"));
//     }
// })

// myPromise
// .then(data => console.log(data))
// .catch(err=> console.log("error: " + err))

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let data = {nameOne: "mahmoud", nameTwo: "ola"}
//             resolve(data)
//         },3000)
//     })
// }


// fetchData()
// .then(data =>console.log(data))
// .catch(console.log("error"));



// let myJson = '{"name":"omar", "age":30}';
// console.log(typeof myJson);
// let myObj = JSON.parse(myJson);
// console.log(typeof myObj);
// console.log(myObj);
// let newJson = JSON.stringify(myObj);
// console.log(typeof newJson);
// console.log(newJson);


/* PROJECT */
// project ==> ecommerce (vanilla js only) | -es6 features | JSON data | 
// image slider ==> automatic & buttons | footer button scrolls to the top of the page using js
// registration form ==> regex ==> validate egyptian phone number | email @iti.com
// cart ==> check functional 
