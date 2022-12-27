import React, { useState } from "react";
import "./Community.css";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { removeCommunity } from "../../redux/modules/community";
import { modifiedCommunity, updateCommunity } from "../../redux/modules/community";
import { changeCommunity, deleteCommunity, getCommunity } from "../../api/api";
import { hideEdit, showEdit } from "../../redux/modules/communitySlice";

export default function Community() {
  const CONFIRM_MESSAGE = `정말로 삭제하시겠습니까`;
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.communitySlice.edit);

  const [modal, setModal] = useState(false);
  const [simmodal, setSimmodal] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [updateCommunityInput, setUpdateCommunityInput] = useState();
  const [updateContentsInput, setUpdateContentsInput] = useState();

  const deleteCommunityMutation = useMutation(deleteCommunity, {
    onSuccess: () => {
      queryClient.invalidateQueries("community");
    },
  });

  const changeCommunityMutation = useMutation(changeCommunity, {
    onSuccess: () => {
      queryClient.invalidateQueries("community");
    },
  });

  const handleModifyButtonClick = (id) => {
    dispatch(showEdit(id));
    setReadOnly(false);
  };

  const onChangeCommunity = (event) => {
    const { value } = event.target;
    console.log(value);
    setUpdateCommunityInput(value);
  };

  const onChangeCotents = (event) => {
    const { value } = event.target;
    console.log(value);
    setUpdateContentsInput(value);
  };

  const handleSuccessButtonClick = (id, edit) => {
    changeCommunity(id, edit);
    changeCommunityMutation.mutate(id);
    dispatch(hideEdit(id));
    setReadOnly(true);
  };

  const handleCancelButtonClick = (id, title, contents) => {
    dispatch(hideEdit(id));
    setReadOnly(true);
    changeCommunityMutation.mutate(id);
  };

  // const handleSucessButtonClick = (item) => {
  //   dispatch(updateCommunity(item));
  //   dispatch(modifiedCommunity(item.id));
  //   setReadOnly(true);
  // };

  // const handleCancleButtonClick = (id) => {
  //   dispatch(modifiedCommunity(id));
  //   setReadOnly(true);
  // };

  // const community = useSelector((state) => state.community);

  const handleDeleteButtonClick = (id) => {
    if (window.confirm(CONFIRM_MESSAGE)) deleteCommunityMutation.mutate(id);
  };

  // GET community

  const { isLoading, isError, data, error } = useQuery("community", getCommunity, {
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
    <div className="wrap">
      <button
        onClick={() => {
          setModal(true);
        }}
        className="community-Btn"
      >
        작성하기
      </button>
      {modal && <Modal setModal={setModal} />}
      <div
        onClick={() => {
          setSimmodal(true);
        }}
      >
        {data.map((item) => (
          <div className="divCommunity" key={item.id}>
            <input readOnly={readOnly} defaultValue={item.title} onChange={onChangeCommunity} className="divTitle" />
            <input readOnly={readOnly} defaultValue={item.contents} onChange={onChangeCotents} className="divContents" />
            <div className="CompleteBtn">
              {edit.onEdit && edit.id === item.id ? (
                <button onClick={() => handleSuccessButtonClick(item.id, { title: updateCommunityInput, contents: updateContentsInput })}>완료</button>
              ) : (
                <button onClick={() => handleModifyButtonClick(item.id)}>수정</button>
              )}
            </div>
            <div className="CancelBtn">
              {edit.onEdit && edit.id === item.id ? <button onClick={() => handleCancelButtonClick(item.id, item.title, item.contents)}>취소</button> : <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button>}
            </div>
          </div>
        ))}
      </div>
      {/* {simmodal && <Simmodal setSimmodal={setSimmodal} />} */}
    </div>
  );
}
