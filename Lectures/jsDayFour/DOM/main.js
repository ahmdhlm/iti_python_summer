// document as tree of nodes

// console.log(document.childNodes);
// console.log(document.childNodes[1]);
// console.log(document.childNodes[1].childNodes);
// console.log(document.childNodes[1].childNodes[2]);
// console.log(document.childNodes[1].childNodes[2].childNodes);
// console.log(document.childNodes[1].childNodes[2].firstChild);  
// console.log(document.childNodes[1].childNodes[2].firstChild.nextSibling);
// console.log(document.childNodes[1].childNodes[2].firstChild.nextSibling.nextSibling);
// console.log(document.childNodes[1].childNodes[2].firstChild.nextSibling.nextSibling.previousSibling);

// document as tree of elements

// console.log(document.children);
// console.log(document.children[0].children[1]);
// console.log(document.children[0].children[1].lastElementChild);
// console.log(document.children[0].children[1].firstElementChild);
// console.log(document.children[0].children[1].firstElementChild.nextElementSibling);
// console.log(document.children[0].children[1].firstElementChild.nextElementSibling.previousElementSibling);


// console.log(document.title);
// console.log(document.bgColor);
// console.log(document.body);
// console.log(document.cookie);

//find something to do something

// to select element in Dom ==> id | class | tagName | css Selectors



// var myDiv = document.getElementById("mycon");
// console.log(myDiv);
// console.log(myDiv.innerHTML);


// var myCheckBoxes =document.getElementsByName("hoppy");
// console.log(myCheckBoxes[0]);

// var spans = document.getElementsByTagName("span");
// console.log(spans[0]);

// var elms = document.getElementsByClassName("mydiv");
// console.log(elms);
// var elms = document.getElementsByClassName("first-pair");
// console.log(elms[0]);
// var elms = document.getElementsByClassName("first-pair mydiv");
// console.log(elms);


// var myEle = document.querySelector("#mydiv");
// console.log(myEle);
// var myEle = document.querySelector(".first-pair");
// console.log(myEle);
// var myEles= document.querySelectorAll(".first-pair");
// console.log(myEles[1]);

// var myEles = document.querySelectorAll("div");
// console.log(myEles);

// (div > p ) | div p | div ~ img | p[class] | a[href^=http]

// var myImg = document.getElementById("my-img");
// console.log(myImg);
// myImg.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB"

// var myDiv = document.getElementById("mycon");
// console.log(myDiv);
// myDiv.style.backgroundColor = "red";

// var myAnchor = document.getElementById("myAnchor");
// console.log(myAnchor);
// // myAnchor.href = "https://www.facebook.com";
// myAnchor.setAttribute("href", "https://www.facebook.com");

// myAnchor.setAttribute("class", "main");
// myAnchor.removeAttribute("href");
// console.log(myAnchor.getAttribute("target"));
// console.log(myAnchor.hasAttribute("target"));

// document.write("<p>welcome from js</p>");
// document.write("<p>welcome from js again</p>");


// var liItem = document.createElement("li");
// //<li></li>
// var liText = document.createTextNode("js option");
// // js option
// liItem.appendChild(liText);
// // <li>js option</li>
// document.getElementsByTagName("ul")[0].appendChild(liItem);
// console.log(document.getElementById("mylist"))

// var liItem2 = document.createElement("li");
// var liText2 = document.createTextNode("x option");
// liItem2.appendChild(liText2);
// var myList = document.getElementById("mylist");
// console.log(myList);

// myList.insertBefore(liItem2, myList.children[1] );

// var liItem3 = document.createElement("li");
// var liText3 = document.createTextNode("z option");
// liItem3.appendChild(liText3);


// console.log(myList.hasChildNodes())

//  if(myList.hasChildNodes()){
//     // myList.removeChild(myList.children[0]);
//     myList.replaceChild(liItem3, myList.children[0])
//  }


// var myDiv = document.getElementById("mydiv");
// console.log(myDiv);
// myDiv.innerHTML = "<p>welcome to new capital</p>";
// myDiv.innerText = "<p>welcome to new capital</p>";