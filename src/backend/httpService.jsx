import axios from "axios";

const authToken = localStorage.getItem("token");

axios.defaults.baseURL = "https://tickets-management-dev.herokuapp.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging error", error);
  }

  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
