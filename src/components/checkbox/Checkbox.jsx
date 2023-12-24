import React, { useState } from "react";
import styled from "styled-components";
import "./checkbox.css";
const Checkbox = ({ label, checked = true, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
          {...props}
          className={isChecked ? "checked" : ""}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
