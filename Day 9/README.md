# Generics 🔄

- In TypeScript, generics empower you to create reusable components that can work with a variety of types. 
- This feature enables you to define functions, classes, and interfaces that operate seamlessly with different data types without duplicating code.

## Example - Generic Function:

```typescript
// Generic function to print an array of any type
function printArray<T>(arr: T[]): void {
    arr.forEach(item => console.log(item));
}

// Usage
const stringArray: string[] = ["apple", "banana", "cherry"];
const numberArray: number[] = [1, 2, 3];

printArray(stringArray); // Prints: apple, banana, cherry
printArray(numberArray); // Prints: 1, 2, 3
```

In this example, the `printArray` function uses a generic type `T` to operate on arrays of different data types.

## Example - Generic Class:

```typescript
// Generic class to store and retrieve a value of any type
class Box<T> {
    private value: T | null = null;

    setValue(newValue: T): void {
        this.value = newValue;
    }

    getValue(): T | null {
        return this.value;
    }
}

// Usage
const stringBox = new Box<string>();
stringBox.setValue("Hello, Generics!");
console.log(stringBox.getValue()); // Prints: Hello, Generics!

const numberBox = new Box<number>();
numberBox.setValue(42);
console.log(numberBox.getValue()); // Prints: 42
```

In this example, the `Box` class uses a generic type `T` to work with different value types.

Generics enhance the flexibility and reusability of your code, allowing you to create versatile components that seamlessly adapt to diverse data types. 🚀