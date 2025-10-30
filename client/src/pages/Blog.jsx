import React from 'react';
import './Blog.css'; // Optional: use if you want custom styling
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container className="blog-page my-5">
      <h1 className="text-center mb-4">Welcome to My Blog</h1>

      <article className="mb-5">
        <h2>🚀 Getting Started with My First Blog</h2>
        <p>
          This is my first blog page created using <strong>React.js</strong>. The purpose of this blog is to practice building dynamic and responsive web pages while learning the foundations of the MERN stack.
        </p>
        <p>
          I’ve structured the app using clean components and React Router to handle different pages. This basic blog is a stepping stone towards a fully functional platform with features like user login, content creation, and more.
        </p>
      </article>

      <article>
        <h2>📌 What I Learned</h2>
        <ul>
          <li>How to set up a React project from scratch</li>
          <li>Using React Router for creating multiple pages</li>
          <li>Creating reusable components and clean UI</li>
          <li>Setting up file structure for future backend integration</li>
        </ul>
        <p>
          I’m excited to expand this project into a full-stack blog using <strong>Node.js, Express, and MongoDB</strong> soon.
        </p>
      </article>
    </Container>
  );
};

export default Blog;

