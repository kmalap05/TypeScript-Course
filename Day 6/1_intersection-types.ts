type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const john: User = {
  first: "John",
  last: "Dev",
  age: 22,
  email: "john@gmail.com",
  password: "john@123",
};

console.log(john);
