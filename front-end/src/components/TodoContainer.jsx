import { useState } from "react";

import Todo from "./Todo";
import ReactModal from "./Modal";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  let subtitle;

  const resetStates = () => {
    setTask("");
    setIsOpen(false);
  };

  const onPressDelete = (id) => {};

  const onPressEdit = (id) => {};

  const onPressAdd = () => {};

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    resetStates();
  }

  return (
    <div className="py-10 ">
      {todos.map((todo) => {
        return (
          <Todo
            task={todo.task}
            id={todo._id}
            onPressDelete={onPressDelete}
            onPressEdit={onPressEdit}
            onPressAdd={onPressAdd}
          />
        );
      })}
      <button
        onClick={openModal}
        className='fixed group z-5 bottom-2 right-5 p-5 rounded-full bg-green-400 transition duration-500 ease-in-out
				hover:rotate-90 
				before:content-[""] before:bg-white before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:rounded-full before:scale-0 before:-z-1000 before:transition before:duration-500 before:ease-in-out
				before:hover:scale-100
				'
      >
        <div className="w-5 h-1 my-1 bg-white translate-y-1 group-hover:bg-green-400"></div>
        <div className="w-5 h-1 my-1 bg-white -rotate-90 -translate-y-1 group-hover:bg-green-400"></div>
      </button>
      <ReactModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        afterOpenModal={afterOpenModal}
        setTodos={setTodos}
        todos={todos}
        todo={task}
        setTodo={setTask}
        isEdit={isEdit}
        onPressEdit={onPressEdit}
      />
    </div>
  );
};

export default TodoContainer;
