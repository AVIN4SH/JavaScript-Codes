/*
! Variables in JavaScript:
    - They are used to store data
    - data here can be used & modified during execution
    - in JS we can even change datatype of value stored in a variable

*   Rules for variable names in JS:
    - variable name can only:
      • Begin with $, _ or letters
      • Contain: $, _, letters & numbers
    - JS reserved keywords cannot be used as variable names

*   Ways to Declare Variables:
    - var: Old way & Global Scoped (may cause hoisting)
    - let: Block scoped & preferred for mutable variables
    - const: Block scoped & used for constants (immutable variables)

*   Modifications Allowed:
    - var: can be redeclared & also be updated
    - let: cannot be redeclared but can be updated
    - const: neither be redeclared nor be updated
*/
//* Example of variable declarations:

var name = "John"; // Global Scope
let age = 21; // Block Scope
const gender = "male"; // Block Scope & Immutable

//* Important: The value stored in a const variable cannot be reassigned, but the contents of objects or arrays declared with const can still be modified.
