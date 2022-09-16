import httpService from "./httpService";

// login
const loginApi = (values) => httpService.post(`/login`, values);

//get Tickets
const getTicketsApi = () => httpService.get(`/getTickets`);

//add Tickets

export default {
  loginApi,
  getTicketsApi,
};
