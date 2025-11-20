
// What is setTimeout ?==================================
// setTimeout(Function ,delay)===========================

// Runs once after the delay=======================



// function time(){


//     setTimeout(()=>{

//         console.log("Runs once after 2s ::")
//     },2000)

//     setTimeout(() => {

//         console.log("Runs once after 3s ::")
//     }, 3000);
// }

// time()


// What is setInterval ?========

// setInterval(Function,delay)=======
// Runs repeatedly  every delay=============================


//  function Interval(){


//     setInterval(() => {

//         console.log("SetInterval Runs After 4s ::")
 
//         console.log("SetInterval Runs After 4sx ::")

//     }, 4000);
//  }
//  Interval()




//Mistake===============================================================
// Dont no use in var key words use panna one value varanum 

// function Mistake(){


//     for(let i=1;i<=3;i++){

//         setTimeout(()=> console.log(i),1000)
//     }
// }
// Mistake()



//  ⚡ CONTROL setTimeout


// function CONTROL(){


//     const id=setTimeout(()=> console.log("hello"),3000);
//     // clearTimeout(id);
// }

// CONTROL()


// ✅ 2. setInterval()=====================================================


// function every(){

//   let x=1;
//    const id= setInterval(() => {

//         console.log("Count:",x++);

//     }, 1000);
//     clearInterval(id)
// }

// every()

// ⚡ ADVANCED: setTimeout with arguments=============================


// function greet(name) {
//   console.log("Hi " + name);
// }

// setTimeout(greet, 2000, "Darling");


// ⚡ ADVANCED: setInterval digital clock============================



function greett(){

   const id= setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);
 return id;
}

greett()

// ⚡ ADVANCED: Stopping after 5 times=============================


// function Count() {

//     let count = 1;
//     const id = setInterval(() => {
//         console.log(count);
//         if (count === 5) clearInterval(id);
//         count++;
//     }, 1000);

// return id;

// }

// Count()


// 🔥 1) Output Prediction (Closure + setTimeout)======================



// function Prediction() {

//     for (let  i = 1; i <= 5; i++) {
//         setTimeout(() => console.log(i), i * 1000);
//     }

  
// }

// Prediction()



// 🔥 2) Build a countdown timer:=============================


// function Timer(){

// let i=5;

//     let id=setInterval(() => {
//         console.log(i)
//         if(i==1){
//             console.log("Go!")
//             clearInterval(id);
//         }
//         i--;
//     }, 1000);
// }
// Timer()

// ✅ Repeated API Call Every 3 Seconds — Stop After 5 Calls



// function Apicall(){

//     let i=1;

    
//   let id=  setInterval(() => {
    
//     console.log(`Calling API...${i}`)
//          if(i===5){
//             clearInterval(id);
//             console.log("Stop")
//          }

//          i++;
//     }, 1000);
// }

// Apicall()

// 🔥 4) Create a typewriter effect using setTimeout.=============================



// function typewriter(text){
// let i=1;
 
// function printChar(){

//     console.log(text.slice(0,i));


//     if(i<text.length){
//         i++;
//         setTimeout(printChar,2000);
//     }
// }
// printChar()


// }

// typewriter("hello Darling")


// 🔥 5) Fix this broken timer code (very common mistake):


// function Mistake(){

//     let count=0;

//  let c=  setInterval(() => {
//         console.log(count);

//         if(count==5){
//             clearInterval(c)
//         }
//           count++;
//     }, 1000);
  
// }
// Mistake()