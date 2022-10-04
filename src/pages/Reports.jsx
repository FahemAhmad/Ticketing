import React, { useEffect, useState } from "react";
import apiCalls from "../backend/apiCalls";

import Filters from "./Reports/Filters";
import ReportsTable from "./Reports/ReportsTable";
import SelectedFields from "./Reports/SelectedFields";

const Reports = () => {
  const [selectedFields, setSelectedFields] = useState();
  const [selected, setSelected] = useState(["By Tickets"]);
  const [tickets, setTickets] = useState();

  const [statuses, setStatuses] = useState([]);
  const [duration, setDuration] = useState("monthly");
  const [deviceTypes, setDeviceTypes] = useState([]);
  const [deviceTypesTrigger, setDeviceTrigger] = useState();
  const [stateTypeTrigger, setStateTrigger] = useState();

  const handleDevice = () => {
    setDeviceTrigger(!deviceTypesTrigger);
  };

  const handleState = () => {
    setStateTrigger(!stateTypeTrigger);
  };

  let cleanUp = true;

  const getTickets = async () => {
    if (selected[0] === "By Tickets") {
      await apiCalls
        .getTicketReportsApi({
          status: statuses,
          device_type: deviceTypes,
          date: duration[0].toLowerCase(),
        })
        .then((data) => {
          setTickets(data?.data);
        })
        .catch((err) => {
          console.log("Error with Ticketing", err);
        });
    } else if (selected[0] === "SLA") {
      await apiCalls
        .getSLAReportApi({
          device_type: deviceTypes,
          date: duration[0].toLowerCase(),
          status: statuses,
        })
        .then((data) => {
          setTickets(data?.data);
        })
        .catch((err) => {
          console.log("Error with Ticketing", err);
        });
    } else if (selected[0] === "Status") {
      await apiCalls
        .getTicketStatusReportApi({
          device_type: deviceTypes,
          date: duration[0].toLowerCase(),
        })
        .then((data) => {
          setTickets(data?.data);
        })
        .catch((err) => {
          console.log("Error with Ticketing", err);
        });
    } else {
      await apiCalls
        .getByDeviceTypeApi({
          status: statuses,
          date: duration[0].toLowerCase(),
        })
        .then((data) => {
          setTickets(data?.data);
        })
        .catch((err) => {
          console.log("Error with Ticketing", err);
        });
    }
  };

  useEffect(() => {
    if (cleanUp) {
      getTickets();
    }

    return () => {
      cleanUp = false;
    };
  }, []);

  useEffect(() => {
    console.log("get Tickets Called");
    getTickets();
  }, [stateTypeTrigger, duration, deviceTypesTrigger, selected]);

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
          <Filters
            selected={selected}
            setSelected={setSelected}
            setStatuses={setStatuses}
            setDeviceTypes={setDeviceTypes}
            setDuration={setDuration}
            deviceTrigger={handleDevice}
            stateTrigger={handleState}
          />
          {selected[0] === "By Tickets" && (
            <SelectedFields setSelectedFields={setSelectedFields} />
          )}
        </div>
        <div className="reports-table">
          <ReportsTable
            tickets={tickets}
            selectedFields={selectedFields}
            selected={selected}
            setSelectedFields={setSelectedFields}
          />
        </div>
      </div>
    </>
  );
};

export default Reports;
