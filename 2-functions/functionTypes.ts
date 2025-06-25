// Function Types in TypeScript

// 1. Function declaration with parameter and return types
function greet(name: string): string {
  return `Hello, ${name}`;
}

// 2. Anonymous function expression with type inference
const double = function (x: number): number {
  return x * 2;
};

// 3. Arrow function with inline type annotation
const add = (a: number, b: number): number => a + b;

// 4. Function type alias (declaring the shape of a function)
type MathOp = (x: number, y: number) => number;

const multiply: MathOp = (x, y) => x * y;

// 5. Void return type
function logMessage(message: string): void {
  console.log(message);
  // No return value
}

// 6. Function that never returns (throws or infinite loop)
function fail(): never {
  throw new Error("This function never returns");
}