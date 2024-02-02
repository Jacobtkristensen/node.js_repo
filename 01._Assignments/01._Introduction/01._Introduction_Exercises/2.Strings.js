// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const sum = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(sum);
// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let sum2 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
sum2 = sum2.toFixed(2);
console.log(sum2);
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let sum3 = (one + two + three) / 3;
sum3 = sum3.toFixed(5);
console.log(sum3);



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
let char = letters[2];
let char2 = letters.substring(2, 3);
console.log(char);
console.log(char2);



// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

let factCapitalized = fact.replace("j", "J");
let factCapitalized2 = fact.replace(/j/,"J");
console.log(factCapitalized);
console.log(factCapitalized2)
// --------------------------------------