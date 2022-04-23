import Todo from "./Todo";
import ReactModal from "./Modal";

const TodoContainer = () => {
	return (
		<div className='py-10 bg-[#306FD4]'>
			<Todo />
			<Todo />
			<Todo />
			<Todo />
			<Todo />
			<ReactModal />
		</div>
	);
};

export default TodoContainer;
