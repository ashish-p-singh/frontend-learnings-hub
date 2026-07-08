// 🟡 Level 5: Arrays — Very Important 🔥

console.log("--- Level 5 Exercises ---");

// --- BASIC EXERCISES ---

// 1. Find maximum and minimum in an array
function findMinMax(arr) {
  // TODO: Write your code here (Return an object like { min: X, max: Y })
  return { min: 0, max: 0 };
}
console.log("------------------------");

// 2. Find the sum and average of an array
function findSumAndAverage(arr) {
  // TODO: Write your code here
  return { sum: 0, average: 0 };
}
console.log("------------------------");

// 3. Reverse an array without using .reverse()
function reverseArray(arr) {
  // TODO: Write your code here
  return [];
}
console.log("------------------------");

// 4. Remove duplicates from an array
function removeArrayDuplicates(arr) {
  // TODO: Write your code here
  return [];
}
console.log("------------------------");

// 5. Find the second-largest number
function findSecondLargest(arr) {
  // TODO: Write your code here
  return 0;
}
console.log("------------------------");

// 6. Count even and odd numbers in an array
function countEvenOdds(arr) {
  // TODO: Write your code here
  return { evens: 0, odds: 0 };
}
console.log("------------------------");

// 7. Merge two arrays
function mergeArrays(arr1, arr2) {
  // TODO: Write your code here
  return [];
}
console.log("------------------------");

// 8. Find missing number from array containing 1...n
function findMissingNumber(arr, n) {
  // TODO: Write your code here
  return 0;
}
console.log("------------------------");


// --- ARRAY METHODS PRACTICE ---

// 9. map() - Convert prices from ₹ to $ (Assume 1$ = ₹80)
const rupeePrices = [80, 160, 800, 2400, 8000];
function convertRupeeToDollar(prices) {
  // TODO: Use prices.map() to convert prices
  return [];
}
console.log("9. map() Rupee to Dollar (placeholder):", convertRupeeToDollar(rupeePrices));
console.log("------------------------");

// 10. filter() - Keep products under ₹1000
const items = [
  { name: "Pen", price: 20 },
  { name: "Backpack", price: 1500 },
  { name: "Watch", price: 900 },
  { name: "Notebook", price: 120 }
];
function filterUnder1000(productsList) {
  // TODO: Use productsList.filter()
  return [];
}
console.log("10. filter() items under 1000 (placeholder):", filterUnder1000(items));
console.log("------------------------");

// 11. reduce() - Calculate cart total
function calculateCartTotal(productsList) {
  // TODO: Use productsList.reduce() to sum up prices
  return 0;
}
console.log("------------------------");

// 12. find() - Find user by ID
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" }
];
function findUserById(usersList, id) {
  // TODO: Use usersList.find()
  return null;
}
console.log("------------------------");

// 13. some() - Check if any student failed (marks < 33)
const students = [
  { name: "Rohan", marks: 80 },
  { name: "Mohit", marks: 25 },
  { name: "Kunal", marks: 95 }
];
function didAnyStudentFail(studentsList) {
  // TODO: Use studentsList.some()
  return false;
}
console.log("------------------------");

// 14. every() - Check if all users are adults (age >= 18)
const accounts = [
  { name: "Rahul", age: 20 },
  { name: "Sneha", age: 22 },
  { name: "Ayush", age: 17 }
];
function areAllAdults(accountsList) {
  // TODO: Use accountsList.every()
  return false;
}
console.log("------------------------");

// 15. sort() - Sort products by price ascending
function sortProductsByPrice(productsList) {
  // TODO: Use productsList.sort()
  return [];
}
console.log("------------------------");


// --- REAL-WORLD ARRAY CHALLENGE ---

const products = [
  { name: "Laptop", price: 60000, category: "Electronics" },
  { name: "Phone", price: 20000, category: "Electronics" },
  { name: "Shoes", price: 3000, category: "Fashion" }
];

console.log("Real-World Challenge Tasks (fill these out):");

// Task 1: Get only electronics
function getElectronics(productsList) {
  // TODO: Write code
  return [];
}

// Task 2: Find products under ₹25,000
function getProductsUnder25k(productsList) {
  // TODO: Write code
  return [];
}

// Task 3: Calculate total value of all products combined
function getTotalCartValue(productsList) {
  // TODO: Write code
  return 0;
}

// Task 4: Sort products by price descending
function sortByPriceDescending(productsList) {
  // TODO: Write code
  return [];
}

// Task 5: Return only product names (e.g. ["Laptop", "Phone", "Shoes"])
function getProductNames(productsList) {
  // TODO: Write code
  return [];
}

// Task 6: Find the most expensive product
function getMostExpensiveProduct(productsList) {
  // TODO: Write code
  return null;
}
