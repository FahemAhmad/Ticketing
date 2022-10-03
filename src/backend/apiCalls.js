import httpService from "./httpService";

// login
const loginApi = (values) => httpService.post(`/login`, values);

//get Tickets
const getTicketsApi = () => httpService.get(`/getTickets`);

//add Tickets
const addTicketApi = (values) => httpService.post(`/addTicket`, values);

//const get Api Stats
const getApiStatsApi = () => httpService.get(`/ticketStats`);

export default {
  loginApi,
  getTicketsApi,
  addTicketApi,
  getApiStatsApi,
};
