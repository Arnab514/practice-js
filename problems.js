// 👉 Problem Set 1: Count duplicate elements in an array

const fruits = ["orange" , "mango" , "banana" , "banana" , "pineapple" , "mango" , "banana" , "apple" , "mango" , "orange" , "apple" , "apple" , "pineapple", "pineapple", "pineapple", "apple"]
// Output will be { orange: 2, mango: 3, banana: 3, pineapple: 4, apple: 4 }

function countDuplicate(data){
    const obj = {}
    data.map(d => (
        obj[d] = (obj[d] || 0) + 1
    ))

    return obj
}

console.log(countDuplicate(fruits))

// 👉 Problem Set 2: Reverse words in a string

const str = "Hi my name is Arnab"
// Output will be "iH ym eman si banrA"

// function reverseWordsinString(data){
//     const newData = data.split(" ")

//     const result = newData.map(w => {
//         return w.split("").reverse().join("")
//     })

//     return result.join(" ") ;
// }

// console.log(reverseWordsinString(str))

// 👉 Problem Set 3: Sorting words by length in a sentence