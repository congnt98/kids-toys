import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
import { FaCaretDown } from "react-icons/fa6";

const Menu = () => {
  const [menus, setMenus] = useState([
    {
      name: "HÀNG MỚI",
      path: ROUTERS.USER.PRODUCTNEW,
    },
    {
      name: "Flash Sale",
      path: ROUTERS.USER.FLASHSALE,
    },
    {
      name: "Sản Phẩm",
      path: ROUTERS.USER.PRODUCT,
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
      name: "Giới Tính",
      path: ROUTERS.USER.SEX,
      child: [
        {
          name: "BÉ TRAI",
          path: "collections/betrai",
        },
        {
          name: "BÉ GÁI",
          path: "collections/begai",
        },
        {
          name: "UNISEX",
          path: "collections/unisex",
        },
      ],
    },
    {
      name: "Độ Tuổi",
      path: ROUTERS.USER.AGE,
    },
    {
      name: "Thương Hiệu",
      path: ROUTERS.USER.TRADEMARK,
    },
    {
      name: "Khuyến Mãi",
      path: ROUTERS.USER.PROMOTION,
    },
    {
      name: "Chương Trình Thành Viên",
      path: ROUTERS.USER.MEMBERSHIP,
    },
    {
      name: "Cẩm Nang",
      path: ROUTERS.USER.HANDBOOK,
    },
  ]);

  const listMenus = menus?.map((menu, menuKey) => (
    <li
      key={menuKey}
      className={menuKey === 0 ? "has-children active" : "has-children"}
    >
      <Link to={menu.path}>
        <span> {menu.name}</span>
      </Link>
      {menu.child && <FaCaretDown />}
      {menu.child && (
        <ul className="sub-menu">
          {menu.child.map((subMenu, subMenuKey) => (
            <li key={`${menuKey} - ${subMenuKey}`}>
              <Link to={subMenu.path}>
                <span>{subMenu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <>
      <div className="main-menu">
        <ul>{listMenus}</ul>
      </div>
    </>
  );
};

export default Menu;
