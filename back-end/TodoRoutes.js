import {
  addTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
} from "./TodoController.js";
import express from "express";

const router = express.Router();

router.post("/", addTodo);
router.patch("/:id", editTodo);
router.delete("/:id", deleteTodo);
router.get("/", getAllTodos);

export default router;
