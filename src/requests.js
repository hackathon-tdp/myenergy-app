import axios from "axios";

const API = axios.create({
  baseURL: "http://rolandsobczak.ignorelist.com:8000/api/v1.0/"
  //baseURL: "http://127.0.0.1:8000/api/v1.0/",
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
