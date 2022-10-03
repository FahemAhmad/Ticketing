import httpService from "./httpService";

// login
const loginApi = (values) => httpService.post(`/login`, values);

//get Tickets
const getTicketsApi = () => httpService.get(`/getTickets`);

//add Tickets
const addTicketApi = (values) => httpService.post(`/addTicket`, values);

//const get Api Stats
const getApiStatsApi = () => httpService.get(`/ticketStats`);

//Get  Charts
const getOpenTicketsApi = () => httpService.get("/getSlaChart?date=weekly");

//get line charts
const getLineChartApi = () => httpService.get("/getTicketTrends?date=daily");

//stacked chart
const getStackedChartApi = () =>
  httpService.get("/getDeviceTypeChart?date=weekly");

//get bar chart
const getBarChartApi = () =>
  httpService.get("/getTicketStatusChart?date=weekly");

//get Tickets Reports
const getTicketReportsApi = (body) =>
  httpService.post("/getTicketsReport", body);

//Device Type Report
const getByDeviceTypeApi = (body) =>
  httpService.post("/getDeviceTypeReport", body);

// Ticket Status Report
const getTicketStatusReportApi = (body) =>
  httpService.post("/getTicketStatusReport", body);

//get Sla report
const getSLAReportApi = (body) => httpService.post("/getSlaReport", body);

//Add User
const getAddUserApi = (body) => httpService.post("/addUser", body);

//upload file
const fileUploadApi = (body) => httpService.post("/importTicketsData", body);

export default {
  loginApi,
  getTicketsApi,
  addTicketApi,
  getApiStatsApi,
  getOpenTicketsApi,
  getLineChartApi,
  getStackedChartApi,
  getBarChartApi,
  getTicketReportsApi,
  getByDeviceTypeApi,
  getTicketStatusReportApi,
  getSLAReportApi,
  getAddUserApi,
  fileUploadApi,
};
