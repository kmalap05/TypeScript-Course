function greet(person: string = "Anonymous") {
  return `Hello ${person}`;
}

const greetMsg = greet("Kedar");
console.log(greetMsg);
