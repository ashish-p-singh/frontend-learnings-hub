// ⚡ Level 9: Async JavaScript

console.log("--- Level 9 Exercises ---");

// 1. Create a Promise that resolves after 2 seconds
function delay(ms) {
  // TODO: Return a promise that resolves after ms milliseconds
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve()
    },ms)
  });
}
console.log(delay(500))
console.log("------------------------");

// 2. Randomly resolve or reject a Promise
function randomResolveReject() {
  // TODO: Return a promise that resolves or rejects based on Math.random()
  return new Promise((resolve,reject) => {
    if(Math.random()<0.3){
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
   await fetch('https://jsonplaceholder.typicode.com/todos/1')
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
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => console.log(json))
}
fetchUsers()
console.log("------------------------");

// 6. Show loading state while fetching (log "Loading..." then log result)
async function fetchWithLoadingState() {
  console.log("Loading...")  // TODO: Write code
  await fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
    .then(json => console.log(json))
}
fetchWithLoadingState()
console.log("------------------------");

// 7. Handle failed API requests (simulate by calling invalid URL)
async function testFailedRequest() {
  // TODO: Try fetching from "https://invalid-api-url-test.com" and handle failure
  try{
   await fetch("https://invalid-api-url-test.com")
      .then(response => response.json())
      .then(json => console.log(json))
      }
  catch(err){
    console.log(err)
  }
}
testFailedRequest()
console.log("------------------------");

// 8. Run multiple Promises using Promise.all()
async function fetchMultiple(urls) {
  //    TODO: Use Promise.all() to run fetch requests concurrently
  const promises= urls.map((url)=>{
     returnfetch(url)
      .then(response => response.json())
      
  })
  const final =await Promise.all(promises)
  console.log(final)
}
fetchMultiple(["https://yt.com","https://jsonplaceholder.com"])
console.log("------------------------");

// 9. Fetch one API result, then use it in another request
async function sequentialFetch() {
  // TODO: Fetch a user, get their post ID, then fetch post details
  const userRes=await fetch("https://jsonplaceholder.typicode.com/users/1" )
  const user= await userRes.json()
  const postRes=await fetch(`https://invalid-api-url-test.com/posts?userId=${user.id}`)
  const post= await postRes.json()
  console.log(post)
}
sequentialFetch()
console.log("------------------------");

// 10. Add timeout behaviour (reject promise if API takes > 3 seconds)
function fetchWithTimeout(url, timeoutMs) {
  // TODO: Use Promise.race to run a fetch and a timer promise together
  const fpromise=fetch(url).then(res => response.json())
  const timepromise=new Promise((res,reject)=> {
    setTimeout(()=> reject(new Error("Request timed out")))
  },timeoutMs)
}
const race= await Promise.race(fpromise,timepromise)
console.log(race)

fetchWithTimeout(["https://yt.com","https://jsonplaceholder.com"],3000)
console.log("------------------------");

// 💡 Mini projects: Weather app | GitHub profile finder | Movie search app
// Suggestion: Build these using DOM in Level 8 and API fetch in Level 9!
