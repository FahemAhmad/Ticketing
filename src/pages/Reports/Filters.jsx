import React, { useState } from "react";
import { useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import "./Reports.css";

/*
If By Tickets - Show the following fields
* Date
* Dev Type
* Ticket status
* Column pick


For SLA
* Date
* Dev Type
* Ticket Status


For Status
* Date
* Dev Type

For Device
* Date
* Status

*/

const filterOptions = ["Status", "SLA", "Device types", "By Tickets"];

const durationOptions = ["Daily", "Weekly", "Monthly"];

const statusOptions = [
  "OPEN",
  "CLOSE",
  "IN-PROGRESS",
  "IN-QUEUE",
  "ON-HOLD (NOC)",
  "ON-HOLD (POC)",
];
const deviceOptions = [
  "SVC",
  "RVC",
  "LPRC",
  "VC",
  "MC",
  "CB",
  "PC",
  "IDP",
  "PT",
  "DPU",
  "HEX",
  "ACU",
  "SW",
  "RT",
  "FW",
  "IOD",
  "MH",
  "FC",
  "PTZ",
  "HPTZ",
  "VOP",
  "VOG",
  "LPR",
  "RD",
  "LZ",
];
const sla = ["Respond Time", "Resolve Time"];

const Filters = ({
  selected,
  setSelected,
  setStatuses,
  setDeviceTypes,
  setDuration,
}) => {
  return (
    <>
      <div
        className={
          selected[0] !== "By Tickets"
            ? "filter-card-container two-columns"
            : "filter-card-container"
        }
      >
        <Dropdown
          placeholder={"Filter reports"}
          label={"Filter report"}
          options={filterOptions}
          singleSelect={true}
          setSelected={setSelected}
        />

        {(selected[0] === "By Tickets" ||
          selected[0] === "SLA" ||
          selected[0] === "Status") && (
          <Dropdown
            placeholder={"Select Device"}
            label={"Device Type"}
            options={deviceOptions}
            setSelected={setDeviceTypes}
          />
        )}
        {(selected[0] === "By Tickets" ||
          selected[0] === "SLA" ||
          selected[0] === "Device types") && (
          <Dropdown
            placeholder={"Status"}
            label={"Set Status"}
            options={statusOptions}
            setSelected={setStatuses}
          />
        )}

        <Dropdown
          placeholder={"Duration"}
          label={"Duration"}
          options={durationOptions}
          singleSelect={true}
          setSelected={setDuration}
        />
      </div>
    </>
  );
};

export default Filters;
