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
const getOpenTicketsApi = (body) =>
  httpService.get(
    `/getSlaChart?date=custom&start_date=${body.start_date}&end_date=${body.end_date}`
  );

//get line charts
const getLineChartApi = (body) =>
  httpService.get(
    `/getTicketTrends?date=custom&start_date=${body.start_date}&end_date=${body.end_date}`
  );

//stacked chart
const getStackedChartApi = (body) =>
  httpService.get(
    `/getDeviceTypeChart?date=custom&start_date=${body.start_date}&end_date=${body.end_date}`
  );

//get bar chart
const getBarChartApi = (body) =>
  httpService.get(
    `/getTicketStatusChart?date=custom&start_date=${body.start_date}&end_date=${body.end_date}`
  );

//get Tickets Reports
const getTicketReportsApi = (body, params) =>
  httpService.post(
    `/getTicketsReport?start_date=${params.start_date}&end_date=${params.end_date}&date=${body.date}`,
    body
  );

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

//update rows
const updateRowApi = (body) => httpService.put("/updateTicket", body);

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
  updateRowApi,
};
