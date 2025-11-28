function clean(obj) {
  let result = {};

  for (let key in obj) {
    let value = obj[key];

    if (value === null || value === "") continue;

    if (typeof value === "object") {
      let cleanedObj = clean(value);

  
      if (Object.keys(cleanedObj).length !== 0) {
        result[key] = cleanedObj;
      }
    } 
    else {
      result[key] = value;
    }
  }

  return result;
}

const obj = {
  name: "John",
  age: null,
  address: {
    city: "",
    pincode: 600001,
    extra: {}
  }
};

console.log(clean(obj));
