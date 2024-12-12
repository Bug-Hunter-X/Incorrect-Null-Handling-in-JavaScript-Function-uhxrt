function foo(a, b) {
  // Handle null or undefined values using the nullish coalescing operator
  a ??= 0; 
  b ??= 0; 
  return a + b; 
}

console.log(foo(1, null)); // Output: 1
console.log(foo(null, 2)); // Output: 2
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2));    // Output: 3