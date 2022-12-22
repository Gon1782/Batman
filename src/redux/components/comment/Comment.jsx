import React, { useState } from "react";
import "./comment.css";

const Comment = () => {
  const [comment, setComment] = useState();
  const [writer, setWriter] = useState();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(value.length)
    name === "writer" ? setWriter(value) : setComment(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="comment_layout">
      <form className="comment_container" onSubmit={onSubmitHandler}>
        <label className="comment_label">
          작성자
          <input type="text" name="writer" className="writerInput" onChange={onChangeHandler} value={writer||""} />
        </label>
        <label className="comment_label">
          댓글
          <input type="text" name="comment" className="commentInput" onChange={onChangeHandler} value={comment||""} />
        </label>
        <button className="commentBtn">등록하기</button>
      </form>
      <div className="comment_list">
        <div className="comment_box">
          <div className="comment_body">
            <div className="writer">작성자</div>
            <div className="comment">가즈아!!!!!!!</div>
          </div>
          <div className="comment_footer">
            <button className="comment_like">❤️ 32</button>
            <button className="comment_like">💔 26</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
