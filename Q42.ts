// 42. Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
let magicians: string[] = ["Harry Potter","Voldemort","Albus Dumbledore","Ron Weasley"];

function make_great(magicians: string[]): void {
    magicians.forEach((item, index) => (magicians[index] = item + " the Great"));
    console.log(magicians);
}


function show_magicians(magicians: string[]): void {
    magicians.forEach((item) => (console.log(item)));
}

make_great(magicians);
show_magicians(magicians);