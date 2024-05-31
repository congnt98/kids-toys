import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";

const NavLinkMobile = () => {
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

  const listMenusMobile = menus?.map((menu, menuKey) => (
    <li
      key={menuKey}
      className={menuKey === 0 ? "has-children active" : "has-children"}
    >
      <Link to={menu.path}>
        {" "}
        {menu.name} {menu.child && <FaAngleDown />}
      </Link>

      {menu.child && (
        <ul className="dropdown">
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
      <ul className="mobile-menu">{listMenusMobile}</ul>
    </>
  );
};

export default NavLinkMobile;
