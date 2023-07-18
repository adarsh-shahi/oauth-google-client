import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
	const data = useContext(UserContext);
	const navigate = useNavigate();

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userInfo = queryParams.get("jsonData");
	console.log("userinfo");
	console.log(userInfo);
	console.log("userinfo");
	if (userInfo) {
		localStorage.setItem("userDetails", JSON.stringify(userInfo));
		console.log("has user info");
		data?.dispatch({
			type: "ADD_LOGIN_DATA",
			payload: JSON.parse(userInfo),
		});
		navigate("/");
	}
	// const jsonData = JSON.parse(params);

	const handleLoginButton = () => {
		const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

		const options = {
			redirect_uri: process.env.REACT_APP_REDIRECT_URI as string,
			client_id: process.env.REACT_APP_CLIENT_ID as string,
			access_type: "offline",
			response_type: "code",
			prompt: "consent",
			scope: [
				"https://www.googleapis.com/auth/userinfo.profile",
				"https://www.googleapis.com/auth/userinfo.email",
			].join(" "),
		};

		const queryString = new URLSearchParams(options);
		return `${rootUrl}?${queryString.toString()}`;
	};
	return (
		<div className="flex flex-col mt-10 gap-10">
			<a
				href={handleLoginButton()}
				className="bg-slate-600 text-white px-4 rounded-xl w-max mx-auto"
			>
				Google
			</a>
			<a
				href={handleLoginButton()}
				className="bg-slate-600 text-white px-4 rounded-xl w-max mx-auto"
			>
				Facebook
			</a>
		</div>
	);
}

export default Login;
