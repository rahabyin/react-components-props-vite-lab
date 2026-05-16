// src/App.jsx

// Main application component
// Connected Components:
// - Header
// - About
// - ArticleList

import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blog from "./data/blog";

function App() {
  return (
    <div className="App">
      <Header name={blog.name} />

      <About image={blog.image} about={blog.about} />

      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;