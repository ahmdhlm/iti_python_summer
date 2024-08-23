// window ==> top level object

// window.alert("hello");

//window ==> navigator | document | location | history

// console.log(window.location.href);
// window.console.log("hello");

// window.prompt("enter your name");
// window.prompt("enter your name");
// window.confirm("are you ok");

// window.location= "https://www.google.com";


// let myWindow;

// function openNew(){
//     myWindow = window.open("./pagetwo.html", "test win", "width=700px, height=300px");
//     console.log(myWindow.closed);
// }

// function closeNew(){
//     myWindow.close();
//     console.log(myWindow.closed);
// }

//TIMERS 


// var myTimeOut;
// function startTimeOut(){
//     myTimeOut = setTimeout(function(){
//         console.log("hello user")
//     },3000);
// }

// function terminateTimeOut(){
//     clearTimeout(myTimeOut);
//     console.log("timeout terminated")
// }

// var intervalIti;
// intervalIti = setInterval(updateClock, 5000);
// function updateClock(){
//     var myTime = new Date().toLocaleTimeString();
//     console.log(myTime);

// // confirm("لقد ربحت ايفون 15")
// }


// function endClock(){
//     clearInterval(intervalIti);
//     console.log("clock stopped")
// }

// window ==> location
// console.log(window.location);
// console.log(window.location.href);
// console.log(window.location.hostname);
// console.log(window.location.protocol);
// console.log(window.location.search);

// function getQuery(){
//     var myQuery = window.location.search.substring(1);
//     var pairs = myQuery.split("&");
//     for(let i=0; i< pairs.length; i++){
//         console.log(pairs[i]);
//     }
// }

// getQuery();

// window ==> history history.length | history.back() | history.forward() | history.go()



//navigator

// cookie ==> persistent cookies | session cookies

// console.log(screen.width, screen.height)