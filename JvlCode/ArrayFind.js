

// ArrayFind Methods========== Value Get Pannum 

function FindNumber(number) {
    return number.find((element) => {

        return element > 20;

    })

}

let number = [10, 20, 30, 40, 50];
console.log(FindNumber(number))



// Arrays some Function Value True or False Check Pannum 




function SomeMeth(num){

    return num.some((element) => {

        return element >100;
    })
}

const num = [10,20,30,40];
console.log(SomeMeth(num))


// Delete Tha Object Value ====



