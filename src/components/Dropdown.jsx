import React from "react";
import Multiselect from "multiselect-react-dropdown";
import "../pages/Reports/Reports.css";

const Dropdown = ({
  label,
  options,
  placeholder,
  singleSelect = false,
  setSelected = function noRefCheck() {},
}) => {
  return (
    <div style={{ flex: 1, width: "100%" }}>
      <label className="dropdown-title">{label}</label>
      <Multiselect
        displayValue="key"
        className="dropdown-list"
        isObject={false}
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={(e) => setSelected(e)}
        placeholder={placeholder}
        options={options}
        showCheckbox
        singleSelect={singleSelect}
      />
    </div>
  );
};

export default Dropdown;
