type User = {
  name: string;
  age: number;
  location: string;
};

const printUserData = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};

const res = printUserData({ name: "John", age: 20, location: "China" });
console.log(res);
