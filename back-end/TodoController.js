import { Todo } from "./Todo.js";

export const addTodo = async (req, res) => {
  const data = req.body;

  console.log(data);
  const todo = new Todo(data);

  await todo.save();

  res.status(201).json(todo);
};

export const editTodo = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(data);
  console.log(id);

  await Todo.findByIdAndUpdate(
    id,
    { $set: { todo: data.todo } },
    { new: true }
  );
  res.status(200).json(data.todo);
};

export const deleteTodo = async (req, res) => {
  const id = req.params.id;
  await Todo.findByIdAndDelete(id);
  res.status(200).json({ message: "Todo deleted successfully." });
};

export const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};
