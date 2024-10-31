function performOperation(operationType, value) {
  switch (operationType) {
    case 'add':
      return value + 10;
    case 'subtract':
      return value - 5;
    case 'multiply':
      return value * 3;
    case 'divide':
      return value / 2;
    case 'constant':
      return 42; // Return a constant value
    default:
      return 'Invalid operation type';
  }
}

// Examples of how to call the function
console.log(performOperation('add', 10));       // Output: 20
console.log(performOperation('subtract', 10));  // Output: 5
console.log(performOperation('multiply', 10));  // Output: 30
console.log(performOperation('divide', 10));    // Output: 5
console.log(performOperation('constant'));      // Output: 42
console.log(performOperation('unknown', 10));   // Output: Invalid operation type
