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
    <div style={{ flex: 1, width: "100%", maxWidth: "45vw" }}>
      <label className="dropdown-title">{label}</label>
      <Multiselect
        className="dropdown-list"
        isObject={false}
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={(e) => setSelected(e)}
        placeholder={placeholder}
        options={options}
        singleSelect={singleSelect}
      />
    </div>
  );
};

export default Dropdown;
