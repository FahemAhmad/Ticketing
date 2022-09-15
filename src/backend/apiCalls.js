import httpService from "./httpService";

// login
const loginApi = (values) => httpService.post(`/login`, values);

//get Tickets

//add Tickets

export default {
  loginApi,
};
