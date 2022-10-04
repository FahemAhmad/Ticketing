import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./charts.css";
import apiCalls from "../../backend/apiCalls";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function CAreaChart() {
  let cleanup = true;
  const [openTicekts, setOpenTickets] = useState();
  const [graphData, setGraphData] = useState();
  const [fieldNames, setFieldName] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startString, setStartString] = useState("2022-10-01");
  const [endString, setEndString] = useState("2022-10-02");

  const getOpenTickets = async () => {
    await apiCalls
      .getLineChartApi({
        start_date: startString,
        end_date: endString,
      })
      .then((data) => setOpenTickets(data?.data))
      .catch((err) => console.log("Err Getting Open Tickets"));
  };

  useEffect(() => {
    if (cleanup) getOpenTickets();

    return () => {
      cleanup = false;
    };
  }, []);

  useEffect(() => {
    if (openTicekts) {
      let gd = Object.values(openTicekts);
      gd.shift();
      setGraphData(gd);
      let fn = Object.keys(openTicekts);
      fn.shift();
      setFieldName(fn);
    }
  }, [openTicekts]);

  useEffect(() => {
    if (startString && endString) {
      getOpenTickets();
    }
  }, [endString, startString]);

  //Chart details
  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels: fieldNames,
    datasets: [
      {
        fill: true,
        label: "Dataset 1",
        data: graphData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="chart-container " style={{ minHeight: 0 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            minWidth: "max-content",
          }}
        >
          <span
            style={{
              minWidth: "max-content",
              marginTop: 10,
            }}
          >
            Start Date:
          </span>
          <div style={{ width: 200 }}></div>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartString(() => moment(date).format("YYYY-MM-DD"));
              setStartDate(date);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            minWidth: "max-content",
          }}
        >
          <span
            style={{
              minWidth: "max-content",
              marginTop: 10,
            }}
          >
            End Date:
          </span>
          <div style={{ width: 210 }}></div>
          <DatePicker
            selected={endDate}
            onChange={(date) => {
              setEndString(() => moment(date).format("YYYY-MM-DD"));
              setEndDate(date);
            }}
          />
        </div>
      </div>
      <h2>Ticket Trends</h2>
      <Line options={options} data={data} />
    </div>
  );
}
