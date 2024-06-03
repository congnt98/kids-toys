import { Footer } from "Layout/Footer";
import { Header } from "Layout/Header/Header";
import React from "react";

const SidebarLayout = ({ children, ...pros }) => {
  return (
    <>
      <div {...pros}>
        <Header/>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default SidebarLayout;
