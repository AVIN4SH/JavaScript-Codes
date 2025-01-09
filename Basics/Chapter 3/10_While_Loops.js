/*
!   While Loop:
    - executes a block of code while the condition remains true
    - if the condition never becomes false, it leads to an infinite loop and can crash the program
    - Syntax:
        while (condition) {
            code;
            loop variable modification;        
        }
*/
// Demonstration of While Loop:
console.log("\n🚀 Demonstration of while Loop:");
let n = 5,
  i = 1;
while (i <= n) {
  console.log(i);
  i++;
}

/*
!   do-while Loop:
    - a variant of the while loop
    - ensures the loop executes at least once
    - condition is checked after the first execution
    - Syntax:
        do {
            code;
        } while (condition);
*/
// Demonstration of do-while Loop:
console.log("\n🚀 Demonstration of do-while Loop:");
let x = 5,
  y = 1;
do {
  console.log(x, "x", y, "=", x * y);
  y++;
} while (y <= x);
// do-while Loop executes at least once
