//Q3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let firstname: string = "FARYAL FAISAL"

// console.log(`${firstname.toLocaleLowerCase()},\t"lower case"`);

// let firstName: string = "faryal faisal"

// console.log(`${firstName.toLocaleUpperCase()},\t"upper case"`);

 let firstname1: string = "faryal faisal"

// console.log(firstname1.charAt(0).toUpperCase() + firstname1.slice(1));


// console.log(`${firstname1.replace(/\b\w/g, (char) => char.toUpperCase())}`);

 let words:string[] = firstname1.split('');
 let titleCaseName: string = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
 console.log(`${titleCaseName}\t,"Title Case"`);


  
