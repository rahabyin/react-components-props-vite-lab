# Personal Blog - React Components & Props Lab

## Description

A simple personal blog built with **React + Vite** to practice component-based architecture, props passing, default props, list rendering, styling, and testing.

---

## Features

* Component-based architecture
* About section with image + description
* Article list rendered from data
* Reusable Article components
* Default fallback values for missing props
* Responsive design (mobile-friendly)
* Unit testing with Jest + React Testing Library

---

## Installation & Setup
1. Clone the project
```bash
git clone <your-repo-url>
cd react-components-props-vite-lab

```
2. Install dependencies

```bash
npm install

```
3. Start development server

```bash
npm run dev

```

Open:

http://localhost:5173/

--- 

### Running Tests
npm test

---
## Project Structure

react-components-props-vite-lab/

public/
  * index.html
  * vite.svg

src/
  components/
   * App.jsx
   * Header.jsx
   * About.jsx
   * ArticleList.jsx
   * Article.jsx
   * PostDetail.jsx

data/
  * blog.js

tests/
  * App.test.jsx
  * Header.test.jsx
  * About.test.jsx
  * Article.test.jsx
  * ArticleList.test.jsx
  * App.css
  * main.jsx

package.json
vite.config.js
README.md
---

## Technologies

* React 18 – UI library  
* Vite – Build tool & dev server 
* React Router – Client-side routing
* JavaScript (ES6+) – Logic and DOM manipulation  
* CSS3 – Data retrieval  
* Jest – Testing framework  
* React Testing Library – Component testing

---

## Component Descriptions
### App.jsx
* Purpose: Root component with React Router setup
* Routes: Home (/) and Post Detail (/post/:id)
* Imports: Header, About, ArticleList, PostDetail, blogData, App.css

### Header.jsx
* Purpose: Displays blog title
* Props: name (string)

### About.jsx
* Purpose: Shows blog logo and description
* Props: image (string URL), about (string)
* Default: Placeholder image if none provided

### ArticleList.jsx
* Purpose: Renders list of all blog posts
* Props: posts (array)
* Logic: Maps posts to Article components with unique key props

### Article.jsx
* Purpose: Displays single article preview card
* Props: id, title, date, preview, link (optional)
* Behavior: External link (if link provided) or internal route

### PostDetail.jsx
* Purpose: Full article page
* Props: posts (array)
* Features: Back button, 404 handling

---

## Learning Outcomes
* How React components communicate
* How props work in real applications
* How to prevent errors using default props
* How to test components
* How to structure a React project properly

---

## Deployment
* Vercel (recommended)
* Github pages

---

## License

This project is for educational purposes only.

--- 

## Author

Rahab Wanja.

---