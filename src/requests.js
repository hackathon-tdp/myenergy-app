import axios from "axios";
import {
	checkTokenHendler,
	refreshTokenHandler,
} from "./components/AppContext";

const API = axios.create({
	baseURL: "http://localhost:8000/api/v1.0/",
	validateStatus: function (status) {
		if (status === 401) return false;
		return status < 500;
	},
});

export const setHeader = (token) => {
	API.interceptors.request.use(
		(config) => {
			if (token) {
				config.headers.Authorization = `Token ${token}`;
			} else {
				delete API.defaults.headers.common.Authorization;
			}
			return config;
		},

		(error) => Promise.reject(error)
	);
};

API.interceptors.response.use(undefined, async (err) => {
	const status = error.response ? err.response.status : null;
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
	if (!(message.includes("timeout") || message.includes("Network Error"))) {
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

export default API;
