import { createContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../variables";
import API from "../requests";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const [theme, setTheme] = useState(false);
	const [user, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [refreshToken, setRefreshToken] = useState("");

	const fetchNewToken = async () => {
		const { data } = await API.post("auth/token/refresh/", {
			refresh: refreshToken,
		});
		return data.access;
	};

	const checkTokenHendler = async () => {
		const request = await API.post("auth/token/verify/", { refreshToken });
		if (request.status === 200) return true;
		setIsLoggedIn(false);
		return false;
	};

	useEffect(() => {
		API.interceptors.response.use(undefined, async (err) => {
			const status = error.response ? err.response.status : null;
			console.log(err.response.data);
			if (status === 401) {
				const isTokenValid = checkTokenHendler();
				let newToken = null;
				if (await isTokenValid) {
					newToken = await refreshTokenHandler();
				}
				setHeader(newToken);
			}

			const { config, message } = err;
			if (!config || !config.retry) {
				return Promise.reject(err);
			}
			if (
				!(
					message.includes("timeout") ||
					message.includes("Network Error")
				)
			) {
				return Promise.reject(err);
			}
			config.retry -= 1;
			const delayRetryRequest = new Promise((resolve) => {
				setTimeout(() => {
					console.log("retry the request", config.url);
					resolve();
				}, config.retryDelay || 1000);
			});
			return delayRetryRequest.then(() => axios(config));
		});
	}, []);

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
