//? JavaScript Code
// function greet(name) {
//   return "Hello, ", name;
// }

// console.log(greet("Chinmay"));
// console.log(greet(42));
// console.log(greet(true));

//? TypeScript Code
function greet(name: String): string {
  return `Hello ${name}`;
}

console.log(greet("Chinmay"));
console.log(greet(42));
// console.log(greet(true));
