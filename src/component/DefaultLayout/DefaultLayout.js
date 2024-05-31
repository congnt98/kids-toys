import React from "react";
import MobileNavigation from "../navbar/MobileNavigation";
import { Header } from "../Header";
import { Footer } from "../Footer";
// import { Header } from "../Header";
// import { Footer } from "../Footer";

const DefaultLayout = ({children, ...pros}) => {
  return (
    <>
      <div {...pros}>
        <Header />
        {children}
        <Footer />
      </div>
      <MobileNavigation />
    </>
  );
};

export default DefaultLayout;
