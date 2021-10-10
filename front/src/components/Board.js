import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Input, Button, Form } from "antd";

const initialPost = {
  title: "",
  writer: localStorage.getItem("id"),
  content: "",
};

function Board(props) {
  const [post, setPost] = useState(initialPost);
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const { data } = await axios.get("http://localhost:3065/post");
    console.log(data);
    // setPosts(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async () => {
    const { data } = await axios.post("http://localhost:3065/post", post);
    getPost();
  };

  return (
    <div>
      <Header />
      게시판 입니다.
      <Form onFinish={handleSubmit}>
        <div>
          <label>제목</label>
          <Input
            name="title"
            type="text"
            required
            onChange={handleChange}
            value={post.title}
          />
        </div>
        <div>
          <label>작성자</label>
          <Input
            name="writer"
            type="text"
            required
            onChange={handleChange}
            value={post.writer}
          />
        </div>
        <div>
          <label>내용</label>
          <Input
            name="content"
            type="text"
            required
            onChange={handleChange}
            value={post.content}
          />
        </div>
        <Button type="primary" htmlType="submit">
          작성
        </Button>
      </Form>
      {posts}
    </div>
  );
}

export default Board;
