import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import apiCalls from "../../backend/apiCalls";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function CStackedChart() {
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
      .getOpenTicketsApi({
        start_date: startString,
        end_date: endString,
      })
      .then((data) => {
        setOpenTickets(data?.data);
      })
      .catch((err) => console.log("Err Getting Open Tickets", err));
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
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels: fieldNames,
    datasets: [
      {
        label: "Dataset 1",
        data: graphData,
        backgroundColor: "#3B8E00",
      },
    ],
  };

  return (
    <>
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
      <div className="chart-container " style={{ minHeight: 0 }}>
        <h2>Tickets Device Wise</h2>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
