// Regular Function
function double1(x: number): number {
  return x * x;
}

const res1 = double1(2);
console.log(res1);

// Arrow Function
const double2 = (x: number): number => x * x;

const res2 = double2(3);
console.log(res2);
