

// One Object To Other Object Connected IN 




const character = {

    attack: function () {

        console.log('Swing!')

    },
}

const fighter = {

    name: 'Hulk',
    __proto__: character,
}

fighter.attack()


// Auto Set proto



function Character(name){


    this.name =name
    this.attack = function () {


        console.log(`${this.name} Swings!`)
    }
}

function Fighter (name){

    this.name =name;
}


// Conct Tha value In Prototype

Fighter.prototype = new Character()


const fighter2 = new Fighter('Hulk')

fighter2.attack()