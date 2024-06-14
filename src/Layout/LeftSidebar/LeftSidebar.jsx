import React from "react";

const LeftSidebar = () => {
  return (
    <div className="left-content md:w-[284px] w-full  relative">
      <div className="filter-tree py-4 border-b-[1px] border-[#ededed]">
        <div className="filter-label mb-6">
          <button className="text-red font-Jakarta font-extrabold text-lg capitalize ">
            Danh Mục
          </button>
        </div>
        <div className="filter-wrapper max-h-[350px] overflow-hidden pr-[10px]">
          <ul className="filter-items p-0 m-0 ">
            <li className="filter-item border-b-[1px] border-[#f2f2f2] py-[10px]">
              <div className="flex justify-between w-full">
                <a href="#" className="block w-[92%]">
                  <span>Siêu anh hùng</span>
                  <span className="float-right">(471)</span>
                </a>
                <button className="w-[20px] h-[20px] rotate-[270deg]">
                  <svg
                    fill="#000"
                    class="boost-sd__arrow-button-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    role="img"
                    viewBox="0 0 7 12"
                  >
                    <path
                      class="boost-sd__arrow-button-path boost-sd__arrow-button-path--filter"
                      d="M6.58942 0.610713C6.26398 0.285274 5.73635 0.285274 5.41091 0.610713L0.611415 5.41021C0.455135 5.56649 0.366829 5.77895 0.366829 5.99996C0.366829 6.22098 0.454629 6.43294 0.610909 6.58922L5.41091 11.3892C5.73635 11.7147 6.26398 11.7147 6.58942 11.3892C6.91486 11.0638 6.91486 10.5362 6.58942 10.2107L2.37867 5.99996L6.58942 1.78922C6.91486 1.46379 6.91486 0.936153 6.58942 0.610713Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
