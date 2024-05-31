import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import "./style.scss";
import DesktopNavigation from '../navbar/DesktopNavigation';
// import DesktopNavigation from "component/navbar/DesktopNavigation";

export const Header = () => {
  return (
    <header>
        <div className="header-top bg-primary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-12 col-lg-6 text-center text-lg-start ">
                <p className="header-top-msg">
                  Welcome to Toyqo baby toys online store
                </p>
              </div>
              <div className=" col-6 col-md-12 col-lg-6 text-center text-lg-end">
                <div className="header-top-settings">
                  <ul className="nav align-item-center justify-content-end">
                    <li className="curreny-wrap">
                      $ Currency
                      <FaAngleDown />
                    </li>
                    <li className="language">
                      English
                      <FaAngleDown />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-sticky">
            <div className="container">
              <div className="row align-items-center position-relative">
                  <DesktopNavigation/>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
