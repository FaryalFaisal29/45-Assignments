"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Test for equality and inequality with string
const string1 = "Apple";
const string2 = "Guava";
console.log(string1 === string2);
console.log(string1 !== string2);
// Tests using the lower case function
const mixedCaseString = "Hello World";
console.log(mixedCaseString.toUpperCase() === "hello world");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a = 24;
let b = 10;
console.log(a === b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
// Tests using "and" and "or" operators
let c = 5;
let d = 8;
let logicalOperatorAnd = (c > d) && (d > c);
console.log(logicalOperatorAnd);
let logicalOperatorOr = (c > d) || (d > c);
console.log(logicalOperatorOr);
// Test whether an item is in a array
let cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
console.log(cityNames.includes("Karachi"));
const item = "Islamabad";
if (cityNames.includes(item)) {
    console.log(`${item}  "is in array."`);
}
else {
    console.log(`${item} "is not in array."`);
}
// Test whether an item is not in a array
let cityNames1 = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
console.log(cityNames.includes("Sialkot"));
const item1 = "Hyderabad";
if (cityNames.includes(item1)) {
    console.log(`${item1}  "is in array."`);
}
else {
    console.log(`${item1} "is not in array."`);
}
