import { useState } from "react";

import Todo from "./Todo";
import ReactModal from "./Modal";

const TodoContainer = () => {
	const [todos, setTodos] = useState([]);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [task, setTask] = useState("");
	const [isEdit, setIsEdit] = useState(false);
	const [editID, setEditID] = useState(-1);

	let subtitle;

	const resetStates = () => {
		setTask("");
		setEditID(-1);
		setIsEdit(false);
		setIsOpen(false);
	};

	const onPressDelete = (id) => {
		setTodos(
			// eslint-disable-next-line array-callback-return
			todos.filter((todo) => {
				if (todo.id !== id) return todo;
			})
		);
	};

	const onPressEdit = () => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === editID) return { id: editID, task: task };
				return todo;
			})
		);
		resetStates();
	};

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
		<div className='py-10 '>
			{todos.map((todo) => {
				return (
					<Todo
						task={todo.task}
						id={todo.id}
						onPressDelete={onPressDelete}
						setTodo={setTask}
						openModal={openModal}
						setIsEdit={setIsEdit}
						setEditID={setEditID}
					/>
				);
			})}
			<button
				onClick={openModal}
				className='fixed group z-5 bottom-2 right-5 p-5 rounded-full bg-green-400 transition duration-500 ease-in-out
				hover:rotate-90 
				before:content-[""] before:bg-white before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:rounded-full before:scale-0 before:-z-1000 before:transition before:duration-500 before:ease-in-out
				before:hover:scale-100
				'>
				<div className='w-5 h-1 my-1 bg-white translate-y-1 group-hover:bg-green-400'></div>
				<div className='w-5 h-1 my-1 bg-white -rotate-90 -translate-y-1 group-hover:bg-green-400'></div>
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
