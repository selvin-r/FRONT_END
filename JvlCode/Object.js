

// First Methods Object creation ======




let person = {
    firstName: "Selvin",
    lastName: "David",
    age: 23,
    isStudebt: true
};
console.log(person)


// Tow Step Object Creation============



let newPerson = Object.create({ firstName: "John", lastName: "Dhanush" })

console.log(newPerson)

delete person.isStudebt;

console.log("Delete The Value In Person Objects ", person)






// In Operater in js Return True or False





console.log("firstName" in person, "tha Is In Operater");





// Object Value Methods =====================





const session = {

    id: 1,
    time: `26-july-2018`,
    device: 'Mobile',
    browser: 'Chrome'
};

const Value = Object.values(session)

console.log(Value, "Only Value Get In Objects ")




// Object  Keys Methods===============



const employees = {

    boss: "Michael",
    secretary: "Pam",
    sales: 'Jim',
    accountant: "Oscar"
};

const keys = Object.keys(employees);
console.log(keys, "Only Print keys ")



// object Class Entries Methods ==



const obj = {
    name: "Adam",
    age: 20,
    location: "Nepal"

}


console.log(Object.entries(obj), "Convert To Object To Array :)")




// Object Freeze Methods ==================




const Freeze = {


    name: "Selvin",
    age: 23,
    isLove: false
}

Object.freeze(Freeze);

Freeze.age = 20;

console.log(Freeze, "Freeze Is tha Value is Not Change Tha Value is tha Object Values one time Freese Do Not Chnage Tha Value  Delete Panna Mudiyathu ")





// Object seal Methods=====================

// This is Tha Methodes Value You Can Change and Not Delete Tha Value In Object Not Add  Tha Objects





let SealMeth = {
    name: "Ani",
    age: 23,
    Phone: 236236862311
}


Object.seal(SealMeth);

SealMeth.Phone=2323351751;

console.log(SealMeth)

delete SealMeth.name;

console.log("Again Print" , SealMeth)

