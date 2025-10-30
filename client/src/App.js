import React, { useState } from "react";
import posts from "./posts";
import "./App.css";

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    // FULL BLOG VIEW
    return (
      <div className="App full-blog">
        <button className="back-btn" onClick={() => setSelectedPost(null)}>
          ← Back
        </button>

        <div className="post-detail">
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="post-detail-img"
          />
          <h1>{selectedPost.title}</h1>
          <p className="meta">
            <b>{selectedPost.author}</b> • {selectedPost.date}
          </p>

          <div className="post-content">
            {selectedPost.fullContent.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {selectedPost.code && (
            <pre className="code-block">
              <code>{selectedPost.code}</code>
            </pre>
          )}

          <p className="tags">
            <b>Tags:</b> {selectedPost.tags.join(", ")}
          </p>
        </div>
      </div>
    );
  }

  // BLOG LIST VIEW
  return (
    <div className="App">
      <h1>💻 My Coding Blog</h1>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.image} alt={post.title} className="post-img" />
          <h2>{post.title}</h2>
          <p className="meta">
            <b>{post.author}</b> • {post.date}
          </p>
          <p>{post.content}</p>
          <p className="tags">
            <b>Tags:</b> {post.tags.join(", ")}
          </p>

          <button className="read-btn" onClick={() => setSelectedPost(post)}>
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
