import { Footer } from "Layout/Footer";
import { Header } from "Layout/Header/Header";
import FilterProduct from "Layout/LeftSidebar/FilterProduct";
import React from "react";

const SidebarLayout = ({ children, ...props }) => {
  return (
    <>
      <div {...props}>
        <Header />
        <main>
          <div className="container">
            <div className="main-layout gap-[40px] flex justify-between mt-10 max-w-full flex-wrap md:flex-nowrap ">
              <FilterProduct {...props} />
              <div className="main-content mb-20 w-full md:w-[calc(100%-284px)]">
                {children}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SidebarLayout;
