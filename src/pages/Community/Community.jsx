import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Community.css";

export default function Community() {
  const [posts, setPosts] = useState([]);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setPosts(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="wrap">
      <button className="community-Btn">작성하기</button>

      {posts.map((item) => (
        <div className="divCommunity" key={item.id}>
          <h4 className="divTitle">{item.title}</h4>
          <p className="divContents">{item.contents}</p>
        </div>
      ))}
    </div>
  );
}
