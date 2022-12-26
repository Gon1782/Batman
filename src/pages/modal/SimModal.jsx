import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { removeCommunity } from "../../redux/modules/community";

import "./SimModal.css";

export default function Simmodal({ setSimmodal }) {
  console.log(setSimmodal);
  const closeModal = () => {
    setSimmodal(false);
  };

  const community = useSelector((state) => state.community);

  const dispatch = useDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(removeCommunity());

    closeModal();
  };

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();
  };
  {
    return (
      <div className="modal-modal-overlay">
        <div className="container">
          <button className="close" onClick={closeModal}>
            X
          </button>
          <div className="modal-Form">
            <form onSubmit={handleSubmitButtonClick}>
              <p className="simTitle">제목</p>
              <input type="text" className="title" />
              <p className="simContents">내용</p>
              <input type="text" className="contents" />
              <button onClick={() => handleDeleteButtonClick()} className="simBtn">
                삭제
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
