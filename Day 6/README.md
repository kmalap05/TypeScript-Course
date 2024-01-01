# Intersection Types 🤝

- An intersection type is a powerful mechanism in TypeScript that enables the combination of multiple types into a single type.
- This resulting type includes all the properties and methods of each constituent type.
- Intersection types are denoted by the `&` symbol.

## Example:

```typescript
type Car = {
  brand: string;
  model: string;
  start(): void;
};

type Electric = {
  batteryLife: number;
  charge(): void;
};

type ElectricCar = Car & Electric;

const myElectricCar: ElectricCar = {
  brand: "Tesla",
  model: "Model S",
  batteryLife: 90,
  start() {
    // Implementation
  },
  charge() {
    // Implementation
  },
};
```

# Unions 🔄

- Unions are a powerful feature in TypeScript that allows you to declare a type that can have one of several possible types.
- Unions are useful when a variable or parameter can accept multiple potential values.
- The syntax for defining a union type in TypeScript uses the pipe symbol (`|`).

## Examples:

- Variable that can be either a number or string:

```typescript
let value: number | string;
```

- Function parameter that accepts either a string or an array of strings:

```typescript
function printData(data: string | string[]) {
  // Implementation
}
```

- Interface with a property that can be either a string or a number:

```typescript
interface Configuration {
  setting: string | number;
}
```

# Literal Types 📏

- Literal types in TypeScript allow you to specify that a value can only be one specific literal value.
- This ensures that a variable with a literal type can have only one particular value and no other.

## Example:

```typescript
type Status = "active" | "inactive";

let userStatus: Status;
userStatus = "active"; // Valid
userStatus = "inactive"; // Valid
// userStatus = "pending"; // Error: 'pending' is not assignable to type 'Status'.
```

Literal types provide a way to be more specific about the values that a variable or property can hold, enhancing code clarity and type safety. 🚀
