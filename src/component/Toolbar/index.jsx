import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { MdOutlineGridOn } from "react-icons/md";
import Dropdown from "component/Dropdown";

const Toolbar = (props) => {
  const {
    handleViewChange,
    sortOption,
    numberOfProduct,
    setSortProduct,
    sortProduct,
  } = props;

  return (
    <>
      <div className="toolbar">
        <div className="view">
          <span className="label">kiểu xem</span>
          <div className="view-tooltip">
            <div
              data-tooltip-id="my-tooltip-grid-two"
              data-tooltip-content="Chế độ xem lưới 2"
              className=" icon show-three"
              onClick={() => {
                handleViewChange("grid-two");
              }}
            >
              <CiGrid41 />
            </div>
            <div
              data-tooltip-id="my-tooltip-grid-three"
              data-tooltip-content="Chế độ xem lưới 3"
              className=" icon show-three"
              onClick={() => {
                handleViewChange("grid-three");
              }}
            >
              <MdOutlineGridOn />
            </div>

            <Tooltip id="my-tooltip-grid-two" />
            <Tooltip id="my-tooltip-grid-three" />
          </div>
        </div>
        <div className="count">
          <span className="label">tổng</span>
          <div className="text-count">{numberOfProduct}</div>
        </div>
        <div className="top">
          <Dropdown
            name={"sort-product"}
            label={"sắp xếp theo"}
            options={sortOption}
            value={sortProduct}
            onChange={setSortProduct}
          />
        </div>
      </div>
    </>
  );
};

export default Toolbar;
