import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../pages/Dashboard/Dashboard.css";
import { useEffect } from "react";
import apiCalls from "../backend/apiCalls";

ChartJS.register(ArcElement, Tooltip, Legend);

const OpenTickets = () => {
  let cleanup = true;
  const [openTicekts, setOpenTickets] = useState();
  const [graphData, setGraphData] = useState();
  const [fieldNames, setFieldName] = useState();

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

  const data = {
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

  const getOpenTickets = async () => {
    await apiCalls
      .getOpenTicketsApi()
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

  return (
    <div className="open-tickets-container">
      <h2>Tickets based on SLA</h2>
      <div className="doughnut-chart">
        <div className="doughnut-center">
          Total <br />
          {openTicekts ? openTicekts?.Total : 0}
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
