/* 
! Primitive Data Types in JavaScript: (7)
    1. null
    2. number
    3. boolean
    4. BigInt
    5. string
    6. symbol
    7. undefined
* We can check data type using typeof like: 
    - console.log(typeof varName);
- Variables in JavaScript are undefined by default until assigned a value.
  However, null must be explicitly assigned—it represents intentional absence
  of a value.
*/

// Declaration of all 7 types of Primitive Data Types:
let a = null; // Explicitly assigned null
let b = 89; // Number
let c = true; // Boolean
let d = BigInt("963"); // BigInt
let e = "John"; // String
let f = Symbol("This is a Symbol"); // Symbol
let g = undefined; // Undefined (default if no value is assigned)

// Accessing Values:
console.log(a, "\n", b, "\n", c, "\n", d, "\n", e, "\n", f, "\n", g);

// Checking Data Type:
console.log("Type of", d, "is:", typeof d);

/*
! Non-Primitive Data Types: Objects
* Syntax of Object in JS: 
    const objName = {
        key1: value1,
        key2: value2
    }
*/
const isAdult = {
  John: true,
  Mark: false,
  Henry: true,
};
// Accessing values
console.log("Henry is a Adult:", isAdult.Henry);
