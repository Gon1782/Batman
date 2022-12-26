import React, { useState } from "react";
// import axios from "axios";
import "./Community.css";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import Simmodal from "../modal/SimModal";
import { removeCommunity } from "../../redux/modules/community";

export default function Community() {
  const CONFIRM_MESSAGE = `정말로 삭제하시겠습니까`;
  // const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [simmodal, setSimmodal] = useState(false);
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
            <input className="divTitle" value={item.title} />
            <input className="divContents" value={item.contents} />

            <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button>
            <button>수정</button>
          </div>
        ))}
      </div>
      {/* {simmodal && <Simmodal setSimmodal={setSimmodal} />} */}
    </div>
  );
}
