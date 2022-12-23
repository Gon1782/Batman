import React, { useState, useEffect } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function InputModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [posts, setPosts] = useState([]);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setPosts(data);
  };

  const onChangeText = (e) => {
    setPosts(e.target.value);
  };

  const OnSubmitHandler = async (posts) => {
    await axios.post("http://localhost:3001/posts", posts);
    useEffect(() => {
      fetchTodos();
    }, []);
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        글쓰기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>글쓰기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={OnSubmitHandler}>
            {/* 글 작성 칸 */}
            <FloatingLabel controlId="floatingTextarea2" label="제목을 적어주세요">
              <Form.Control as="textarea" placeholder="작성해주세요" style={{ height: "30px" }} onChange={onChangeText} defaultValue={posts.title} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="내용을 적어주세요">
              <Form.Control as="textarea" placeholder="작성해주세요" style={{ height: "250px" }} onChange={onChangeText} defaultValue={posts.contents} />
            </FloatingLabel>

            {/* 글 올리기 버튼 */}
            <Button type="submit" variant="secondary" className="my-3" style={{ width: "300px", margin: "auto", display: "block" }}>
              올리기
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default InputModal;
