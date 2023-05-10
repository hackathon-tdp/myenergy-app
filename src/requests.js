import axios from "axios";

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

export default API;
