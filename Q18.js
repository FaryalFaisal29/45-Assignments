"use strict";
// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
const OriginalArray = ["Eiffel Tower", "Taj Mahal", "Burj Khalifa", "Spain", "Grand Canyon"];
console.log(OriginalArray);
const sortedArray = [...OriginalArray];
sortedArray.sort();
console.log("Original Array:", OriginalArray);
console.log("Sorted Array:", sortedArray);
console.log("Original Array:", OriginalArray);
const reversesortedArray = [...OriginalArray];
reversesortedArray.sort((a, b) => b.localeCompare(a));
console.log("Original Array:", OriginalArray);
console.log("Reverse Sorted Array:", reversesortedArray);
console.log(OriginalArray);
const OriginalArray1 = ["Eiffel Tower", "Taj Mahal", "Burj Khalifa", "Spain", "Grand Canyon"];
OriginalArray.reverse();
console.log("Reversed Array:", OriginalArray1);
const OriginalArray2 = ["Eiffel Tower", "Taj Mahal", "Burj Khalifa", "Spain", "Grand Canyon"];
const reversesortedArray1 = [...OriginalArray2];
reversesortedArray.sort((a, b) => b.localeCompare(a));
console.log("Reverse Sorted Array:", reversesortedArray1);
reversesortedArray.reverse();
console.log("Orinigal Array Restored:", reversesortedArray);
OriginalArray.sort();
console.log("Sorted Array:", OriginalArray);
OriginalArray.sort((a, b) => b.localeCompare(a));
console.log("Reversed Sorted Array:", OriginalArray);
