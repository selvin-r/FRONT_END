function Anagram(arr) {
  let result = {};
  for (let word of arr) {

    let key = word.split("").sort().join("");

   
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(word);
  }

  return Object.values(result);
}

const a = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(Anagram(a));
