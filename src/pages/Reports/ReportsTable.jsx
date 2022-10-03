import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "../../components/GridTable.css";

import { useEffect } from "react";

const mapNames = [
  "Source Incident No#",
  "Reporting Source",
  "Internal Incident No#",
  "Phase",
  "Site",
  "Device Type",
  "Last Octet",
  "Fault Description",
  "Resolution",
  "Maintanance Agent",
  "Comments",
];

const fieldNames = [
  "source_incident_no",
  "reporting_source",
  "internal_incident_no",
  "phase",
  "site",
  "device_type",
  "last_octet",
  "fault_description",
  "resolution",
  "maintanance_agent",
  "comments",
];

const slaComp = (p) => {
  return (
    <div
      style={{
        height: 10,
        width: 10,
        borderRadius: "50%",
        backgroundColor: p.value ? "green" : "red",
        marginTop: 5,
      }}
    ></div>
  );
};

const ReportsTable = ({
  tickets,
  selectedFields,
  setSelectedFields,
  selected,
}) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [columnDefs, setColumnsDefs] = useState([]);

  const [rowData, setRowData] = useState();

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  const defaultColDef = useMemo(() => ({
    resizable: true,
    flex: 1,
    sortable: true,
    minWidth: 80,
  }));

  useEffect(() => {
    if (selected === undefined || selected[0] !== "Device types") {
      setRowData(tickets);
      console.log("called", tickets);
    } else {
      let arr2 = [];
      arr2.push(tickets);
      console.log("tickets2", arr2);
      setRowData(arr2);
    }
  }, [tickets]);

  useEffect(() => {
    let arr = [];

    if (selected === undefined || selected[0] === "By Tickets") {
      fieldNames?.map((singleField, index) => {
        if (selectedFields?.includes(singleField)) {
          arr.push({ field: singleField, headerName: mapNames[index] });
        }
      });
    } else if (selected[0] === "Device types") {
      arr = [
        { field: "SVC" },
        { field: "RVC" },
        { field: "LPRC" },
        { field: "VC" },
        { field: "MC" },
        { field: "CB" },
        { field: "PC" },
        { field: "IDP" },
        { field: "PT" },
        { field: "DPU" },
        { field: "HEX" },
        { field: "ACU" },
        { field: "SW" },
        { field: "RT" },
        { field: "FW" },
        { field: "IOD" },
        { field: "MH" },
        { field: "FC" },
        { field: "PTZ" },
        { field: "HPTZ" },
        { field: "VOP" },
        { field: "VOG" },
        { field: "LPR" },
        { field: "RD" },
        { field: "LZ" },
        { field: "Total" },
      ];
    } else if (selected[0] === "Status") {
      arr = [
        { field: "Total" },
        { field: "Open" },
        { field: "Close" },
        { field: "In-Progress" },
        { field: "On-Hold (POC)" },
        { field: "On-Hold (NOC)" },
        { field: "IN-QUEUE" },
      ];
    } else {
      arr = [
        { field: "Total" },
        { field: "Under Resolve SLA" },
        { field: "Over Resolve SLA" },
        { field: "Under Respond SLA" },
        { field: "Over Respond SLA" },
        { field: "On Hold" },
      ];
    }

    setColumnsDefs(arr);
  }, [selectedFields, selected]);

  return (
    <div className="grid-container">
      <div
        className="ag-theme-alpine"
        style={{ height: 500, overflowY: "scroll" }}
      >
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowHeight={35}
        />
      </div>
    </div>
  );
};

export default ReportsTable;
