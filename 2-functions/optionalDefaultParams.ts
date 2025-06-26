// Optional and Default Parameters in TypeScript

// Optional parameter: can be omitted when calling the function
function greet(name?: string): string {
  return name ? `Hello, ${name}` : 'Hello, guest';
}

greet();       // OK: "Hello, guest"
greet('Bob');  // OK: "Hello, Bob"

// Default parameter: provides a fallback value
function greetWithDefault(name: string = 'guest'): string {
  return `Hello, ${name}`;
}

greetWithDefault();       // "Hello, guest"
greetWithDefault('Alice'); // "Hello, Alice"

// Mixing required and optional/default parameters
function log(message: string, level: 'info' | 'warn' | 'error' = 'info') {
  console.log(`[${level}] ${message}`);
}

log('System rebooted');           // [info] System rebooted
log('Low memory', 'warn');        // [warn] Low memory