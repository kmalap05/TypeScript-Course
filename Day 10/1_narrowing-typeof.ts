function exampleFunction(value: string | number): void {
  if (typeof value === "string") console.log(value.toUpperCase());
  else console.log(value.toFixed(2));
}

exampleFunction("Hello");
exampleFunction(20);
