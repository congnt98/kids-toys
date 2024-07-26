import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { convertSlug } from "utils/stringUtils";
const FilterCatItem = (props) => {
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [hide, setHide] = useState(false);
  const { cat, subCat } = props;
  const navigate = useNavigate();

  const handleSubCatClick = (nameSubCat) => {
    let newSelectCat = nameSubCat === selectedCategories ? null : nameSubCat;
    setSelectedCategories(newSelectCat);
    if (newSelectCat !== null) {
      let slug = convertSlug(newSelectCat);
      navigate(`/product/${slug}`);
    } else{
      navigate("/product/");
    }
  };

  const handleCatClick = (nameCat) => {
    setSelectedCategories(null);
    let slug = convertSlug(nameCat);
    navigate(`/product/${slug}`);
  };

  const handleButtonClick = () => {
    setHide(!hide);
  };

  return (
    <>
      <li className="filter-cat-item border-b-[1px] border-[#f2f2f2] py-[10px] ">
        <div className="flex justify-between w-full items-center ">
          <Link
            className="block w-[92%]"
            onClick={(e) => {
              e.preventDefault();
              handleCatClick(cat.name);
            }}
          >
            <span>{cat.name}</span>
            {/* <span className="float-right">(471)</span> */}
          </Link>
          <button
            className={` w-[20px]  ${
              hide
                ? "rotate-[270deg] items-end"
                : "rotate-[180deg] items-center"
            }  `}
            onClick={handleButtonClick}
          >
            <svg
              fill="#000"
              className="boost-sd__arrow-button-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              role="img"
              viewBox="0 0 7 12"
            >
              <path
                className="boost-sd__arrow-button-path boost-sd__arrow-button-path--filter"
                d="M6.58942 0.610713C6.26398 0.285274 5.73635 0.285274 5.41091 0.610713L0.611415 5.41021C0.455135 5.56649 0.366829 5.77895 0.366829 5.99996C0.366829 6.22098 0.454629 6.43294 0.610909 6.58922L5.41091 11.3892C5.73635 11.7147 6.26398 11.7147 6.58942 11.3892C6.91486 11.0638 6.91486 10.5362 6.58942 10.2107L2.37867 5.99996L6.58942 1.78922C6.91486 1.46379 6.91486 0.936153 6.58942 0.610713Z"
              ></path>
            </svg>
          </button>
        </div>
        {subCat && subCat.length > 0 && (
          <ul className={`tree-lever-1 ${hide ? "hide" : ""}`}>
            {subCat.map((subCatItem, index) => (
              <li className="filter-sub-item" key={index}>
                <Link
                  className={`custom-checkbox ${
                    subCatItem.name === selectedCategories ? "checked" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubCatClick(subCatItem.name);
                  }}
                >
                  <span className="sub-name">{subCatItem.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default FilterCatItem;
