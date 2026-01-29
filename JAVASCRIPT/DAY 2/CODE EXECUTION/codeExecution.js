// Prerequisite: How to apply debugger 
// two ways first way is in inspect open live server then go to sources then apply debugger at the line you want 
// second way is to write debugger in starting of the js file

// How Code is executed in javascript?
// So, the answer is js codes are executed in two phases first memory creation phase where all the variable declrations are give there respective names and memory location first but there value is given as undefined
// The 2nd phase is execution phase where the actual execution starts line by line
//so,we will apply debugger and know that how code runs practically


//debugger
console.log(myName) // undefiend
// console.log(mytitle) // error

var myName = "Abdullah"
let myTitle = "Siddqui"
const yearofbirth = 2001
let age = 24

// after applying debugger we came to know that first when we will apply debugger on first line then only html is loaded and the momory creation phase has been done becase in scope we can see that all variable of let and conast are gven vale - <after unavailable> and all the let variable is in global and its vale is undefined after that when we move the debugger to next line i.e line 3 then first line executes and in console undefined is written because myName is not given a value till here now again we wmove the debugger to next line and we will see that in Global of scope the value of myName is change from undefined to "Abdullah" and this process goes on till all tha lines are given 


// Question -> Why does console.log(myName) gives undefined and  console.log(mytitle) gives error
// var is used in earlier phases so myName gives undefined but instead of myName when will try to print  myTitle or year..th or age before their declaration then it gives error insted of undefined because if any value is not defined yet then how can it be accessed

// Temporal dead zone - period during which variable decalred with const and let are in scope(means they are giiven undefined value) but cannot be accessed until the variale is not decalred and initialized