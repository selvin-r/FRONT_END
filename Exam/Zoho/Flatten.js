function flatten(arr) {
  return arr.flat(Infinity);
}
function flatten(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}


let arr =[1,[2,[3,4],5],6];
console.log(flatten(arr))