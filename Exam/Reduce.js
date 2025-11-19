//🔥 1) SUM-================================================================



// You want reduce() use-cases: sum, product, total, max, min, count — each one with code.


function Sum(nums){


    const reslut =nums.reduce((acc,curr)=> acc + curr);


    return reslut;
}

console.log(Sum([10,20,30,40,50]));



//🔥 2) PRODUCT==========================================================

// Multiplying all numbers.

function product(nums){


    const reslut =nums.reduce((acc,cur) => acc * cur);


    return reslut;
}
console.log(product([2,3,4]))




// 🔥 3) TOTAL (Use case: total salary, total marks, total price)


const employees = [
  { name: "Aju", salary: 10000 },
  { name: "Kavi", salary: 15000 },
  { name: "Bala", salary: 8000 }
];

function employeess(employees){


    const totalsalary=employees.reduce((acc,curr)=>acc +curr.salary,0);

    return totalsalary;

}

console.log(employeess(employees))




// 🔥 4) MAX==================================================

// Biggest value




function max(nums){


    const reslut=nums.reduce((acc,curr)=> acc > curr ? acc :curr);


  return reslut;
}


console.log(max([23,44,55,666,77]));




// 🔥 5) MIN=========================================================



function min(nums){


    const reslut =nums.reduce((acc,curr)=> acc < curr ? acc : curr);



    return reslut;
}

console.log(min([2,3,4,51,33,44]));


// 🔥 6) COUNT occurrences================================================

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];




function count(fruits){


    const reslut=fruits.reduce((acc,curr)=>{
        acc[curr]=(acc[curr] || 0)+1;


        return acc;
    },{});

    return reslut;
}

console.log(count(fruits));


// 🔥 7) Sum of even numbers only (reduce + condition)====================


function Sumofeven(nums){

    const reslut=nums.reduce((acc,curr)=>{


        if(curr%2===0) acc +=curr;


        return acc;
    },0)
    return reslut;
}


console.log(Sumofeven([1,2,3,4,5,6]))


// 🔥 8) Flatten array (reduce → interview favourite)===================


function Flatten(nums){


    const reslut =nums.reduce((acc,curr)=> acc.concat(curr),[]);



    return reslut;
}
console.log(Flatten([[1,2],[3,4]]));



// 🔥 INTERVIEW-LEVEL COMBINED REAL TASKS
// Task 1: Map + Filter

// Q: From array of numbers, square only even numbers.


function COMBINED(nums){

    const reslut =nums.filter(n=> n%2===0)
    .map(n=> n*n);


    return reslut;
}

console.log(COMBINED([1,2,3,4,5,6]));



// Task 2: Filter + Reduce

// Q: Total marks of students who scored ≥ 50.

function students(nums){


    const reslut=nums.filter(m => m >=50)
    .reduce((acc,curr)=> acc + curr,0);


    return reslut;
}

console.log(students([30,40,50,60,70]));



// Task 4: Convert array of objects → array of names

// Q: Using map + filter.


const users = [
  {name: "Aju", age: 17},
  {name: "Bala", age: 22},
  {name: "Kavi", age: 28},
];


function adul(users){


    const reslut =users.filter(u => u.age >=18)
    .map(u=>u.name)

    return reslut;
}

console.log(adul(users));
