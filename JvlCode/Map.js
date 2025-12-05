
const products =['beans','pizza','chicken','salmon'];



const productsMapped = products.map((el)=>{


    return el+'*';
})

productsMapped.forEach((el) => {
    console.log(el)
})

// DiscountAmount===============================



let prices =[3,4,5,6,7,8,9,0];
let Discount =1;

let Discountprices=prices.map((el) =>{



    return el-Discount;
})

console.log(Discountprices);