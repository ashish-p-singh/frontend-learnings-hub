// 🟠 Level 7: Objects

console.log("--- Level 7 Exercises ---");

const user = {
  name: "Ash",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript"]
};

// 1. Add, update and delete properties of the 'user' object
console.log("1. Add, update, delete properties (stubs):");
// Add property 'country'
// Update property 'age' to 21
// Delete property 'skills'
console.log("------------------------");

// 2. Loop through an object and print keys and values
function loopObject(obj) {
  // TODO: Write a for...in loop or Object.keys loop
}
console.log("------------------------");

// 3. Count object properties
function countProperties(obj) {
  // TODO: Write your code here
  return 0;
}
console.log("------------------------");

// 4. Convert object → array of key-value pairs (Hint: Object.entries())
function convertObjectToArray(obj) {
  // TODO: Write your code here
  return [];
}
console.log("------------------------");

// 5. Group users by age
const sampleUsers = [
  { name: "Rahul", age: 20 },
  { name: "Sneha", age: 22 },
  { name: "Ayush", age: 20 },
  { name: "Neha", age: 22 },
  { name: "Raj", age: 25 }
];
function groupUsersByAge(usersList) {
  // TODO: Group them (Return e.g. { 20: [...], 22: [...], 25: [...] })
  return {};
}
console.log("5. Group by age (placeholder):", groupUsersByAge(sampleUsers));
console.log("------------------------");

// 6. Find the student with highest marks
const testStudents = [
  { name: "John", marks: 85 },
  { name: "Emma", marks: 92 },
  { name: "Luke", marks: 78 }
];
function getTopStudent(studentsList) {
  // TODO: Write code
  return null;
}
console.log("------------------------");

// 7. Merge two objects
function mergeObjects(obj1, obj2) {
  // TODO: Write code (Hint: spread operator ... or Object.assign)
  return {};
}
console.log("------------------------");

// 8. Deeply access nested properties safely
const complexUser = {
  profile: {
    details: {
      address: {
        city: "Delhi"
      }
    }
  }
};
function getNestedCitySafely(userObj) {
  // TODO: Safely retrieve city, handling case where profile/details/address might be undefined
  // Hint: Optional chaining userObj?.profile?.details?.address?.city
  return "";
}
console.log("------------------------");

// 💡 Mini challenge: Student management system using arrays of objects
// Needs functions: addStudent(student), removeStudent(id), updateMarks(id, newMarks), listAllStudents()
const StudentManager = {
  students: [],
  addStudent(student) {
    // TODO: Implement
  },
  removeStudent(id) {
    // TODO: Implement
  },
  updateMarks(id, newMarks) {
    // TODO: Implement
  },
  listAllStudents() {
    // TODO: Implement
  }
};
