# Personal Blog – React Components & Props Lab

A simple personal blog built with **React + Vite** to practice component-based architecture, props passing, default props, list rendering, styling, and testing.

---

## Features

- Component-based architecture
- About section with image + description
- Article list rendered from data
- Reusable Article components
- Default fallback values for missing props
- Responsive design (mobile-friendly)
- Unit testing with Jest + React Testing Library

---

## Installation & Setup

### 1. Clone the project
```bash
git clone <your-repo-url>
cd react-components-props-vite-lab

2. Install dependencies
npm install
3. Start development server
npm run dev

Open:

http://localhost:5173/


## Running Tests
npm test


## Styling

Global styles are in:

src/App.css

Includes:

Responsive layout
Card design for articles
Styled header and sidebar
Mobile-friendly design

## Components Overview
App.jsx

Main container that connects all components and passes data.

Header.jsx

Displays blog title.

About.jsx

Shows:

Blog image
Description text
Uses fallback image if none provided
ArticleList.jsx

Maps through blog posts and renders Article components.

Article.jsx

Displays:

Title
Date (with default fallback)
Preview text

## 🛠 Tech Stack
React 18
Vite
JavaScript (ES6+)
CSS3
Jest
React Testing Library

## Learning Outcomes
How React components communicate
How props work in real applications
How to prevent errors using default props
How to test components
How to structure a React project properly

## License

This project is for educational purposes only.