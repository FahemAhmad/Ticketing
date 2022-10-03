import React, { useEffect, useState } from "react";
import apiCalls from "../backend/apiCalls";

import Filters from "./Reports/Filters";
import ReportsTable from "./Reports/ReportsTable";
import SelectedFields from "./Reports/SelectedFields";

const Reports = () => {
  const [selectedFields, setSelectedFields] = useState();
  const [selected, setSelected] = useState(["By Tickets"]);
  const [tickets, setTickets] = useState();
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

  useEffect(() => {
    if (cleanUp) {
      getTickets();
    }

    return () => {
      cleanUp = false;
    };
  }, []);

  return (
    <>
      <div
        className={
          selected[0] === "By Tickets"
            ? "reports-container"
            : "reports-container adjust-height"
        }
      >
        <div className="reports-filters">
          <Filters selected={selected} setSelected={setSelected} />
          {selected[0] === "By Tickets" && (
            <SelectedFields setSelectedFields={setSelectedFields} />
          )}
        </div>
        <div className="reports-table">
          <ReportsTable tickets={tickets} selectedFields={selectedFields} />
        </div>
      </div>
    </>
  );
};

export default Reports;
