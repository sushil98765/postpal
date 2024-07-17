

import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
//import "../styles/Post.css"; // Import custom CSS for styling

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  const handleReactionClick = () => {
    // Implement reaction handling logic here
    alert(`You reacted to post ${post.id}`);
  };

  return (
    <div className="card mb-3 shadow">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="card-title">{post.title}</h5>
        <button className="btn btn-sm btn-danger" onClick={() => deletePost(post.id)}>
          <AiFillDelete />
        </button>
      </div>
      {post.photo && (
        <img src={URL.createObjectURL(post.photo)} className="card-img-top" alt="Post" />
      )}
      {post.video && (
        <video controls className="card-img-top">
          <source src={URL.createObjectURL(post.video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="card-body">
        <p className="card-text">{post.body}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="tags">
            {post.tags.map((tag) => (
              <span key={tag} className="badge bg-secondary me-2">{tag}</span>
            ))}
          </div>
          <button className="btn btn-sm btn-success" onClick={handleReactionClick}>React</button>
        </div>
      </div>
    </div>
  );
};

export default Post;

