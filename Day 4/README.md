# Void

- Void is a type that represents **absence** of any value.
- It is often used as the return type for functions that do not return a value.

# Never

- The never keyword is used to indicate that the function will **not return anything**, or that a variable can have a value.
- The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible.
- It can help catch errors at compile-time instead of runtime.

Cases when never will be used:

1. A function that always throws an error.
2. A function that has infinite loop.
3. A variable that can never have a value.

# Arrays

- Arrays are type of object that can store multiple values of **same data** type.
- Arrays in TypeScript are typed, which means you can specify the type of values that a array can hold.

2 types of Arrays:

1. Using the square bracket notation [] to indicate an array of specific type.
2. Using the generic Array<_type_> notation to indicate an array of specific type.

# Multi-Dimensional Arrays

- A multi-dimensional array is an array that contains other arrays as its elements.
- Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays, but with **nested square** brackets.
