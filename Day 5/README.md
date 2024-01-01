# Objects 🌐

- An object in TypeScript is a structured data type that represents a collection of properties, each with a key and an associated value.
- The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias.
- TypeScript employs structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.

## Syntax:

```typescript
type MyObject = {
  property1: type1;
  property2: type2;
  // ... more properties
};
```

# Type Aliases 📝

- A type alias is a way to create a new name for an existing type.
- It allows you to define a custom type that refers to another type and gives it a more meaningful or descriptive name.
- Type aliases are declared using the `type` keyword, followed by the name of the alias, an equal sign (`=`), and the type it refers to.

## Syntax:

```typescript
type MyString = string;
type MyNumber = number;
// ... more type aliases
```

# Optional Properties 🤔

- You can make a certain property optional in an object type by adding a question mark (`?`) after the property name.
- For example, let's say you have an object type for a person with `name`, `age`, and `email` properties, but you want to make the `email` property optional.
- You can do this by adding a question mark after the `email` property.

## Example:

```typescript
type Person = {
  name: string;
  age: number;
  email?: string; // Optional property
};
```

# Readonly 🔒

- The `readonly` keyword in TypeScript is used to make a particular property or variable immutable, meaning its value cannot be changed once it is assigned.

## Example:

```typescript
type Config = {
  readonly serverUrl: string;
  readonly apiKey: string;
};

const myConfig: Config = {
  serverUrl: "https://example.com",
  apiKey: "mySecretKey",
};

// Attempting to modify a readonly property will result in a TypeScript error.
// myConfig.serverUrl = "https://new-url.com"; // Error: Cannot assign to 'serverUrl' because it is a read-only property.
```

These features enhance the expressiveness and safety of TypeScript by allowing developers to define clear and concise types for their objects, including optional properties and readonly constraints. 🚀
