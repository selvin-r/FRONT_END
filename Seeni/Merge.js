function merge(arr) {
  arr.sort((a, b) => a[0] - b[0]);

  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let last = result[result.length - 1];

    if (arr[i][0] <= last[1]) {
      last[1] = Math.max(last[1], arr[i][1]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}


const arr =[[1,3], [2,6], [8,10], [15,18]];

console.log(merge(arr))