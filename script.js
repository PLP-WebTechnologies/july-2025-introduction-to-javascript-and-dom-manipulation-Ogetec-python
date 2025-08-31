// 🌟 Part 1: Variables, Data Types, Conditionals
let userName = '';
const inputField = document.getElementById('userInput');
const resultDiv = document.getElementById('result');
const checkInputBtn = document.getElementById('checkInputBtn');

checkInputBtn.addEventListener('click', () => {
  userName = inputField.value;
  if (userName.trim() === '') {
    resultDiv.textContent = 'Please enter a valid name.';
  } else {
    resultDiv.textContent = `Hello, ${userName}!`;
  }
});

// ❤️ Part 2: Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatGreeting(name) {
  return `Welcome, ${name.toUpperCase()}!`;
}

// Example usage
console.log(calculateTotal(10, 3)); // 30
console.log(formatGreeting('Ada')); // Welcome, ADA!

// 🔁 Part 3: Loops
const items = ['Apples', 'Bananas', 'Cherries'];
const list = document.getElementById('dynamicList');

// forEach loop to populate list
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});

// Countdown using a for loop
for (let i = 5; i >= 1; i--) {
  console.log(`Countdown: ${i}`);
}

// 🌐 Part 4: DOM Interactions
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', () => {
  toggleText.style.display = toggleText.style.display === 'none' ? 'block' : 'none';
});

// Creating a new element dynamically
const newMessage = document.createElement('p');
newMessage.textContent = 'This message was added with JavaScript!';
document.body.appendChild(newMessage);