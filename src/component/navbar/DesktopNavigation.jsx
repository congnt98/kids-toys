import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import logo from "../../assets/images/logo.webp";
import "./navbar.scss";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";

const DesktopNavigation = () => {
  // const [toggle, setToggle] = useState(false);
  // const handleClick = () => {
  //   setToggle((toggle) => !toggle);
  // };
  return (
    <>
      <div className="col-6 col-md-6 col-lg-3">
        <img src={logo} className="rounded mx-auto d-block" alt="..." />
      </div>
      <div className="d-none d-lg-block col-lg-6 ">
        <NavLink />
      </div>
      <div className="col-6 col-md-6 col-lg-3">
        <div className="actions">
          <Link to="#" className="actions-btn actions-search">
            <CiSearch />
          </Link>
          <Link to="#" className="actions-btn actions-user">
            <CiUser />
          </Link>
          <Link to="#" className="actions-btn actions-wishlist">
            <CiHeart />
          </Link>
          <Link to="#" className="actions-btn actions-cart">
            <CiShoppingCart />
            <div className="actions-num">3</div>
          </Link>
          <Link
            to=""
            className="actions-btn actions-btn-menu d-block d-lg-none "
            // onClick={handleClick}
          >
            <GiHamburgerMenu />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
