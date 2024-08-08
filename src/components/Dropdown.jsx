import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const Dropdown = ({ name, label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown dropdown-container dropdown-${name}`}>
      {label && <label htmlFor={`dropdown=${name}`}>{label}</label>}
      <button onClick={handleToggle}>
        <span>{options.find((option) => option.value === value)?.label}</span>
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => {
                handleDropdown(option.value);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
