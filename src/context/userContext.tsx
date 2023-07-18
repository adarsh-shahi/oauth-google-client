import { ReactNode, createContext, useReducer } from "react";

interface IstateType {
	user: any;
}

interface Iactiontype {
	type: "ADD_LOGIN_DATA" | "DELETE_LOGIN_DATA";
	payload?: any;
}

interface IUserContextType {
	state: IstateType;
	dispatch: (action: Iactiontype) => void;
}

const initialValue: IstateType = {
	user: {},
};

export const UserContext = createContext<IUserContextType | null>(null);

const reducer = (state: IstateType, action: any): IstateType => {
	console.log("In reducer");

	switch (action.type) {
		case "ADD_LOGIN_DATA":
			return { user: action.payload };

		case "DELETE_LOGIN_DATA":
			return { user: {} };
		default:
			throw new Error("unhandled action type");
	}
};

export default function Provider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialValue);

	const userJSON = localStorage.getItem("userDetails");
	if (userJSON) {
		console.log("-------");
		console.log(userJSON);
		console.log("--------");
		const userData = JSON.parse(userJSON);
		console.log("$$$$$$$");
		console.log(userData);
		console.log("$$$$$$$");
		state.user = JSON.parse(userData);
	}
	const contextValue: IUserContextType = {
		state,
		dispatch,
	};
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
}
