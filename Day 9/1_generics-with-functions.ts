// Regular Fucntions
const printNumber = (x: number, y: number): [number, number] => {
  return [x, y];
};

const printString = (x: string, y: string): [string, string] => {
  return [x, y];
};

const printBoolean = (x: boolean, y: boolean): [boolean, boolean] => {
  return [x, y];
};

console.log(printNumber(10, 11));
console.log(printString("John", "Dev"));
console.log(printBoolean(true, false));

// Using Generics
const printValue = <Type>(x: Type, y: Type): [Type, Type] => {
  return [x, y];
};

console.log(printValue<number>(2, 3));
console.log(printValue<string>("Alex", "Bob"));
console.log(printValue<boolean>(false, true));
