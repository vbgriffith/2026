// ═══════════════════════════════════════════════════
//  HTML LESSONS  — Beginner → Intermediate → Advanced
// ═══════════════════════════════════════════════════
const HTML_LESSONS = {
  track: "html",
  label: "HTML",
  icon: "&lt;/&gt;",
  subtitle: "Structure the web",
  color: "html",
  levels: [
    {
      id: "beginner",
      label: "Beginner",
      lessons: [
        {
          id: "html-b-1",
          title: "What is HTML?",
          content: `
            <p>HTML stands for <strong>HyperText Markup Language</strong>. It is the standard language for creating web pages. Every website you visit is built using HTML.</p>
            <p>HTML uses <strong>tags</strong> to describe content. Tags are like labels that tell the browser what type of content to display.</p>
            <h3>Your First HTML Document</h3>
            <p>Every HTML page has a standard structure:</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
            <ul>
              <li><code>&lt;!DOCTYPE html&gt;</code> — Tells the browser this is HTML5</li>
              <li><code>&lt;html&gt;</code> — The root element that wraps everything</li>
              <li><code>&lt;head&gt;</code> — Contains metadata (not visible on page)</li>
              <li><code>&lt;body&gt;</code> — Contains all visible content</li>
            </ul>
            <div class="tip-box"><strong>💡 Tip:</strong> HTML tags come in pairs — an opening tag <code>&lt;tag&gt;</code> and a closing tag <code>&lt;/tag&gt;</code>. The closing tag has a forward slash.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <!-- Change the heading text below -->\n    <h1>Hello, World!</h1>\n    <p>This is my first webpage!</p>\n  </body>\n</html>`
          },
          quiz: {
            question: "What does HTML stand for?",
            options: [
              "HyperText Markup Language",
              "High-Tech Modern Language",
              "HyperText Making Links",
              "Home Tool Markup Language"
            ],
            answer: 0,
            explanation: "HTML stands for HyperText Markup Language — the standard language for structuring web pages."
          }
        },
        {
          id: "html-b-2",
          title: "Headings & Paragraphs",
          content: `
            <p>HTML provides six levels of headings, from <code>&lt;h1&gt;</code> (largest) to <code>&lt;h6&gt;</code> (smallest). Use headings to organize your content like chapters in a book.</p>
            <pre><code>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Section Title&lt;/h2&gt;
&lt;h3&gt;Sub-section&lt;/h3&gt;
&lt;h4&gt;Sub-sub-section&lt;/h4&gt;</code></pre>
            <h3>Paragraphs</h3>
            <p>The <code>&lt;p&gt;</code> tag creates a paragraph. Browsers automatically add space above and below paragraphs.</p>
            <pre><code>&lt;p&gt;This is a paragraph of text.&lt;/p&gt;
&lt;p&gt;This is another paragraph.&lt;/p&gt;</code></pre>
            <h3>Line Breaks</h3>
            <p>Use <code>&lt;br&gt;</code> (a self-closing tag) to add a line break without starting a new paragraph.</p>
            <div class="note-box"><strong>ℹ️ Note:</strong> Always use only one <code>&lt;h1&gt;</code> per page. It's the main title and matters for accessibility and SEO.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n  <head><title>Headings</title></head>\n  <body>\n    <!-- Add headings h1 through h3 and two paragraphs -->\n    <h1>My Blog</h1>\n    <h2>First Post</h2>\n    <p>Write your first paragraph here.</p>\n    <p>And your second paragraph here.</p>\n  </body>\n</html>`
          },
          quiz: {
            question: "Which heading tag is the largest and most important?",
            options: ["&lt;h6&gt;", "&lt;h3&gt;", "&lt;h1&gt;", "&lt;heading&gt;"],
            answer: 2,
            explanation: "h1 is the largest heading and should be used once per page as the main title."
          }
        },
        {
          id: "html-b-3",
          title: "Links & Images",
          content: `
            <p>Links and images are essential web building blocks. They connect pages and add visual content.</p>
            <h3>Anchor Tags (Links)</h3>
            <p>The <code>&lt;a&gt;</code> tag creates a hyperlink. The <code>href</code> attribute specifies the destination URL.</p>
            <pre><code>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;
&lt;a href="https://example.com" target="_blank"&gt;Open in new tab&lt;/a&gt;</code></pre>
            <h3>Images</h3>
            <p>The <code>&lt;img&gt;</code> tag displays an image. It is self-closing and requires two key attributes:</p>
            <ul>
              <li><code>src</code> — The path or URL of the image</li>
              <li><code>alt</code> — Descriptive text if the image fails to load (required for accessibility!)</li>
            </ul>
            <pre><code>&lt;img src="photo.jpg" alt="A scenic mountain view" /&gt;
&lt;img src="https://picsum.photos/300/200" alt="Random photo" /&gt;</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Always include a meaningful <code>alt</code> attribute on images — it helps screen readers and SEO.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n  <head><title>Links & Images</title></head>\n  <body>\n    <h1>My Favourite Links</h1>\n    <p>Visit <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a> to learn anything!</p>\n\n    <h2>A Beautiful Image</h2>\n    <img src="https://picsum.photos/400/250" alt="A random beautiful photo" />\n  </body>\n</html>`
          },
          quiz: {
            question: "Which attribute specifies where a link goes?",
            options: ["src", "href", "link", "url"],
            answer: 1,
            explanation: "The href attribute (Hypertext REFerence) defines the destination URL for an anchor tag."
          }
        },
        {
          id: "html-b-4",
          title: "Lists",
          content: `
            <p>HTML has two main types of lists: <strong>unordered</strong> (bullet points) and <strong>ordered</strong> (numbered).</p>
            <h3>Unordered Lists</h3>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;Apples&lt;/li&gt;
  &lt;li&gt;Bananas&lt;/li&gt;
  &lt;li&gt;Oranges&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            <h3>Ordered Lists</h3>
            <pre><code>&lt;ol&gt;
  &lt;li&gt;Wake up&lt;/li&gt;
  &lt;li&gt;Drink coffee&lt;/li&gt;
  &lt;li&gt;Write code&lt;/li&gt;
&lt;/ol&gt;</code></pre>
            <h3>Nested Lists</h3>
            <p>You can put a list inside another list item to create a nested structure:</p>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;Fruits
    &lt;ul&gt;
      &lt;li&gt;Apples&lt;/li&gt;
      &lt;li&gt;Bananas&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n  <head><title>Lists</title></head>\n  <body>\n    <h1>Shopping List</h1>\n    <ul>\n      <li>Bread</li>\n      <li>Milk</li>\n      <li>Eggs</li>\n    </ul>\n\n    <h2>Recipe Steps</h2>\n    <ol>\n      <li>Preheat oven to 350°F</li>\n      <li>Mix ingredients</li>\n      <li>Bake for 30 minutes</li>\n    </ol>\n  </body>\n</html>`
          },
          quiz: {
            question: "Which tag creates a numbered (ordered) list?",
            options: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;ol&gt;", "&lt;nl&gt;"],
            answer: 2,
            explanation: "ol stands for 'ordered list' and creates a numbered list. ul creates an unordered (bulleted) list."
          }
        },
        {
          id: "html-b-5",
          title: "Text Formatting",
          content: `
            <p>HTML provides several tags for formatting text to add emphasis and meaning.</p>
            <h3>Common Formatting Tags</h3>
            <ul>
              <li><code>&lt;strong&gt;</code> — <strong>Bold</strong> text (important)</li>
              <li><code>&lt;em&gt;</code> — <em>Italic</em> text (emphasis)</li>
              <li><code>&lt;u&gt;</code> — <u>Underlined</u> text</li>
              <li><code>&lt;mark&gt;</code> — <mark>Highlighted</mark> text</li>
              <li><code>&lt;small&gt;</code> — <small>Smaller</small> text</li>
              <li><code>&lt;del&gt;</code> — <del>Strikethrough</del> text</li>
              <li><code>&lt;sup&gt;</code> — Superscript: x<sup>2</sup></li>
              <li><code>&lt;sub&gt;</code> — Subscript: H<sub>2</sub>O</li>
            </ul>
            <h3>Semantic vs Presentational</h3>
            <p>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> rather than <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> because they carry <em>meaning</em> — they tell browsers and screen readers that the text is important or emphasized.</p>
            <div class="tip-box"><strong>💡 Tip:</strong> CSS is usually the better way to style text appearance. Use HTML tags only when they add semantic meaning.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n  <head><title>Text Formatting</title></head>\n  <body>\n    <h1>Text Formatting Examples</h1>\n    <p>This is <strong>bold and important</strong> text.</p>\n    <p>This is <em>italicized emphasis</em> text.</p>\n    <p>Water is H<sub>2</sub>O and area is r<sup>2</sup>.</p>\n    <p>This text is <mark>highlighted</mark> for attention.</p>\n    <p><del>Old price: $50</del> New price: $30</p>\n  </body>\n</html>`
          },
          quiz: {
            question: "Which tag should you use for text that is critically important (not just visually bold)?",
            options: ["&lt;b&gt;", "&lt;bold&gt;", "&lt;strong&gt;", "&lt;em&gt;"],
            answer: 2,
            explanation: "strong conveys semantic importance, while b is just visual. Screen readers treat strong differently."
          }
        }
      ]
    },
    {
      id: "intermediate",
      label: "Intermediate",
      lessons: [
        {
          id: "html-i-1",
          title: "Semantic HTML",
          content: `
            <p>Semantic HTML means using tags that describe the <em>meaning</em> of content, not just its appearance. This improves accessibility, SEO, and code readability.</p>
            <h3>Layout Elements</h3>
            <pre><code>&lt;header&gt;  — Site header / top of page
&lt;nav&gt;     — Navigation menus
&lt;main&gt;    — Primary page content
&lt;section&gt; — A thematic group of content
&lt;article&gt; — Self-contained content (blog post, news)
&lt;aside&gt;   — Sidebar or supplementary content
&lt;footer&gt;  — Site footer / bottom of page</code></pre>
            <h3>Why It Matters</h3>
            <p>Screen readers use these tags to help visually impaired users navigate pages. Search engines use them to better understand your content's structure.</p>
            <pre><code>&lt;!-- Bad (non-semantic) --&gt;
&lt;div id="header"&gt;...&lt;/div&gt;
&lt;div id="nav"&gt;...&lt;/div&gt;

&lt;!-- Good (semantic) --&gt;
&lt;header&gt;...&lt;/header&gt;
&lt;nav&gt;...&lt;/nav&gt;</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Semantic HTML</title>\n</head>\n<body>\n  <header>\n    <h1>My Website</h1>\n    <nav>\n      <a href="#">Home</a> |\n      <a href="#">About</a> |\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <h2>My First Blog Post</h2>\n      <p>This is an article about semantic HTML.</p>\n    </article>\n    <aside>\n      <h3>Related Topics</h3>\n      <p>Accessibility, SEO, HTML5</p>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2024 My Website</p>\n  </footer>\n</body>\n</html>`
          },
          quiz: {
            question: "Which semantic element should wrap the main navigation menu?",
            options: ["&lt;menu&gt;", "&lt;nav&gt;", "&lt;header&gt;", "&lt;section&gt;"],
            answer: 1,
            explanation: "The nav element is specifically designed for navigation links and menus."
          }
        },
        {
          id: "html-i-2",
          title: "HTML Forms",
          content: `
            <p>Forms allow users to input data. They're used for login pages, search bars, contact forms, and much more.</p>
            <h3>Basic Form Structure</h3>
            <pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Your Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name" placeholder="John Doe"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
            <h3>Common Input Types</h3>
            <pre><code>&lt;input type="text"&gt;     — Single-line text
&lt;input type="email"&gt;    — Email address (with validation)
&lt;input type="password"&gt; — Hidden text
&lt;input type="number"&gt;   — Numeric input
&lt;input type="checkbox"&gt; — Checkbox
&lt;input type="radio"&gt;    — Radio button
&lt;input type="date"&gt;     — Date picker
&lt;textarea&gt;&lt;/textarea&gt;  — Multi-line text
&lt;select&gt;&lt;/select&gt;      — Dropdown menu</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Always use <code>&lt;label&gt;</code> with your inputs! Connect them with matching <code>for</code> and <code>id</code> attributes for accessibility.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>HTML Forms</title>\n<style>\n  body { font-family: sans-serif; max-width: 400px; margin: 40px auto; padding: 20px; }\n  label { display: block; margin: 12px 0 4px; font-weight: bold; }\n  input, textarea, select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }\n  button { margin-top: 16px; padding: 10px 24px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; }\n</style>\n</head>\n<body>\n  <h1>Contact Form</h1>\n  <form>\n    <label for="name">Full Name:</label>\n    <input type="text" id="name" name="name" placeholder="Jane Doe">\n\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" placeholder="jane@example.com">\n\n    <label for="subject">Subject:</label>\n    <select id="subject" name="subject">\n      <option>General Inquiry</option>\n      <option>Technical Support</option>\n      <option>Billing</option>\n    </select>\n\n    <label for="message">Message:</label>\n    <textarea id="message" name="message" rows="4"></textarea>\n\n    <button type="submit">Send Message</button>\n  </form>\n</body>\n</html>`
          },
          quiz: {
            question: "What attribute links a label to its input field?",
            options: ["name", "id", "for (matching the input's id)", "link"],
            answer: 2,
            explanation: "The for attribute on label should match the id attribute of the input it describes."
          }
        },
        {
          id: "html-i-3",
          title: "HTML Tables",
          content: `
            <p>Tables are used to display tabular data — information that naturally fits into rows and columns.</p>
            <h3>Table Structure</h3>
            <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Age&lt;/th&gt;
      &lt;th&gt;City&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Alice&lt;/td&gt;
      &lt;td&gt;28&lt;/td&gt;
      &lt;td&gt;London&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            <ul>
              <li><code>&lt;table&gt;</code> — The table container</li>
              <li><code>&lt;thead&gt;</code> — Header rows group</li>
              <li><code>&lt;tbody&gt;</code> — Body rows group</li>
              <li><code>&lt;tr&gt;</code> — Table row</li>
              <li><code>&lt;th&gt;</code> — Header cell (bold, centered by default)</li>
              <li><code>&lt;td&gt;</code> — Data cell</li>
            </ul>
            <div class="note-box"><strong>ℹ️ Note:</strong> Never use tables for layout! Tables are only for tabular data. Use CSS Grid or Flexbox for page layout.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Tables</title>\n<style>\n  body { font-family: sans-serif; padding: 20px; }\n  table { width: 100%; border-collapse: collapse; }\n  th, td { padding: 10px 14px; text-align: left; border-bottom: 1px solid #ddd; }\n  th { background: #f0f0f0; font-weight: bold; }\n  tr:hover { background: #f9f9f9; }\n</style>\n</head>\n<body>\n  <h1>Student Grades</h1>\n  <table>\n    <thead>\n      <tr>\n        <th>Student</th>\n        <th>Subject</th>\n        <th>Grade</th>\n        <th>Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Alice Johnson</td>\n        <td>Mathematics</td>\n        <td>92%</td>\n        <td>Pass</td>\n      </tr>\n      <tr>\n        <td>Bob Smith</td>\n        <td>Science</td>\n        <td>78%</td>\n        <td>Pass</td>\n      </tr>\n      <tr>\n        <td>Carol White</td>\n        <td>English</td>\n        <td>88%</td>\n        <td>Pass</td>\n      </tr>\n    </tbody>\n  </table>\n</body>\n</html>`
          },
          quiz: {
            question: "Which tag defines a header cell in a table?",
            options: ["&lt;td&gt;", "&lt;th&gt;", "&lt;tr&gt;", "&lt;header&gt;"],
            answer: 1,
            explanation: "th (table header) defines a header cell. It renders bold and centered by default."
          }
        },
        {
          id: "html-i-4",
          title: "Divs, Spans & Classes",
          content: `
            <p><code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> are generic containers used for grouping and styling elements.</p>
            <h3>div — Block Container</h3>
            <p>A <code>&lt;div&gt;</code> is a <strong>block-level</strong> element. It takes up the full width and starts on a new line. Use it to group larger sections.</p>
            <pre><code>&lt;div class="card"&gt;
  &lt;h2&gt;Card Title&lt;/h2&gt;
  &lt;p&gt;Card content here.&lt;/p&gt;
&lt;/div&gt;</code></pre>
            <h3>span — Inline Container</h3>
            <p>A <code>&lt;span&gt;</code> is an <strong>inline</strong> element. It sits within text without breaking the line. Use it to style part of a text.</p>
            <pre><code>&lt;p&gt;The sky is &lt;span style="color:blue"&gt;blue&lt;/span&gt; today.&lt;/p&gt;</code></pre>
            <h3>Classes and IDs</h3>
            <ul>
              <li><code>class</code> — Can be used on multiple elements. Target with CSS <code>.classname</code></li>
              <li><code>id</code> — Must be unique per page. Target with CSS <code>#idname</code></li>
            </ul>
            <pre><code>&lt;div class="card featured" id="main-card"&gt;...&lt;/div&gt;</code></pre>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Divs & Spans</title>\n<style>\n  body { font-family: sans-serif; padding: 20px; background: #f5f5f5; }\n  .card { background: white; border-radius: 8px; padding: 20px; margin: 16px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }\n  .card h2 { margin-top: 0; }\n  .highlight { background: yellow; padding: 2px 4px; border-radius: 3px; }\n  .price { color: green; font-weight: bold; }\n</style>\n</head>\n<body>\n  <div class="card">\n    <h2>Product: Web Course</h2>\n    <p>Learn HTML, CSS and JavaScript from <span class="highlight">beginner to advanced</span>.</p>\n    <p>Price: <span class="price">$49.99</span></p>\n  </div>\n  <div class="card">\n    <h2>Another Product</h2>\n    <p>More great content for <span class="highlight">aspiring developers</span>.</p>\n    <p>Price: <span class="price">$29.99</span></p>\n  </div>\n</body>\n</html>`
          },
          quiz: {
            question: "What is the difference between div and span?",
            options: [
              "div is for text, span is for images",
              "div is block-level (new line), span is inline (within text)",
              "span is newer than div",
              "There is no difference"
            ],
            answer: 1,
            explanation: "div is a block-level container (takes full width, starts new line), span is inline (sits within text flow)."
          }
        },
        {
          id: "html-i-5",
          title: "HTML Media: Video & Audio",
          content: `
            <p>HTML5 introduced native support for embedding video and audio without plugins.</p>
            <h3>Video</h3>
            <pre><code>&lt;video width="640" height="360" controls&gt;
  &lt;source src="movie.mp4" type="video/mp4"&gt;
  &lt;source src="movie.webm" type="video/webm"&gt;
  Your browser does not support HTML video.
&lt;/video&gt;</code></pre>
            <p>Common attributes: <code>controls</code>, <code>autoplay</code>, <code>muted</code>, <code>loop</code>, <code>poster</code> (thumbnail image)</p>
            <h3>Audio</h3>
            <pre><code>&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support HTML audio.
&lt;/audio&gt;</code></pre>
            <h3>iframes — Embedding External Content</h3>
            <p>Use <code>&lt;iframe&gt;</code> to embed external content like YouTube videos or Google Maps:</p>
            <pre><code>&lt;iframe 
  width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowfullscreen&gt;
&lt;/iframe&gt;</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> Always provide multiple source formats for video/audio for cross-browser compatibility.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>HTML Media</title>\n<style>body { font-family: sans-serif; padding: 24px; max-width: 700px; margin: auto; }</style>\n</head>\n<body>\n  <h1>HTML Media Elements</h1>\n\n  <h2>Embedded YouTube Video</h2>\n  <iframe\n    width="560"\n    height="315"\n    src="https://www.youtube.com/embed/dQw4w9WgXcQ"\n    title="YouTube video"\n    allowfullscreen\n    style="border:none; border-radius: 8px;">\n  </iframe>\n\n  <h2>Audio Player</h2>\n  <p>Audio requires a valid source file. In a real project, provide an .mp3 or .ogg file.</p>\n  <audio controls style="width:100%">\n    <source src="audio.mp3" type="audio/mpeg">\n    Your browser does not support the audio element.\n  </audio>\n</body>\n</html>`
          },
          quiz: {
            question: "Which attribute on a video element shows the default playback controls?",
            options: ["play", "controls", "src", "autostart"],
            answer: 1,
            explanation: "The controls attribute tells the browser to show default video controls (play, pause, volume, etc.)"
          }
        }
      ]
    },
    {
      id: "advanced",
      label: "Advanced",
      lessons: [
        {
          id: "html-a-1",
          title: "Accessibility (A11y)",
          content: `
            <p>Web accessibility ensures your website works for everyone, including people with disabilities. It's both an ethical requirement and often a legal one.</p>
            <h3>ARIA Attributes</h3>
            <p>ARIA (Accessible Rich Internet Applications) attributes add semantic meaning to elements:</p>
            <pre><code>&lt;!-- Role --&gt;
&lt;div role="button" tabindex="0"&gt;Click me&lt;/div&gt;

&lt;!-- Labels --&gt;
&lt;button aria-label="Close dialog"&gt;✕&lt;/button&gt;

&lt;!-- States --&gt;
&lt;button aria-expanded="false"&gt;Menu&lt;/button&gt;
&lt;input aria-required="true"&gt;

&lt;!-- Live regions --&gt;
&lt;div aria-live="polite" id="status"&gt;&lt;/div&gt;</code></pre>
            <h3>Key Principles (WCAG)</h3>
            <ul>
              <li><strong>Perceivable</strong> — All content can be perceived (alt text, captions)</li>
              <li><strong>Operable</strong> — Everything works with keyboard alone</li>
              <li><strong>Understandable</strong> — Clear language, predictable UI</li>
              <li><strong>Robust</strong> — Works with assistive technologies</li>
            </ul>
            <div class="note-box"><strong>ℹ️ Note:</strong> The best accessibility is semantic HTML. Use <code>&lt;button&gt;</code> for buttons, <code>&lt;a&gt;</code> for links — don't reinvent them with divs.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Accessible Page</title>\n  <style>\n    body { font-family: sans-serif; padding: 24px; max-width: 600px; margin: auto; }\n    .skip-link { position: absolute; left: -9999px; }\n    .skip-link:focus { position: static; }\n    button:focus, a:focus { outline: 3px solid #0066cc; }\n  </style>\n</head>\n<body>\n  <!-- Skip to main content for keyboard users -->\n  <a href="#main-content" class="skip-link">Skip to main content</a>\n\n  <header role="banner">\n    <h1>Accessible Website</h1>\n    <nav role="navigation" aria-label="Main navigation">\n      <a href="#">Home</a> |\n      <a href="#">About</a>\n    </nav>\n  </header>\n\n  <main id="main-content" role="main">\n    <h2>Contact Us</h2>\n    <form>\n      <label for="user-email">Email Address (required):</label>\n      <input type="email" id="user-email" aria-required="true" aria-describedby="email-hint">\n      <p id="email-hint" style="font-size:12px; color:#666">We'll never share your email.</p>\n      <button type="submit">Send</button>\n    </form>\n  </main>\n</body>\n</html>`
          },
          quiz: {
            question: "What does ARIA stand for?",
            options: [
              "Automatic Responsive Interface Attributes",
              "Accessible Rich Internet Applications",
              "Advanced Rendering and Interaction API",
              "Adaptive Rich Interface Architecture"
            ],
            answer: 1,
            explanation: "ARIA stands for Accessible Rich Internet Applications — a set of attributes to improve web accessibility."
          }
        },
        {
          id: "html-a-2",
          title: "HTML5 APIs & Meta Tags",
          content: `
            <p>HTML5 introduced powerful APIs and meta tags for building modern, app-like web experiences.</p>
            <h3>Essential Meta Tags</h3>
            <pre><code>&lt;!-- Character encoding --&gt;
&lt;meta charset="UTF-8"&gt;

&lt;!-- Responsive viewport --&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;

&lt;!-- SEO description --&gt;
&lt;meta name="description" content="Page description"&gt;

&lt;!-- Open Graph (social sharing) --&gt;
&lt;meta property="og:title" content="Page Title"&gt;
&lt;meta property="og:image" content="image.jpg"&gt;

&lt;!-- Theme color (mobile browser) --&gt;
&lt;meta name="theme-color" content="#0066cc"&gt;</code></pre>
            <h3>data-* Attributes</h3>
            <p>Custom data attributes let you embed custom data in HTML that JavaScript can read:</p>
            <pre><code>&lt;div class="product" data-id="42" data-price="9.99"&gt;
  Widget Pro
&lt;/div&gt;

&lt;script&gt;
  const el = document.querySelector('.product');
  console.log(el.dataset.id);    // "42"
  console.log(el.dataset.price); // "9.99"
&lt;/script&gt;</code></pre>
            <div class="tip-box"><strong>💡 Tip:</strong> data-* attributes are perfect for storing state or configuration in the HTML that your JS needs.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="A store with interactive products using data attributes">\n  <meta name="theme-color" content="#6366f1">\n  <title>Product Store — data-* Demo</title>\n  <style>\n    body { font-family: sans-serif; padding: 24px; background: #f5f5f5; }\n    .product { background: white; border-radius: 8px; padding: 16px; margin: 12px 0; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 2px 6px rgba(0,0,0,0.08); }\n    button { padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer; }\n    #cart { margin-top: 20px; padding: 16px; background: #fff3cd; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <h1>Product Store</h1>\n  <div class="product" data-id="1" data-name="Web Course" data-price="49.99">\n    <span>Web Course</span>\n    <button onclick="addToCart(this)">Add to Cart — $49.99</button>\n  </div>\n  <div class="product" data-id="2" data-name="CSS Masterclass" data-price="29.99">\n    <span>CSS Masterclass</span>\n    <button onclick="addToCart(this)">Add to Cart — $29.99</button>\n  </div>\n  <div id="cart"><strong>Cart:</strong> Empty</div>\n  <script>\n    const cart = [];\n    function addToCart(btn) {\n      const product = btn.closest('.product');\n      const name = product.dataset.name;\n      const price = product.dataset.price;\n      cart.push(name);\n      document.getElementById('cart').innerHTML =\n        '<strong>Cart:</strong> ' + cart.join(', ');\n    }\n  </script>\n</body>\n</html>`
          },
          quiz: {
            question: "How do you access a data-price attribute in JavaScript?",
            options: [
              "element.getAttribute('data-price')",
              "element.dataset.price",
              "Both of the above work",
              "element.data.price"
            ],
            answer: 2,
            explanation: "Both getAttribute('data-price') and dataset.price work. dataset is cleaner and modern; getAttribute is more explicit."
          }
        },
        {
          id: "html-a-3",
          title: "Forms: Advanced Validation",
          content: `
            <p>HTML5 has built-in form validation attributes that work without any JavaScript.</p>
            <h3>Validation Attributes</h3>
            <pre><code>&lt;!-- Required field --&gt;
&lt;input type="text" required&gt;

&lt;!-- Min/max length --&gt;
&lt;input type="text" minlength="3" maxlength="20"&gt;

&lt;!-- Number range --&gt;
&lt;input type="number" min="1" max="100" step="5"&gt;

&lt;!-- Pattern (regex) --&gt;
&lt;input type="text" pattern="[A-Za-z]{3,}"
  title="At least 3 letters"&gt;

&lt;!-- Email format --&gt;
&lt;input type="email" required&gt;

&lt;!-- URL format --&gt;
&lt;input type="url"&gt;</code></pre>
            <h3>Custom Validation with JS</h3>
            <pre><code>const input = document.getElementById('username');
input.addEventListener('input', () => {
  if (input.value.includes(' ')) {
    input.setCustomValidity('No spaces allowed!');
  } else {
    input.setCustomValidity('');
  }
});</code></pre>
            <div class="note-box"><strong>ℹ️ Note:</strong> Client-side validation improves UX but <em>never</em> replaces server-side validation. Always validate on the server too.</div>
          `,
          starterCode: {
            html: `<!DOCTYPE html>\n<html>\n<head><title>Advanced Form Validation</title>\n<style>\n  body { font-family: sans-serif; max-width: 450px; margin: 40px auto; padding: 20px; }\n  .field { margin-bottom: 16px; }\n  label { display: block; margin-bottom: 5px; font-weight: 600; }\n  input { width: 100%; padding: 9px 12px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px; }\n  input:valid   { border-color: #22c55e; }\n  input:invalid { border-color: #ef4444; }\n  input:placeholder-shown { border-color: #ddd; }\n  button { width: 100%; padding: 12px; background: #0066cc; color: white; border: none; border-radius: 6px; font-size: 15px; cursor: pointer; }\n  .hint { font-size: 12px; color: #666; margin-top: 4px; }\n</style>\n</head>\n<body>\n  <h2>Create Account</h2>\n  <form novalidate id="signup-form">\n    <div class="field">\n      <label for="username">Username</label>\n      <input type="text" id="username" name="username"\n        minlength="3" maxlength="20"\n        pattern="[a-zA-Z0-9_]+"\n        placeholder="letters, numbers, underscore"\n        required>\n      <p class="hint">3–20 chars, letters/numbers/underscore only</p>\n    </div>\n    <div class="field">\n      <label for="reg-email">Email</label>\n      <input type="email" id="reg-email" name="email" placeholder="you@example.com" required>\n    </div>\n    <div class="field">\n      <label for="age">Age</label>\n      <input type="number" id="age" name="age" min="13" max="120" placeholder="18" required>\n    </div>\n    <button type="submit">Create Account</button>\n  </form>\n  <script>\n    document.getElementById('signup-form').addEventListener('submit', e => {\n      e.preventDefault();\n      if (e.target.checkValidity()) {\n        alert('Form is valid! Would submit now.');\n      } else {\n        alert('Please fix the errors in the form.');\n      }\n    });\n  </script>\n</body>\n</html>`
          },
          quiz: {
            question: "Which attribute makes an input field reject empty submissions?",
            options: ["validate", "required", "mandatory", "notempty"],
            answer: 1,
            explanation: "The required attribute prevents form submission if the field is empty."
          }
        }
      ]
    }
  ]
};
