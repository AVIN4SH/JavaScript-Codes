/*
! Conditional Statements:
    - only execute when the condition specified is true
    - only & only one block executes at a time

*   if statements:
    Syntax:
        if (condition){
            code;
        }

*   if else statements:
    Syntax:
        if (condition){
            code;
        } else {
            code; 
        }

*   if else if statements:
    Syntax:
        if (condition){
            code;
        } else if (condition) {
            code; 
        } else {
            code; 
        }

*   Ternary Operator:
    Syntax:
        condition ? trueCode : falseCode;

*   We can also have Nested if else statements.


*/

// Run in Browser Console to use Prompt function
// let age = prompt("Enter Your Age: ");
// age = Number.parseInt(age);
// console.log("age =", age, "and type of age is:", typeof age);
// if (age >= 18) {
//   console.log("You are an adult");
// } else if (age < 18 && age > 0) {
//   console.log("You are a minor");
// } else {
//   console.log("Your age is invalid");
// }

// Ternary Operator Use:
let a = 5,
  b = 3;
console.log(a > b ? "a is greater than b" : "b is greater than a");
