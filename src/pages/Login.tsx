function Login() {
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

		console.log(options);
		const queryString = new URLSearchParams(options);
		console.log(queryString.toString());
		return `${rootUrl}?${queryString.toString()}`;
	};
	return (
		<a
			href={handleLoginButton()}
			className="bg-slate-600 text-white px-4 rounded-xl w-max mx-auto"
		>
			Login with Google
		</a>
	);
}

export default Login;
