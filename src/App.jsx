
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";      // ← Now in components/
import About from "./components/About";        // ← Now in components/
import ArticleList from "./components/ArticleList";  // ← Now in components/
import PostDetail from "./components/PostDetail";    // ← Now in components/
import blogData from "./data/blog";            // ← Now in data/
import "./App.css";                            // ← Same folder!

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header name={blogData.name} />
        <About image={blogData.image} about={blogData.about} />
        
        <Routes>
          <Route 
            path="/" 
            element={<ArticleList posts={blogData.posts} />} 
          />
          <Route 
            path="/post/:id" 
            element={<PostDetail posts={blogData.posts} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;