function area(a,b){
    return(a*b)
}
console.log(area(4,3))

function isEven (a){
    return(a % 2===0)
}
console.log(isEven(4))

// function add(a,b){
//     console.log(a+b)
// }
// let result = add(4,6)
// // console.log(result) //undefined output because ye sirf print karega output lekin store ni karega
// let x=45
// let z=x+result //add does not return anything, so result is assigned undefined.
// console.log(z) // 45 + undefined → this leads to NaN (Not a Number).

function add(a,b){
    return (a+b)
}
let result = add(5,3)
let x=45
let z=x+result
console.log(z)

function calculateDiscount(price){
    let discount=price*20/100
    return price-discount
}
console.log(calculateDiscount(500))

function getdeliveryCharges(totalAmount){
    if (totalAmount>=500){
        return 0
    }
    else{
        return 50
    }
}
console.log(getdeliveryCharges(600))

function applycoupon(total,coupon){
    if(coupon=="welcome")
        return total-(total*10/100) //200-(200*10/100)=180
}
console.log(applycoupon(200,"welcome")) 


