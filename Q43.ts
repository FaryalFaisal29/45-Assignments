// 43. Unchanged Magicians: Start with your work from Exercise 42. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Harry Potter","Voldemort","Albus Dumbledore","Ron Weasley"];
 function make_great(arr: string[]): string[] {
    return arr.map((item) => item + " the Great");
 }

 function show_magicians(arr: string[]): void {
    arr.forEach((item) => console.log(item));
 }

 let greatMagicians: string[] = make_great(magicians);
 show_magicians(magicians);
 show_magicians(greatMagicians);

console.log(magicians); // Unchanged original array.

console.log(greatMagicians); // New array with "the Great" added to each magician's name.
