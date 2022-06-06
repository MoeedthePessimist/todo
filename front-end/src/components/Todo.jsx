import "./glass.css";
import Button from "./Button";

const ToDo = (props) => {
	const onEditClick = () => {
		props.setTodo(props.todo);
		props.openModal();
		props.setIsEdit(true);
		props.setEditID(props.id);
	};

	const onDeleteClick = () => {
		props.onPressDelete(props.id);
	};

	return (
		<div className=' py-10 px-5 mx-5 my-10 glass'>
			<div className='text-black py-10'>{props.task}</div>
			<hr />
			<div className='text-gray-500 text-bold pt-5'>Creator Name</div>
			<div className='text-gray-500 text-bold '>Created At</div>

			<div className='w-full flex flex-col justify-around items-center md:flex-row'>
				<Button
					color='bg-blue-200'
					animColor='bg-blue-500'
					text='EDIT'
					onButtonClick={onEditClick}
				/>
				<Button
					color='bg-red-200'
					animColor='bg-red-500'
					text='DELETE'
					onButtonClick={onDeleteClick}
				/>
			</div>
		</div>
	);
};

export default ToDo;
