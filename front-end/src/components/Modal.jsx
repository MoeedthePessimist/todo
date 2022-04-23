import React from "react";
import Modal from "react-modal";
import Button from "./Button";
import "./input.css";

const customStyles = {
	content: {
		// top: "50%",
		// left: "50%",
		// right: "auto",
		// bottom: "auto",
		// marginRight: "-50%",
		// transform: "translate(-50%, -50%)",
		margin: "auto",
		maxWidth: "80%",
		maxHeight: "50%",
		padding: 0,
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#overlay");

function ReactModal() {
	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}

	const onAddClick = () => {
		console.log("hello world");
	};

	return (
		<div>
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
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'>
				<div className='flex flex-col justify-between items-center py-5 h-full '>
					<p className='text-bold text-2xl text-white w-full text-center'>
						ADD TODO
					</p>
					<form className='form'>
						<div className='todo-data'>
							<input type='text' className='todo-input' name='todo' />
							<label htmlFor='todo' className='todo-label'>
								Add Todo
							</label>
						</div>
					</form>
					<div className='w-full flex flex-col justify-around items-center md:flex-row'>
						<Button
							color='bg-blue-200'
							animColor='bg-blue-500'
							text='ADD'
							onButtonClick={onAddClick}
						/>
						<Button
							color='bg-red-200'
							animColor='bg-red-500'
							text='CANCEL'
							onButtonClick={closeModal}
						/>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default ReactModal;
