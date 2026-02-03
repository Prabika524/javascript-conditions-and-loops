console.log("Hello Loop");


// JavaScript Loop Questions & Answers


// Javascript Loops Assignment
// Question 1:
// Write a for loop that prints numbers from 1 to 5 in the console.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Question 2:
// Using a while loop, print even numbers from 2 to 10 (inclusive).
let num2 = 2;
while (num2 <= 10) {
    console.log(num2);
    num2 += 2;
}

// Question 3:
// Write a for loop to calculate the sum of numbers from 1 to 10.

let sum3 = 0;
for (let i = 1; i <= 10; i++) {
    sum3 += i;
}
console.log("Sum (1 to 10):", sum3);


// Question 4:
// Using a while loop, find the factorial of 5.

let num4 = 5;
let fact4 = 1;
while (num4 > 1) {
    fact4 *= num4;
    num4--;
}
console.log("Factorial of 5:", fact4);


// Question 5:
// Write a for loop that prints the square of numbers from 1 to 5.

for (let i = 1; i <= 5; i++) {
    console.log("Square of", i, ":", i * i);
}


// Question 6:
// Using a while loop, print the cube of numbers from 1 to 5.
let num6 = 1;
while (num6 <= 5) {
    console.log("Cube of", num6, ":", num6 ** 3);
    num6++;
}


// Question 7:
// Write a for loop to iterate through an array of names.

const names = ["Alice", "Bob", "Charlie", "David"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Question 8:
// Using a while loop, find the sum of elements in an array.
const nums8 = [10, 20, 30, 40, 50];
let sum8 = 0;
let i8 = 0;
while (i8 < nums8.length) {
    sum8 += nums8[i8];
    i8++;
}
console.log("Array Sum:", sum8);


// Question 9:
// Write a for loop that prints array elements in reverse order.

const fruits = ["apple", "banana", "orange", "kiwi"];
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

// Question 10:
// Using a while loop, find the largest number in an array.
const nums10 = [25, 10, 45, 30, 15];
let largest10 = nums10[0];
let i10 = 1;
while (i10 < nums10.length) {
    if (nums10[i10] > largest10) {
        largest10 = nums10[i10];
    }
    i10++;
}
console.log("Largest Number:", largest10);


// Question 11:
// Write a for loop to calculate the sum of even numbers from 1 to 20.
let sum11 = 0;
for (let i = 2; i <= 20; i += 2) {
    sum11 += i;
}
console.log("Sum of even numbers:", sum11);


// Question 12:
// Using a while loop, find the product of odd numbers from 1 to 15.
let num12 = 1;
let product12 = 1;
while (num12 <= 15) {
    product12 *= num12;
    num12 += 2;
}
console.log("Product of odd numbers:", product12);


// Question 13:
// Print the pattern:
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}


// Question 14:
// Using a while loop, print numbers from 10 to 1.
let num14 = 10;
while (num14 >= 1) {
    console.log(num14);
    num14--;
}


// Question 15:
// Write a for loop to calculate factorial of 6.
let fact15 = 1;
for (let i = 6; i >= 1; i--) {
    fact15 *= i;
}
console.log("Factorial of 6:", fact15);


// Question 16:
// Using a while loop, find sum of digits of 123.
let num16 = 123;
let sum16 = 0;
while (num16 > 0) {
    sum16 += num16 % 10;
    num16 = Math.floor(num16 / 10);
}
console.log("Sum of digits:", sum16);


// Question 17:
// Print the pattern:
// 55555
// 4444
// 333
// 22
// 1
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}


// Question 18:
// Using a while loop, print first 10 Fibonacci numbers.
let a = 0, b = 1, count = 1;
while (count <= 10) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    count++;
}


// Question 19:
// Write a for loop to print prime numbers between 1 and 20.
for (let num = 2; num <= 20; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}


// Question 20:
// Using a while loop, reverse the number 12345.
let num20 = 12345;
let rev20 = 0;
while (num20 > 0) {
    rev20 = rev20 * 10 + (num20 % 10);
    num20 = Math.floor(num20 / 10);
}
console.log("Reversed number:", rev20);