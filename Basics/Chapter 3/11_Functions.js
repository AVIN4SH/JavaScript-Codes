/*
!   Functions in JS: (with 'function' Keyword)
    - its a block of code designed to perform a particular task
    - they can be paramaterized and non-parametrized also
    - if function is not invoked(Called), function code never executes
    - Syntax:
*       Non-Parametric Function:
?           Declaration:
                function myFunc(){
                    code;
                }
?           Calling:
                myFunc();
*       Parametric Function:
?           Declaration:
                function myFunc(param1, param2){
                    code;
                }
        - Here Parameters are local Variables
?           Calling:
                myFunc(param1, param2);
*/
console.log("\n⭐ Demonstration of Non-Parametric Function:");
function greet() {
  //! Function Declaration
  console.log("Hello, How are you?");
}
greet(); //! Function Calling

console.log("\n⭐ Demonstration of Parametric Function:");
function calculateAverage(a, b) {
  //! Function Declaration
  console.log("Average of", a, "and", b, "is:", (a + b) / 2);
}
calculateAverage(20, 30); //! Function Calling

/*
!   Arrow Functions in JS:
    - its also a function, but has different way of declaration
    - they can be paramaterized and non-parametrized also
    - this is modern way of declaring functions
    - Syntax:
*       Non-Parametric Arrow Function:
?           Declaration:
                const myFunc = () => {
                    code;
                }
?           Calling:
                myFunc();
*       Parametric Arrow Function:
?           Declaration:
                const myFunc = (param1, param2) => {
                    code;
                }
        - Here Parameters are local Variables
?           Calling:
                myFunc(param1, param2);
*/
console.log("\n⭐ Demonstration of Non-Parametric Arrow Function:");
const newGreet = () => {
  //! Function Declaration
  console.log("Hello, How are you?");
};
newGreet(); //! Function Calling

console.log("\n⭐ Demonstration of Parametric Arrow Function:");
const calculateAvg = (a, b) => {
  //! Function Declaration
  console.log("Average of", a, "and", b, "is:", (a + b) / 2);
};
calculateAvg(20, 30); //! Function Calling
