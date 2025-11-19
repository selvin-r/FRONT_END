

// Map Function

function Double(nums){

    const dob =nums.map(num=> num*2);



    return dob;
}


console.log(Double([1,2,3,4,5,6,7,8,9]))


// Q: “Given an array of numbers, return an array of squares using map().”


function Squa(nums){


    const sum=nums.map(num => num*num);


    return sum;
}

console.log(Squa([1,2,3,4,5,6]), "Squares")


// ✅ 2. filter() — Select Only What You Need



function Ages(nums){


    const reslut = nums.filter(a => a>=18);


    return reslut;
}


console.log(Ages([12,13,45,67,89]),"!8 age Up")








// filter Function   Even odd Check



function even(nums){


    const even =nums.filter(num=> num%2===0);


    return even;
}


console.log(even([1,2,3,4,5,6,7,8,9]))




// Reduce Function 




function Sum(nums){


    const result=nums.reduce((sum,num)=>sum+num);



    return result;
}

console.log(Sum([1,2,3,4,5,6,7,8,9]),"Total Sum");