
// JavaScript If/Else and Switch/Case Assignment


// Q1: Check if number is positive or negative
console.log("Q1:");
let number = -5;
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Q2: Check if user is eligible to vote
console.log("\nQ2:");
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}

// Q3: Determine day of week using switch
console.log("\nQ3:");
let dayNumber = 5;
switch (dayNumber) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
  default: console.log("Invalid day number."); break;
}

// Q4: Check if string is longer than 10 characters
console.log("\nQ4:");
let inputString = "Hello, World!";
if (inputString.length > 10) {
  console.log("The string is longer than 10 characters.");
} else {
  console.log("The string is 10 characters or shorter.");
}

// Q5: Determine student grade based on score
console.log("\nQ5:");
let score = 78;
let grade;
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";
console.log(`Your grade is: ${grade}`);

// Q6: Days in month using switch
console.log("\nQ6:");
function getDaysInMonth(monthNumber) {
  switch (monthNumber) {
    case 2: return 28;
    case 4:
    case 6:
    case 9:
    case 11: return 30;
    default: return 31;
  }
}
console.log(getDaysInMonth(7)); // Output: 31

// Q7: Check leap year using if/else
console.log("\nQ7:");
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// Q8: Check if variable is array
console.log("\nQ8:");
let data = [1,2,3];
if (Array.isArray(data)) {
  console.log("The variable is an array.");
} else {
  console.log("The variable is not an array.");
}

// Q9: Calculate discount based on purchase amount using switch
console.log("\nQ9:");
function calculateDiscount(purchaseAmount) {
  switch (true) {
    case (purchaseAmount < 100): return purchaseAmount * 0.05;
    default: return purchaseAmount * 0.1;
  }
}
console.log(calculateDiscount(120)); // Output: 12

// Q10: Determine type of variable
console.log("\nQ10:");
function getType(variable) {
  if (typeof variable === 'string') return "string";
  else if (typeof variable === 'number') return "number";
  else if (typeof variable === 'boolean') return "boolean";
  else if (typeof variable === 'object') {
    if (variable === null) return "null";
    else return "object";
  }
  else if (typeof variable === 'undefined') return "undefined";
  else return "unknown";
}
console.log(getType("Hello")); // Output: "string"
