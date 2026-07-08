// 🟡 Level 6: Functions

console.log("--- Level 6 Exercises ---");

// 1. Write a function to check prime numbers
function checkPrime(num) {
  // TODO: Write your code here
  return false;
}
console.log("------------------------");

// 2. Create a reusable discount calculator
// E.g., returns a function that applies a specific percentage discount to any price
function makeDiscountCalculator(discountPercent) {
  // TODO: Implement closure that returns a function
  return function(price) {
    return price;
  };
}
console.log("------------------------");

// 3. Write a function accepting unlimited numbers using rest parameters and returns their sum
function sumAll(...numbers) {
  // TODO: Write your code here
  return 0;
}
console.log("------------------------");

// 4. Create your own map() behaviour (custom function mapping over array)
function customMap(arr, callback) {
  // TODO: Implement map logic manually without using arr.map()
  return [];
}
console.log("------------------------");

// 5. Create your own filter() behaviour (custom filter filtering array)
function customFilter(arr, callback) {
  // TODO: Implement filter logic manually without using arr.filter()
  return [];
}
console.log("------------------------");

// 6. Write a closure-based counter
// Returns an object with increment(), decrement(), and getValue() methods
function createCounter() {
  // TODO: Write your code here
  return {};
}
console.log("------------------------");

// 7. Create a function that runs only once (e.g. initialize app)
// Subsequent calls should do nothing or return the original value
function once(fn) {
  // TODO: Write your code here
  return function(...args) {
  };
}
console.log("------------------------");

// 8. Write a higher-order function
// Accepts a function and a number, running that function N times
function runNTimes(fn, n) {
  // TODO: Write your code here
}
console.log("------------------------");

// 💡 Mini challenge: Create reusable validation functions for email, password and username
const validator = {
  isValidEmail(email) {
    // TODO: Write email validation (regex / index checks)
    return false;
  },
  isValidPassword(password) {
    // TODO: Write password validation (min length, special chars)
    return false;
  },
  isValidUsername(username) {
    // TODO: Write username validation (length, allowed chars)
    return false;
  }
};
