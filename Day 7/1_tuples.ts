const myTuple: [string, number] = ["hello", 12];
// const myTuple: [string, number] = ["hello", 12, 13]; // Error
console.log(myTuple[0]);
console.log(myTuple[1]);

// Destructuring tuple
const newTuple: [string, number] = ["newTuple", 11];
const [first, second] = newTuple;
console.log(first, second);
