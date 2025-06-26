// Interfaces in TypeScript

// Basic interface declaration
interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // optional property
}

// Using an interface to type an object
const alice: User = {
  id: 1,
  name: 'Alice',
};

// Extending interfaces (inheritance)
interface Admin extends User {
  permissions: string[];
}

const bob: Admin = {
  id: 2,
  name: 'Bob',
  permissions: ['manage-users', 'delete-posts'],
};

// Interface for function types
interface Greeter {
  (name: string): string;
}

const greet1: Greeter = (name) => `Hello, ${name}`;