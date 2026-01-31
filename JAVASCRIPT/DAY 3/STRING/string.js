// STRING group of characters. It has its own properties and functions


// ***** strings are indexed 
const message = "Hello I am Learning Web Development";
console.log(message[0]); // H
console.log(message[3]); // l
console.log(message[7]); // <space>
console.log(message[8]); // a
console.log(message[-0]); // -0 means 0
console.log(message[-1]); // undefined
console.log(message[100]); // undefined

// Property of String = Length
console.log(message.length) // 35


let str = "     Hi I am      Abdullah Siddqui        "


// Methods withuot arguments
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
console.log(str) // the functions does not change original string

// Methods with arguments

let word = "I am a Web Developer"
console.log(word.includes("a Web")) //true
console.log(word.includes("Web developer"))// false

console.log(word.replace("Developer", "Designer")) // I am a Web Designer
console.log(word.replace("a Web Developer", "a SDE")) // I am a SDE
console.log(word.replace("a boy","a student"))// I am a Web Developer => nothing changed
console.log(word) // I am a Web Developer => Original string does not changes

console.log(word.replaceAll("a", "A")) // I Am A Web Developer
console.log(word.padStart(4, "$")) // I am a Web Developer => reason
// Padding happens ONLY IF
// targetLength(4) > string.length(21) = > 
console.log(word.padStart(30, "$")) // $$$$$$$$$$I am a Web Developer

// same there is padEnd

console.log(word.charAt(3))
console.log(word.charAt(4))
console.log(word.charAt(9))
console.log(word.charAt(30))// "" => empty string beacuse legth of word is 21 


// charCode gives ASCII of that character
console.log(word.charCodeAt(3)) // 109 = > ASCII of m is 109
console.log(word.charCodeAt(30)) // NaN
console.log(word.charCodeAt(10))

// split => split() is a string method used to convert a string into an array.

console.log(word.split("")) // (20) ['I', ' ', 'a', 'm', ' ', 'a', ' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

console.log(word.split()) //['I am a Web Developer']
console.log(word.split(" ")) // (5) ['I', 'am', 'a', 'Web', 'Developer']

console.log(word.split("am a")) //(2) ['I ', ' Web Developer']



