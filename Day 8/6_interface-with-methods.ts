// Interface with Methods
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  getIncome(x: number): void;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
  person.sayHello();
  person.getIncome(10000);
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  sayHello() {
    console.log("Hi, there!");
  },
  getIncome(x) {
    console.log(`Income: ${x}`);
  },
};

const justin: Person = {
  firstName: "Justin",
  lastName: "Bieber",
  sayHello() {
    console.log("What's good!");
  },
  getIncome(x) {
    console.log(`Income: ${x}`);
  },
};

greet(john);
greet(justin);
