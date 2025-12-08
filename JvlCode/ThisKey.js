
// this Keyword 




function createcharacter(name){



    return {

        name,
        greet: function(){

            console.log(`${this.name} Says hello!`)
        },
    }
}

const character =createcharacter('SELVIN');

character.greet();