import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import TodoRoutes from "./TodoRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/todos", TodoRoutes);

// connect the server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
