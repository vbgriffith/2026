// ═══════════════════════════════════════════════════
//  JS LESSONS  — Beginner → Intermediate → Advanced
// ═══════════════════════════════════════════════════
const JS_LESSONS = {
  track: "js",
  label: "JavaScript",
  icon: "JS",
  subtitle: "Power the web",
  color: "js",
  levels: [
    {
      id: "beginner",
      label: "Beginner",
      lessons: [
        {
          id: "js-b-1",
          title: "Variables & Data Types",
          content: `
            <p>JavaScript (JS) is the programming language of the web. It makes pages interactive and dynamic.</p>
            <h3>Declaring Variables</h3>
            <pre><code>let name = "Alice";       // Reassignable
const age = 30;           // Constant (can't reassign)
var old = "avoid this";   // Old way — avoid in modern JS</code></pre>
            <h3>Data Types</h3>
            <pre><code>// Strings
let greeting = "Hello";
let template = \`Hello, \${name}!\`; // Template literal

// Numbers
let price = 9.99;
let count = 42;

// Booleans
let isLoggedIn = true;
let hasError = false;

// Null & Undefined
let empty = null;         // Intentionally empty
let notDefined;           // undefined (no value assigned)

// Arrays
let fruits = ["apple", "banana", "orange"];

// Objects
let user = { name: "Alice", age: 30 };</code></pre>
            <pre><code>console.log(typeof "hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Use <code>const</code> by default. Only use <code>let</code> when you need to reassign the variable. Never use <code>var</code> in modern code.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Variables</title></head>\n<body>\n<script>\n  // Open the browser console (F12) to see output!\n  const name = "Alice";\n  const age = 25;\n  const isStudent = true;\n  const scores = [95, 88, 72, 91];\n  const profile = { name, age, isStudent };\n\n  console.log("Name:", name);\n  console.log("Age:", age);\n  console.log("Is student:", isStudent);\n  console.log("Scores:", scores);\n  console.log("Profile object:", profile);\n  console.log("Type of name:", typeof name);\n  console.log("Type of age:", typeof age);\n\n  // Template literal\n  console.log(\`Hello, \${name}! You are \${age} years old.\`);\n\n  // Average score\n  const total = scores.reduce((a, b) => a + b, 0);\n  const average = total / scores.length;\n  console.log("Average score:", average.toFixed(1));\n</script>\n</body>\n</html>`
          },
          quiz: {
            question: "Which keyword declares a variable that cannot be reassigned?",
            options: ["var", "let", "const", "fixed"],
            answer: 2,
            explanation: "const declares a constant — once assigned, the binding cannot be reassigned. (The contents of objects/arrays can still be mutated.)"
          }
        },
        {
          id: "js-b-2",
          title: "Functions",
          content: `
            <p>Functions are reusable blocks of code. They take inputs (parameters) and return outputs.</p>
            <h3>Function Declaration</h3>
            <pre><code>function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"</code></pre>
            <h3>Arrow Functions (Modern)</h3>
            <pre><code>// Arrow function
const greet = (name) => "Hello, " + name + "!";

// Multi-line arrow function
const add = (a, b) => {
  const result = a + b;
  return result;
};

// Single parameter (parens optional)
const double = n => n * 2;</code></pre>
            <h3>Default Parameters</h3>
            <pre><code>const greet = (name = "World") => \`Hello, \${name}!\`;
greet();        // "Hello, World!"
greet("Alice"); // "Hello, Alice!"</code></pre>
            <h3>Rest Parameters</h3>
            <pre><code>const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
sum(1, 2, 3, 4); // 10</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Functions</title></head>\n<body>\n<script>\n  // Function declaration\n  function celsiusToFahrenheit(c) {\n    return (c * 9/5) + 32;\n  }\n\n  // Arrow function\n  const fahrenheitToCelsius = f => (f - 32) * 5/9;\n\n  // Default parameter\n  const greet = (name = "stranger", greeting = "Hello") =>\n    \`\${greeting}, \${name}!\`;\n\n  // Rest parameters\n  const average = (...nums) =>\n    nums.reduce((a, b) => a + b, 0) / nums.length;\n\n  console.log("0°C =", celsiusToFahrenheit(0), "°F");\n  console.log("100°C =", celsiusToFahrenheit(100), "°F");\n  console.log("72°F =", fahrenheitToCelsius(72).toFixed(1), "°C");\n  console.log(greet());\n  console.log(greet("Alice"));\n  console.log(greet("Bob", "Good morning"));\n  console.log("Average:", average(10, 20, 30, 40, 50));\n</script>\n</body>\n</html>`
          },
          quiz: {
            question: "What is the arrow function equivalent of: function double(n) { return n * 2; }",
            options: [
              "const double = function(n) { n * 2; }",
              "const double = n => n * 2;",
              "const double = (n) { return n * 2; }",
              "arrow double = n => n * 2;"
            ],
            answer: 1,
            explanation: "Arrow functions use => syntax. For single expressions, the return is implicit — no braces needed."
          }
        },
        {
          id: "js-b-3",
          title: "Control Flow: if, for, while",
          content: `
            <p>Control flow determines which code runs and how many times, based on conditions.</p>
            <h3>Conditionals</h3>
            <pre><code>const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// Ternary (short if/else)
const grade = score >= 60 ? "Pass" : "Fail";</code></pre>
            <h3>Loops</h3>
            <pre><code>// for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 3) {
  console.log(count++);
}

// for...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// for...in (objects)
const user = { name: "Alice", age: 30 };
for (const key in user) {
  console.log(key, ":", user[key]);
}</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Control Flow</title></head>\n<body>\n<script>\n  // FizzBuzz — classic interview problem!\n  console.log("=== FizzBuzz ===");\n  for (let i = 1; i <= 20; i++) {\n    if (i % 15 === 0)      console.log("FizzBuzz");\n    else if (i % 3 === 0)  console.log("Fizz");\n    else if (i % 5 === 0)  console.log("Buzz");\n    else                   console.log(i);\n  }\n\n  // Array iteration\n  console.log("\\n=== Array Methods ===");\n  const temps = [22, 18, 31, 27, 15, 29];\n  const hot = temps.filter(t => t > 25);\n  console.log("Hot days (>25°C):", hot);\n\n  // While loop: countdown\n  console.log("\\n=== Countdown ===");\n  let n = 5;\n  while (n > 0) { console.log(n--); }\n  console.log("Blast off! 🚀");\n</script>\n</body>\n</html>`
          },
          quiz: {
            question: "What does the ternary operator '? :' do?",
            options: [
              "Creates a new function",
              "A shorthand if/else that returns one of two values",
              "Loops through an array",
              "Declares a variable"
            ],
            answer: 1,
            explanation: "condition ? valueIfTrue : valueIfFalse — it's a compact if/else expression that evaluates to one of two values."
          }
        },
        {
          id: "js-b-4",
          title: "Arrays & Array Methods",
          content: `
            <p>Arrays store ordered collections of values. JavaScript has powerful built-in methods to work with them.</p>
            <h3>Array Basics</h3>
            <pre><code>const arr = [1, 2, 3, 4, 5];
arr[0]            // 1 (zero-indexed)
arr.length        // 5
arr.push(6)       // add to end → [1,2,3,4,5,6]
arr.pop()         // remove from end → returns 5
arr.unshift(0)    // add to start
arr.shift()       // remove from start
arr.slice(1, 3)   // [2, 3] (non-destructive)
arr.splice(1, 2)  // removes 2 from index 1</code></pre>
            <h3>Functional Methods (essential!)</h3>
            <pre><code>const nums = [1, 2, 3, 4, 5];

// map — transform each element → new array
nums.map(n => n * 2)         // [2, 4, 6, 8, 10]

// filter — keep matching elements → new array
nums.filter(n => n % 2 === 0) // [2, 4]

// reduce — boil down to single value
nums.reduce((acc, n) => acc + n, 0) // 15

// find — first matching element
nums.find(n => n > 3)        // 4

// some / every
nums.some(n => n > 4)        // true
nums.every(n => n > 0)       // true

// sort
[3,1,4,1,5].sort((a,b) => a - b) // [1,1,3,4,5]</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Arrays</title></head>\n<body>\n<script>\n  const products = [\n    { name: "Laptop",  price: 999,  category: "tech"   },\n    { name: "Phone",   price: 699,  category: "tech"   },\n    { name: "Desk",    price: 350,  category: "office" },\n    { name: "Monitor", price: 450,  category: "tech"   },\n    { name: "Chair",   price: 200,  category: "office" },\n  ];\n\n  // Filter tech products\n  const tech = products.filter(p => p.category === "tech");\n  console.log("Tech products:", tech.map(p => p.name));\n\n  // Total price\n  const total = products.reduce((sum, p) => sum + p.price, 0);\n  console.log("Total:", "$" + total);\n\n  // Most expensive\n  const mostExpensive = products.reduce((max, p) =>\n    p.price > max.price ? p : max\n  );\n  console.log("Most expensive:", mostExpensive.name, "$" + mostExpensive.price);\n\n  // Names of products under $500, sorted\n  const affordable = products\n    .filter(p => p.price < 500)\n    .sort((a, b) => a.price - b.price)\n    .map(p => \`\${p.name} ($\${p.price})\`);\n  console.log("Under $500 (sorted):", affordable);\n</script>\n</body>\n</html>`
          },
          quiz: {
            question: "Which array method creates a NEW array with transformed elements?",
            options: ["filter()", "map()", "reduce()", "forEach()"],
            answer: 1,
            explanation: "map() transforms each element and returns a new array of the same length. filter() returns a subset, reduce() returns a single value."
          }
        },
        {
          id: "js-b-5",
          title: "DOM Manipulation",
          content: `
            <p>The DOM (Document Object Model) is the browser's representation of your HTML. JavaScript can read and change it to make pages interactive.</p>
            <h3>Selecting Elements</h3>
            <pre><code>// Single element
const btn = document.getElementById("my-btn");
const title = document.querySelector("h1");
const firstCard = document.querySelector(".card");

// Multiple elements
const allCards = document.querySelectorAll(".card");
const allLinks = document.querySelectorAll("a");</code></pre>
            <h3>Changing the DOM</h3>
            <pre><code>// Text & HTML
el.textContent = "New text";   // safe (no HTML parsing)
el.innerHTML   = "&lt;b&gt;Bold&lt;/b&gt;"; // parses HTML

// Attributes
el.setAttribute("href", "https://example.com");
el.getAttribute("href");

// Classes
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open");
el.classList.contains("active"); // true/false

// Styles
el.style.color = "red";
el.style.display = "none";</code></pre>
            <h3>Events</h3>
            <pre><code>btn.addEventListener("click", (event) => {
  console.log("Clicked!", event.target);
});

// Common events: click, input, submit, keydown,
//   mouseover, mouseout, change, scroll, resize</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>DOM Manipulation</title>\n<style>\n  body { font-family: sans-serif; max-width: 500px; margin: 40px auto; padding: 20px; }\n  .btn { padding: 10px 20px; margin: 6px; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; }\n  .btn-blue { background: #3b82f6; color: white; }\n  .btn-red  { background: #ef4444; color: white; }\n  .btn-green{ background: #22c55e; color: white; }\n  #counter-display { font-size: 48px; font-weight: bold; text-align: center; color: #1e293b; margin: 16px 0; }\n  #color-input { padding: 8px; border: 1px solid #ccc; border-radius: 6px; width: 100%; font-size: 14px; margin-top: 16px; }\n  #todo-input { padding: 8px; border: 1px solid #ccc; border-radius: 6px; flex: 1; font-size: 14px; }\n  .input-row { display: flex; gap: 8px; margin-top: 16px; }\n  #todo-list { list-style: none; padding: 0; margin-top: 12px; }\n  #todo-list li { padding: 8px 12px; background: #f1f5f9; border-radius: 6px; margin-bottom: 6px; display: flex; justify-content: space-between; }\n  .del-btn { background: none; border: none; cursor: pointer; color: #ef4444; font-size: 16px; }\n</style>\n</head>\n<body>\n  <h2>Counter</h2>\n  <div id="counter-display">0</div>\n  <button class="btn btn-red"    onclick="change(-1)">− Decrease</button>\n  <button class="btn btn-green"  onclick="change(1)">+ Increase</button>\n  <button class="btn btn-blue"   onclick="reset()">Reset</button>\n\n  <h2>Live Text</h2>\n  <input id="color-input" type="text" placeholder="Type anything...">\n  <p id="live-output" style="margin-top:8px; color:#6366f1; font-size:18px">&nbsp;</p>\n\n  <h2>Todo List</h2>\n  <div class="input-row">\n    <input id="todo-input" type="text" placeholder="Add a task...">\n    <button class="btn btn-blue" onclick="addTodo()">Add</button>\n  </div>\n  <ul id="todo-list"></ul>\n\n  <script>\n    let count = 0;\n    const display = document.getElementById('counter-display');\n    function change(n) { count += n; display.textContent = count; }\n    function reset() { count = 0; display.textContent = 0; }\n\n    // Live input\n    document.getElementById('color-input').addEventListener('input', e => {\n      document.getElementById('live-output').textContent = e.target.value;\n    });\n\n    // Todo list\n    function addTodo() {\n      const input = document.getElementById('todo-input');\n      const text = input.value.trim();\n      if (!text) return;\n      const li = document.createElement('li');\n      li.innerHTML = \`<span>\${text}</span><button class="del-btn" onclick="this.parentElement.remove()">✕</button>\`;\n      document.getElementById('todo-list').appendChild(li);\n      input.value = '';\n      input.focus();\n    }\n    document.getElementById('todo-input').addEventListener('keydown', e => {\n      if (e.key === 'Enter') addTodo();\n    });\n  </script>\n</body>\n</html>`
          },
          quiz: {
            question: "What does classList.toggle('active') do?",
            options: [
              "Always adds the 'active' class",
              "Always removes the 'active' class",
              "Adds 'active' if absent, removes it if present",
              "Checks if 'active' class exists"
            ],
            answer: 2,
            explanation: "classList.toggle() adds the class if it doesn't exist, removes it if it does — perfect for menus and modals."
          }
        }
      ]
    },
    {
      id: "intermediate",
      label: "Intermediate",
      lessons: [
        {
          id: "js-i-1",
          title: "Objects & Prototypes",
          content: `
            <p>Objects are key-value pairs and the foundation of JavaScript's data model. Everything in JS is an object (or behaves like one).</p>
            <h3>Object Basics</h3>
            <pre><code>const user = {
  name: "Alice",
  age: 30,
  greet() {           // Method shorthand
    return \`Hi, I'm \${this.name}\`;
  }
};

// Destructuring
const { name, age } = user;

// Spread operator
const updated = { ...user, age: 31 };

// Optional chaining
user?.address?.city  // undefined (no error)</code></pre>
            <h3>Classes (ES6+)</h3>
            <pre><code>class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    return \`\${this.name} says \${this.sound}!\`;
  }
  static create(name, sound) {
    return new Animal(name, sound);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");
  }
  fetch(item) {
    return \`\${this.name} fetches the \${item}!\`;
  }
}</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Objects & Classes</title></head>\n<body>\n<script>\n  class BankAccount {\n    #balance = 0; // Private field!\n    constructor(owner, initialDeposit = 0) {\n      this.owner = owner;\n      this.#balance = initialDeposit;\n      this.transactions = [];\n    }\n    deposit(amount) {\n      if (amount <= 0) throw new Error("Amount must be positive");\n      this.#balance += amount;\n      this.transactions.push({ type: 'deposit', amount, date: new Date().toLocaleDateString() });\n      return this;\n    }\n    withdraw(amount) {\n      if (amount > this.#balance) throw new Error("Insufficient funds");\n      this.#balance -= amount;\n      this.transactions.push({ type: 'withdrawal', amount, date: new Date().toLocaleDateString() });\n      return this;\n    }\n    get balance() { return this.#balance; }\n    statement() {\n      console.log(\`\\n--- Account: \${this.owner} ---\`);\n      this.transactions.forEach(t =>\n        console.log(\`  \${t.type.padEnd(12)} \${t.date}  $\${t.amount}\`)\n      );\n      console.log(\`  Balance: $\${this.#balance}\`);\n    }\n  }\n\n  const account = new BankAccount("Alice", 1000);\n  account.deposit(500).deposit(200).withdraw(300);\n  account.statement();\n\n  try {\n    account.withdraw(5000);\n  } catch (e) {\n    console.log("Error:", e.message);\n  }\n</script>\n</body>\n</html>`
          },
          quiz: {
            question: "What does the spread operator (...) do when used with an object?",
            options: [
              "Deletes all properties",
              "Copies all enumerable own properties into a new object",
              "Converts the object to an array",
              "Freezes the object"
            ],
            answer: 1,
            explanation: "const newObj = { ...original } creates a shallow copy of original's enumerable own properties."
          }
        },
        {
          id: "js-i-2",
          title: "Async JavaScript: Promises & Async/Await",
          content: `
            <p>JavaScript is single-threaded but can handle async operations (network requests, timers, file reads) without blocking.</p>
            <h3>Promises</h3>
            <pre><code>const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Promise chain
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));</code></pre>
            <h3>Async/Await (Modern — use this!)</h3>
            <pre><code>async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) throw new Error("User not found");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed:", error);
  }
}

// Parallel requests
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
]);</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Always wrap <code>await</code> in try/catch to handle errors gracefully.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Async JS</title>\n<style>\n  body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; background:#f8fafc; }\n  .btn { padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; margin: 6px; }\n  .card { background: white; border-radius: 10px; padding: 16px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }\n  .card h3 { margin: 0 0 6px; }\n  .card p  { margin: 0; font-size: 13px; color: #64748b; }\n  #status { padding: 10px; margin: 10px 0; border-radius: 8px; background: #e0f2fe; color: #0369a1; font-size: 13px; }\n  #results { margin-top: 12px; }\n</style>\n</head>\n<body>\n  <h2>Live API Data (JSONPlaceholder)</h2>\n  <button class="btn" onclick="loadUsers()">Load Users</button>\n  <button class="btn" onclick="loadPosts()">Load Posts</button>\n  <button class="btn" onclick="loadBoth()">Load Both (parallel)</button>\n  <div id="status">Click a button to fetch data...</div>\n  <div id="results"></div>\n  <script>\n    const status = document.getElementById('status');\n    const results = document.getElementById('results');\n    function setStatus(msg) { status.textContent = msg; }\n    function render(items, fields) {\n      results.innerHTML = items.slice(0,5).map(item =>\n        \`<div class="card">\n          <h3>\${item[fields[0]]}</h3>\n          <p>\${item[fields[1]] ?? ''}</p>\n        </div>\`\n      ).join('');\n    }\n    async function loadUsers() {\n      setStatus('Loading users...');\n      try {\n        const res = await fetch('https://jsonplaceholder.typicode.com/users');\n        const users = await res.json();\n        render(users, ['name', 'email']);\n        setStatus(\`Loaded \${users.length} users\`);\n      } catch(e) { setStatus('Error: ' + e.message); }\n    }\n    async function loadPosts() {\n      setStatus('Loading posts...');\n      try {\n        const res = await fetch('https://jsonplaceholder.typicode.com/posts');\n        const posts = await res.json();\n        render(posts, ['title', 'body']);\n        setStatus(\`Loaded \${posts.length} posts\`);\n      } catch(e) { setStatus('Error: ' + e.message); }\n    }\n    async function loadBoth() {\n      setStatus('Loading both in parallel...');\n      try {\n        const [users, posts] = await Promise.all([\n          fetch('https://jsonplaceholder.typicode.com/users').then(r=>r.json()),\n          fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json()),\n        ]);\n        setStatus(\`Got \${users.length} users and \${posts.length} posts simultaneously!\`);\n        render(users, ['name','email']);\n      } catch(e) { setStatus('Error: ' + e.message); }\n    }\n  </script>\n</body>\n</html>`
          },
          quiz: {
            question: "What does Promise.all([...]) do?",
            options: [
              "Runs promises one after another",
              "Runs all promises in parallel and resolves when all complete",
              "Returns the first promise that resolves",
              "Cancels all promises"
            ],
            answer: 1,
            explanation: "Promise.all() runs all promises concurrently and resolves with an array of results when all succeed (or rejects if any fail)."
          }
        },
        {
          id: "js-i-3",
          title: "The Event Loop & Closures",
          content: `
            <p>Understanding how JavaScript works under the hood helps you write better code and debug tricky bugs.</p>
            <h3>The Event Loop</h3>
            <pre><code>console.log("1");                         // sync
setTimeout(() => console.log("2"), 0);    // async (macro-task)
Promise.resolve().then(() => console.log("3")); // async (micro-task)
console.log("4");

// Output: 1, 4, 3, 2
// Micro-tasks (promises) run before macro-tasks (setTimeout)</code></pre>
            <h3>Closures</h3>
            <p>A closure is a function that "remembers" its outer scope even after the outer function has returned.</p>
            <pre><code>function makeCounter() {
  let count = 0;        // private variable!
  return {
    increment: () => ++count,
    decrement: () => --count,
    value:     () => count,
  };
}

const counter = makeCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.value();     // 2 — count is remembered!</code></pre>
            <pre><code>// Common closure use: factory functions
function multiplier(factor) {
  return (number) => number * factor;
}
const double = multiplier(2);
const triple = multiplier(3);
double(5); // 10
triple(5); // 15</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Closures</title></head>\n<body>\n<script>\n  // Closure: private state\n  function createTimer() {\n    let seconds = 0;\n    let interval = null;\n    return {\n      start() {\n        if (interval) return;\n        interval = setInterval(() => {\n          seconds++;\n          console.log(\`Timer: \${seconds}s\`);\n        }, 1000);\n      },\n      stop() {\n        clearInterval(interval);\n        interval = null;\n        console.log(\`Stopped at \${seconds}s\`);\n      },\n      reset() { seconds = 0; console.log("Reset!"); },\n      get time() { return seconds; }\n    };\n  }\n\n  const timer = createTimer();\n\n  // Memoization closure (cache expensive results)\n  function memoize(fn) {\n    const cache = new Map();\n    return function(...args) {\n      const key = JSON.stringify(args);\n      if (cache.has(key)) {\n        console.log("Cache hit for:", key);\n        return cache.get(key);\n      }\n      const result = fn(...args);\n      cache.set(key, result);\n      return result;\n    };\n  }\n\n  const slowFib = n => n <= 1 ? n : slowFib(n-1) + slowFib(n-2);\n  const fastFib = memoize(n => n <= 1 ? n : fastFib(n-1) + fastFib(n-2));\n\n  console.log("Fib(10):", fastFib(10));\n  console.log("Fib(10) again:", fastFib(10)); // cache hit\n  console.log("Fib(15):", fastFib(15));\n\n  // Event loop demo\n  console.log("\\n--- Event Loop Order ---");\n  console.log("1: synchronous");\n  setTimeout(() => console.log("3: macro-task (setTimeout)"), 0);\n  Promise.resolve().then(() => console.log("2: micro-task (Promise)"));\n  console.log("1: also synchronous");\n</script>\n</body>\n</html>`
          },
          quiz: {
            question: "What is a closure in JavaScript?",
            options: [
              "A way to close/end a function",
              "A function that retains access to its outer scope's variables after the outer function has returned",
              "A method to close browser windows",
              "An error handling mechanism"
            ],
            answer: 1,
            explanation: "A closure is a function bundled with references to its surrounding state (lexical environment). It remembers its outer variables even after the outer function finishes."
          }
        },
        {
          id: "js-i-4",
          title: "ES6+ Modern JavaScript",
          content: `
            <p>Modern JavaScript (ES6 and beyond) introduced many powerful features that make code cleaner and more expressive.</p>
            <h3>Destructuring</h3>
            <pre><code>// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, address: { city } = {} } = user;

// Function parameter destructuring
function greet({ name, greeting = "Hello" }) {
  return \`\${greeting}, \${name}!\`;
}</code></pre>
            <h3>Spread & Rest</h3>
            <pre><code>const combined = [...arr1, ...arr2];
const merged = { ...obj1, ...obj2 };
const clone = { ...original };</code></pre>
            <h3>Optional Chaining & Nullish Coalescing</h3>
            <pre><code>const city = user?.address?.city ?? "Unknown";
const name = data?.user?.profile?.name ?? "Guest";</code></pre>
            <h3>Modules</h3>
            <pre><code>// utils.js
export const add = (a, b) => a + b;
export default class Calculator { }

// main.js
import Calculator, { add } from './utils.js';</code></pre>
            <h3>Map & Set</h3>
            <pre><code>const map = new Map([["key", "value"]]);
map.set("name", "Alice");
map.get("name"); // "Alice"

const set = new Set([1, 2, 2, 3, 3]);
// Set {1, 2, 3} — duplicates removed!</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Modern JS</title></head>\n<body>\n<script>\n  // Destructuring magic\n  const data = {\n    user: { name: "Alice", age: 30, role: "admin" },\n    settings: { theme: "dark", lang: "en" }\n  };\n  const { user: { name, role }, settings: { theme } } = data;\n  console.log(\`\${name} (\${role}) — theme: \${theme}\`);\n\n  // Optional chaining\n  const users = [\n    { id: 1, name: "Alice", address: { city: "London" } },\n    { id: 2, name: "Bob"   /* no address */ }\n  ];\n  users.forEach(u => {\n    const city = u?.address?.city ?? "City unknown";\n    console.log(\`\${u.name}: \${city}\`);\n  });\n\n  // Map for word frequency\n  const text = "the quick brown fox jumps over the lazy dog the fox";\n  const freq = text.split(' ').reduce((map, word) => {\n    map.set(word, (map.get(word) ?? 0) + 1);\n    return map;\n  }, new Map());\n  console.log("Word frequencies:");\n  [...freq.entries()]\n    .sort((a,b) => b[1] - a[1])\n    .slice(0, 5)\n    .forEach(([word, count]) => console.log(\`  \${word}: \${count}\`));\n\n  // Set for unique values\n  const tags = ["js","css","html","js","react","css","js"];\n  const unique = [...new Set(tags)];\n  console.log("Unique tags:", unique);\n</script>\n</body>\n</html>`
          },
          quiz: {
            question: "What does the nullish coalescing operator (??) do?",
            options: [
              "Checks if a value is null and throws an error",
              "Returns the right-hand side only if the left side is null or undefined",
              "Same as the OR operator (||)",
              "Converts null to a string"
            ],
            answer: 1,
            explanation: "?? returns the right value only when the left is null or undefined. Unlike ||, it doesn't trigger on falsy values like 0 or empty string."
          }
        },
        {
          id: "js-i-5",
          title: "Error Handling & Debugging",
          content: `
            <p>Good error handling is what separates professional code from student code. Errors are inevitable — handle them gracefully.</p>
            <h3>try / catch / finally</h3>
            <pre><code>try {
  const data = JSON.parse(userInput); // might throw
  processData(data);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("Invalid JSON:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
} finally {
  hideLoadingSpinner(); // always runs
}</code></pre>
            <h3>Custom Errors</h3>
            <pre><code>class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

throw new ValidationError("Required field missing", "email");</code></pre>
            <h3>Debugging Tips</h3>
            <pre><code>console.log("value:", x);
console.table(arrayOfObjects);    // formatted table
console.group("Group label");     // collapsible group
console.time("operation");
// ... code ...
console.timeEnd("operation");     // measures time
debugger;                         // breakpoint in devtools</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Error Handling</title>\n<style>\n  body { font-family: sans-serif; max-width: 500px; margin: 40px auto; padding: 20px; }\n  .result { padding: 12px; border-radius: 8px; margin: 12px 0; font-size: 14px; }\n  .success { background: #dcfce7; color: #166534; }\n  .error   { background: #fee2e2; color: #991b1b; }\n  textarea { width: 100%; height: 100px; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-family: monospace; font-size: 13px; }\n  button   { padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer; margin-top: 8px; }\n</style>\n</head>\n<body>\n  <h2>JSON Validator & Error Handling</h2>\n  <textarea id="json-input" placeholder='{"name": "Alice", "age": 30}'>{\"name\": \"Alice\", \"age\": 30}</textarea>\n  <button onclick="validate()">Validate JSON</button>\n  <div id="result"></div>\n  <script>\n    class ValidationError extends Error {\n      constructor(message, path) {\n        super(message);\n        this.name = 'ValidationError';\n        this.path = path;\n      }\n    }\n    function validateUser(obj) {\n      if (!obj.name || typeof obj.name !== 'string')\n        throw new ValidationError('Name is required and must be a string', 'name');\n      if (!obj.age || typeof obj.age !== 'number')\n        throw new ValidationError('Age is required and must be a number', 'age');\n      if (obj.age < 0 || obj.age > 150)\n        throw new ValidationError('Age must be between 0 and 150', 'age');\n      return true;\n    }\n    function validate() {\n      const input = document.getElementById('json-input').value;\n      const result = document.getElementById('result');\n      try {\n        const parsed = JSON.parse(input);\n        validateUser(parsed);\n        result.className = 'result success';\n        result.innerHTML = \`✅ Valid! <br><pre>\${JSON.stringify(parsed, null, 2)}</pre>\`;\n      } catch(e) {\n        result.className = 'result error';\n        if (e instanceof SyntaxError)\n          result.textContent = '❌ JSON Syntax Error: ' + e.message;\n        else if (e instanceof ValidationError)\n          result.textContent = \`❌ Validation Error on '\${e.path}': \${e.message}\`;\n        else\n          result.textContent = '❌ Unknown error: ' + e.message;\n      }\n    }\n  </script>\n</body>\n</html>`
          },
          quiz: {
            question: "When does the 'finally' block execute?",
            options: [
              "Only when no error occurs",
              "Only when an error occurs",
              "Always, whether or not an error occurred",
              "Only when explicitly called"
            ],
            answer: 2,
            explanation: "finally always executes after try/catch, regardless of whether an error was thrown. Perfect for cleanup code."
          }
        }
      ]
    },
    {
      id: "advanced",
      label: "Advanced",
      lessons: [
        {
          id: "js-a-1",
          title: "Functional Programming",
          content: `
            <p>Functional programming (FP) is a paradigm that treats computation as the evaluation of pure functions and avoids mutable state.</p>
            <h3>Pure Functions</h3>
            <pre><code>// Pure: same input always → same output, no side effects
const add = (a, b) => a + b;

// Impure: depends on/modifies external state
let total = 0;
const addToTotal = (n) => total += n; // side effect!</code></pre>
            <h3>Immutability</h3>
            <pre><code>// Don't mutate — create new values
const arr = [1, 2, 3];
const newArr = [...arr, 4];          // new array
const obj = { a: 1 };
const newObj = { ...obj, b: 2 };     // new object

// Object.freeze for deep immutability
const config = Object.freeze({ api: "v1" });</code></pre>
            <h3>Function Composition</h3>
            <pre><code>const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const process = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.replace(/\s+/g, '-'),
);
process("  Hello World  "); // "hello-world"</code></pre>
            <h3>Currying</h3>
            <pre><code>const curry = fn => a => b => fn(a, b);
const curriedAdd = curry((a, b) => a + b);
const add5 = curriedAdd(5);
add5(3); // 8
add5(10); // 15</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Functional Programming</title></head>\n<body>\n<script>\n  // Pipe utility\n  const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);\n\n  // Currying\n  const curry = fn => a => b => fn(a, b);\n  const multiply = curry((a, b) => a * b);\n  const double = multiply(2);\n  const triple = multiply(3);\n  console.log("double(7):", double(7));\n  console.log("triple(7):", triple(7));\n\n  // Real-world pipeline: data transformation\n  const products = [\n    { name: 'Widget', price: 25,  category: 'tools', inStock: true  },\n    { name: 'Gadget', price: 150, category: 'tech',  inStock: false },\n    { name: 'Doohickey',price:8,  category: 'tools', inStock: true  },\n    { name: 'Thingamajig',price:75,category:'tech',  inStock: true  },\n  ];\n\n  const processProducts = pipe(\n    items => items.filter(p => p.inStock),\n    items => items.map(p => ({ ...p, price: p.price * 1.1 })),  // +10% markup\n    items => items.sort((a,b) => a.price - b.price),\n    items => items.map(p => \`\${p.name}: $\${p.price.toFixed(2)}\`)\n  );\n\n  console.log("Processed products:");\n  processProducts(products).forEach(p => console.log(" ", p));\n\n  // Memoization with pure function\n  const memoize = fn => {\n    const cache = new Map();\n    return (...args) => {\n      const key = JSON.stringify(args);\n      return cache.has(key) ? cache.get(key) : cache.set(key, fn(...args)).get(key);\n    };\n  };\n\n  const fib = memoize(n => n <= 1 ? n : fib(n-1) + fib(n-2));\n  console.log("Fibonacci 20:", fib(20));\n  console.log("Fibonacci 30:", fib(30));\n</script>\n</body>\n</html>`
          },
          quiz: {
            question: "What makes a function 'pure'?",
            options: [
              "It uses only primitive values",
              "It always returns the same output for the same input and has no side effects",
              "It has no parameters",
              "It is defined with const"
            ],
            answer: 1,
            explanation: "A pure function: (1) same inputs always produce same output, (2) no side effects (no mutation of external state, no I/O)."
          }
        },
        {
          id: "js-a-2",
          title: "Design Patterns",
          content: `
            <p>Design patterns are proven solutions to common programming problems. Learning them makes you a better engineer.</p>
            <h3>Module Pattern</h3>
            <pre><code>const Store = (() => {
  let state = { count: 0 };
  const listeners = [];
  return {
    getState: () => ({ ...state }),
    setState(newState) {
      state = { ...state, ...newState };
      listeners.forEach(fn => fn(state));
    },
    subscribe(fn) { listeners.push(fn); }
  };
})();</code></pre>
            <h3>Observer Pattern</h3>
            <pre><code>class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
    (this.events[event] ??= []).push(listener);
  }
  emit(event, ...args) {
    (this.events[event] ?? []).forEach(fn => fn(...args));
  }
  off(event, listener) {
    this.events[event] = (this.events[event] ?? [])
      .filter(fn => fn !== listener);
  }
}</code></pre>
            <h3>Singleton</h3>
            <pre><code>class Config {
  static #instance;
  static getInstance() {
    return (Config.#instance ??= new Config());
  }
}</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Don't over-engineer! Apply patterns where they genuinely simplify the code, not just to appear sophisticated.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Design Patterns</title>\n<style>\n  body{font-family:sans-serif;max-width:600px;margin:40px auto;padding:20px;background:#f8fafc;}\n  .store-demo{background:white;border-radius:12px;padding:20px;margin:16px 0;box-shadow:0 2px 8px rgba(0,0,0,0.06);}\n  button{padding:8px 16px;margin:4px;border:none;border-radius:6px;cursor:pointer;font-size:13px;}\n  .add{background:#22c55e;color:white;} .sub{background:#ef4444;color:white;} .rst{background:#94a3b8;color:white;}\n  #count{font-size:48px;font-weight:bold;text-align:center;color:#1e293b;margin:12px 0;}\n  #log{background:#0f172a;color:#94a3b8;border-radius:8px;padding:12px;font-family:monospace;font-size:12px;max-height:150px;overflow-y:auto;}\n</style>\n</head>\n<body>\n  <h2>Mini Redux-like Store (Observer + Module)</h2>\n  <div class="store-demo">\n    <div id="count">0</div>\n    <div style="text-align:center">\n      <button class="sub" onclick="store.dispatch({type:'DEC'})">− Decrement</button>\n      <button class="rst" onclick="store.dispatch({type:'RESET'})">Reset</button>\n      <button class="add" onclick="store.dispatch({type:'INC'})">+ Increment</button>\n    </div>\n  </div>\n  <h3>Action Log</h3>\n  <div id="log"></div>\n  <script>\n    // Mini Redux pattern\n    function createStore(reducer, initialState) {\n      let state = initialState;\n      const subscribers = [];\n      return {\n        getState: () => state,\n        dispatch(action) {\n          state = reducer(state, action);\n          subscribers.forEach(fn => fn(state));\n        },\n        subscribe(fn) { subscribers.push(fn); return () => subscribers.splice(subscribers.indexOf(fn),1); }\n      };\n    }\n    function counterReducer(state = { count: 0, history: [] }, action) {\n      switch(action.type) {\n        case 'INC':   return { count: state.count + 1, history: [...state.history, '+1'] };\n        case 'DEC':   return { count: state.count - 1, history: [...state.history, '-1'] };\n        case 'RESET': return { count: 0, history: [...state.history, 'reset'] };\n        default:      return state;\n      }\n    }\n    const store = createStore(counterReducer);\n    const countEl = document.getElementById('count');\n    const logEl = document.getElementById('log');\n    store.subscribe(state => {\n      countEl.textContent = state.count;\n      countEl.style.color = state.count > 0 ? '#22c55e' : state.count < 0 ? '#ef4444' : '#1e293b';\n      logEl.innerHTML += \`<div>Action \${state.history.at(-1)} → count: \${state.count}</div>\`;\n      logEl.scrollTop = logEl.scrollHeight;\n    });\n  </script>\n</body>\n</html>`
          },
          quiz: {
            question: "What is the Observer pattern used for?",
            options: [
              "Ensuring only one instance of a class exists",
              "Allowing objects to subscribe to and be notified of events/state changes",
              "Lazy initialization of objects",
              "Adapting incompatible interfaces"
            ],
            answer: 1,
            explanation: "The Observer pattern defines a one-to-many dependency so when one object changes state, all dependents are notified automatically."
          }
        },
        {
          id: "js-a-3",
          title: "Performance & Web APIs",
          content: `
            <p>Knowing how to optimize JavaScript and leverage browser APIs separates good developers from great ones.</p>
            <h3>Web Workers</h3>
            <pre><code>// Offload heavy computation to a background thread
const worker = new Worker('worker.js');
worker.postMessage({ data: largeArray });
worker.onmessage = (e) => console.log(e.data);</code></pre>
            <h3>IntersectionObserver (Lazy Loading)</h3>
            <pre><code>const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("img[data-src]").forEach(img => {
  observer.observe(img);
});</code></pre>
            <h3>LocalStorage & SessionStorage</h3>
            <pre><code>localStorage.setItem("user", JSON.stringify(user));
const user = JSON.parse(localStorage.getItem("user"));</code></pre>
            <h3>requestAnimationFrame</h3>
            <pre><code>function animate(timestamp) {
  // Update animation
  element.style.transform = \`translateX(\${x}px)\`;
  requestAnimationFrame(animate); // 60fps
}
requestAnimationFrame(animate);</code></pre>
            <div class="note-box"><strong>ℹ️ Note:</strong> Use <code>requestAnimationFrame</code> instead of <code>setInterval</code> for animations — it syncs with the display refresh rate and pauses when the tab is hidden.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Performance & Web APIs</title>\n<style>\n  *{box-sizing:border-box;margin:0;} body{font-family:sans-serif;background:#0f172a;color:white;padding:24px;}\n  h2{color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:24px 0 12px;}\n  canvas{display:block;border-radius:8px;background:#1e293b;}\n  .btn{padding:8px 16px;background:#6366f1;color:white;border:none;border-radius:6px;cursor:pointer;font-size:13px;margin:4px;}\n  .info{font-size:13px;color:#94a3b8;font-family:monospace;margin:8px 0;}\n  #storage-output{background:#1e293b;padding:12px;border-radius:8px;font-size:13px;font-family:monospace;color:#94a3b8;margin-top:8px;}\n</style>\n</head>\n<body>\n  <h2>requestAnimationFrame — Canvas Animation</h2>\n  <canvas id="canvas" width="400" height="150"></canvas>\n  <div style="margin-top:8px">\n    <button class="btn" onclick="toggleAnim()">Play/Pause</button>\n    <span class="info" id="fps-display">FPS: —</span>\n  </div>\n\n  <h2>LocalStorage — Persistent Notes</h2>\n  <textarea id="note" style="width:100%;height:80px;background:#1e293b;color:white;border:1px solid #334155;border-radius:8px;padding:10px;font-size:14px;resize:none" placeholder="Type a note — auto-saved to localStorage!"></textarea>\n  <div id="storage-output">Saved content will appear here...</div>\n\n  <script>\n    // Canvas animation with rAF\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n    let animId, running = false, last = 0, frame = 0, fps = 0;\n    const balls = Array.from({length:8}, (_,i) => ({\n      x: Math.random()*380+10, y: Math.random()*130+10,\n      vx: (Math.random()-0.5)*4, vy: (Math.random()-0.5)*4,\n      r: Math.random()*12+8,\n      color: ['#6366f1','#22c55e','#f97316','#38bdf8','#ec4899'][i%5]\n    }));\n    function draw(ts) {\n      fps = Math.round(1000/(ts - last)); last = ts;\n      if(++frame%10===0) document.getElementById('fps-display').textContent='FPS: '+fps;\n      ctx.clearRect(0,0,400,150);\n      balls.forEach(b => {\n        b.x+=b.vx; b.y+=b.vy;\n        if(b.x<b.r||b.x>400-b.r) b.vx*=-1;\n        if(b.y<b.r||b.y>150-b.r) b.vy*=-1;\n        ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2);\n        ctx.fillStyle=b.color+'cc'; ctx.fill();\n      });\n      animId = requestAnimationFrame(draw);\n    }\n    function toggleAnim() {\n      running=!running;\n      if(running){animId=requestAnimationFrame(draw);}else{cancelAnimationFrame(animId);}\n    }\n    toggleAnim();\n\n    // LocalStorage\n    const noteEl = document.getElementById('note');\n    const stored = localStorage.getItem('webcraft-note');\n    if(stored){noteEl.value=stored;document.getElementById('storage-output').textContent='Loaded: '+stored.slice(0,60)+'...';}\n    noteEl.addEventListener('input', e=>{\n      localStorage.setItem('webcraft-note', e.target.value);\n      document.getElementById('storage-output').textContent='Saved ('+(e.target.value.length)+' chars). Refresh the page — it persists!';\n    });\n  </script>\n</body>\n</html>`
          },
          quiz: {
            question: "Why is requestAnimationFrame better than setInterval for animations?",
            options: [
              "It is faster than setInterval",
              "It syncs with the display refresh rate and pauses when the tab is not visible",
              "It works in Web Workers",
              "It uses less memory"
            ],
            answer: 1,
            explanation: "rAF syncs to the monitor's refresh rate (usually 60Hz), pauses in background tabs saving battery, and avoids animation jank."
          }
        }
      ]
    }
  ]
};
