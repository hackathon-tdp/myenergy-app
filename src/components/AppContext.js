import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../variables";
import API from "../requests";

const AppContext = createContext({});

export let refreshTokenHandler;
export let checkTokenHendler;

export const AppProvider = ({ children }) => {
	const [theme, setTheme] = useState(false);
	const [user, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [refreshToken, setRefreshToken] = useState("");

	fetchNewToken = async () => {
		const { data } = await API.post("auth/token/refresh/", {
			refresh: refreshToken,
		});
		return data.access;
	};

	checkTokenHendler = async () => {
		const request = await API.post("auth/token/verify/", { refreshToken });
		if (request.status === 200) return true;
		setIsLoggedIn(false);
		return false;
	};

	return (
		<AppContext.Provider
			value={{
				theme: theme ? darkTheme : lightTheme,
				setTheme,
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				setRefreshToken,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
