import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./Modal.css";
import { addCommunity } from "../../redux/modules/community";

export default function Modal({ setModal }) {
  const closeModal = () => {
    setModal(false);
  };

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const newCommunity = {
      id: uuidv4(),
      title,
      contents,
    };

    dispatch(addCommunity(newCommunity));
    closeModal();
  };

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsInputChange = (event) => {
    setContents(event.target.value);
  };
  return (
    <div className="modal-modal-overlay">
      <div className="container">
        <button className="close" onClick={closeModal}>
          X
        </button>
        <div className="modal-Form">
          <form onSubmit={handleSubmitButtonClick}>
            <p className="simTitle">제목</p>
            <input onChange={handleTitleInputChange} value={title} type="text" className="title" />
            <p className="simContents">내용</p>
            <input onChange={handleContentsInputChange} value={contents} type="text" className="contents" />
            <button className="simBtn">등록하기</button>
          </form>
        </div>
      </div>
    </div>
  );
}
