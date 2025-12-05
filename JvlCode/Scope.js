
   // Golabal Scope ==============================================================


const name = "Golabal Scope";




function LogGlobalName(){

    console.log(name)
}


console.log(name);
LogGlobalName()




// Function Scope ==========================



const name1 = "Glabale Scope 3 ";



function logTrueName(){


    const name1 = "Function Scope 1";

    console.log(name1)
}

console.log(name1)
logTrueName()


// Block Scope  ==============================





const name2 ="Golabale Scope 4";



function logTrueName1(){

    const name2 = "Function Scope 2";


    if(true){
        const name2 = "Block Scope ";
        console.log(name2)
    }

    console.log(name2)
}

console.log(name2)
logTrueName1();