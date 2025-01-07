/*
!   Switch-Case:
    - can be used when we have multiple condition checks
    - more modular than numerous if-else statements
    - executes for which expression mathes the case
    - we mandatorily need to have a break statement in ease case
    - if no break is there, then all following cases also execute
    - we need to have a default case which is run if no case if executed
    - Syntax:
        switch (expression){
            case 1:
                code;
                break;
            case 2:
                code;
                break;
            case 3:
                code;
                break;
            default:
                code;
        }
*/
// Demonstration:
let dayNumber = 5;
switch (dayNumber) {
  case 1:
    console.log("Day", dayNumber, "is Sunday.");
    break;
  case 2:
    console.log("Day", dayNumber, "is Monday.");
    break;
  case 3:
    console.log("Day", dayNumber, "is Tuesday.");
    break;
  case 4:
    console.log("Day", dayNumber, "is Wednesday.");
    break;
  case 5:
    console.log("Day", dayNumber, "is Thursday.");
    break;
  case 6:
    console.log("Day", dayNumber, "is Friday.");
    break;
  case 7:
    console.log("Day", dayNumber, "is Saturday.");
    break;
  default:
    console.log("Invalid Day Number");
}
