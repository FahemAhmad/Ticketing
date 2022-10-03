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
import { faker } from "@faker-js/faker";
import apiCalls from "../../backend/apiCalls";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export function CStackedChart() {
  let cleanup = true;
  const [openTicekts, setOpenTickets] = useState();
  const [graphData, setGraphData] = useState();
  const [fieldNames, setFieldName] = useState();

  const getOpenTickets = async () => {
    await apiCalls
      .getStackedChartApi()
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
      },
    },
  };

  const labels = [
    "New",
    "Assigned",
    "In Progress",
    "On Hold",
    "Awaiting Customer Response",
    "Auto Closed by Rules",
    "Closed Today",
  ];

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
    <div className="chart-container ">
      <h2>Open Tickets: severity level</h2>
      <Bar options={options} data={data} />
    </div>
  );
}
