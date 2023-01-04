import React, { useRef } from "react";

const TodoForm = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "30vh",
          background: "lightblue",
        }}
      >
        <input
          type="text"
          value={props.todo}
          onChange={(e) => props.setTodo(e.target.value)}
        />
        {!props.isEdit ? (
          <button
            onClick={() => {
              props.onAdd();
            }}
            style={{
              width: "100px",
              height: "30px",
              background: "lightgreen",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Add task
          </button>
        ) : (
          <button
            onClick={() => {
              props.onEdit(props.id);
            }}
            style={{
              width: "100px",
              height: "30px",
              background: "lightgreen",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Edit task
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
