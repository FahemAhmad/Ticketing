import React, { useState } from "react";
import "./SelectedFields.css";

const checkList = [
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

const SelectedFields = ({ setSelectedFields }) => {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    setSelectedFields(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="selected-card-container">
      <div className="checkList">
        <div className="title">Select Fields to show :</div>
        <ul className="list-row">
          {checkList.map((item, index) => (
            <div key={index} className="singleItem">
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectedFields;
