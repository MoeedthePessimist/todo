import React from "react";

const Button = (props) => {
	return (
		<button
			className={`w-3/4 px-5 py-2 my-3 ${props.animColor} relative z-10
						transition duration-500 ease-in-out
						hover:text-white
						before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:${props.color}
						md:w-1/4 `}
			onClick={() => {
				props.onButtonClick();
			}}>
			{props.text}
		</button>
	);
};

export default Button;
