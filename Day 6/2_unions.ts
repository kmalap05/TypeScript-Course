let password: number | string = 20;
// Error: let password: number | string = true;

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

const user: UserInfo | AccountDetails = {
  email: "something@gmail.com",
  password: "123456",
};

console.log(user);

const items: (number | string)[] = [1, 2, "30"];
console.log(items);
