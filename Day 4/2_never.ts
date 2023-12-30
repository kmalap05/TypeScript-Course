// First Case - A function that always throws an error.
function throwError(msg: string): never {
  throw new Error(msg);
}

// Second Case - A function that has an infinite loop.
function infiniteLoop(): never {
  while (true) {}
}

// Third Case - A variable that can never have a value.
let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns();
