

let sayHi = (name)=>{
    return "hi "+name
};
console.log(sayHi("ahmed"))

let getPrice = (product, price)=>{
    var res;
    if(price > 70){
        res = product + " : "+price*0.5
    } else{
        res = product + " : "+price
    }

    return res;
};

console.log(getPrice("milk","100"))

let person = {
    firstName : "Ahmed",
    lastName  : "Helmy",
    age       : 25,

    sayHi :function(){
        console.log("hi person")
    }

};

console.log(person.firstName);
console.log(person.sayHi());
