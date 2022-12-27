/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeComment, getComments } from "../../../api/api";
import { clickDislike, clickLike, hideEditBtn } from "../../modules/commentsSlice";
import { hideDropdown, showDropdown } from "../../modules/dropdownSlice";
import { showModal } from "../../modules/modalSlice";
import Commentform from "../CommentForm/Commentform";
import CommentModal from "../CommentModal/CommentModal";
import "./comment.css";

const Comment = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const dropDown = useSelector((state) => state.dropdown);
  const editBtn = useSelector((state) => state.comments.edit);
  const like = useSelector((state) => state.comments.like);
  const dislike = useSelector((state) => state.comments.dislike);
  const node = useRef();
  const { path } = useParams();

  const changeMutation = useMutation(changeComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  // 드랍다운
  const toggleDropdownHandler = (id) => {
    dispatch(showDropdown(id));
    if (dropDown.show === true) dispatch(hideDropdown(id));
  };

  useEffect(() => {
    const closeDropdownIfClickOutside = (e) => {
      if (node.current && !node.current.contains(e.target)) {
        dispatch(hideDropdown(dropDown.id));
      }
    };

    document.addEventListener("click", closeDropdownIfClickOutside);
    return () => {
      document.removeEventListener("click", closeDropdownIfClickOutside);
    };
  }, [dropDown]);

  //수정하기
  const showModalHandler = (id, edit) => {
    dispatch(showModal([id, edit]));
    toggleDropdownHandler(id);
  };

  const [content, setContent] = useState();

  const onChange = (event) => {
    setContent(event.target.value);
  };

  const onEditHandler = (id, edit) => {
    changeComment(id, edit);
    changeMutation.mutate(id);
    dispatch(hideEditBtn(id));
  };

  //좋아요, 싫어요
  const likeHandler = (id, edit) => {
    dispatch(clickLike(id));
    changeComment(id, { likes: edit + 1 });
    changeMutation.mutate(id);
  };

  const disLikeHandler = (id, edit) => {
    dispatch(clickDislike(id));
    changeComment(id, { dislikes: edit + 1 });
    changeMutation.mutate(id);
  };

  // GET comments

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
      {/* 모달 */}
      {modal.show && <CommentModal />}
      {/* 코멘트 입력창 */}
      <Commentform />
      {/* 코멘트 리스트 */}
      <div className="comment_list">
        {data
          .filter((x) => x.param === path)
          .map((x) => {
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
                    <button className="btn_dropdown" onClick={() => toggleDropdownHandler(x.id)}>
                      ...
                    </button>
                    <div className={dropDown.id === x.id && dropDown.show ? "btn_wrap" : "btn_wrap_hide"}>
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
                    <button className={like.id === x.id && like.isLiked ? "onLikes" : "comment_like"} onClick={() => likeHandler(x.id, x.likes)} disabled={like.id === x.id && like.isLiked ? "disabled" : ""}>
                      ❤️ {x.likes}
                    </button>
                    <button className={dislike.id === x.id && dislike.isDisLiked ? "onDisLikes" : "comment_like"} onClick={() => disLikeHandler(x.id, x.dislikes)} disabled={dislike.id === x.id && dislike.isDisLiked ? "disabled" : ""}>
                      💔 {x.dislikes}
                    </button>
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
