import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { postComment } from "../../../api/api";

const Commentform = () => {
  const queryClient = useQueryClient();

  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();

  const commentMutation = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const [comment, setComment] = useState({
    id: 0,
    writer: "",
    password: "",
    comment: "",
    date: "",
    like: 0,
    dislike: 0,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (comment.writer.trim() === "" || comment.comment.trim() === "" || comment.password.trim() === "") {
      alert("작성자 댓글내용 비밀번호를 입력해 주세요");
      return;
    }
    commentMutation.mutate({ ...comment, date: `${year}.${month}.${day} ${hour > 10 ? hour : "0"+hour}:${minute}` });
    setComment({
      id: 0,
      writer: "",
      password: "",
      comment: "",
      date: "",
      like: 0,
      dislike: 0,
    });
  };

  return (
    <form className="comment_container" onSubmit={onSubmitHandler}>
      <div className="writer_box">
        <label className="comment_label">
          <input type="text" name="writer" placeholder="작성자" className="writer_input" onChange={onChangeHandler} value={comment.writer} />
        </label>
        <label className="comment_label">
          <input type="password" name="password" placeholder="비밀번호" className="password_input" onChange={onChangeHandler} value={comment.password} />
        </label>
      </div>
      <label className="comment_label">
        댓글
        <input type="text" name="comment" className="comment_input" onChange={onChangeHandler} value={comment.comment} />
      </label>
      <button className="comment_btn">등록하기</button>
    </form>
  );
};

export default Commentform;
