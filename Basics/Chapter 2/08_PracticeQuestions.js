// Q.1. Use Logical Operator to find whether the age of a person lies between 10 and 20?
console.log("\nQuestion 1:");
let age = 19;
if (age > 10 && age < 20) {
  console.log(age, "lies between 10 and 20.");
} else {
  console.log(age, "does not lies between 10 and 20.");
}

// Q.2. Demonstrate the use of switch case statements in JavaScript.
console.log("\nQuestion 2:");
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

// Q.3. Write a JavaScript program to find whether a number is Divisible by 2 & 3.
console.log("\nQuestion 3:");
let number1 = 18;
if (number1 % 2 == 0 && number1 % 3 == 0) {
  console.log(number1, "is Divisible by both 2 & 3.");
} else {
  console.log(number1, "is neither Divisible by 2 nor Divisible by 3.");
}

// Q.4. Write a JavaScript program to find whether a number is divisble by either 2 or 3 & specify by which.
console.log("\nQuestion 4:");
let number2 = 15;
if (number2 % 2 == 0 || number2 % 3 == 0) {
  if (number2 % 2 == 0 && number2 % 3 == 0) {
    console.log(number2, "is Divisible by both 2 & 3.");
  } else if (number2 % 2 == 0 && number2 % 3 != 0) {
    console.log(number2, "is Divisible by 2 but not by 3.");
  } else {
    console.log(number2, "is Divisible by 3 but not by 2.");
  }
} else {
  console.log(number2, "is neither Divisible by 2 nor Divisible by 3.");
}

// Q.5. Print "You Can Drive" or "You Cannot Drive" based on age being greater than 18 using ternary operator.
console.log("\nQuestion 5:");
let newAge = 21;
console.log(
  newAge > 0
    ? newAge >= 18
      ? "You can Drive"
      : "You Cannot Drive"
    : "Invalid Age"
);
