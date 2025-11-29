

function deepclone(obj) {


    let copy = {};



    for (let key in obj) {

        if (typeof obj[key] === "object" && obj[key] !== null) {

            copy[key] = deepclone(obj[key]);
        } else {

            copy[key] = obj[key];
        }
    }

    return copy;
}

const a = { a: 1, b: { c: 2 } };

console.log(deepclone(a))