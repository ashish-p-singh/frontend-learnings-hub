// ⚡ Level 8: DOM Manipulation

// 1. Button changes background color of '#colorBox'
const bgBtn = document.getElementById('bgBtn');
const colorBox = document.getElementById('colorBox');
if (bgBtn && colorBox) {
  bgBtn.addEventListener('click', () => {
    // TODO: Write code to randomly change colorBox.style.backgroundColor
    colorBox.style.backgroundColor="red";
  });
}

// 2. Show/hide password
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const passwordInput = document.getElementById('passwordInput');
if (togglePasswordBtn && passwordInput) {
  togglePasswordBtn.addEventListener('click', () => {
    // TODO: Toggle passwordInput.type between 'password' and 'text'
    passwordInput.type="input"
  });
}

// 3. Character counter for textarea
const charArea = document.getElementById('charArea');
const charCounter = document.getElementById('charCounter');

if (charArea && charCounter) {
  charArea.addEventListener('input', () => {
    // TODO: Update charCounter.textContent with current text length
    let count =1
    charCounter.inner tml=`${count+1} characters`
  });
}

// 4. Counter with +, -, reset
const counterVal = document.getElementById('counterVal');
const cntAdd = document.getElementById('cntAdd');
const cntSub = document.getElementById('cntSub');
const cntReset = document.getElementById('cntReset');
if (counterVal && cntAdd && cntSub && cntReset) {
  // TODO: Add click event listeners to increment, decrement, and reset the counter value
}

// 5. Original Button Click Alert
const testButton = document.getElementById('button');
if (testButton) {
  testButton.addEventListener('click', () => {
    // TODO: Display an alert dialog saying "clicked"
  });
}

// 6. Accordion
// 7. Modal popup
// 8. Tabs component
// 9. Image carousel
// 10. Dark mode toggle
// 11. Search/filter a product list
// 12. Dynamic shopping cart
