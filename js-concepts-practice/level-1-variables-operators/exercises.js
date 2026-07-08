// 🟢 Level 1: Variables, Data Types & Operators
// Note: Do these exercises without DOM (use console.log)

console.log("--- Level 1 Exercises ---");

// 1. Swap two variables without a third variable
// E.g., let a = 5, b = 10; -> Swap them so a = 10, b = 5
function swapVariables() {
  let a = 5;
  let b = 10;
  console.log("Before swap: a =", a, ", b =", b);
  // TODO: Write your code here to swap a and b without a third variable
  
  console.log("After swap: a =", a, ", b =", b);
}
swapVariables();
console.log("------------------------");

// 2. Convert Celsius ↔ Fahrenheit
// Formula: C = (F - 32) * 5/9  |  F = (C * 9/5) + 32
function celsiusToFahrenheit(c) {
  // TODO: Write your code here
  return 0;
}
function fahrenheitToCelsius(f) {
  // TODO: Write your code here
  return 0;
}
console.log("------------------------");

// 3. Calculate simple and compound interest
// Formulas: SI = (P * R * T) / 100 | CI = P * (1 + R/100)^T - P
function calculateSimpleInterest(principal, rate, time) {
  // TODO: Write your code here
  return 0;
}
function calculateCompoundInterest(principal, rate, time) {
  // TODO: Write your code here
  return 0;
}
console.log("------------------------");

// 4. Convert total seconds into hours : minutes : seconds
function convertSeconds(totalSeconds) {
  // TODO: Write your code here
  // Return format example: "2 hours : 15 minutes : 30 seconds"
  return "";
}
console.log("------------------------");

// 5. Find the last digit of a number
function getLastDigit(num) {
  // TODO: Write your code here (Hint: modulo operator)
  return 0;
}
console.log("------------------------");

// 6. Check whether a number is even or odd
function isEvenOrOdd(num) {
  // TODO: Write your code here
  return "";
}
console.log("------------------------");

// 7. Calculate a shopping bill with discount rules
// E.g., if bill > 1000, 10% discount. If bill > 5000, 20% discount.
function calculateBill(amount) {
  // TODO: Write your code here
  return 0;
}
console.log("------------------------");

// 8. Calculate BMI from height (m) and weight (kg)
// Formula: BMI = weight / (height * height)
function calculateBMI(weight, height) {
  // TODO: Write your code here
  return 0;
}
console.log("------------------------");

// 💡 Mini challenge: Build a bill calculator
// Calculate final bill incorporating tax (e.g., 18% GST) and a custom discount rate.
function finalBillCalculator(amount, taxRate, discountRate) {
  // TODO: Write your code here
  return 0;
}
