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
    if (comment.writer.trim() === "" || comment.password.trim() === "") {
      alert("이름과 비밀번호를 설정해 주세요");
      return;
    }
    if (comment.writer.length > 10) {
      alert("이름이 너무 길어요\n이름은 10글자까지만 설정해주세요")
      return;
    }
    if (comment.password.length > 10) {
      alert("비밀번호가 너무 길어요\n비밀번호는 14글자까지만 설정해주세요")
      return;
    }
    if (comment.comment.trim() === "") {
      alert("내용을 입력해주세요")
      return;
    }
    if (comment.comment.length > 80) {
      alert("내용이 너무 길어요\n내용은 80글자까지만 작성해주세요")
      return;
    }
    commentMutation.mutate({ ...comment, date: `${year}.${month}.${day} ${hour > 9 ? hour : "0"+hour}:${minute > 9 ? minute : "0"+minute}` });
    setComment({
      id: 0,
      writer: "",
      password: "",
      comment: "",
      date: "",
      likes: 0,
      dislikes: 0,
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
