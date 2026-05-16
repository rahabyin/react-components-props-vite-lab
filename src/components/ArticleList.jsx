// src/components/ArticleList.jsx

// ArticleList Component
// Purpose:
// Displays all blog articles.
//
// Connected To:
// - App.jsx
// - Article.jsx

import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main className="article-list">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;