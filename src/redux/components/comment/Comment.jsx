/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { changeComment, getComments } from "../../../api/api";
import { showModal } from "../../modules/modalSlice";
import Commentform from "../CommentForm/Commentform";
import CommentModal from '../CommentModal/CommentModal';
import "./comment.css";

const Comment = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const node = useRef();

  const [dropDown, setDropdown] = useState({
    id: 0,
    dropdown: false,
  });
  const [editBtn, setEditBtn] = useState({
    id: 0,
    onEdit: false,
  });
  const [content, setContent] = useState("");

  const changeMutation = useMutation(changeComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const toggleEdit = (id) => {
    setEditBtn({ ...editBtn, id: id, onEdit: !editBtn.onEdit });
    if (dropDown.dropdown) toggleDropdown(id);
  };

  const toggleDropdown = (id) => {
    setDropdown({ ...dropDown, id: id, dropdown: !dropDown.dropdown });
  };

   useEffect(() => {
    const clickOutside = (e) => {
      if (dropDown.dropdown && node.current && !node.current.contains(e.target)) toggleDropdown();
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  },[dropDown]);

  const onChange = (event) => {
    setContent(event.target.value);
  };

  const onEditHandler = (id, edit) => {
    changeComment(id, edit);
    changeMutation.mutate(id);
    toggleEdit(id);
  };

  const showModalHandler = (id, edit) => {
    dispatch(showModal([id, edit]));
    if (dropDown.dropdown) toggleDropdown(id);
  };

  const { isLoading, isError, data, error } = useQuery("comments", getComments, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="comment_layout" ref={node}>
      {modal.show && <CommentModal toggleEdit={toggleEdit}/>}
      <Commentform />
      <div className="comment_list">
        {data.map((x) => {
          return (
            <div className="comment_box" key={x.id}>
              <div className="comment_body">
                <div className="comment_textbox">
                  <div className="writer">{x.writer}</div>
                  <div className="comment_contents">
                    <div className={`comment${editBtn.id === x.id && editBtn.onEdit ? " hide" : ""}`}>{x.comment}</div>
                    <div className={`comment_edit${editBtn.id === x.id && editBtn.onEdit ? "" : " hide"}`}>
                      <input type="text" name="comment" className="comment_edit_input" onChange={onChange} defaultValue={x.comment} />
                      <button className="comment_edit_btn" onClick={() => onEditHandler(x.id, { comment: content })}>
                        수정하기
                      </button>
                    </div>
                  </div>
                </div>
                <div className="comment_dropdown">
                  <button className="btn_dropdown" onClick={() => toggleDropdown(x.id)}>
                    ...
                  </button>
                  <div className={dropDown.id === x.id && dropDown.dropdown ? "btn_wrap" : "btn_wrap_hide"}>
                    <button className="edit_btn" onClick={() => showModalHandler(x.id, "edit")}>
                      수정
                    </button>
                    <button className="edit_btn" onClick={() => showModalHandler(x.id, "delete")}>
                      삭제
                    </button>
                  </div>
                </div>
              </div>
              <div className="comment_footer">
                <div>{x.date}</div>
                <div className="btn_box">
                  <button className="comment_like">❤️ {x.like}</button>
                  <button className="comment_like">💔 {x.dislike}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
