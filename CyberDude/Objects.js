
// Dot Notation=============================== 1


let obj ={

    name : "selvin",
    age: 23,
    Mobil: 6383438162,
    Add: "Nothing",

    Sibling : {

        brother : "Dhanush",
        sister :  "gayau"
    }
}


console.log("Nested Objects " , obj.Sibling.brother);

console.log(obj)

obj.Add = "Bot"
console.log(obj)

// Bracket Notation ========================================= 2



console.log(obj['Mobil']);