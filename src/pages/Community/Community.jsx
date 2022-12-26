import React, { useState } from "react";
// import axios from "axios";
import "./Community.css";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import Simmodal from "../modal/SimModal";
import { removeCommunity } from "../../redux/modules/community";
import { modifiedCommunity, updateCommunity } from "../../redux/modules/community";

export default function Community() {
  const CONFIRM_MESSAGE = `정말로 삭제하시겠습니까`;
  // const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [simmodal, setSimmodal] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [updateCommunityInput, setUpdateCommunityInput] = useState("");
  const [updateContentsInput, setUpdateContentsInput] = useState("");

  const handleModifyButtonClick = (id) => {
    dispatch(modifiedCommunity(id));
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

  const handleSucessButtonClick = (item) => {
    dispatch(updateCommunity(item));
    dispatch(modifiedCommunity(item.id));
    setReadOnly(true);
  };

  const handleCancleButtonClick = (id) => {
    dispatch(modifiedCommunity(id));
    setReadOnly(true);
  };

  const community = useSelector((state) => state.community);

  console.log(community);

  const dispatch = useDispatch();

  const handleDeleteButtonClick = (id) => {
    if (window.confirm(CONFIRM_MESSAGE)) dispatch(removeCommunity(id));
  };

  // const fetchTodos = async () => {
  //   const { data } = await axios.get("http://localhost:3001/posts");
  //   setPosts(data);
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

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
        {community.map((item) => (
          <div className="divCommunity" key={item.id}>
            <input readOnly={readOnly} defaultValue={item.title} onChange={onChangeCommunity} className="divTitle" />
            <input readOnly={readOnly} defaultValue={item.contents} onChange={onChangeCotents} className="divContents" />
            <div className="CompleteBtn">{item.modify ? <button onClick={() => handleSucessButtonClick(item.id)}>완료</button> : <button onClick={() => handleModifyButtonClick(item.id)}>수정</button>}</div>
            <div className="CancelBtn">{item.modify ? <button onClick={() => handleCancleButtonClick(item.id)}>취소</button> : <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button>}</div>
          </div>
        ))}
      </div>
      {/* {simmodal && <Simmodal setSimmodal={setSimmodal} />} */}
    </div>
  );
}
