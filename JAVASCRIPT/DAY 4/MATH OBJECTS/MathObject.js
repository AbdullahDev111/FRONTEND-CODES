// Math is a built in object

// Properties
console.log(Math.pi) // undefined
console.log(Math.PI) //3.141.. 
console.log(Math.SQRT2) // 1.414.. // SQRT is readymade for  2
 
// methods
console.log(Math.sqrt(16))// 4
console.log(Math.sqrt(20)) // 4.472....
console.log(Math.pow(2, 6)) // => 2 ** 6 = > 64
console.log(2 ** 6) // 64


console.log(Math.floor(3.4)) // 3 
console.log(Math.floor(3.99)) // 3
console.log(Math.floor(2.9)) //2
console.log(Math.floor(3.0)) // 3

console.log(Math.floor(-3.4)) // -4
console.log(Math.floor(-5)) // -5
console.log(Math.floor(-5.0)) // -5
console.log(Math.floor(-5.1)) // -6
console.log(Math.floor(-5.6)) // -6

// oneliner floor = niche ki value or writing to downwards 

// Chat gpt => 
//     What Math.floor() does

// 👉 Math.floor(x) returns the greatest integer less than or equal to x.

// In simple words:

// It rounds down toward −∞ (negative infinity)

// NOT “just remove the decimal”

// Positive numbers ✅
// Math.floor(3.99) // 3
// Math.floor(2.9)  // 2
// Math.floor(3.0)  // 3


// Why?

// Numbers are already positive

// Rounding down = removing the decimal part

// 📌 Works exactly like you expect.

// Negative numbers ⚠️ (important)
// Math.floor(-3.4) // -4

// Why -4 and NOT -3?

// Let’s look at the number line:

// -5  -4  -3  -2  -1   0
//         ↑
//       -3.4


// -3 is greater than -3.4

// -4 is less than -3.4

// 👉 Floor means go DOWN, and for negatives, down means more negative


console.log(Math.ceil(2.01)) //3
console.log(Math.ceil(2.91)) // 3
console.log(Math.ceil(-2.01)) //-2
console.log(Math.ceil(-2.99)) // -2
console.log(Math.ceil(-2.0)) // -2
// oneliner ceil = upare ki value or writing to upper value

// removes decimal
console.log(Math.trunc(-3)) // -3
console.log(Math.trunc(-3.9)) // -3
console.log(Math.trunc(3)) // 3
console.log(Math.trunc(3.4)) // 3

console.log(Math.random()) // gives random value close to 1
console.log(Math.random() * 10) 

// to avoid decimal
console.log(Math.floor(Math.random() * 10) ) // to get 1 digit no. without decimal


// Infinity
console.log(8/0) // Infinity
console.log(-8/0) // -Infinity
console.log(typeof Infinity) // number

