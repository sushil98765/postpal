

import { useContext, useState } from "react";
import { PostList } from "../store/post-list-store";
import { Form, Button, Col, Row, Alert, Badge, InputGroup, FormControl } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [reactions, setReactions] = useState(0);
  const [photo, setPhoto] = useState(null); // State for photo file
  const [video, setVideo] = useState(null); // State for video file
  const [showAlert, setShowAlert] = useState(false);

  const addNewPost = (event) => {
    event.preventDefault();
    const postData = {
      id: Date.now(),
      title,
      body,
      tags,
      reactions,
      photo,
      video,
    };
    addPost(postData);
    setTitle("");
    setBody("");
    setTags([]);
    setTagInput("");
    setReactions(0);
    setPhoto(null);
    setVideo(null);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="create-post-container">
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Post created successfully!
        </Alert>
      )}
      <h2 className="mb-4">Create New Post</h2>
      <Form onSubmit={addNewPost}>
        <Form.Group as={Row} className="mb-3" controlId="formTitle">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter post title" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formBody">
          <Form.Label column sm={2}>
            Body
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" rows={5} value={body} onChange={(e) => setBody(e.target.value)} placeholder="Enter post body" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formTags">
          <Form.Label column sm={2}>
            Tags
          </Form.Label>
          <Col sm={10}>
            <InputGroup>
              <FormControl type="text" value={tagInput} onChange={handleTagInputChange} onKeyDown={handleTagInputKeyDown} placeholder="Enter tags and press Enter" />
            </InputGroup>
            <div className="tag-list mt-2">
              {tags.map((tag, index) => (
                <Badge key={index} pill bg="primary" className="tag-badge">
                  {tag} <AiFillDelete onClick={() => removeTag(tag)} />
                </Badge>
              ))}
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formReactions">
          <Form.Label column sm={2}>
            Reactions
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" value={reactions} onChange={(e) => setReactions(e.target.value)} placeholder="Enter initial reactions" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPhoto">
          <Form.Label column sm={2}>
            Photo
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="file" accept="image/*" onChange={handlePhotoChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formVideo">
          <Form.Label column sm={2}>
            Video
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="file" accept="video/*" onChange={handleVideoChange} />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Post
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
