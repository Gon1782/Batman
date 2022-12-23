import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Form, Container, FloatingLabel } from 'react-bootstrap'

const InputModal = ({ show, onHide }) => {
  const [posts, setPosts] = useState({
    title: "",
    contents: "",
  });

  const onChangeText = (e) => {
    setPosts(e.target.value);
  };

  const onSubmitHandler = async (posts) => {
    await axios.post("http://localhost:3001/lists", posts);

    setPosts(data);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Container>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">글쓰기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmitHandler}>
              {/* 글 작성 칸 */}
              <FloatingLabel controlId="floatingTextarea2" label="제목을 적어주세요">
                <Form.Control as="textarea" placeholder="작성해주세요" style={{ height: "250px" }} onChange={onChangeText} value={title} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="내용을 적어주세요">
                <Form.Control as="textarea" placeholder="작성해주세요" style={{ height: "250px" }} onChange={onChangeText} value={contents} />
              </FloatingLabel>

              {/* 글 올리기 버튼 */}
              <Button type="submit" variant="info" className="my-3" style={{ width: "300px", margin: "auto", display: "block" }}>
                올리기
              </Button>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
};
export default InputModal;
