"use strict";
//Q6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Muhammad Ali Jinnah");
console.log("Muhammad\tAli\tJinnah");
console.log("Muhammad\nAli\nJinnah");
let personName = "Kamran Khan Tessori";
let personName1 = personName = "Kamran\tKhan\tTessori";
console.log("Name with Whitespace:", personName);
let person1 = "Kamran Khan Tessori";
let person2 = "Kamran\nKhan\nTessori";
console.log("Stripped Name:", person2);
