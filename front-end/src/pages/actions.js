import axios from "axios";

const api = "http://localhost:4000/todos";

export const addTodo = async (data) => {
  const res = await axios.post(`${api}`, data);
  return res.data;
};

export const editTodo = async (id, data) => {
  const res = await axios.patch(`${api}/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`${api}/${id}`);
  return res.data;
};

export const getAllTodos = async () => {
  const res = await axios.get(`${api}`);
  return res.data;
};
