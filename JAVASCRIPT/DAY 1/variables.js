//variable is a memory location
// 

let username = "Abdullah"
let age = 25
let isHappy = true

console.log(age)
console.log(typeof age)

// JavaScript automatically assigns a data type to variables because it is a dynamically typed language.
// In a dynamically typed language (like JavaScript):

// Variables do not have a fixed type

// The value has the type

// A variable’s type can change anytime

age = "fifty" // type of age is changes from number to string

console.log(age)
console.log(typeof age)

// variables using const

// The const keyword was introduced in ES6 (2015)

// Variables defined with const cannot be Redeclared


// Variables defined with const cannot be Reassigned
const n = 50;
console.log(n); //50
// n = 34;
// console.log(n); //error

// Variables defined with const have Block Scope
{
    const a = 123
    console.log(a)
}
// console.log(a) // error =  a is not defined


// var
var e = 20
console.log(e)





// Difference Between var, let and const
// Scope	Redeclare	Reassign	Hoisted	Binds this
// var	No	Yes	Yes	Yes	Yes
// let	Yes	No	Yes	No	No
// const	Yes	No	No	No	No