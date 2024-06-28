// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


const person1 = {name:"Shahzaib", fname:"Faisal", age:14, email:"shahz23@gmail.com"};

const person2 = {name:"Abisha", fname:"Faisal", age:10, email:"abisha10@gmail.com"};

const book1 = {title:"The Adventure Of Huckleberry Finn", author:"Mark Twain", year: 1884};

const book2 = {title:"The Railway Children", authore: "Edith Nesbit", year: 1910};

const object1: {[key: string]: any} = {Person1: person1, Person2: person2};

const object2: {[key: string]: any} = {Book1: book1 , Book2: book2};

console.log("Object1:", object1);
console.log("Object2:", object2);




