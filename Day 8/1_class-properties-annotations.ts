class Person {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setAge(age: number) {
    this.age = age;
  }
}

const person = new Person("alice", 12);
console.log(person.name, person.age);
person.setAge(13);
console.log(person.name, person.age);
