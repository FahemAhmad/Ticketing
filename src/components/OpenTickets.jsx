import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../pages/Dashboard/Dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);
const colors = [
  "#0097E7",
  "#65CCFF",
  "#8FF3D6",
  "#C1FBB7",
  "#FFE666",
  "#FAC31B",
  "#EE7B49",
  "#CDCDCD",
  "#959594",
];

const graphData = [26, 26, 26, 26, 25, 25, 25, 25, 24];

const fieldNames = [
  "Business Halted",
  "Business Impacted",
  "Non-Critical",
  "Service Request",
  "Training Request",
  "Set SLA Resolve on-the-fly",
  "Emails from Customers",
  "Company Project-No SLA",
  "Urgent Request-text Dispatcher",
];

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of tickets",
      data: graphData,
      backgroundColor: colors,
      borderColor: colors,
    },
  ],
};

const OpenTickets = () => {
  return (
    <div className="open-tickets-container">
      <h2>Open Tickets: severity level: my groups</h2>
      <div className="doughnut-chart">
        <div className="doughnut-center">
          Total <br />
          228
        </div>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </div>

      <div className="fieldNames-container">
        {fieldNames.map((name, index) => (
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
