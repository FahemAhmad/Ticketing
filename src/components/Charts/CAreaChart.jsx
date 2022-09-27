import React from "react";
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
import { faker } from "@faker-js/faker";
import "./charts.css";

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

export const options = {
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

const labels = [
  "New",
  "Assigned",
  "In Progress",
  "On Hold",
  "Awaiting Customer Response",
  "Auto Closed by Rules",
  "Closed Today",
];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function CAreaChart() {
  return (
    <div className="chart-container ">
      <h2>Ticket Status: my group</h2>
      <Line options={options} data={data} />
    </div>
  );
}