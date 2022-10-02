import React, { useEffect, useState } from "react";
import apiCalls from "../backend/apiCalls";

import Filters from "./Reports/Filters";
import ReportsTable from "./Reports/ReportsTable";
import SelectedFields from "./Reports/SelectedFields";

const Reports = () => {
  const [selectedFields, setSelectedFields] = useState();
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
      <div className="reports-container">
        <div className="reports-filters">
          <Filters />
          <SelectedFields setSelectedFields={setSelectedFields} />
        </div>
        <div className="reports-table">
          <ReportsTable tickets={tickets} selectedFields={selectedFields} />
        </div>
      </div>
    </>
  );
};

export default Reports;
