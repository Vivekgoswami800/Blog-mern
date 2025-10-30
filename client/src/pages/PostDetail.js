import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        {post.imagePath && (
          <img
            src={`http://localhost:5000/${post.imagePath}`}
            className="card-img-top"
            alt={post.title}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

