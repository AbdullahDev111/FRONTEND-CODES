// ***** Logical operator

// && and  || operators

// level 1 basics 
// For && if any value is false then all false
// For || if any value is true then all true

// && and || works similarly first they check for first satetment if it is false then then the && operator doesnot move to next statement and retruns false. Similarlyu, if the first statement is true then || doesnot checks further and rteturns true
// e.g 
let c = 4;
console.log( 40 > 50 && c++); // false
console.log(c); // 4


let b = 5;
console.log( 40 < 50 || b++); ///true
console.log(b); //5

// the value of c and b does not chanes becasue in first sattement of && there is false and in first statement of || there is true so they do not go to next statement

// now, in above expresssions we have seen that && and || gives true and false but when we see in depth of it in the below levels we will get to know that && and || actually gives truthy and falsy values not true and false 

// level 2
const andResult = 0 && 2
const orResult = 0 || 2
console.log(andResult) // 0 => && returns falsy value 
console.log(orResult) // 2 =>  || returns truthy value 
 
// level 2
const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'
console.log(andResult2) // ''
console.log(orResult2) // 'Hello'

//level 3
const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null
console.log(andResult3) // null
console.log(orResult3)//  'Hello'

// level 4
const andResult4 = 'Hello' && -4 + 5
console.log(andResult4) // 1
//output is 1 beacuse 'Hello' is truthy value then && moves to next ststement and first solves the expression i.e -4+5=1 so 1 is also a truthy value ,  now both ststement has truthy values so && returns last statement i.e. 1
const orResult4 = undefined || 4 + 8 * 5
console.log(orResult4) // 44

// what does console.log returns
const logOutput = console.log("Hi")
console.log(logOutput) // undefined 
//so console.log prints Hi and returns undefined 

// Practice 
const userAge = 22
const isSchoolStudent = (userAge >= 5) && (userAge <= 18) 
console.log(isSchoolStudent); // false
const isCollegeStudent = (userAge >= 18) && (userAge <= 24)
console.log(isCollegeStudent); // true
const isStudent = isSchoolStudent || isCollegeStudent

// **** Ternary Operator *****

const username = 5 > 2 ? 'Anurag' : 'Procodrr'
console.log(username) // returns true statement because ststement is true

const result = null ? 'Anurag' : '' ? '12' : 0
console.log(result) // 0 