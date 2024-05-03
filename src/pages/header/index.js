import { memo, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiHeart, CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";
const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "Home",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Shop",
      path: ROUTERS.USER.SHOP,
      isShowSubMenu: false,
      child: [
        {
          name: "Model Toys",
          path: "model-toys",
        },
        {
          name: "Educational Toys",
          path: "educational-toys",
        },
        {
          name: "Jigsaw Toys",
          path: "jigsaw-toys",
        },
        {
          name: "Other Toys",
          path: "other-toys",
        },
      ],
    },
    {
      name: "Product",
      path: ROUTERS.USER.SHOP,
      isShowSubMenu: false,
      child: [
        {
          name: "Product New",
          path: "product-new",
        },
        {
          name: "Product Sale",
          path: "product-sale",
        },
        {
          name: "Product Best-Selling",
          path: "product-best-selling",
        },
      ],
    },
    {
      name: "Blog",
      path: ROUTERS.USER.BLOG,
    },
    {
      name: "About",
      path: ROUTERS.USER.ABOUT,
    },
    {
      name: "Contact",
      path: ROUTERS.USER.CONTACT,
    },
  ]);

  const listMenus = menus?.map((menu, menuKey) => (
    <li className={menuKey === 0 ? "has-children active" : "has-children"}>
      <Link to={menu.path}> {menu.name} </Link>
      {menu.child && <FaAngleDown />}
      {menu.child && (
        <ul className="sub-menu">
          {menu.child.map((subMenu, subMenuKey) => (
            <li key={`${menuKey} - ${subMenuKey}`}>
              <Link to={subMenu.path}>{subMenu.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));
  return (
    <>
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
                <div className="col-md-6 col-lg-3">logo</div>
                <div className="d-none d-lg-block col-lg-6">
                  <div className="main-menu">
                    <ul>{listMenus}</ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="header-actions">
                    <Link
                      to="#"
                      className="header-actions-btn header-actions-search"
                    >
                      <CiSearch />
                    </Link>
                    <Link
                      to="#"
                      className="header-actions-btn header-actions-user"
                    >
                      <CiUser />
                    </Link>
                    <Link
                      to="#"
                      className="header-actions-btn header-actions-wishlist"
                    >
                      <CiHeart />
                    </Link>
                    <Link
                      to="#"
                      className="header-actions-btn header-actions-cart"
                    >
                      <CiShoppingCart />
                      <div className="header-action-num">3</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default memo(Header);
