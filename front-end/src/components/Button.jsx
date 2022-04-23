import React from "react";

const Button = (props) => {
	return (
		<button
			className={`w-3/4 px-5 py-2 my-3 ${props.color} relative z-10 font-bold	
								before:transition-all before:duration-500 before:content-[""] before:${props.animColor} before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:-z-10 before:w-0
								hover:before:w-full hover:text-white
								md:w-1/4 `}
			onClick={() => {
				props.onButtonClick();
			}}>
			{props.text}
		</button>
	);
};

export default Button;
