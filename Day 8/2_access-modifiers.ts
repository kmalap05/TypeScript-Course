class Human {
  public first: string;
  private last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.first} ${this.last} \nAge: ${this.age}`;
  }
}

class Person extends Human {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
  }
}

const person = new Human("John", "Doe", 20);
console.log(person.getDetails());
