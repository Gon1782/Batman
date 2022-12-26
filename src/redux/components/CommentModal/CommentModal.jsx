import React, { useState } from "react";
import "./comment_modal.css";
import { useDispatch, useSelector } from "react-redux";
import { StBtn } from "../../../styles/styled-component";
import { hideModal } from "../../modules/modalSlice";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteComment, getComments } from "../../../api/api";
import { hideDropdown } from '../../modules/dropdownSlice';
import { showEditBtn } from '../../modules/commentsSlice';

const CommentModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const [password, setPassword] = useState("");

  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const showEdit = (id) => {
    dispatch(showEditBtn(id))
    dispatch(hideDropdown(id))
  };

  const onDeleteHandler = (id) => {
    deleteMutation.mutate(id);
  };

  const closeModalHandler = () => {
    dispatch(hideModal());
  };
  
  const closeModalIfClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModalHandler();
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
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

  let idPw = data.map((x) => [x.id, x.password]).filter(x => x[0] === modal.modalId)

  return (
    <div className="modal_container" onClick={(e) => closeModalIfClickOutside(e)}>
      <div className="modal_box">
        <div>비밀번호를 입력해주세요</div>
        <input type="password" name="password" className="comment_password_input" onChange={onChangePassword} value={password} />
        <div className="modal_btn">
          <StBtn background="gray" color="white" onClick={() => closeModalHandler()}>
            취소
          </StBtn>
          <StBtn
            background={modal.edit === "edit" ? "green" : "red" }
            color="white"
            onClick={() => {
              if (idPw[0][0] === modal.modalId && idPw[0][1] === password) {
                if (modal.edit === "edit") showEdit(modal.modalId)
                if (modal.edit === "delete") onDeleteHandler(modal.modalId);
                closeModalHandler();
              } else {
                alert("비밀번호를 확인해주세요")
              }
            }}>
            {modal.edit === "edit" ? "수정" : "삭제"}
          </StBtn>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
