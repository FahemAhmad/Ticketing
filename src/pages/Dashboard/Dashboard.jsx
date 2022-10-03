import React, { useState, useEffect } from "react";
import apiCalls from "../../backend/apiCalls";
import { CAreaChart } from "../../components/Charts/CAreaChart";

import { CBarChart } from "../../components/Charts/CBarChart";
import { CStackedChart } from "../../components/Charts/CStackedChart";
import GridTable from "../../components/GridTable";
import OpenTickets from "../../components/OpenTickets";
import StatsCard from "../../components/StatsCard";
import "./Dashboard.css";

const Dashboard = () => {
  const [tickets, setTickets] = useState();
  const [stats, setStats] = useState();
  let cleanUp = true;

  const getTickets = async () => {
    await apiCalls
      .getTicketsApi()
      .then((data) => {
        console.log(data?.data);
        setTickets(data?.data);
      })
      .catch((err) => {
        alert("Error with Ticketing", err);
      });
  };

  const getStats = async () => {
    await apiCalls
      .getApiStatsApi()
      .then((data) => {
        setStats(data?.data);
      })
      .catch((err) => {
        alert("Error with Ticketing", err);
      });
  };

  useEffect(() => {
    if (cleanUp) {
      getTickets();
      getStats();
    }

    return () => {
      cleanUp = false;
    };
  }, []);

  return (
    <div className="dashboard-contianer">
      <div className="stats-container">
        <StatsCard title={"Tickets i created today"} counter={10} />
        <StatsCard title={"My Assigned tickets"} counter={6} />
        <StatsCard title={"Open tickets"} counter={stats ? stats.open : 0} />
        <StatsCard
          title={"Pendings Tickets"}
          counter={stats ? stats.pending : 0}
        />
        <StatsCard
          title={"Resolved tickets"}
          counter={stats ? stats.resolved : 0}
        />
        <StatsCard
          title={"Today's Tickets first contact resolution: me"}
          counter={33 + "%"}
        />
      </div>

      <div className="second-row">
        <div className="tickets-table">
          <GridTable tickets={tickets} />
        </div>
        <div className="graph-container">
          <OpenTickets />
        </div>
      </div>

      <div className="graphs-row">
        <CBarChart />
        <CAreaChart />
        <CStackedChart />
      </div>
    </div>
  );
};

export default Dashboard;
