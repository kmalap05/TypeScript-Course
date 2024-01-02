# Tuples 📦

- A Tuple in TypeScript is a type that represents an array with a fixed number of elements, where each element can have a different type.
- The order of the types in the tuple definition corresponds to the order of the values in the actual array.
- Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.

## Example:

```typescript
// Define a tuple type
type Coordinates = [number, number];

// Declare a variable of tuple type
const point: Coordinates = [10, 20];

// Access elements by index
const x: number = point[0]; // 10
const y: number = point[1]; // 20
```

Tuples are useful when you want to maintain a specific order and data type for each element in an array. 🧳

# Enums 🌐

- Enums in TypeScript provide a way to define a set of named constants.
- They allow you to define a collection of related values that can be used interchangeably in your code.

## Example:

```typescript
// Define a simple weather conditions enum
enum Weather {
  Sunny,
  Cloudy,
  Rainy,
  Snowy,
}

// Use the enum in your code
let todayWeather: Weather = Weather.Sunny;

// Enums can also have assigned values
enum WeatherWithValues {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

let todayWeatherString: WeatherWithValues = WeatherWithValues.Sunny;
```

Enums are particularly helpful when you want to define a set of constant values that represent different states or options in your application. They improve code readability and maintainability. 🚀
