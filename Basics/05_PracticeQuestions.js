// Q.1. Create a variable of type string & try to add a number to it.
console.log("\nQuetion 1:");
let str1 = "Hello";
console.log(str1);
str1 = str1 + 5;
console.log(str1);

// Q.2. Use typeof operator to find data type of variable in Q.1.
console.log("\nQuetion 2:");
console.log(typeof str1); // Output: string

// Q.3. Create a const object in javascript. Can you change it to hold a number later?
console.log("\nQuetion 3:");
const obj1 = {
  key1: true,
  key2: false,
  key3: true,
};
console.log(typeof obj1);
// obj1 = 5; // not possible as cannot update const variable
console.log("We cannot reassign value to a const variable as its immutable");

// Q.4. Try to add a new key to const object in Q.3. Is it Possible?
console.log("\nQuetion 4:");
obj1.key4 = "hello";
console.log("New key Inserted with value:", obj1.key4);

// Q.5. Write a JS program to create a word meaning dictionary of 5 words.
console.log("\nQuetion 5:");
const dictionaryObject = {
  Ephemeral: "Lasting for a very short time",
  Ineffable: "Too great or extreme to be expressed in words",
  Resilience: "The ability to recover quickly from difficulties or setbacks",
  Euphoria: "A feeling or state of intense happiness and excitement",
  Meticulous: "Showing great attention to detail; very careful and precise",
};
console.log("Meaning of Resilience is:", dictionaryObject.Resilience);
