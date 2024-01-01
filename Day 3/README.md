# Function Parameters Annotations 🎯

- Function parameter annotations in TypeScript are utilized to specify the expected types of the parameters that a function takes.
- This enhances code clarity and helps catch potential type-related errors during development.

## Example:

```typescript
function greet(name: string, age: number): void {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
```

# Default Params Value 🏠

- Default params value allows you to set a default value for a parameter in case an explicit value is not provided during the function call.
- This provides flexibility and avoids errors when certain parameters are not passed.

## Example:

```typescript
function welcome(user: string, greeting: string = "Hello"): void {
  console.log(`${greeting}, ${user}!`);
}

// Calling the function without providing 'greeting' uses the default value.
welcome("Alice"); // Output: Hello, Alice!

// Providing a custom 'greeting' value.
welcome("Bob", "Hi"); // Output: Hi, Bob!
```

# Function Return Annotations 🔄

- Function return annotations specify the data type for the function's return value.
- This is beneficial for documenting the expected output types and helps in maintaining code consistency.

## Example:

```typescript
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Calling the function and expecting a number as the result.
const sum: number = addNumbers(3, 5);
console.log(`The sum is: ${sum}`);
```

These TypeScript features contribute to the overall robustness and maintainability of your code by providing explicit type information for function parameters and return values. 🛠️
