
const student ={
    name: "selvin",
    age: 22,
    course: "Front-End"
};

console.log(student.name)
console.log(student.age)

// ADD

student.city ="chennai";   


// Update 

student.age =23;


// Delete 


delete student.name;

console.log(student)


// ✅ 3. Loop Through an Object (Important for Zoho)==================


const marks = {
    tamil: 80,
    english: 75,
    maths: 90
};

for(let subject in marks){

    console.log(subject , "=",marks[subject]);
}

// ✅ 4. Count Number of Keys in an Object================================

 

    const user ={
        name: "A",
        age: 22,
        city: "Salem"
    };


console.log(Object.keys(user).length, "Count The Length OF the Objects")


// ✅ 5. Convert Object → Array =================================


function Obje(obj){


    return Object.entries(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(Obje(obj));


// ✅ 6. Program: Find Sum of Object Values=========================

const scores = {
  tamil: 80,
  english: 70,
  maths: 90
};

let sum = 0;

for (let key in scores) {
  sum += scores[key];
}

console.log(sum); // 240

// ✅ 7. Program: Check if Key Exists in Object=======================



const usere = {
  name: "Darling",
  age: 22
};

console.log("age" in usere);    // true
console.log("city" in usere);  // false


// ✅ 8. Program: Deep Clone Object (Without JSON)========================



function deepclone(obj){

    let copy ={};


    for(let key in obj){

        if(typeof obj[key]==="object"){

            copy[key]= deepclone(obj[key]);
        } else  {
            copy[key] =obj[key];
        }
    }
    return copy;
}

const a = { x: 1, y: { z: 2 } };

console.log(deepclone(a));


// ✅ 9. Program: Frequency Count Using Object===================


const arr = ["apple", "banana", "apple", "orange", "banana"];


const freq = {};


for(let item of arr){
    freq[item] =(freq[item] || 0) +1;
}

console.log(freq);


// ✅ 10. Program: Remove Empty Values from Object==========================


function clean(obj) {
  let result = {};

  for (let key in obj) {
    if (obj[key] !== "" && obj[key] !== null) {
      result[key] = obj[key];
    }
  }

  return result;
}

console.log(clean({
  a: "",
  b: 2,
  c: null,
  d: 5
}));


// ✅ 16. Object la Duplicate Values Remove Program================



