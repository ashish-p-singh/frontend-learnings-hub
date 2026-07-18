// 🟢 Level 3: Loops 🔁

console.log("--- Level 3 Exercises ---");

// 1. Print numbers from 1–100
function print1To100() {
  // TODO: Write a loop to print 1 to 100
  for (let index = 1; index <= 100; index++) {
    console.log(index)
  }
}
print1To100
console.log("------------------------");

// 2. Print only multiples of 3 and 5 (FizzBuzz style)
function printMultiplesOf3And5() {
  // TODO: Print numbers if they are multiples of 3 & 5
  for (let index = 1; index <= 10; index++) {
    if (index % 3 == 0 || index % 5 == 0) {
      console.log(index)
    }
  }
}
printMultiplesOf3And5()
console.log("------------------------");

// 3. Generate a multiplication table
function printMultiplicationTable(num) {
  // TODO: Print multiplication table for a number (e.g. 5 x 1 = 5)
  for (let index = 1; index <= 10; index++) {
    console.log(`${num} * ${index} = ${num * index}`)
  }
}
printMultiplicationTable(5)
console.log("------------------------");

// 4. Find factorial of a number
function calculateFactorial(num) {
  // TODO: Write your code here to calculate factorial
  let fact = 1
  for (let index = 1; index <= num; index++) {
    fact *= index
  }
  console.log(fact)
}
calculateFactorial(5)
console.log("------------------------");

// 5. Reverse a number
function reverseNumber(num) {
  // TODO: Write your code here (e.g., 123 -> 321)
  let no = 0
  while (num > 0) {
    let ld = num % 10
    no = no * 10 + ld
    num = Math.floor(num / 10)
  }
  console.log(no)
}
reverseNumber(569)
console.log("------------------------");

// 6. Count digits in a number
function countDigits(num) {
  // TODO: Write your code here (e.g., 4556 -> 4)
  let count = 0
  while (num > 0) {
    num = Math.floor(num / 10)
    count++
  }
  console.log(count)

}
countDigits(384762648726)
console.log("------------------------");

// 7. Find the sum of digits
function sumOfDigits(num) {
  // TODO: Write your code here (e.g., 123 -> 6)
  let sum = 0
  while (num > 0) {
    let last_digit = num % 10
    num = Math.floor(num / 10)
    sum = sum + last_digit
  }
  console.log(sum)

}
sumOfDigits(384762648726)
console.log("------------------------");

// 8. Check whether a number is a palindrome
function isNumPalindrome(num) {
  // TODO: Write your code here (e.g., 121 -> true)
  let no = 0
  while (num > 0) {
    let ld = num % 10
    no = no * 10 + ld
    num = Math.floor(num / 10)
  }
  if (no == num) { return true }
  else { return false }
}
console.log(isNumPalindrome(121))
console.log("------------------------");

// 9. Check whether a number is prime
function isPrime(num) {
  // TODO: Write your code here
  if (num <= 1 || (num % 2 == 0 && num != 2))
    return false
  else if (num == 2) {
    return true
  }
  let limit = Math.sqrt(num)
  for (let index = 3; index <= limit + 1; index += 2) {
    if (num % index == 0) {
      return false
    }
  }
  return true
}
console.log(isPrime(565))
console.log("------------------------");

// 10. Print all prime numbers in a range
function printPrimesInRange(start, end) {
  let a = []
  for (let i = start; i <= end; i++) {
    if (i <= 1)
      continue
    if (i == 2)
      a.push(2)
    continue
    let Prime = true
    if (i % 2 == 0)
      continue
    for (let index = 3; index <= i ** 0.5; index += 2) {
      if (i % index == 0) {
        Prime = false
        break
      }
    }
    if (Prime)
      a.push(i)
  }
  return a
}

console.log(printPrimesInRange(5, 35))
console.log("------------------------");


