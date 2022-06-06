import React from "react";
import Modal from "react-modal";
import Button from "./Button";
import "./input.css";

const customStyles = {
	content: {
		margin: "auto",
		maxWidth: "80%",
		maxHeight: "50%",
		padding: 0,
		borderRadius: "5px",
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#overlay");

function ReactModal(props) {
	const onInputChange = (event) => {
		props.setTodo(event.target.value);
	};

	const onAddClick = () => {
		props.setTodos((prevTodos) => {
			return [
				...prevTodos,
				{
					id: prevTodos.length,
					task: props.todo,
				},
			];
		});
		console.log(props.todos);
		props.closeModal();
	};

	const onEditClick = () => {
		props.onPressEdit();
	};

	const closeModal = () => {
		props.closeModal();
	};

	const afterOpenModal = () => {
		props.afterOpenModal();
	};

	return (
		<div>
			<Modal
				isOpen={props.modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'>
				<div className='flex flex-col justify-between items-center py-5 h-full bg-slate-200'>
					<p className='text-bold text-2xl text-black w-full text-center'>
						ADD TODO
					</p>
					<form
						className='form'
						onSubmit={(event) => {
							event.preventDefault();
							onAddClick();
						}}>
						<div className='todo-data'>
							<input
								type='text'
								className='todo-input'
								name='todo'
								onChange={onInputChange}
								value={props.todo}
							/>
							<label htmlFor='todo' className='todo-label'>
								Add Todo
							</label>
						</div>
					</form>
					<div className='w-full flex flex-col justify-around items-center md:flex-row'>
						{!props.isEdit ? (
							<Button
								color='bg-blue-200'
								animColor='bg-blue-500'
								text='ADD'
								onButtonClick={onAddClick}
							/>
						) : (
							<Button
								color='bg-green-200'
								animColor='bg-green-500'
								text='EDIT'
								onButtonClick={onEditClick}
							/>
						)}
						<Button
							color='bg-red-200'
							animColor='bg-red-500'
							text='CANCEL'
							onButtonClick={props.closeModal}
						/>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default ReactModal;
