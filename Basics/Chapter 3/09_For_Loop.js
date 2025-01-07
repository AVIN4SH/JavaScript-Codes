/*
! Loops in JavaScript:
    - used to perform tasks requiring repetitions
*   Types of Loops in JS:
    - for loop: loops a block of code number of times
    - for in loop: loops through keys of an object
    - for of loop: loops through values of an object (object should be iterable [i.e; array or string])
    - while loop: loops a block based on specific consition
    - do-while loop: while loop variant which runs at least once

*   For Loop:
    - most commonly used loop
    - Syntax:
        for (statement 1; statement 2; statement 3){
            code to be executed
        }
    - statement 1: is the initialization of loop variable
    - statement 2: is where condition is checked
    - statement 3: is where loop variable is modified (increment/decrement)
    - statement 1 only executes at begining of the loop & that too only one time
    - after each iteration, condition is checked, loop body is run and then modification of variable is done
    - i.e; after modification, we repeat above step until condition becomes false
    - loop body executes only if condition in statement 2 is true
*/
// ! For Loop:
// Demonstration of For Loop:
console.log("\n⭐ Program to Demonstrate for loop by printing Table of 2:");
for (let i = 1; i <= 10; i++) {
  console.log("2 x", i, "=", 2 * i);
}

// Program to add first N natural Numbers
console.log(
  "\n⭐ Program to Demonstrate for loop by adding first N natural Numbers:"
);
let n = 10,
  sum = 0;
console.log("Here, lets take n =", n);
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("Sum of First", n, "Natural Numbers is:", sum, "\n");

// ! for-in loop:
// Demonstration of for-in Loop:
console.log(
  "\n🚀 Program to Demonstrate for-in loop: (used to iterate through keys in object)"
);
let obj = {
  john: 90,
  shubh: 75,
  kevin: 60,
  sam: 93,
};
for (let x in obj) {
  // x here refers to key inside object
  // to access value, we need to do: objectName[key]
  console.log("Marks of", x, "are:", obj[x]);
}

// ! for-of loop:
// Demonstration of for-of Loop:
// this requires object to be iterable in case we want to use this on object
// (i.e; its should be array or string)
console.log(
  "\n🚀 Program to Demonstrate for-of loop: (used to iterate through values in Arrays/Strings)"
);
let str = "JavaScript";
for (let chars of str) {
  // x here refers to value inside string or array
  console.log("Values: ", chars);
}
