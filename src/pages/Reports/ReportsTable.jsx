import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "../../components/GridTable.css";

import { useEffect } from "react";

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

const ReportsTable = ({ tickets, selectedFields }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState();

  const columnDefs = [
    ()=>fieldNames.filter((singleField,index)=>singleField )
      { field: "source_incident_no", headerName: "Source Incident No" },
      {
        field: "time_to_resolve_sla",
        headerName: "SLA",
        width: 70,
        cellRenderer: slaComp,
      },
      {
        field: "internal_incident_no",
        headerName: "Internal Incident #",
      },
    { field: "status", headerName: "Status" },
    {
      field: "opening_time",
      headerName: "Opening Time",
    },
    { field: "fault_description", headerName: "Fault Description" },

    { field: "resolution", headerName: "Resolution" },
    { field: "closing_time", headerName: "Closing Time" },
    { field: "time_to_resolve", headerName: "Time to Resolve" },
  ];

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  const defaultColDef = useMemo(() => ({
    resizable: true,
    flex: 1,
  }));

  useEffect(() => {
    setRowData(tickets);
  }, [tickets]);

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
