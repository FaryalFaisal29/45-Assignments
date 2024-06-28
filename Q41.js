"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Harry Potter", "Voldemort", "Albus Dumbledore", "Ron Weasley"];
function show_Magicians(magicianList) {
    for (let i = 0; i < magicianList.length; i++) {
        console.log(magicianList[i]);
    }
}
show_Magicians(magicians);
