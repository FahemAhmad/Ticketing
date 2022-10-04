import React, { useState } from "react";
import { useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import "./Reports.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
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
  deviceTrigger,
  stateTrigger,
  setStartString,
  setEndString,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
            trigger={deviceTrigger}
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
            trigger={stateTrigger}
          />
        )}

        <Dropdown
          placeholder={"Duration"}
          label={"Duration"}
          options={durationOptions}
          singleSelect={true}
          setSelected={setDuration}
          trigger={() => {
            setEndString("");
            setStartString("");
          }}
        />
        <div style={{ display: "flex", marginBottom: 10 }}>
          <div>
            <span
              style={{
                minWidth: "max-content",
                marginTop: 10,
              }}
            >
              Start Date:
            </span>

            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartString(() => moment(date).format("YYYY-MM-DD"));
                setStartDate(date);
              }}
            />
          </div>
          <div>
            <span
              style={{
                minWidth: "max-content",
                marginTop: 10,
              }}
            >
              End Date:
            </span>

            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndString(() => moment(date).format("YYYY-MM-DD"));
                setEndDate(date);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
