import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "./GridTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

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

const GridTable = ({ tickets }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState();

  const columnDefs = [
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

  const onFilterTextChange = (e) => {
    gridApi.setQuickFilter(e.target.value);
  };
  const defaultColDef = useMemo(() => ({
    resizable: true,
    flex: 1,
    sortable: true,
  }));

  useEffect(() => {
    setRowData(tickets);
  }, [tickets]);

  return (
    <div className="grid-container">
      <div className="search-container">
        <input
          type="search"
          onChange={onFilterTextChange}
          placeholder="Enter search keywords"
          className="grid-search"
        />
        <FontAwesomeIcon icon={faFilter} className="icons fa-lg" />
      </div>

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

export default GridTable;
