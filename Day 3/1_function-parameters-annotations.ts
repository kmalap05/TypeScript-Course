// Regular Function
function addOne(num: number) {
  return num + 1;
}

const sumResult = addOne(4);
console.log(sumResult);

// Arrow Function
const double = (x: number, y: number) => x * y;
const doubleResult = double(2, 4);
console.log(doubleResult);

// Warning
// TypeScript gives will give you warning if you provide more or less arguments than you specify in your parameters area.
// double(2, 10, 20);
