import React from "react";
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
import "./charts.css";

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
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#0097E7",
    },
  ],
};

export function CBarChart() {
  return (
    <div className="chart-container ">
      <h2>Ticket Status: my group</h2>
      <Bar options={options} data={data} />
    </div>
  );
}
