import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      (
      {posts.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.contents}</p>
        </div>
      ))}
      );
    </div>
  );
}
