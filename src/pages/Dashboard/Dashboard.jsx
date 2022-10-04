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
        setTickets(data?.data);
      })
      .catch((err) => {
        console.log("Error with Ticketing", err);
      });
  };

  const getStats = async () => {
    await apiCalls
      .getApiStatsApi()
      .then((data) => {
        console.log("Stats", data);
        setStats(data?.data);
      })
      .catch((err) => {
        console.log("Error with Ticketing", err);
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
        <StatsCard
          title={"Created Tickets"}
          counter={stats ? stats.tickets_created_today : 0}
        />
        <StatsCard
          title={"Closed Tickets"}
          counter={stats ? stats.closed : 0}
        />
        <StatsCard title={"Open tickets"} counter={stats ? stats.open : 0} />
        <StatsCard
          title={"On-Hold Tickets"}
          counter={stats ? stats.on_hold_noc + stats.on_hold_poc : 0}
        />
        <StatsCard
          title={"In-Progress Tickets"}
          counter={stats ? stats.in_progress : 0}
        />
        <StatsCard
          title={"Re-Opened Tickets"}
          counter={stats ? stats.on_hold_poc : 0}
        />
      </div>

      <div className="second-row">
        <div className="tickets-table">
          <GridTable tickets={tickets} />
        </div>
        <div className="graph-container">
          <CStackedChart />
        </div>
      </div>

      <div className="graphs-row">
        <CBarChart />
        <CAreaChart />
        <OpenTickets />
      </div>
    </div>
  );
};

export default Dashboard;
