// Literal Types in TypeScript

// A literal type is a type that represents a specific exact value

// Example with string literal
let direction: 'left' | 'right' | 'center';
direction = 'left';   // ✅ OK
//direction = 'up';     // ❌ Error: not assignable

// Example with number literal
let answer: 42;
answer = 42;     // ✅ OK
//answer = 43;     // ❌ Error: only 42 is allowed

// Literal types are usually used with union types to define valid options
type YesNo = 'yes' | 'no';
const userConfirmed: YesNo = 'yes';

// With boolean
let flag: true;
flag = true;     // ✅ OK
//flag = false;    // ❌ Error

// Literal types are often used with function parameters
function move(dir: 'left' | 'right' | 'center') {
  console.log(`Moving ${dir}`);
}

move('right');   // ✅ OK
//move('down');    // ❌ Error