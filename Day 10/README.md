# Type Narrowing 🔍

Type narrowing is a crucial concept in TypeScript that involves refining a variable's type within a conditional block, allowing you to write more precise and type-safe code.

## Type Guards 🛡️

Type guards are mechanisms that help TypeScript understand and narrow down types more precisely.

### `typeof` Operator 🎯

The `typeof` operator is a common type guard that allows you to check the type of a variable.

```typescript
function printValue(value: string | number): void {
    if (typeof value === "string") {
        // value is narrowed down to string type
        console.log(value.toUpperCase());
    } else {
        // value is narrowed down to number type
        console.log(value.toFixed(2));
    }
}
```

### `instanceof` Operator 🧩

The `instanceof` operator is another type guard in TypeScript that checks whether an object is an instance of a particular class or constructor function.

```typescript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof!");
    }
}

function playWithPet(pet: Animal): void {
    if (pet instanceof Dog) {
        // pet is narrowed down to Dog type
        pet.bark();
    } else {
        // pet is of type Animal
        console.log(`Playing with ${pet.name}`);
    }
}
```

### `Intersection` Types 🤝

Intersection types in TypeScript allow you to combine multiple types into a single type, resulting in an object with all the properties of each individual type.

```typescript
interface Car {
    brand: string;
    model: string;
}

interface Electric {
    batteryLife: number;
}

type ElectricCar = Car & Electric;

const myElectricCar: ElectricCar = {
    brand: "Tesla",
    model: "Model S",
    batteryLife: 90,
};
```

Intersection types enhance code flexibility by combining the features of multiple types. 

Understanding type narrowing and guards is crucial for writing robust and type-safe TypeScript code. 🚀