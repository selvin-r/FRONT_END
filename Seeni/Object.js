
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


let Duplicate = {
  a: 1,
  b: 2,
  c: 1,
  d: 3,
  e: 2
};


let result = {};


let seen = new Set();


for(let key in Duplicate){

    if(!seen.has(Duplicate[key])){
        seen.add(Duplicate[key]);

        result[key] =Duplicate[key];
    }
}

console.log(result)


// ✅ 17. Two Objects Compare Panni Equal ahnu Check==============================




function isEqual(obj1,obj2){

    let k1 = Object.keys(obj1);
    let k2 =Object.keys(obj2);


    if(k1.length !== k2.length){
        return false;
    }

    for(let key of k1){
        if(obj1[key]!==obj2[key]){
            return false;
        }
    }
    return true;
}

console.log(isEqual({a:1,b:2}, {a:1,b:2}));
console.log(isEqual({a:1,b:2}, {a:1,b:2,c:3}));


// ✅ 18. Object Values-la Maximum Value Find=============================================




let mark = {
  tamil: 80,
  english: 75,
  maths: 95
};

let max = 0;

for (let key in mark) {
  if (mark[key] > max) {
    max = mark[key];
  }
}

console.log(max); // 95


// ✅ 19. Object Values-la Minimum Value Find========================================

let mar = {
  tamil: 80,
  english: 75,
  maths: 95
};

let min = Infinity;

for (let key in mar) {
  if (mar[key] < min) {
    min = mar[key];
  }
}

console.log(min);

// ✅ 20. Swap Object Keys and Values==========================================


let swa = { a: 1, b: 2, c: 3 };
let swapped = {};

for (let key in swa) {
  swapped[swa[key]] = key;
}

console.log(swapped);


// ✅ 21. Object Values Sum Using Reduce



function Reduce(res){


  return  Object.values(res).reduce((a,b)=>a+b,0);
}

const res ={a:10,b:20,c:30}

console.log(Reduce(res))


// ✅ 22. Find Key Using Value-====================================================



function Findkey(Value){

  for(let key in Find){

    if(Find[key]===Value){

      return key

    }
  }
}

const Find ={a:2,b:200,c:20};

console.log(Findkey(2))


// ✅ 23. Object la Only Number Values Filter=======================


function Only(value){

  let result ={};

  for(let key in value){


    if(typeof value[key] === "number"){

       result[key]=value[key];
    }
  }

  return result;

}

const value ={
  a:10,
  b:"hello",
  c: true,
  d:null,
  e:20
};

console.log(Only(value));




// ✅ 24. Object Reverse Program==========================================================



function Reverse(value){


  let Reverse ={};

  let keys =Object.keys(value).reverse();

  for(let key of keys){

    Reverse[key]=value[key];


  }

  return Reverse;
}


const valuee ={

  a:2,
  b:4,
  c:5,
  d:6,
  f:3

};


console.log(Reverse(valuee))


// ✅ 25. Nested Object Value Access with Loop===================================


let valu = {

  name:"Selvin",
  mark:{
    tamil:20,
    Englis:30
  }
}

for(let key in valu.mark){

  console.log(key,valu.mark[key]);
}