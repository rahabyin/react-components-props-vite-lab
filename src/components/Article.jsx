
import React from "react";
import { Link } from "react-router-dom";


function Article({ id, title, date, preview, link }) {
  const displayDate = date || "January 1, 1970";
  // If external link provided, use <a>
  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="article-link"
      >
        <article>
          <h3>{title}</h3>
          <small>{displayDate}</small>
          <p>{preview}</p>
        </article>
      </a>
    );
  }

  // Otherwise use React Router <Link> for internal pages
  return (
    <Link to={`/post/${id}`} className="article-link">
      <article>
        <h3>{title}</h3>
        <small>{displayDate}</small>
        <p>{preview}</p>
      </article>
    </Link>
  );
}

export default Article;
