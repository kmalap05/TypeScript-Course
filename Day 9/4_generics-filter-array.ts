const filterArray = <T>(array: T[], condition: (item: T) => boolean) => {
  return array.filter((item) => condition(item));
};

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbersArray, (num) => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);

const stringsArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray(stringsArray, (str) => str.length < 6);
console.log(`Short words: ${shortWords}`);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray(fruitArray, (fruit) => fruit.color === "Red");
console.log(
  `Red fruits: ${redFruits
    .map((fruit) => `${fruit.name} : ${fruit.color}`)
    .toString()}`
);
