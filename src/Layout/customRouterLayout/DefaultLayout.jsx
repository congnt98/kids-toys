import { Footer } from "Layout/Footer";
import { Header } from "Layout/Header/Header";
import React from "react";

const DefaultLayout = ({ children, ...pros }) => {
  return (
    <>
      <div {...pros}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
