import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function Navigation() {
	const contextValue = useContext(UserContext);

	const logoutHandler = () => {
		localStorage.removeItem("userDetails");
		contextValue?.dispatch({
			type: "DELETE_LOGIN_DATA",
		});
	};
	return (
		<div>
			<div className="flex bg-blue-600 text-white gap-5 text-2xl p-4">
				<div className="mr-auto">Home</div>
				<div>Services</div>
				<div>About</div>
				<div>Contact</div>
				<div onClick={logoutHandler} className="bg-red-600 px-5 cursor-pointer">
					LOGOUT
				</div>
			</div>
			<Outlet />
		</div>
	);
}
