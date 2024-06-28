"use strict";
//Q3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
// let firstname: string = "FARYAL FAISAL"
// console.log(`${firstname.toLocaleLowerCase()},\t"lower case"`);
// let firstName: string = "faryal faisal"
// console.log(`${firstName.toLocaleUpperCase()},\t"upper case"`);
let firstname1 = "faryal faisal";
// console.log(firstname1.charAt(0).toUpperCase() + firstname1.slice(1));
// console.log(`${firstname1.replace(/\b\w/g, (char) => char.toUpperCase())}`);
let words = firstname1.split('');
let titleCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
console.log(`${titleCaseName}\t,"Title Case"`);
