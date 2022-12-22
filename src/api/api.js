import axios from "axios";

export const getComments = async () => {
  const { data } = await axios.get("http://localhost:3001/comments");
  return data.reverse();
};

export const postComment = (comment) => {
  return axios.post("http://localhost:3001/comments", comment);
};

export const deleteComment = (id) => {
  return axios.delete(`http://localhost:3001/comments/${id}`);
};

export const changeComment = async (id, edit) => {
  return await axios.patch(`http://localhost:3001/comments/${id}`, edit);
};
