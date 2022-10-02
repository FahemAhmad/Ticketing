import React, { useState } from "react";
import { useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import "./Reports.css";

const filterOptions = ["Status", "SLA", "Device types", "By Tickets"];

const durationOptions = ["Day", "Month", "Year"];

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

const Filters = () => {
  const [selected, setSelected] = useState();
  const [currentArray, setCurrentArray] = useState();

  useEffect(() => {
    if (selected) {
      if (selected[0] === "Status") {
        setCurrentArray(statusOptions);
      } else if (selected[0] === "SLA") {
        setCurrentArray(sla);
      } else if (selected[0] === "By Tickets") {
        setCurrentArray();
      } else {
        setCurrentArray(deviceOptions);
      }
    }
  }, [selected]);

  return (
    <>
      <div className="filter-card-container">
        <Dropdown
          placeholder={"Filter reports"}
          label={"Filter report"}
          options={filterOptions}
          singleSelect={true}
          setSelected={setSelected}
        />

        <Dropdown
          placeholder={selected ? selected : "Further Options"}
          label={selected ? selected : "Further Options"}
          options={currentArray}
        />

        <Dropdown
          placeholder={"Duration"}
          label={"Duration"}
          options={durationOptions}
          singleSelect={true}
        />
      </div>
    </>
  );
};

export default Filters;
