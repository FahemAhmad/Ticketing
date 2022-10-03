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

const ReportsTable = ({ tickets, selectedFields }) => {
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
  }));

  useEffect(() => {
    setRowData(tickets);
  }, [tickets]);

  useEffect(() => {
    const arr = [];

    fieldNames?.map((singleField, index) => {
      if (selectedFields?.includes(singleField)) {
        arr.push({ field: singleField, headerName: mapNames[index] });
      }
    });

    setColumnsDefs(arr);
  }, [selectedFields]);

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
