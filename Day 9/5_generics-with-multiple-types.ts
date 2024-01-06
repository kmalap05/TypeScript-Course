const reversePair = <T, U>(value1: T, value2: U): [U, T] => {
  return [value2, value1];
};

const reversedPair = reversePair<string, number>("Hello", 10);
console.log(reversedPair);
