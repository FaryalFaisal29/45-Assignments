// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function make_shirt(size: string, message: string) {
    // Print a sentence summarizing the size and message 
    console.log(`This is a ${size} size shirt with the message "${message}".`);
}

make_shirt("medium", "Hello, World!"); // This is a medium shirt with the message "Hello, World!".
