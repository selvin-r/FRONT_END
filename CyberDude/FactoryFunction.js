

// Factory Function =====================



function createPerson(name){



    return {
        name,
        greeting(){

            let msg =`My Name is ${this.name}`;
            console.log(msg)
        }
    };
}

let obj = createPerson("Selvin");
let obj2=createPerson("Dhanush");
obj.greeting();
obj2.greeting();

