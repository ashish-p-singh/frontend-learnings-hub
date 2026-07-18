// ⚡ Level 9: Async JavaScript

console.log("--- Level 9 Exercises ---");

// 1. Create a Promise that resolves after 2 seconds
function delay(ms) {
  // TODO: Return a promise that resolves after ms milliseconds
  return new Promise(() => {
    setInterval(()=>{
      resolve()
    },ms)
  });
}
console.log(delay(500))
console.log("------------------------");

// 2. Randomly resolve or reject a Promise
function randomResolveReject() {
  // TODO: Return a promise that resolves or rejects based on Math.random()
  return new Promise(() => {
    if(Math.random<0.3){
      resolve()
    }
    else{
      reject()
    }
  });
}console.log(randomResolveReject())
console.log("------------------------");

// 3. Convert .then() code to async/await
// Example input: fetch(url).then(res => res.json()).then(data => console.log(data))
async function fetchAndLog() {
  // TODO: Convert the above structure to use async/await
  let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let a=await x.json()
  console.log(a)
     
  
}
fetchAndLog()
console.log("------------------------");

// 4. Handle errors with try...catch
async function fetchWithErrorHandling(url) {
  // TODO: Fetch data using async/await and wrap it inside try/catch block
  try{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      }
  catch(err){
    console.log(err)
  }
}
fetchWithErrorHandling()
console.log("------------------------");

// 5. Fetch users from an API (e.g. https://jsonplaceholder.typicode.com/users)
async function fetchUsers() {
  // TODO: Write code
  
}
console.log("------------------------");

// 6. Show loading state while fetching (log "Loading..." then log result)
async function fetchWithLoadingState(url) {
  // TODO: Write code
}
console.log("------------------------");

// 7. Handle failed API requests (simulate by calling invalid URL)
async function testFailedRequest() {
  // TODO: Try fetching from "https://invalid-api-url-test.com" and handle failure
}
console.log("------------------------");

// 8. Run multiple Promises using Promise.all()
async function fetchMultiple(urls) {
  // TODO: Use Promise.all() to run fetch requests concurrently
  return [];
}
console.log("------------------------");

// 9. Fetch one API result, then use it in another request
async function sequentialFetch() {
  // TODO: Fetch a user, get their post ID, then fetch post details
}
console.log("------------------------");

// 10. Add timeout behaviour (reject promise if API takes > 3 seconds)
function fetchWithTimeout(url, timeoutMs) {
  // TODO: Use Promise.race to run a fetch and a timer promise together
}
console.log("------------------------");

// 💡 Mini projects: Weather app | GitHub profile finder | Movie search app
// Suggestion: Build these using DOM in Level 8 and API fetch in Level 9!
