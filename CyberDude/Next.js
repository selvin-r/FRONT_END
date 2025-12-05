

let person ={
    name : "selvin",
    age: 23,
    interest: ["creating , teaching new things"],
    isAlive: true,
    address:{
        city: "chennai",
        state: "Kerala",
    },

    greeting: function(){
        let msg =`My Name is ${this.name}, i love  ${this.interest}`;

        console.log(msg)
    }
}

person.greeting()