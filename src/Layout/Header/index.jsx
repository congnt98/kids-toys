import React from "react";
import Navigation from "./Navigation/Navigation";
import AnnounCement from "./announcement";

export const Header = () => {
  return (
    <header>
      <div className="header-top gradient">
        <div className="container">
          <AnnounCement />
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-sticky">
          <div className="container">
            <div className="flex flex-wrap justify-between  items-center ">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
