import Axios from "axios";
import { getToken, logout } from "../Auth/Auth";

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  crossdomain: true,
  withCredentials: true,
});

axios.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) config.headers["x-access-token"] = `${token}`;

  return config;
});

axios.interceptors.response.use(
  async (config) => {
    return config;
  },
  (error) => {
    const { status } = error.response;

    // if (status === 401) {
    //   logout();
    //   window.location = "/login";
    // }

    return Promise.reject(error);
  }
);
