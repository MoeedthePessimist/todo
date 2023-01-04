import React from "react";

const Todo = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        background: "white",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0",
      }}
    >
      <p>{props.todo.todo}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <button
          onClick={() => {
            props.setId(props.todo._id);
            props.setIsEdit(true);
            props.setTodo(props.todo.todo);
          }}
        >
          Edit
        </button>
        <button onClick={() => props.onDelete(props.todo._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
