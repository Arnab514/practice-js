// const changeColor = () => {
//     const hex = "0123456789ABCDEF"
//     let color = "#";
    
//     for (let i = 0 ; i < 6 ; i++)
//     {
//         color += hex [Math.floor(Math.random() * 16)] 
//     }
//     return color
// }

// let id;
// const startChangeColor = () => {
//     id = setInterval( auto , 1500)

//     function auto(){
//         document.body.style.backgroundColor = changeColor();
//     }
// }
// const stopChangeColor = () => {
//     clearInterval(id)
// }

// document.querySelector("#start").addEventListener( 'click' , startChangeColor);
// document.querySelector("#stop").addEventListener( 'click' , stopChangeColor);

// const passwordChanger = () => {
//     let pass = "" ; 
//     let str = 'ABCDEFGHIJKLMNOPQRSTWVXYZabcdefghijklmnopqrstwvxyz1234567890!@#$%^&*' ; 

//     for ( let i = 1 ; i <= 8 ; i++ )
//     {
//         let char = Math.floor(Math.random() * str.length + 1);
//         pass += str.charAt(char);
//     }
//     return pass
// }

// console.log (passwordChanger())

// **********************************************************************

//pollyfils for map function
// Array.map((element , i , arr) => {}) syntax of map

Array.prototype.myMap = function (cb) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push (cb(this[i] , i , this))        
    }
    return newArr;
}

let hi = [1, 1, 1, 1, 1, 1]
const hello = hi.map((element) => {
    return element*3
})
console.log (hello)






























