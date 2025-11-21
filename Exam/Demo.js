// function foo1() {
//   return {
//     bar: "hello"
//   };
// }

// function foo2() {
//   return  
//   {  // ← PROBLEM (automatic semicolon insertion){
//     bar: "hello"
//   };
// }
// console.log(foo1(),foo2())



function max(nums){

  const maxx = nums.reduce((acc,curr) => acc  > curr ? acc : curr);

  return maxx;

}

const nums =[10,20,30,40,50];

console.log(max(nums))