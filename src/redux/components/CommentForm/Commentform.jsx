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
    if (comment.writer.trim() === "" || comment.comment.trim() === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    commentMutation.mutate({ ...comment, date: `${year}.${month}.${day} ${hour}:${minute}` });
    setComment({
      id: 0,
      writer: "",
      comment: "",
      date: "",
      like: 0,
      dislike: 0,
    });
  };

  return (
    <form className="comment_container" onSubmit={onSubmitHandler}>
      <label className="comment_label">
        작성자
        <input type="text" name="writer" className="writer_input" onChange={onChangeHandler} value={comment.writer} />
      </label>
      <label className="comment_label">
        댓글
        <input type="text" name="comment" className="comment_input" onChange={onChangeHandler} value={comment.comment} />
      </label>
      <button className="comment_btn">등록하기</button>
    </form>
  );
};

export default Commentform;
