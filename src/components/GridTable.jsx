import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "./GridTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useCallback } from "react";
import apiCalls from "../backend/apiCalls";

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

const slaResolve = (p) => {
  return (
    <div
      style={{
        height: 20,
        width: 30,
        backgroundColor: p.value,
        marginTop: 5,
      }}
    ></div>
  );
};

const GridTable = ({ tickets }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState();
  const [editing, setEditing] = useState();

  const columnDefs = [
    { field: "source_incident_no", headerName: "Source Incident No" },
    {
      field: "time_to_resolve_sla",
      headerName: "SLA",
      width: 70,
      cellRenderer: slaComp,
    },
    {
      field: "time_to_respond_sla",
      headerName: "SLA Color Code",
      width: 90,
      cellRenderer: slaResolve,
    },
    {
      field: "internal_incident_no",
      headerName: "Internal Incident #",
      editable: false,
    },
    { field: "status", headerName: "Status" },
    {
      field: "opening_time",
      headerName: "Opening Time",
    },
    { field: "fault_description", headerName: "Fault Description" },

    { field: "resolution", headerName: "Resolution" },
    { field: "closing_time", headerName: "Closing Time" },
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
    editable: editing,
  }));

  const UpdateRow = async (data) => {
    let newData = JSON.parse(JSON.stringify(data));
    delete newData?.time_to_resolve;
    delete newData?.time_to_resolve_sla;
    delete newData?.time_to_respond;
    delete newData?.time_to_respond_sla;
    delete newData?.closing_time;
    delete newData?.opening_time;
    delete newData?.source_time;

    await apiCalls
      .updateRowApi(newData)
      .then(() => console.log("row updated"))
      .catch((err) => console.log("err eediting row", err));
  };

  const onUpdate = useCallback((params) => {
    UpdateRow(params.data);
  });

  useEffect(() => {
    setRowData(tickets);
  }, [tickets]);

  return (
    <div className="grid-container">
      <div className="search-container">
        <button
          style={{
            border: "1px solid black",
            padding: "2px 20px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Disable Editing" : "Enable Editing"}
        </button>
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
          animateRows={true}
          onCellValueChanged={onUpdate}
        />
      </div>
    </div>
  );
};

export default GridTable;
