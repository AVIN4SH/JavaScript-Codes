/*
! Operators in JavaScript:
*   Arithmetic Operators
        • +  : Addition
        • -  : Subtraction
        • *  : Multiplication
        • /  : Division
        • %  : Modulus Operator (Returns Remainder)
        • ** : Explonential Operator (Power)
        • ++ : Increment Operator (Increment by 1)
        • -- : Decrement Operator (Decrement by 1)
    - Note:
        • x++ does increment after execution of line & ++x does increment in same line
        • x-- does decrement after execution of line & --x does decrement in same line
*   Assignment Operators
        • =  : x = y
        • += : x = x + y
        • -= : x = x - y
        • *= : x = x * y
        • /= : x = x / y
        • %= : x = x % y
        • **= : x = x ** y
*   Comparision Operators (returns True or False)
        • ==  : check for equality (only value)
        • !=  : check for inequality (only value)
        • === : check for equality (both value & data type)
        • !== : check for inequality (both value & data type)
        • >   : check for greater than
        • <   : check for less than
        • >=  : check for greater than or equal to
        • <=  : check for less than or equal to
        • ?   : Ternary Operator
*   Logical Operators
        • && : Logical AND Operator (returns True Only if both Conditions are True else everywhere Falso)
        • || : Logical OR Operator (returns False Only if both Conditions are False else everywhere True)
        • !  : Logical NOT Operator (Reverses the Output i.e; True -> False & False -> True)

*/

// ! Demonstration:
// Arithmetic Operators:
let a = 10,
  b = 3;
console.log("a =", a, "& b =", b);
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Explonential Operator
console.log("a++ =", a++, "& ++a =", ++a); // Increment Operator
console.log("a-- =", a--, "& --a =", --a); // Decrement Operator

// Increment & Decrement Operators:
let num = 5;
console.log("num =", num); // output = 5 & value = 5
console.log("++num =", ++num); // output = 6 & value = 6
console.log("num++ =", num++); // output = 6 & value = 7
console.log("--num =", --num); // output = 6 & value = 6
console.log("num-- =", num--); // output = 6 & value = 5
console.log("num =", num); // output = 5 & value = 5
console.log("num-- =", num--); // output = 5 & value = 4
console.log("num++ =", num++); // output = 4 & value = 5
console.log("num =", num); // output = 5 & value = 5

// Assignment Operators:
let c = 5;
// now if we want to increment a by 10 then we can do:
c += 5; // same as: c = c + 20;
