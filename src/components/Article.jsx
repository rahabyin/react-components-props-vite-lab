// src/components/Article.jsx

// Article Component
// Displays a single article preview
// Connected To:
// - ArticleList.jsx

function Article({
  title,
  date = "January 1, 1970",
  preview
}) {
  return (
    <article className="article">
      <h3>{title}</h3>

      <small>{date}</small>

      <p>{preview}</p>
    </article>
  );
}

export default Article;