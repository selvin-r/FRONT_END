

// Filter=================



var number =[1,2,3,4,5,6,7,8,9,0]



var result =number.filter((num)=>{

    return num > 7;
})

console.log(result)



// Filter With Objects======



var creatures =[


    {name: "Shark",habitat: "Ocean"},
    {name: "Whale",habitat: "Ocean"},
    {name: "lion",habitat: "Savanna"},
    {name: "Monkey",habitat: "Jungle"}
];



const demo = creatures.filter((El)=>{



    return El.habitat === "Ocean";

})

console.log(demo)