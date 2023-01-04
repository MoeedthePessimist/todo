import React, { useState } from "react";
import { useEffect } from "react";
import { getAllTodos, addTodo, deleteTodo, editTodo } from "./actions";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

const Container = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");

  const onAdd = async () => {
    await addTodo({ todo: todo });
    setTodo("");
    getTodos();
  };

  const onEdit = async (id) => {
    await editTodo(id, { todo: todo });
    setIsEdit(false);
    setTodo("");
    getTodos();
  };

  const onDelete = async (id) => {
    console.log(id);
    await deleteTodo(id);
    getTodos();
  };

  const getTodos = async () => {
    const data = await getAllTodos();
    // console.log(data);
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <TodoForm
        onAdd={onAdd}
        todo={todo}
        setTodo={setTodo}
        onEdit={onEdit}
        isEdit={isEdit}
        id={id}
      />
      {todos?.length > 0 &&
        todos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              todo={todo}
              onDelete={onDelete}
              setId={setId}
              setIsEdit={setIsEdit}
              setTodo={setTodo}
            />
          );
        })}
    </div>
  );
};

export default Container;
