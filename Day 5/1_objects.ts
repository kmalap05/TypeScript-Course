const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Dev",
  age: 23,
};

// Using objects as a function return value
function printFunc(): { firstName: string; age: number; location: string } {
  return {
    firstName: "John",
    age: 21,
    location: "USA",
  };
}

const res = printFunc();
console.log(res);
