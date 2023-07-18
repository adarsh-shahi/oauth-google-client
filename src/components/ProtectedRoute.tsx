import { ReactElement, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
	children,
}: {
	children: ReactElement;
}) {
	const data = useContext(UserContext);
	console.log("seeing");
	console.log(data?.state.user);
	console.log("seeing");
	if (data !== null && Object.keys(data.state.user).length > 0) {
		console.log("In protected route");
		console.log(data.state);
		return children;
	}
	return <Navigate to="/login" />;
}
