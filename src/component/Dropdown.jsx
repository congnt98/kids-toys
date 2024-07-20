import React, { useState } from "react";

const Dropdown = ({ name }) => {
  const [status, setStatus] = useState(false);
  const handleDropdown = (value) => {};

  const handleOpen = (status) => {
    setStatus(!status);
  };
  return (
    <div className={`dropdown dropdown-${name}`}>
      <button
        onClick={() => {
            setStatus(!status);
        }}
      >
        a-z
      </button>
      {status && (
        <ul className="dropdown-menu">
          <li onClick={() => handleDropdown("asc")}>A - Z</li>
          <li onClick={() => handleDropdown("desc")}>Z - A</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
