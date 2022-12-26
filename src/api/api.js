import axios from "axios";

export const getEPL = async () => {
  const { data } = await axios.get("http://localhost:3001/EPL");
  return data;
};

export const getLaliga = async () => {
  const { data } = await axios.get("http://localhost:3001/Laliga");
  return data;
};

export const getSerieA = async () => {
  const { data } = await axios.get("http://localhost:3001/SerieA");
  return data;
};

export const getComments = async () => {
  const { data } = await axios.get("http://localhost:3001/comments");
  return data.reverse();
};

export const getBets = async () => {
  const { data } = await axios.get("http://localhost:3001/bets");
  return data;
};

export const getCommunity = async () => {
  const { data } = await axios.get("http://localhost:3001/community");
  return data;
};

export const postCommunity = async (post) => {
  return axios.post("http://localhost:3001/community", post);
};

export const postComment = (comment) => {
  return axios.post("http://localhost:3001/comments", comment);
};

export const deleteCommunity = (id) => {
  return axios.delete(`http://localhost:3001/community/${id}`);
};

export const deleteComment = (id) => {
  return axios.delete(`http://localhost:3001/comments/${id}`);
};

export const changeCommunity = async (id, edit) => {
  return await axios.patch(`http://localhost:3001/community/${id}`, edit);
};

export const changeComment = async (id, edit) => {
  return await axios.patch(`http://localhost:3001/comments/${id}`, edit);
};

export const changeBet = (league, id, edit) => {
  return axios.patch(`http://localhost:3001/${league}/${id}`, edit);
};
