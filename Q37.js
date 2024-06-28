"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message = "I love TypeScript") {
    console.log(`Making a ${size} shirt with message: ${message}`);
}
make_shirt("large"); // Making a large shirt with message: I love TypeScript
make_shirt("medium"); // Making a medium shirt with message: I love TypeScript
make_shirt("small", "I'm a fan of JavaScript!"); // Making a small shirt with message: I'm a fan of JavaScript!
make_shirt("extra-large", "I'm a fan of Python!"); // Making an extra-large shirt with message: I'm a fan of Python!
