import React, { useState } from "react";
// import axios from "axios";
import "./Community.css";
import Modal from "../modal/Modal";
import { useSelector } from "react-redux";

export default function Community() {
  // const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const community = useSelector((state) => state.community);

  console.log(community);

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

      {community.map((item) => (
        <div className="divCommunity" key={item.id}>
          <h4 className="divTitle">{item.title}</h4>
          <p className="divContents">{item.contents}</p>
        </div>
      ))}
    </div>
  );
}
