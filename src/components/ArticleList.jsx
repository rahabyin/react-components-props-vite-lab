
import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date || undefined}
          preview={post.preview}
          link={post.link}  // PASS LINK PROP
        />
      ))}
    </main>
  );
}

export default ArticleList;