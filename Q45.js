"use strict";
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...features) {
    const car = { manufacturer, model };
    for (const [key, value] of features) {
        car[key] = value;
    }
    return car;
}
const myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["optionalFeature", "sunroof"]);
console.log(myCar);
