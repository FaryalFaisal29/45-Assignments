"use strict";
// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let GuestArray = ["Shahzaib", "Abisha", "Eshaal", "Manha"];
let CanNotAttend = "Eshaal";
console.log(CanNotAttend + " " + "can not make it for dinner");
let NewGuest = "Basim";
GuestArray[GuestArray.indexOf(CanNotAttend)] = NewGuest;
console.log(GuestArray);
GuestArray.map((item) => (console.log(`Dear ${item},I have found a bigger Dinner Table.`)));
let guestBegin = "Anam";
GuestArray.unshift(guestBegin);
console.log(GuestArray);
let middleGuest = "Ana";
let middleIndex = GuestArray.length / 2;
GuestArray.splice(middleIndex, 0, middleGuest);
console.log(GuestArray);
GuestArray.push("Faryal");
console.log(GuestArray);
GuestArray.map((item) => (console.log(`Dear ${item}, I would like to invite you for a Dinner at my place.`)));
