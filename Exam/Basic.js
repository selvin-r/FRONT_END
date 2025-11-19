// !.Basic  ================================================

// variables=======================================


let a = 10;   // Block scoped
const b = 20; // Constant
var c = 30;    // Function scoped (avoid Using)


// Data Types ====================================================



let str = "hello";   // String 

let num = 123;         // Number

let bool = true;      // boolean

let n = null;         // null

let u;             // undefinded

let obj = { key: "val" };


let arr = [1, 2, 3];


// Type Conversion ======================================================


Number("123");       // 123
String(123);         // "123"
Boolean(0);         // false

console.log(Number("123"))
console.log(String(123));
console.log(Boolean(1))


// 2 Control Structures =================================================

// if-else===============================

if (a > b) {
    console.log("A");
} else {
    console.log("B")
}

// Switch================================


// switch(day){
//     case 1:console.log("Mon");
//     break;
//     default: console.log("Other");
// }


// Loops ===================================



for (let i = 0; i < 5; i++) { }

while (condition) { }

do { } while (condition);

// 🔥 4) for…of loop (BEST for arrays)===================================

const arrr = [10, 20, 30];

for (const value of arrr) {
    console.log(value);
}



// 🔥 5) for…in loop (ONLY for objects — NOT arrays)= ======================


const user = { name: "Darling", age: 20 };

for (const key in user) {
    console.log(key, user[key]);
}


// 🔥 6) Array.prototype.forEach()=======================================

// Cleaner than for loop but you cannot stop it (no break, no return).

[1, 2, 3].forEach(x => console.log(x));



// 🔥 7) map() Transforms array → returns new array========================


const out = [1, 2, 3].map(x => x * 2);
console.log(out);  // [2,4,6]



// 🔥 8) filter()=======================================================

// Choose only items that pass a condition.

const outt = [1, 2, 3, 4, 5].filter(x => x % 2 === 0);
console.log(outt);  // [2,4]


// 🔥 9) reduce()==========================================================

// Combines values into one output.


const sum = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(sum); // 6


// 🔥 10) for await…of (Async loop)

// This is for promises.



async function run() {
    const urls = ["a", "b", "c"];

    for await (const u of urls) {
        console.log(u);
    }
}

// 3 operators ====================================================



// + - * / % ** // Arithmetic

// == === != !==   // Equality

// < <= > >=       // comparison

// && || !      // logical

// = += -= *=   //assignment 




// 4. Functions =======================================================



function greet(name) {

    return `Hi, ${name}`;

}

// Arrow Function =======================================


const sums =(a,b)=> a+b;


// Default parameters ======================================


function greetr(name ="Guest"){}



// Rest Parameters=======================================


function total(...num){
    return num.reduce((a,b)=> a+b);
}



// 5 Arrays===================================================



let fruits =["apple","banana"];


// Methods=================================

fruits.push("mango");
fruits.pop();
fruits.shift();
fruits.unshift("Kiwi");
fruits.includes("banana");
fruits.indexOf("apple");

// Iteration===============================================



fruits.forEach(f=> console.log(f));


let newArr = fruits.map(f=> f.toUpperCase());

let filtered = fruits.filter(f => f !== "banana");


// Spread ===========================================



let all =  [...fruits, "grape"];



// 6.objects ==================================


let userr ={
    name: "selvin",
    age: 25,

    greet(){
        return `Hi, ${this.name}`
    }
};

console.log(userr.name);
delete userr.age;





