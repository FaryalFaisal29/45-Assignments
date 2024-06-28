"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favoriteFruits = ["strawberry", "kiwi", "pineapple", "mango", "grapes"];
if (favoriteFruits.includes("kiwi")) {
    console.log("I love to eat kiwi!");
}
if (favoriteFruits.includes("melon")) {
    console.log("I dont like melon so much!");
}
if (favoriteFruits.includes("grapes")) {
    console.log("Grapes are so flavourful!");
}
if (favoriteFruits.includes("strawberry")) {
    console.log("Strawberries are rich in vit A");
}
let favorite_fruits = ["banana", "apple", "orange"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You don't like mangoes!");
}
if (favorite_fruits.includes("grape")) {
    console.log("You don't like grapes!");
}
