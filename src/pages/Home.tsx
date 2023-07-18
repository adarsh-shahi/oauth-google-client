import { useContext } from "react";
import { UserContext } from "../context/userContext";

function Home() {
	const data = useContext(UserContext);

	// const userInfoList = [];
	// for (const key in data?.state.user) {
	// 	userInfoList.push(
	// 		<div>
	// 			${key}: ${data?.state.user[key]}
	// 		</div>
	// 	);
	// }
	// console.log(userInfoList);

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="text-8xl font-extrabold ">Home Page</div>
			<div className="flex flex-col gap-5">
				<div>{data?.state.user.id}</div>
				<div>{data?.state.user.email}</div>
				<div>{data?.state.user.verified_email}</div>
				<div>{data?.state.user.name}</div>
				<div>{data?.state.user.given_name}</div>
				<img src={`${data?.state.user.picture}`} alt="profile"></img>
				<div>{data?.state.user.locale}</div>
			</div>
		</div>
	);
}

export default Home;
