import { Link } from "react-router-dom";

const NavLink = ({ title, path, isOpen }) => {
	console.log(isOpen);
	return (
		<Link
			to={path}
			className={`text-white z-5 w-full text-center m-auto delay-700 transition-all duration-1000 ease-in-out hover:text-red-900 h-full flex flex-col justify-center items-center text-xs ${
				isOpen ? "visible" : "hidden"
			}
            after:w-full after:transition-all after:duration-1000 after:ease-in-out after:content-[""] after:h-0.5 after:bg-red-900 after:block after:-translate-x-full hover:after:translate-x-0 after:mt-5
            md:p-2 md:block md:h-full md:w-28 md:text-xs md:visible
            md:after:mt-0 md:after:w-0 md:after:translate-x-0 md:after:hover:w-full
            lg:text-lg`}>
			{title}
		</Link>
	);
};

export default NavLink;
