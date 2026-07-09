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
  [a,b]=[b,a]
  console.log("After swap: a =", a, ", b =", b);
}
swapVariables();
console.log("------------------------");

// 2. Convert Celsius ↔ Fahrenheit
// Formula: C = (F - 32) * 5/9  |  F = (C * 9/5) + 32
function celsiusToFahrenheit(c) {
  // TODO: Write your code here
  let f=(c*(9/5))+32
  return f;
}
function fahrenheitToCelsius(f) {
  // TODO: Write your code here
  let c=(f-32)*95
  return c;
}
console.log("25°C to Fahrenheit is:", celsiusToFahrenheit(25)); // Outputs: 25°C to Fahrenheit is: 77
console.log("0°C to Fahrenheit is:", celsiusToFahrenheit(0));   // Outputs: 0°C to Fahrenheit is: 32
console.log("------------------------");

// 3. Calculate simple and compound interest
// Formulas: SI = (P * R * T) / 100 | CI = P * (1 + R/100)^T - P
function calculateSimpleInterest(principal, rate, time) {
  // TODO: Write your code here
    let si=(principal*rate*time)/100
  return si;
}
function calculateCompoundInterest(P, R, T) {
  let ci=P * (1 + R/100)^T - P
  return ci;
}
console.log("Simple intrest of principal 10000 at rate 2% for 3years is:",calculateSimpleInterest(10000,2,3))
console.log("Compound intrest of principal 10000 at rate 2% for 3years is:",calculateCompoundInterest(10000,2,3))
console.log("------------------------");

// 4. Convert total seconds into hours : minutes : seconds
function convertSeconds(totalSeconds) {
    let hour=Math.floor(totalSeconds/3600)
    let remainingSeconds=totalSeconds%3600
    let minutes=Math.floor(remainingSeconds/60);
    remainingSeconds=remainingSeconds%60;
    let seconds=remainingSeconds;
  return `${hour}:${minutes}:${seconds}`;
}
console.log("The Time is:",convertSeconds(8200))
console.log("------------------------");

// 5. Find the last digit of a number
function getLastDigit(num) {
  // TODO: Write your code here (Hint: modulo operator)
  let a=num%10
  return a;
}
console.log("the last digit of 56732 is:",getLastDigit(56732))
console.log("------------------------");

// 6. Check whether a number is even or odd
function isEvenOrOdd(num) {
  // TODO: Write your code here
  if(num%2===0){
    return "Even"
  }
  else{
    return"Odd"
  }

}
console.log("The number 56732 is:",isEvenOrOdd(56732))
console.log("------------------------");

// 7. Calculate a shopping bill with discount rules
// E.g., if bill > 1000, 10% discount. If bill > 5000, 20% discount.
function calculateBill(amount) {
  // TODO: Write your code here
  if(amount>1000){
    amount=amount-(0.1*amount)
  }
  else if(amount>5000){
    amount=amount-(0.2*amount)
  }
  return amount;
}
console.log("The discounted price is:",calculateBill)
console.log("------------------------");

// 8. Calculate BMI from height (m) and weight (kg)
// Formula: BMI = weight / (height * height)
function calculateBMI(weight, height) {
  // TODO: Write your code here
  let bmi=weight/(height*height)
  return bmi.toFixed(2);
}
console.log("BMI of a person 6'3\" tall who weighs 85kg is:",calculateBMI(85,1.85))
console.log("------------------------");

// 💡 Mini challenge: Build a bill calculator
// Calculate final bill incorporating tax (e.g., 18% GST) and a custom discount rate.
function finalBillCalculator(amount, taxRate, discountRate) {
  // TODO: Write your code here
  amount=amount+((taxRate/100)*amount)-((discountRate/100)*amount)
  return amount;
}
console.log("Final Bill for 10000 purchase with 18% GST and 10 % discount is:",finalBillCalculator(10000,18,10))
