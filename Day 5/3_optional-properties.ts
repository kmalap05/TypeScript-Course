type Person = {
  name: string;
  readonly age: number;
  email?: string;
};

const printUser = (user: Person) => {
  user.name = "John";
  //   Error: Since age is read-only, you can't modify it.
  //   user.age = 30;
  return user;
};

const alice = printUser({
  name: "Alice",
  age: 20,
  email: "something@gmail.com",
});

const bob = printUser({ name: "Bob", age: 20 });

console.log(alice);
console.log(bob);
