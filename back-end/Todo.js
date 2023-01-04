import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: String,
});

export const Todo = mongoose.model("Todo", todoSchema);
