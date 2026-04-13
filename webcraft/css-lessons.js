// ═══════════════════════════════════════════════════
//  CSS LESSONS  — Beginner → Intermediate → Advanced
// ═══════════════════════════════════════════════════
const CSS_LESSONS = {
  track: "css",
  label: "CSS",
  icon: "{ }",
  subtitle: "Style the web",
  color: "css",
  levels: [
    {
      id: "beginner",
      label: "Beginner",
      lessons: [
        {
          id: "css-b-1",
          title: "What is CSS?",
          content: `
            <p>CSS stands for <strong>Cascading Style Sheets</strong>. It controls how HTML elements look — colors, fonts, spacing, layout, and more.</p>
            <h3>Three Ways to Add CSS</h3>
            <pre><code>&lt;!-- 1. External (best practice) --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;

&lt;!-- 2. Internal (in &lt;head&gt;) --&gt;
&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;

&lt;!-- 3. Inline (avoid for maintainability) --&gt;
&lt;p style="color: blue;"&gt;...&lt;/p&gt;</code></pre>
            <h3>CSS Rule Structure</h3>
            <pre><code>selector {
  property: value;
  property: value;
}</code></pre>
            <pre><code>h1 {
  color: navy;
  font-size: 36px;
  font-weight: bold;
}</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> "Cascading" means styles flow from parent to child elements. More specific rules override less specific ones.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Styled Page</title>\n  <style>\n    /* Try changing these styles! */\n    body {\n      background-color: #f0f4f8;\n      font-family: Georgia, serif;\n      padding: 40px;\n    }\n    h1 {\n      color: #1e3a5f;\n      font-size: 36px;\n    }\n    p {\n      color: #444;\n      font-size: 16px;\n      line-height: 1.7;\n    }\n    .highlight {\n      background: #fef08a;\n      padding: 2px 6px;\n    }\n  </style>\n</head>\n<body>\n  <h1>Welcome to CSS!</h1>\n  <p>CSS controls <span class="highlight">how everything looks</span> on a webpage.</p>\n  <p>Experiment by changing colors, font sizes, and more!</p>\n</body>\n</html>`
          },
          quiz: {
            question: "What does CSS stand for?",
            options: [
              "Computer Style Sheets",
              "Cascading Style Sheets",
              "Creative Styling System",
              "Colorful Style Syntax"
            ],
            answer: 1,
            explanation: "CSS stands for Cascading Style Sheets — it controls the visual presentation of HTML elements."
          }
        },
        {
          id: "css-b-2",
          title: "Selectors",
          content: `
            <p>Selectors determine which HTML elements a CSS rule applies to. Understanding selectors is the foundation of CSS.</p>
            <h3>Basic Selectors</h3>
            <pre><code>/* Element selector */
p { color: gray; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector (unique, use sparingly) */
#hero { font-size: 48px; }

/* Universal selector */
* { box-sizing: border-box; }</code></pre>
            <h3>Combinator Selectors</h3>
            <pre><code>/* Descendant: any p inside .card */
.card p { color: #444; }

/* Child: direct children only */
.nav > li { display: inline-block; }

/* Adjacent sibling: h2 right after h1 */
h1 + h2 { margin-top: 0; }

/* Multiple selectors */
h1, h2, h3 { font-family: Georgia; }</code></pre>
            <h3>Pseudo-classes</h3>
            <pre><code>a:hover   { color: red; }
a:visited { color: purple; }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
li:nth-child(2) { color: orange; }</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>CSS Selectors</title>\n  <style>\n    body { font-family: sans-serif; padding: 24px; }\n\n    /* Element */\n    h2 { color: #1e40af; }\n\n    /* Class */\n    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 12px 0; }\n\n    /* ID */\n    #featured { border-left: 4px solid #f97316; background: #fff7ed; }\n\n    /* Pseudo-class */\n    .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: box-shadow 0.2s; }\n\n    /* Descendant */\n    .card p { color: #475569; font-size: 14px; }\n\n    /* Adjacent sibling */\n    h2 + p { font-size: 18px; color: #0f172a; }\n  </style>\n</head>\n<body>\n  <h2>CSS Selectors Demo</h2>\n  <p>This paragraph comes right after the h2 (adjacent sibling).</p>\n\n  <div class="card" id="featured">\n    <h3>Featured Card</h3>\n    <p>This card has an ID selector override.</p>\n  </div>\n\n  <div class="card">\n    <h3>Regular Card</h3>\n    <p>Hover over me to see the pseudo-class effect.</p>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "Which selector targets elements with class='btn'?",
            options: ["#btn { }", ".btn { }", "btn { }", "@btn { }"],
            answer: 1,
            explanation: "Class selectors use a dot prefix: .btn targets all elements with class='btn'."
          }
        },
        {
          id: "css-b-3",
          title: "Colors & Backgrounds",
          content: `
            <p>CSS provides multiple ways to define colors and set backgrounds.</p>
            <h3>Color Values</h3>
            <pre><code>color: red;                /* Named color */
color: #ff0000;            /* Hex */
color: #f00;               /* Short hex */
color: rgb(255, 0, 0);     /* RGB */
color: rgba(255, 0, 0, 0.5); /* RGBA (with opacity) */
color: hsl(0, 100%, 50%);  /* HSL */
color: hsl(0 100% 50% / 0.5); /* HSLA */</code></pre>
            <h3>Background Properties</h3>
            <pre><code>background-color: #f0f4f8;
background-image: url('image.jpg');
background-size: cover;      /* or contain, 100px */
background-position: center; /* or top, 50% 50% */
background-repeat: no-repeat;

/* Shorthand */
background: #f0f4f8 url('img.jpg') no-repeat center/cover;

/* Gradients */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
background: radial-gradient(circle, #f97316, #ec4899);</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Colors & Backgrounds</title>\n  <style>\n    body { font-family: sans-serif; margin: 0; padding: 0; }\n    .hero {\n      background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);\n      color: white;\n      text-align: center;\n      padding: 60px 20px;\n    }\n    .hero h1 { font-size: 40px; margin-bottom: 10px; }\n    .hero p { color: rgba(255,255,255,0.8); font-size: 18px; }\n    .color-grid {\n      display: flex;\n      gap: 0;\n      height: 100px;\n    }\n    .swatch {\n      flex: 1;\n      display: flex;\n      align-items: flex-end;\n      padding: 8px;\n      font-size: 11px;\n      color: white;\n      font-family: monospace;\n    }\n  </style>\n</head>\n<body>\n  <div class="hero">\n    <h1>Colors in CSS</h1>\n    <p>From named colors to gradients</p>\n  </div>\n  <div class="color-grid">\n    <div class="swatch" style="background:#f97316">#f97316</div>\n    <div class="swatch" style="background:#eab308">#eab308</div>\n    <div class="swatch" style="background:#22c55e">#22c55e</div>\n    <div class="swatch" style="background:#38bdf8">#38bdf8</div>\n    <div class="swatch" style="background:#818cf8">#818cf8</div>\n    <div class="swatch" style="background:#e879f9">#e879f9</div>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "Which color format includes an opacity (alpha) channel?",
            options: ["hex (#ff0000)", "rgb(255,0,0)", "rgba(255,0,0,0.5)", "hsl(0,100%,50%)"],
            answer: 2,
            explanation: "rgba() has a 4th value (0–1) for alpha/opacity. hsla() also supports alpha."
          }
        },
        {
          id: "css-b-4",
          title: "The Box Model",
          content: `
            <p>Every HTML element is a rectangular box. The CSS Box Model describes the space around it.</p>
            <pre><code>┌─────────────────────────────┐
│           MARGIN            │  ← Space outside border
│   ┌─────────────────────┐   │
│   │       BORDER        │   │  ← The border itself
│   │   ┌─────────────┐   │   │
│   │   │   PADDING   │   │   │  ← Space inside border
│   │   │  ┌───────┐  │   │   │
│   │   │  │CONTENT│  │   │   │  ← The actual content
│   │   │  └───────┘  │   │   │
│   │   └─────────────┘   │   │
│   └─────────────────────┘   │
└─────────────────────────────┘</code></pre>
            <pre><code>div {
  width: 300px;
  height: 200px;
  padding: 20px;          /* inside space */
  border: 2px solid black;
  margin: 16px;           /* outside space */

  /* box-sizing: border-box makes width include padding+border */
  box-sizing: border-box;
}</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Always add <code>* { box-sizing: border-box; }</code> to your CSS reset. It makes sizing elements much more predictable.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Box Model</title>\n  <style>\n    * { box-sizing: border-box; }\n    body { font-family: sans-serif; padding: 30px; background: #f1f5f9; }\n    .box {\n      width: 250px;\n      background: #3b82f6;\n      color: white;\n      text-align: center;\n      font-size: 14px;\n      /* Try adjusting these */\n      padding: 30px;\n      border: 5px solid #1d4ed8;\n      margin: 20px auto;\n      border-radius: 8px;\n    }\n    .outer {\n      background: rgba(248, 113, 113, 0.2);\n      border: 2px dashed #ef4444;\n      display: inline-block;\n    }\n  </style>\n</head>\n<body>\n  <h2>Box Model Demo</h2>\n  <p>The red dashed area = margin. Try changing padding and margin.</p>\n  <div class="outer">\n    <div class="box">\n      Content Box<br>\n      <small>padding: 30px | border: 5px | margin: 20px</small>\n    </div>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "Which box-sizing value makes width include padding and border?",
            options: ["content-box", "border-box", "include-all", "padding-box"],
            answer: 1,
            explanation: "border-box makes the width/height include padding and border, so sizing is more predictable."
          }
        },
        {
          id: "css-b-5",
          title: "Typography & Fonts",
          content: `
            <p>Typography is one of the most impactful aspects of web design. CSS gives you full control over how text looks.</p>
            <h3>Font Properties</h3>
            <pre><code>font-family: 'Georgia', serif;  /* Fallback stack */
font-size: 18px;                /* or rem, em, % */
font-weight: 700;               /* 100–900, or bold/normal */
font-style: italic;
line-height: 1.6;               /* unitless = relative */
letter-spacing: 0.05em;
text-transform: uppercase;
text-align: left | center | right | justify;
text-decoration: underline | none | line-through;</code></pre>
            <h3>Google Fonts</h3>
            <pre><code>&lt;!-- In HTML head --&gt;
&lt;link href="https://fonts.googleapis.com/css2?
  family=Playfair+Display:wght@400;700&display=swap"
  rel="stylesheet"&gt;

/* In CSS */
h1 { font-family: 'Playfair Display', serif; }</code></pre>
            <h3>Font Units</h3>
            <ul>
              <li><code>px</code> — Fixed pixels</li>
              <li><code>rem</code> — Relative to root (html) font size (preferred!)</li>
              <li><code>em</code> — Relative to parent element font size</li>
              <li><code>vw</code> — % of viewport width (great for fluid headings)</li>
            </ul>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Typography</title>\n  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">\n  <style>\n    * { box-sizing: border-box; margin: 0; }\n    body {\n      font-family: 'Source Sans 3', sans-serif;\n      background: #fafaf9;\n      padding: 48px 40px;\n      max-width: 680px;\n      margin: auto;\n      color: #1c1917;\n    }\n    h1 {\n      font-family: 'Playfair Display', serif;\n      font-size: 3rem;\n      font-weight: 700;\n      line-height: 1.1;\n      letter-spacing: -1px;\n      margin-bottom: 16px;\n    }\n    .byline {\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      font-size: 12px;\n      color: #78716c;\n      margin-bottom: 24px;\n    }\n    p {\n      font-size: 1.1rem;\n      line-height: 1.75;\n      color: #44403c;\n      margin-bottom: 20px;\n    }\n    blockquote {\n      border-left: 4px solid #d97706;\n      padding: 12px 20px;\n      margin: 24px 0;\n      font-family: 'Playfair Display', serif;\n      font-style: italic;\n      font-size: 1.25rem;\n      color: #92400e;\n    }\n  </style>\n</head>\n<body>\n  <h1>The Art of Typography</h1>\n  <p class="byline">By a CSS Enthusiast — April 2024</p>\n  <p>Good typography is invisible. When it works, readers don't think about the type — they just read. When it fails, every word feels like a chore.</p>\n  <blockquote>Typography is the detail and the setting for everything we read.</blockquote>\n  <p>Choosing the right font pairing — a display face for headlines, a readable serif or sans for body — is one of the most powerful design decisions you can make.</p>\n</body>\n</html>`
          },
          quiz: {
            question: "Which unit is relative to the root (html) element's font size?",
            options: ["px", "em", "rem", "vw"],
            answer: 2,
            explanation: "rem (root em) is relative to the root html element's font-size. em is relative to the parent element."
          }
        }
      ]
    },
    {
      id: "intermediate",
      label: "Intermediate",
      lessons: [
        {
          id: "css-i-1",
          title: "Flexbox Layout",
          content: `
            <p>Flexbox is a powerful layout system for arranging items in a row or column. It makes alignment and distribution effortless.</p>
            <h3>Container Properties</h3>
            <pre><code>.container {
  display: flex;
  flex-direction: row | column;       /* axis */
  justify-content: flex-start | center | flex-end
                 | space-between | space-around | space-evenly;
  align-items: stretch | center | flex-start | flex-end;
  flex-wrap: nowrap | wrap;
  gap: 16px;
}</code></pre>
            <h3>Item Properties</h3>
            <pre><code>.item {
  flex: 1;             /* shorthand: grow shrink basis */
  flex-grow: 1;        /* how much to grow */
  flex-shrink: 0;      /* prevent shrinking */
  flex-basis: 200px;   /* initial size */
  align-self: center;  /* override container's align-items */
  order: 2;            /* change visual order */
}</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Use <code>margin-left: auto</code> or <code>margin-right: auto</code> on a flex item to push other items away — great for navbars!</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Flexbox</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: white; }\n    h2 { margin-bottom: 16px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; }\n    .demo { margin-bottom: 32px; }\n    .flex-row {\n      display: flex;\n      gap: 12px;\n      background: #1e293b;\n      padding: 16px;\n      border-radius: 8px;\n    }\n    .box {\n      background: #6366f1;\n      color: white;\n      padding: 16px;\n      border-radius: 6px;\n      text-align: center;\n      font-size: 14px;\n    }\n    /* Navbar demo */\n    .navbar {\n      display: flex;\n      align-items: center;\n      background: #1e293b;\n      padding: 0 16px;\n      border-radius: 8px;\n      height: 56px;\n    }\n    .nav-brand { font-weight: bold; font-size: 18px; }\n    .nav-links { display: flex; gap: 16px; margin-left: auto; }\n    .nav-links a { color: #94a3b8; text-decoration: none; font-size: 14px; }\n    /* Card grid */\n    .card-row {\n      display: flex;\n      gap: 12px;\n      flex-wrap: wrap;\n    }\n    .card {\n      flex: 1;\n      min-width: 140px;\n      background: #1e293b;\n      border-radius: 8px;\n      padding: 16px;\n    }\n  </style>\n</head>\n<body>\n  <div class="demo">\n    <h2>Basic Row</h2>\n    <div class="flex-row">\n      <div class="box">Item 1</div>\n      <div class="box" style="flex:2">Item 2 (flex:2)</div>\n      <div class="box">Item 3</div>\n    </div>\n  </div>\n  <div class="demo">\n    <h2>Navbar Pattern</h2>\n    <nav class="navbar">\n      <span class="nav-brand">🌟 Brand</span>\n      <div class="nav-links">\n        <a href="#">Home</a>\n        <a href="#">About</a>\n        <a href="#">Contact</a>\n      </div>\n    </nav>\n  </div>\n  <div class="demo">\n    <h2>Wrapping Cards</h2>\n    <div class="card-row">\n      <div class="card">Card A</div>\n      <div class="card">Card B</div>\n      <div class="card">Card C</div>\n      <div class="card">Card D</div>\n    </div>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "Which property distributes flex items with equal space between them?",
            options: [
              "align-items: space-between",
              "justify-content: space-evenly",
              "justify-content: space-between",
              "flex-direction: spaced"
            ],
            answer: 2,
            explanation: "justify-content: space-between places equal space between items, with none at the edges."
          }
        },
        {
          id: "css-i-2",
          title: "CSS Grid Layout",
          content: `
            <p>CSS Grid is a 2D layout system — perfect for complex page layouts with rows AND columns.</p>
            <h3>Grid Container</h3>
            <pre><code>.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;       /* 3 equal cols */
  grid-template-columns: repeat(3, 1fr);    /* same thing */
  grid-template-columns: 200px 1fr 2fr;     /* mixed */
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  /* Named areas */
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}</code></pre>
            <h3>Grid Items</h3>
            <pre><code>.item {
  grid-column: 1 / 3;       /* span columns 1 to 3 */
  grid-column: span 2;      /* span 2 columns */
  grid-row: 1 / 3;
  grid-area: header;        /* use named area */
}</code></pre>
            <div class="note-box"><strong>ℹ️ Note:</strong> Use Grid for 2D layouts (rows + columns). Use Flexbox for 1D layouts (row or column). They complement each other!</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>CSS Grid</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }\n    .page-grid {\n      display: grid;\n      grid-template-columns: 220px 1fr;\n      grid-template-rows: auto 1fr auto;\n      grid-template-areas:\n        "header header"\n        "sidebar main"\n        "footer footer";\n      gap: 12px;\n      height: calc(100vh - 48px);\n    }\n    .g-header { grid-area: header; background: #6366f1; padding: 16px 20px; border-radius: 8px; display:flex; align-items:center; }\n    .g-sidebar { grid-area: sidebar; background: #1e293b; padding: 20px; border-radius: 8px; }\n    .g-main { grid-area: main; background: #1e293b; padding: 20px; border-radius: 8px; }\n    .g-footer { grid-area: footer; background: #334155; padding: 12px 20px; border-radius: 8px; text-align:center; font-size:13px; color:#94a3b8; }\n    .card-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n      gap: 12px;\n      margin-top: 16px;\n    }\n    .card { background: #0f172a; border-radius: 6px; padding: 14px; font-size: 13px; color: #94a3b8; }\n    h1 { font-size: 18px; }\n    h2 { font-size: 14px; color: #94a3b8; margin-bottom: 12px; }\n    nav a { display: block; color: #94a3b8; text-decoration:none; padding: 8px 0; border-bottom: 1px solid #334155; font-size:14px; }\n  </style>\n</head>\n<body>\n  <div class="page-grid">\n    <header class="g-header"><h1>CSS Grid Layout Demo</h1></header>\n    <aside class="g-sidebar">\n      <h2>Navigation</h2>\n      <nav>\n        <a href="#">Dashboard</a>\n        <a href="#">Projects</a>\n        <a href="#">Settings</a>\n      </nav>\n    </aside>\n    <main class="g-main">\n      <h2>Main Content — auto-fill cards</h2>\n      <div class="card-grid">\n        <div class="card">Card 1</div>\n        <div class="card">Card 2</div>\n        <div class="card">Card 3</div>\n        <div class="card">Card 4</div>\n        <div class="card">Card 5</div>\n        <div class="card">Card 6</div>\n      </div>\n    </main>\n    <footer class="g-footer">Footer — 2024 WebCraft</footer>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "What does 'repeat(3, 1fr)' mean in grid-template-columns?",
            options: [
              "Repeat the grid 3 times",
              "Create 3 equal-width columns that share available space",
              "Create 3 columns each 1 pixel wide",
              "Create 1 column that repeats 3 times"
            ],
            answer: 1,
            explanation: "repeat(3, 1fr) creates 3 columns each with 1 fraction of available space — so they're all equal width."
          }
        },
        {
          id: "css-i-3",
          title: "Responsive Design & Media Queries",
          content: `
            <p>Responsive design ensures your website looks great on all screen sizes — from phones to 4K monitors.</p>
            <h3>Media Queries</h3>
            <pre><code>/* Mobile first (default styles for small screens) */
.container { padding: 16px; }

/* Tablet and up */
@media (min-width: 768px) {
  .container { padding: 32px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #0f172a; color: white; }
}

/* Print */
@media print {
  .no-print { display: none; }
}</code></pre>
            <h3>Viewport Units</h3>
            <pre><code>width: 100vw;    /* 100% of viewport width */
height: 100vh;   /* 100% of viewport height */
font-size: 4vw;  /* fluid font size */
height: 100svh;  /* safe viewport height (mobile) */</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Always design mobile-first! Start with styles for small screens and layer on complexity for larger screens with min-width media queries.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Responsive Design</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: sans-serif; background: #f8fafc; color: #1e293b; }\n    .nav { display: flex; padding: 0 16px; height: 56px; align-items: center; background: #1e293b; color: white; }\n    .nav-links { display: none; gap: 20px; }\n    .brand { font-weight: 700; font-size: 18px; }\n    .container { padding: 20px 16px; max-width: 1100px; margin: auto; }\n    h1 { font-size: 1.75rem; margin-bottom: 8px; }\n    p { color: #64748b; margin-bottom: 20px; }\n    .card-grid { display: grid; gap: 16px; }\n    .card { background: white; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }\n    .card h3 { margin-bottom: 8px; }\n    .card p { margin: 0; font-size: 14px; }\n    .badge { display: inline-block; background: #ede9fe; color: #7c3aed; font-size: 11px; padding: 2px 8px; border-radius: 99px; margin-bottom: 8px; }\n    /* Tablet */\n    @media (min-width: 640px) {\n      .nav-links { display: flex; margin-left: auto; }\n      .nav-links a { color: #94a3b8; text-decoration: none; font-size: 14px; }\n      .container { padding: 32px 24px; }\n      .card-grid { grid-template-columns: 1fr 1fr; }\n    }\n    /* Desktop */\n    @media (min-width: 1024px) {\n      .card-grid { grid-template-columns: repeat(3, 1fr); }\n      h1 { font-size: 2.5rem; }\n    }\n  </style>\n</head>\n<body>\n  <nav class="nav">\n    <span class="brand">WebCraft</span>\n    <div class="nav-links">\n      <a href="#">Home</a>\n      <a href="#">Courses</a>\n      <a href="#">About</a>\n    </div>\n  </nav>\n  <div class="container">\n    <h1>Responsive Layout Demo</h1>\n    <p>Resize the output panel to see columns change at different breakpoints.</p>\n    <div class="card-grid">\n      <div class="card"><span class="badge">HTML</span><h3>HTML Basics</h3><p>Learn the building blocks of every webpage.</p></div>\n      <div class="card"><span class="badge">CSS</span><h3>CSS Styling</h3><p>Make your pages beautiful and responsive.</p></div>\n      <div class="card"><span class="badge">JS</span><h3>JavaScript</h3><p>Add interactivity to your websites.</p></div>\n    </div>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "What does 'mobile-first' design mean?",
            options: [
              "Building a mobile app before the website",
              "Writing default styles for mobile, then adding complexity for larger screens with min-width media queries",
              "Only designing for mobile devices",
              "Using max-width media queries to hide content on mobile"
            ],
            answer: 1,
            explanation: "Mobile-first means your default CSS targets small screens, then min-width media queries progressively enhance for larger screens."
          }
        },
        {
          id: "css-i-4",
          title: "Transitions & Animations",
          content: `
            <p>CSS animations bring pages to life. You can animate almost any property smoothly.</p>
            <h3>Transitions</h3>
            <pre><code>/* Animate on state change (hover, focus) */
.btn {
  background: blue;
  transition: background 0.3s ease, transform 0.2s ease;
}
.btn:hover {
  background: darkblue;
  transform: translateY(-2px);
}</code></pre>
            <h3>Keyframe Animations</h3>
            <pre><code>@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-20px); }
}

