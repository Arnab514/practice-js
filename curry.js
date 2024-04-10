// // currying function

// function discountCalculator (discount) {
//     return function(price) {
//         return price - price * discount
//     }
// }

// let tenPercentDiscount = discountCalculator(0.1)
// let twentyPercentDiscount = discountCalculator(0.2)


// let customerOne = tenPercentDiscount(500)
// let customerTwo = twentyPercentDiscount(500)

// console.log(`Price after 20% discount is ${customerOne}`)
// console.log(`Price after 20% discount is ${customerTwo}`)


let h = "hi";
function hi() {
        console.log(h);
}

hi()