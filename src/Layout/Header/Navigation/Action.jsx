import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useUser } from "context/UserContext";
import { CiLogout } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

const Action = ({ menuToggle }) => {
  const { isAuthenticated, logout } = useUser();

  return (
    <>
      {isAuthenticated ? (
        <Link
          to="/user"
          className="actions-btn actions-account"
          onClick={logout}
        >
          <CiLogout />
          <span className="hidden lg:block text-nowrap">Đăng xuất</span>
        </Link>
      ) : (
        <Link to="/user" className="actions-btn actions-account">
          <svg
            className="icon icon-account"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 19.8642 3.27532 21.4306 5.00111 21.8743C5.32039 21.9563 5.6551 22 6 22H18C18.3449 22 18.6796 21.9563 18.9989 21.8743C20.7247 21.4306 22 19.8642 22 18V6C22 3.79086 20.2091 2 18 2ZM12 13C14.4617 13 16.5783 14.6062 17.5115 16.9071C17.9491 17.986 17.0067 19 15.8425 19H8.15752C6.99332 19 6.05092 17.986 6.48849 16.9071C7.42174 14.6062 9.53834 13 12 13ZM12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="hidden lg:block text-nowrap">Đăng nhập</span>
        </Link>
      )}

      <Link to="/cart" className="actions-btn actions-cart">
        <FaCartShopping />
        <span className="hidden lg:block text-nowrap">Giỏ Hàng</span>
      </Link>

      <button onClick={menuToggle} className="actions-btn actions-btn-menu ">
        <GiHamburgerMenu />
      </button>
    </>
  );
};

export default Action;