.ball {
  animation: bounce 1s ease-in-out infinite;
  /* name | duration | easing | iteration */
  animation-delay: 0.5s;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}</code></pre>
            <h3>Transform Functions</h3>
            <pre><code>transform: translateX(20px) translateY(-10px);
transform: scale(1.1);
transform: rotate(45deg);
transform: skew(10deg);
transform: matrix(1, 0.2, -0.2, 1, 0, 0);</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Only animate <code>transform</code> and <code>opacity</code> for best performance — they don't trigger layout recalculation.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Animations</title>\n  <style>\n    * { box-sizing: border-box; }\n    body { font-family: sans-serif; background: #0f172a; color: white; padding: 32px; min-height: 100vh; }\n    h2 { color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 28px 0 12px; }\n    /* Button transitions */\n    .btn {\n      padding: 12px 24px;\n      background: #6366f1;\n      color: white;\n      border: none;\n      border-radius: 8px;\n      cursor: pointer;\n      font-size: 15px;\n      transition: background 0.2s, transform 0.2s, box-shadow 0.2s;\n    }\n    .btn:hover {\n      background: #4f46e5;\n      transform: translateY(-3px);\n      box-shadow: 0 10px 25px rgba(99,102,241,0.4);\n    }\n    .btn:active { transform: translateY(-1px); }\n    /* Spinning loader */\n    @keyframes spin { to { transform: rotate(360deg); } }\n    .loader {\n      width: 40px; height: 40px;\n      border: 3px solid #334155;\n      border-top-color: #6366f1;\n      border-radius: 50%;\n      animation: spin 0.8s linear infinite;\n      margin: 12px 0;\n    }\n    /* Pulsing dot */\n    @keyframes pulse {\n      0%, 100% { transform: scale(1); opacity: 1; }\n      50% { transform: scale(1.4); opacity: 0.6; }\n    }\n    .pulse-dot {\n      width: 16px; height: 16px;\n      border-radius: 50%;\n      background: #22c55e;\n      animation: pulse 1.5s ease-in-out infinite;\n      margin: 12px 0;\n    }\n    /* Slide in */\n    @keyframes slideIn {\n      from { transform: translateX(-30px); opacity: 0; }\n      to   { transform: translateX(0);     opacity: 1; }\n    }\n    .card {\n      background: #1e293b;\n      padding: 16px 20px;\n      border-radius: 10px;\n      animation: slideIn 0.5s ease forwards;\n      border-left: 3px solid #6366f1;\n    }\n    .card:nth-child(2) { animation-delay: 0.15s; opacity: 0; }\n    .card:nth-child(3) { animation-delay: 0.3s; opacity: 0; }\n  </style>\n</head>\n<body>\n  <h2>Button Transition</h2>\n  <button class="btn">Hover me!</button>\n  <h2>Spinner Animation</h2>\n  <div class="loader"></div>\n  <h2>Pulse Animation</h2>\n  <div class="pulse-dot"></div>\n  <h2>Staggered Slide-In Cards</h2>\n  <div style="display:flex; flex-direction:column; gap:10px; max-width:300px">\n    <div class="card">First item</div>\n    <div class="card">Second item</div>\n    <div class="card">Third item</div>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "Which two CSS properties should you prefer for animations for best performance?",
            options: [
              "width and height",
              "transform and opacity",
              "margin and padding",
              "background and color"
            ],
            answer: 1,
            explanation: "transform and opacity are GPU-accelerated and don't trigger layout recalculation, making them the most performant to animate."
          }
        },
        {
          id: "css-i-5",
          title: "CSS Variables (Custom Properties)",
          content: `
            <p>CSS Custom Properties (variables) let you store values and reuse them throughout your stylesheet, making themes and maintenance much easier.</p>
            <h3>Defining & Using Variables</h3>
            <pre><code>:root {
  --color-primary: #6366f1;
  --color-text: #1e293b;
  --spacing-md: 16px;
  --radius: 8px;
  --font-sans: 'DM Sans', sans-serif;
}

.button {
  background: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius);
}</code></pre>
            <h3>Fallback Values</h3>
            <pre><code>color: var(--accent, blue); /* blue if --accent not defined */</code></pre>
            <h3>Dynamic Themes with JS</h3>
            <pre><code>// Switch to dark theme
document.documentElement.style.setProperty(
  '--color-bg', '#0f172a'
);
document.documentElement.style.setProperty(
  '--color-text', '#e2e8f0'
);</code></pre>
            <div class="note-box"><strong>ℹ️ Note:</strong> CSS variables are live — changing them with JS immediately updates all elements using that variable. This makes theme switching instant!</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>CSS Variables</title>\n  <style>\n    :root {\n      --bg: #ffffff;\n      --surface: #f8fafc;\n      --text: #1e293b;\n      --text2: #64748b;\n      --primary: #6366f1;\n      --border: #e2e8f0;\n      --radius: 10px;\n    }\n    * { box-sizing: border-box; transition: background 0.3s, color 0.3s, border-color 0.3s; }\n    body { font-family: sans-serif; background: var(--bg); color: var(--text); padding: 32px; }\n    .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; max-width: 400px; margin: 20px auto; }\n    h1 { margin-bottom: 8px; }\n    p { color: var(--text2); font-size: 14px; margin-bottom: 16px; }\n    .btn { padding: 10px 20px; background: var(--primary); color: white; border: none; border-radius: var(--radius); cursor: pointer; font-size: 14px; }\n    .theme-btn { padding: 8px 16px; border: 1px solid var(--border); background: var(--surface); color: var(--text); border-radius: var(--radius); cursor: pointer; font-size: 13px; display: block; margin: 0 auto 24px; }\n  </style>\n</head>\n<body>\n  <button class="theme-btn" onclick="toggleTheme()">🌓 Toggle Dark/Light Mode</button>\n  <div class="card">\n    <h1>CSS Variables</h1>\n    <p>This entire page theme is controlled by CSS custom properties in :root. Click the button above to switch themes instantly!</p>\n    <button class="btn">Primary Button</button>\n  </div>\n  <script>\n    let isDark = false;\n    function toggleTheme() {\n      isDark = !isDark;\n      const root = document.documentElement;\n      if (isDark) {\n        root.style.setProperty('--bg', '#0f172a');\n        root.style.setProperty('--surface', '#1e293b');\n        root.style.setProperty('--text', '#e2e8f0');\n        root.style.setProperty('--text2', '#94a3b8');\n        root.style.setProperty('--border', '#334155');\n      } else {\n        root.style.setProperty('--bg', '#ffffff');\n        root.style.setProperty('--surface', '#f8fafc');\n        root.style.setProperty('--text', '#1e293b');\n        root.style.setProperty('--text2', '#64748b');\n        root.style.setProperty('--border', '#e2e8f0');\n      }\n    }\n  </script>\n</body>\n</html>`
          },
          quiz: {
            question: "Where are CSS custom properties typically defined to make them global?",
            options: ["body { }", ":root { }", "* { }", "html > head { }"],
            answer: 1,
            explanation: ":root is the highest-level selector (it targets the html element) so variables defined there are available everywhere."
          }
        }
      ]
    },
    {
      id: "advanced",
      label: "Advanced",
      lessons: [
        {
          id: "css-a-1",
          title: "Advanced Selectors & Specificity",
          content: `
            <p>Specificity is the algorithm browsers use to decide which CSS rule wins when multiple rules target the same element.</p>
            <h3>Specificity Hierarchy</h3>
            <pre><code>/* Specificity scores (a, b, c) */
*              /* 0,0,0 — universal */
div            /* 0,0,1 — element */
.class         /* 0,1,0 — class/attribute/pseudo-class */
#id            /* 1,0,0 — ID */
style=""       /* highest (inline) */
!important     /* overrides all — use sparingly! */</code></pre>
            <h3>Advanced Selectors</h3>
            <pre><code>/* Attribute selectors */
a[href^="https"] { }     /* starts with https */
a[href$=".pdf"]  { }     /* ends with .pdf */
a[href*="wiki"]  { }     /* contains wiki */

/* Pseudo-elements */
p::first-letter { font-size: 2em; }
p::before { content: "→ "; }
p::after  { content: " ←"; }
::selection { background: yellow; }

/* :is() and :where() */
:is(h1, h2, h3) { color: navy; }

/* :not() */
li:not(:last-child) { border-bottom: 1px solid #eee; }

/* :has() — parent selector! */
.card:has(img) { padding: 0; }
form:has(input:invalid) { border-color: red; }</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Advanced Selectors</title>\n<style>\n  * { box-sizing: border-box; }\n  body { font-family: sans-serif; padding: 24px; background: #f8fafc; }\n  /* Attribute selectors */\n  a[href^="https"]::before { content: "🔒 "; }\n  a[href$=".pdf"]::after  { content: " [PDF]"; color: red; font-size: 12px; }\n  /* Pseudo-element drop cap */\n  .drop-cap::first-letter {\n    font-size: 3em;\n    float: left;\n    line-height: 0.8;\n    margin-right: 8px;\n    color: #6366f1;\n    font-weight: bold;\n  }\n  /* :not() selector */\n  li:not(:last-child) { border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 8px; }\n  /* :has() - card with image gets no padding */\n  .card { background: white; border-radius: 10px; padding: 20px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }\n  .card:has(img) { padding: 0; overflow: hidden; }\n  .card:has(img) .card-body { padding: 16px; }\n  .card img { width: 100%; height: 120px; object-fit: cover; }\n  /* ::selection */\n  ::selection { background: #c7d2fe; color: #3730a3; }\n</style>\n</head>\n<body>\n  <h2>Attribute Selectors</h2>\n  <p><a href="https://example.com">Secure link</a> | <a href="doc.pdf">Download PDF</a></p>\n  <h2>Drop Cap (::first-letter)</h2>\n  <p class="drop-cap">This paragraph uses a drop cap on the first letter using the ::first-letter pseudo-element. Try selecting some text to see custom selection colors.</p>\n  <h2>:not() selector</h2>\n  <ul style="list-style:none;padding:0;max-width:200px">\n    <li>Item One</li>\n    <li>Item Two</li>\n    <li>Item Three</li>\n  </ul>\n  <h2>:has() — parent selector</h2>\n  <div class="card"><p>Text-only card keeps padding.</p></div>\n  <div class="card">\n    <img src="https://picsum.photos/400/120?grayscale" alt="photo">\n    <div class="card-body"><p>Image card removes top padding.</p></div>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "Which has the highest specificity?",
            options: [
              "An element selector (div)",
              "A class selector (.button)",
              "An ID selector (#submit)",
              "A universal selector (*)"
            ],
            answer: 2,
            explanation: "ID selectors (1,0,0) beat class selectors (0,1,0) which beat element selectors (0,0,1). IDs are the most specific standard selectors."
          }
        },
        {
          id: "css-a-2",
          title: "CSS Grid: Advanced Techniques",
          content: `
            <p>Master advanced Grid techniques for complex, responsive layouts without media queries.</p>
            <h3>auto-fit vs auto-fill</h3>
            <pre><code>/* auto-fill: creates as many columns as fit, even empty */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: collapses empty columns (usually what you want) */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code></pre>
            <h3>Subgrid</h3>
            <pre><code>.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.child {
  grid-column: span 2;
  display: grid;
  grid-template-columns: subgrid; /* inherit parent columns */
}</code></pre>
            <h3>Grid Masonry (experimental)</h3>
            <pre><code>grid-template-rows: masonry;</code></pre>
            <h3>Dense Packing</h3>
            <pre><code>grid-auto-flow: dense; /* fills holes with smaller items */</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> <code>minmax(min-content, 1fr)</code> prevents overflow on narrow screens — the column will never be smaller than its content.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Advanced Grid</title>\n<style>\n  * { box-sizing: border-box; margin: 0; }\n  body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }\n  h2 { color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 24px 0 12px; }\n  /* Auto-fit responsive grid — NO media queries! */\n  .auto-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 12px;\n  }\n  .tile {\n    background: #1e293b;\n    border-radius: 8px;\n    padding: 20px;\n    text-align: center;\n    font-size: 13px;\n    color: #94a3b8;\n  }\n  /* Dense packing: items fill holes */\n  .dense-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    grid-auto-flow: dense;\n  }\n  .dense-tile {\n    background: #1e293b;\n    border-radius: 8px;\n    padding: 16px;\n    font-size: 13px;\n    color: #94a3b8;\n    min-height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .wide  { grid-column: span 2; background: #312e81; }\n  .tall  { grid-row: span 2;    background: #1e3a5f; }\n  .large { grid-column: span 2; grid-row: span 2; background: #064e3b; }\n</style>\n</head>\n<body>\n  <h2>Auto-fit (responsive, no media queries)</h2>\n  <div class="auto-grid">\n    <div class="tile">Card 1</div>\n    <div class="tile">Card 2</div>\n    <div class="tile">Card 3</div>\n    <div class="tile">Card 4</div>\n    <div class="tile">Card 5</div>\n    <div class="tile">Card 6</div>\n  </div>\n  <h2>Dense Grid (fills holes automatically)</h2>\n  <div class="dense-grid">\n    <div class="dense-tile large">Large (2x2)</div>\n    <div class="dense-tile">A</div>\n    <div class="dense-tile tall">Tall (1x2)</div>\n    <div class="dense-tile wide">Wide (2x1)</div>\n    <div class="dense-tile">B</div>\n    <div class="dense-tile">C</div>\n    <div class="dense-tile">D</div>\n    <div class="dense-tile">E</div>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "What does 'grid-auto-flow: dense' do?",
            options: [
              "Makes all items the same size",
              "Fills in grid holes with smaller items that fit",
              "Makes the grid denser by reducing gap",
              "Forces all items into one column"
            ],
            answer: 1,
            explanation: "grid-auto-flow: dense allows the browser to place smaller items in gaps left by larger spanning items."
          }
        },
        {
          id: "css-a-3",
          title: "CSS Architecture & Methodologies",
          content: `
            <p>As projects grow, you need strategies for writing scalable, maintainable CSS.</p>
            <h3>BEM (Block Element Modifier)</h3>
            <pre><code>/* Block */
.card { }

/* Element (double underscore) */
.card__title { }
.card__image { }
.card__body { }

/* Modifier (double dash) */
.card--featured { }
.card--large { }
.card__btn--disabled { }</code></pre>
            <h3>Utility-First (Tailwind style)</h3>
            <pre><code>&lt;div class="flex items-center gap-4 p-4 rounded-lg bg-white"&gt;</code></pre>
            <h3>CSS Layers</h3>
            <pre><code>@layer reset, base, components, utilities;

@layer reset { * { margin: 0; } }
@layer base   { body { font-family: sans-serif; } }
@layer components { .btn { padding: 8px 16px; } }
@layer utilities  { .text-center { text-align: center; } }</code></pre>
            <h3>Container Queries (modern!)</h3>
            <pre><code>.card-wrapper { container-type: inline-size; }

@container (min-width: 400px) {
  .card { display: flex; }
}</code></pre>
            <div class="note-box"><strong>ℹ️ Note:</strong> Container queries respond to the parent container's size, not the viewport. Game-changer for reusable components!</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>CSS Architecture</title>\n<style>\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n  body { font-family: sans-serif; background: #f8fafc; padding: 24px; color: #1e293b; }\n  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin: 24px 0 12px; }\n\n  /* BEM naming */\n  .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); max-width: 300px; margin-bottom: 16px; }\n  .card__image { width: 100%; height: 140px; object-fit: cover; background: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size:40px; }\n  .card__body { padding: 16px; }\n  .card__title { font-size: 16px; font-weight: 700; margin-bottom: 6px; }\n  .card__desc { font-size: 13px; color: #64748b; margin-bottom: 12px; }\n  .card__btn { padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 6px; font-size: 13px; cursor: pointer; }\n  .card--featured { border: 2px solid #6366f1; }\n  .card--featured .card__title { color: #6366f1; }\n  .card__btn--disabled { background: #94a3b8; cursor: not-allowed; }\n\n  /* Container query demo */\n  .container-demo { container-type: inline-size; }\n  .cq-card { background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }\n  @container (min-width: 400px) {\n    .cq-card { display: flex; align-items: center; gap: 16px; padding: 20px; }\n    .cq-card .icon { font-size: 32px; }\n  }\n  .icon { font-size: 48px; margin-bottom: 8px; }\n</style>\n</head>\n<body>\n  <h2>BEM Naming</h2>\n  <div class="card card--featured">\n    <div class="card__image">🌟</div>\n    <div class="card__body">\n      <h3 class="card__title">Featured Course</h3>\n      <p class="card__desc">Learn CSS architecture patterns used in large teams.</p>\n      <button class="card__btn">Enroll Now</button>\n    </div>\n  </div>\n  <div class="card">\n    <div class="card__image">📚</div>\n    <div class="card__body">\n      <h3 class="card__title">Basic Course</h3>\n      <p class="card__desc">Already completed!</p>\n      <button class="card__btn card__btn--disabled" disabled>Completed</button>\n    </div>\n  </div>\n\n  <h2>Container Queries — resize the panel to see change</h2>\n  <div class="container-demo">\n    <div class="cq-card">\n      <div class="icon">🎯</div>\n      <div>\n        <strong>Container Query Card</strong>\n        <p style="font-size:13px;color:#64748b;margin-top:4px">When my container is wide enough, I switch to a row layout!</p>\n      </div>\n    </div>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "In BEM naming, what does a double dash (--) signify?",
            options: [
              "An element inside a block",
              "A modifier that changes the variant of a block or element",
              "A comment in BEM",
              "A child component"
            ],
            answer: 1,
            explanation: "In BEM: Block (block), Element (block__element), Modifier (block--modifier or block__element--modifier)."
          }
        }
      ]
    }
  ]
};
