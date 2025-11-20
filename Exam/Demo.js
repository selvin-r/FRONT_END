function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return  
  {  // ← PROBLEM (automatic semicolon insertion){
    bar: "hello"
  };
}
console.log(foo1(),foo2())