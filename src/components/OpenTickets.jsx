import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../pages/Dashboard/Dashboard.css";
import { useEffect } from "react";
import apiCalls from "../backend/apiCalls";
import "./Charts/charts.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

ChartJS.register(ArcElement, Tooltip, Legend);

const OpenTickets = () => {
  let cleanup = true;
  const [openTicekts, setOpenTickets] = useState();
  const [graphData, setGraphData] = useState();
  const [fieldNames, setFieldName] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startString, setStartString] = useState("2022-10-01");
  const [endString, setEndString] = useState("2022-10-02");

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
  };
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  const getOpenTickets = async () => {
    await apiCalls
      .getStackedChartApi({
        start_date: startString,
        end_date: endString,
      })
      .then((data) => {
        setOpenTickets(data?.data);
      })
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

  const data = {
    labels: fieldNames,
    datasets: [
      {
        label: "# of tickets",
        data: graphData,
        backgroundColor: colors,
        borderColor: colors,
      },
    ],
  };

  return (
    <div className="chart-container">
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
      <h2>Tickets SLA's</h2>
      <div className="doughnut-chart">
        <div className="doughnut-center" style={{ marginTop: 12 }}>
          Total <br />
          {openTicekts ? openTicekts?.Total : 0}
        </div>
        <Doughnut data={data} options={options} />
      </div>
      <div className="fieldNames-container">
        {fieldNames?.map((name, index) => (
          <div className="my-flex" key={index}>
            <div
              className="circle"
              style={{ backgroundColor: colors[index] }}
            ></div>
            <p style={{ lineHeight: "1.8rem" }}>
              {index}- {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenTickets;
