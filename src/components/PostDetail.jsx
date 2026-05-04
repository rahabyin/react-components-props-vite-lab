
import React from "react";
import { useParams, Link } from "react-router-dom";

function PostDetail({ posts }) {
  // Get the :id from the URL
  const { id } = useParams();
  
  // Find the post with matching id
  const post = posts.find((p) => p.id === parseInt(id));

  // If post not found, show error
  if (!post) {
    return (
      <div className="post-detail">
        <h2>Post Not Found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">← Back to all posts</Link>
      <article>
        <h1>{post.title}</h1>
        <small>{post.date}</small>
        <div className="post-content">
          <p>{post.preview}</p>
          <p>React data flow is based on a unidirectional (one-way) pattern, where data moves from parent components to child components through props. The parent component is responsible for holding and managing the state (data), and it passes that state down to its children as read-only values. Child components use this data to render the UI, but they cannot directly change it. If a child component needs to update the data, it does so by calling a function (also passed as a prop) that triggers a state update in the parent. This creates a clear cycle: state lives in the parent → props pass data down → user interaction triggers a callback → parent updates state → UI re-renders.</p>
          <p>This structure makes React applications more predictable and easier to debug because data always flows in a single direction. It also encourages better organization of components, where logic is centralized in higher-level components and presentation is handled by lower-level ones. In more complex apps, techniques like lifting state up, context, or state management libraries help manage data across multiple components while still following the same core principle of controlled, one-way data flow.</p>
        </div>
      </article>
    </div>
  );
}

export default PostDetail;