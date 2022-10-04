import React from "react";
import Multiselect from "multiselect-react-dropdown";
import "../pages/Reports/Reports.css";

const handleSelect = (e, setSelected, trigger) => {
  setSelected(e);
  trigger();
};

const Dropdown = ({
  label,
  options,
  placeholder,
  singleSelect = false,
  trigger = function nothing() {},
  setSelected = function noRefCheck() {},
}) => {
  return (
    <div style={{ flex: 1, width: "100%", maxWidth: "45vw" }}>
      <label className="dropdown-title">{label}</label>
      <Multiselect
        className="dropdown-list"
        isObject={false}
        onKeyPressFn={function noRefCheck() {}}
        onRemove={() => trigger()}
        onSearch={function noRefCheck() {}}
        onSelect={(e) => handleSelect(e, setSelected, trigger)}
        placeholder={placeholder}
        options={options}
        singleSelect={singleSelect}
      />
    </div>
  );
};

export default Dropdown;
