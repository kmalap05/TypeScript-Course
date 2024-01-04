# Class Properties Annotations 📝

- You can annotate class properties with a type, allowing you to define the data type of the property and ensure consistency.

## Example:

```typescript
class Car {
  // Annotated class property
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}
```

# Access Modifiers 🔒

- In TypeScript, access modifiers control the visibility of class members (properties and methods), determining how they can be accessed within and outside the class.

## Types of Access Modifiers:

1. **Public:**

   - Members marked as public can be accessed from anywhere, both inside and outside the class.

2. **Private:**

   - Members marked as private can only be accessed from within the class they are defined in.

3. **Protected:**
   - Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

# Getters & Setters ⚙️

- Getters and Setters are used to access and modify class properties, allowing you to define a property with additional logic for getting and setting values.

## Example:

```typescript
class Circle {
  private _radius: number;

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (value >= 0) {
      this._radius = value;
    } else {
      console.error("Radius cannot be negative.");
    }
  }
}
```

# Interface 📏

- An interface in TypeScript is a way to define a contract for the shape of an object, specifying the properties and their types that an object must have. 
- Interfaces are versatile and can describe the structure of functions and classes.

## Example:

```typescript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}
```

# Declaration Merging 🔄

- Declaration merging in TypeScript refers to the ability to extend or augment an existing declaration, including interfaces. 
- This is useful when you want to add new properties or methods to an existing interface without modifying the original declaration.

## Example:

```typescript
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
};
```

This allows you to extend interfaces progressively without modifying the initial declarations. 🚀

# Useful Info

Here's a table summarizing the key differences between type aliases and interfaces in TypeScript:

| Feature                    | Type Alias                                      | Interface                                       |
|----------------------------|-------------------------------------------------|-------------------------------------------------|
| **Declaration**            | `type` keyword                                  | `interface` keyword                             |
| **Declaration Merging**    | No (Cannot be merged)                           | Yes (Supports declaration merging)              |
| **Extending/Implementing** | Cannot extend or implement                       | Can extend or implement                         |
| **Syntax for Extending**   | Union (`|`) of types                            | `extends` keyword                               |
| **Compatibility**          | More flexible with unions and intersections      | Preferred when defining object shapes           |
| **Declaration Style**      | More concise when dealing with complex types     | Classic object-oriented pattern                |
| **Access Modifiers**       | No support for access modifiers                 | Supports access modifiers (public, private, protected) |
| **Union and Intersection** | Often used for defining complex types            | Typically used for defining object shapes       |
| **Object Shapes**          | Can be used to describe various data structures | Commonly used to describe the shape of objects   |

This table provides a quick overview of some of the main differences between type aliases and interfaces in TypeScript. The choice between them often depends on the specific use case and coding style preferences. 🚀 
