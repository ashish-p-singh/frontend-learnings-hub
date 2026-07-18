// 🟢 Level 2: Conditions (if, else, switch)

console.log("--- Level 2 Exercises ---");

// 1. Find the largest of 3 numbers
function findLargest(num1, num2, num3) {
  // TODO: Write your code here
    
  return Math.max(num1,num2,num3);
}
findLargest("The largest number is:",findLargest(30,10,45))
console.log("------------------------");

// 2. Check whether a year is a leap year
function isLeapYear(year) {
  // TODO: Write your code here
    if((year%4==0 && year%100!=0)||(year%400==0)){

      return true;
    }
    else{
      return false
    }
}
console.log("The year 2000 is a leap year:",isLeapYear(2000))
console.log("------------------------");

// 3. Create a grading system from marks
// E.g., >= 90: A, >= 80: B, >= 70: C, Else: F
function getGrade(marks) {
  // TODO: Write your code here
  if(marks>=90){
    return "A"
  }
  if(marks>=80){
    return "B"
  }
  if(marks>=70){
    return "C"
  }
  else{
    return "F"
  }
}
console.log("Your Grade is:",getGrade(87)
)
console.log("------------------------");

// 4. Calculate electricity bill using slabs
// Slabs: First 100 units = ₹5/unit, Next 200 units = ₹8/unit, Above 300 units = ₹10/unit
function calculateElectricityBill(units) {
  // TODO: Write your code here
  if(units<=100){
    return units*5;
  }
  else if(units<=300){
    return units*8;
  }
  else if(units>300){
    return units*10;
  }
}
console.log("Your electricity bill is:",calculateElectricityBill(460));
console.log("------------------------");

// 5. Check triangle type from 3 sides (Equilateral, Isosceles, Scalene)
function checkTriangleType(side1, side2, side3) {
  // TODO: Write your code here
  if((side1==side2)&& (side1==side3)){
    return "Equlateral"
  }
  else if((side1==side2)&& (side1!=side3) ||(side1!=side2)&& (side1==side3)||(side1!=side2)&& (side2==side3)){
    return "Isoceles"
  }
  else{
    return "Scalene"
  }
}
console.log("The triangle is:",checkTriangleType(20,10,20))
console.log("------------------------");

// 6. Create a movie ticket price system based on age
// E.g., Children (<12): ₹100, Adults (12-60): ₹250, Seniors (>60): ₹150
function getTicketPrice(age) {
  // TODO: Write your code here
  if(age<12){
    return 100
  }
  else if(age>=12 && age<=60){
    return 250
  }
  else{
    return 150
  }
}
console.log("Your ticket price is: $",getTicketPrice(43))
console.log("------------------------");

// 7. Use switch to create a basic calculator (operations: '+', '-', '*', '/')
function basicCalculator(num1, num2, operator) {
  // TODO: Write your code here (use a switch case statement)
  if(operator=="+"){
    return num1+num2
  }
  
  else if(operator=="-"){
    return num1-num2
  }
  else if(operator=="*"){
    return num1*num2
  }
  else if(operator=="/"){
    return num1/num2
  }

}
console.log("32-24 is:",basicCalculator(32,24,"+"))
console.log("------------------------");

// 8. Check whether a character is a vowel or consonant
function isVowelOrConsonant(char) {
  const vowels="aeiou"
  if(vowels.includes(char.tolowercase())){
    return "vowel"
  }
  else{
    return consonant
  }
}
console.log("The char you entered is a",isVowelOrConsonant('a'))
console.log("------------------------");

// 9. Check driving age
function canDrive(age) {
  // TODO: Write your code here (Check if age >= 18)
  if(age >= 18){
    return "yes"
  }

  else{
    return "no"
  }
}
console.log("you ar eligiblle to drive:",canDrive(69))
console.log("------------------------");

// 💡 Mini challenge: ATM withdrawal validator
// Checks if amount is a multiple of 100, is <= balance, and does not exceed daily limit.
function validateATMWithdrawal(amount, balance, dailyLimit) {
  // TODO: Write your code here
  if((amount%100==0)&&(amount<=balance)&&(amount<=dailyLimit)){
    return {valid: true,message: "Succsesful"}
  }
  else{
  return { valid: false, message: "failed" };}
}
console.log(validateATMWithdrawal(100,2000,20000))