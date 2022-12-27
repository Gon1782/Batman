import axios from "axios";

export const getEPL = async () => {
  const { data } = await axios.get("https://available-dented-arrhinceratops.glitch.me/EPL");
  return data;
};

export const getLaliga = async () => {
  const { data } = await axios.get("https://available-dented-arrhinceratops.glitch.me/Laliga");
  return data;
};

export const getSerieA = async () => {
  const { data } = await axios.get("https://available-dented-arrhinceratops.glitch.me/SerieA");
  return data;
};

export const getComments = async () => {
  const { data } = await axios.get("https://available-dented-arrhinceratops.glitch.me/comments");
  return data.reverse();
};

export const getBets = async () => {
  const { data } = await axios.get("https://available-dented-arrhinceratops.glitch.me/bets");
  return data;
};

export const getCommunity = async () => {
  const { data } = await axios.get("https://available-dented-arrhinceratops.glitch.me/community");
  return data;
};

export const postCommunity = async (post) => {
  return axios.post("https://available-dented-arrhinceratops.glitch.me/community", post);
};

export const postComment = (comment) => {
  return axios.post("https://available-dented-arrhinceratops.glitch.me/comments", comment);
};

export const deleteCommunity = (id) => {
  return axios.delete(`https://available-dented-arrhinceratops.glitch.me/community/${id}`);
};

export const deleteComment = (id) => {
  return axios.delete(`https://available-dented-arrhinceratops.glitch.me/comments/${id}`);
};

export const changeCommunity = async (id, edit) => {
  return await axios.patch(`https://available-dented-arrhinceratops.glitch.me/community/${id}`, edit);
};

export const changeComment = async (id, edit) => {
  return await axios.patch(`https://available-dented-arrhinceratops.glitch.me/comments/${id}`, edit);
};

export const changeBet = (league, id, edit) => {
  return axios.patch(`https://available-dented-arrhinceratops.glitch.me/${league}/${id}`, edit);
};
