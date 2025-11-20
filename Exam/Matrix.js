// Diagonal Matrix =====================================


// function diagonal(n){


//     let diagonal = new Array(n).fill().map(()=> Array(n).fill(0));


//     let num=1;

//     for(let d=0;d<2*n;d++){

//         for(let i=0;i<n;i++){

//             let j=d-i;


//             if(j>=0 && j<n){

//                 diagonal[i][j]=num++;
//             }
//         }
//     }



//     return diagonal;
// }

// console.log(diagonal(4))



// Spiral Matrixs




function Spiral(n) {
    let Spirall = new Array(n).fill().map(() => Array(n).fill(0));

    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let num = 1;

    while (num <= n * n) {
        // Left to Right
        for (let i = left; i <= right; i++) {
            Spirall[top][i] = num++;
        }
        top++;

        // Top to Bottom
        for (let i = top; i <= bottom; i++) {
            Spirall[i][right] = num++;
        }
        right--;

        // Right to Left
        for (let i = right; i >= left; i--) {
            Spirall[bottom][i] = num++;
        }
        bottom--;

        // Bottom to Top
        for (let i = bottom; i >= top; i--) {
            Spirall[i][left] = num++;
        }
        left++;
    }

    return Spirall;
}

console.log(Spiral(4));