# Void 🌌

- Void is a type in TypeScript that represents the absence of any value.
- It is commonly used as the return type for functions that do not produce a value.

## Example:

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

# Never 🚫

- The `never` keyword is employed to indicate that a function will not return anything, or that a variable can have no value.
- It is particularly useful for highlighting code paths that should never be reached or values that are impossible.

Cases when `never` will be used:

1. A function that always throws an error.
2. A function with an infinite loop.
3. A variable that can never have a value.

## Examples:

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // code that never exits
  }
}

let unreachable: never;
// Uncommenting the following line will result in a TypeScript error
// unreachable = "This is unreachable";
```

# Arrays 📊

- Arrays in TypeScript are objects that can store multiple values of the same data type.
- They are typed, allowing you to specify the type of values that an array can hold.

## 1. Using Square Bracket Notation:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
```

## 2. Using Generic Array Notation:

```typescript
let names: Array<string> = ["Alice", "Bob", "Charlie"];
```

# Multi-Dimensional Arrays 🌐

- A multi-dimensional array is an array that contains other arrays as its elements.
- Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays, but with nested square brackets.

## Example:

```typescript
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

These TypeScript features provide flexibility and type safety, ensuring that your code is more robust and less prone to runtime errors. 🚀
