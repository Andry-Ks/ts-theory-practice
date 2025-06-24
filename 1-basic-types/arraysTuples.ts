// Arrays and Tuples in TypeScript

// Array of strings
const fruits: string[] = ['apple', 'banana', 'cherry'];

// Array of numbers (alternative generic syntax)
const scores: Array<number> = [10, 20, 30];

// Array with mixed types (not recommended unless intentional)
const mixed: (number | string)[] = [1, 'two', 3];

// Tuple: fixed-length, ordered array with known types
const user: [string, number] = ['Alice', 25];

// Explanation:
// A tuple is like an array, but with a fixed number of elements,
// and each element can have a different, specific type.
// This makes tuples useful for representing structured data 
// like key-value pairs, coordinates, etc.

// Example: RGB color as a tuple of 3 numbers
const red: [number, number, number] = [255, 0, 0];

// Optional elements in tuples (introduced in TS 3.0)
const optionalTuple: [string, number?] = ['Bob'];

// Tuple with rest elements (introduced in TS 4.0+)
const stringPairAndRest: [string, string, ...number[]] = ['a', 'b', 1, 2, 3];

// Named tuple elements (for better readability in tooltips)
const position: [x: number, y: number] = [10, 20];