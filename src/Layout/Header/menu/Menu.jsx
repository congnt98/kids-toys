import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import MenuAPI from "api/Menu";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Menu = ({ menuToggle }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);

  const { data: dataMenu } = useQuery({
    queryKey: ["menu"],
    queryFn: MenuAPI.getAllMenu,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const handleOpenSubMenu = (index) => {
    setOpenSubMenu((prevIndex) => (prevIndex === index ? null : index));
    setOpenSubSubMenu(null);
  };

  const handleOpenSubSubMenu = (index) => {
    console.log(index);
  };

  const renderSubMenu = (submenus, level = 1) => {
    return (
      <>
        <ul className={`menu-items submenu menu-items-level-${level}`}>
          {submenus.map((submenu, subIndex) => (
            <li
              key={subIndex}
              className={`menu-item menu-item-level-${level} ${
                submenu.image ? "has-image" : ""
              } `}
            >
              <Link to={submenu.path}>
                <span onClick={menuToggle}> {submenu.name}</span>
                {submenu.image && (
                  <img src={submenu.image} alt={submenu.name} />
                )}
                {submenu.subcategory && level === 1 && (
                  <FaCaretDown onClick={() => handleOpenSubSubMenu(subIndex)} />
                )}
              </Link>
              {submenu.subcategory && (
                <div className="wrapper-submenu">
                  {renderSubMenu(submenu.subcategory, level + 1)}
                </div>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <button onClick={menuToggle} className="mobile-menu-toggle">
        <IoMdClose />
      </button>
      <div className="main-menu">
        <ul className="menu-items menu-items-level-0">
          {dataMenu?.map((menu, index) => (
            <li
              key={index}
              className={`menu-item menu-item-level-0  ${
                index === 0 ? "active" : ""
              } ${openSubMenu === index ? "show" : "hide"}`}
            >
              {menu.category ? (
                <>
                  <Link to={menu.path}>
                    <span onClick={menuToggle}> {menu.name}</span>
                    <FaCaretDown
                      onClick={() => {
                        handleOpenSubMenu(index);
                      }}
                    />
                  </Link>
                  <div className="wrapper-submenu">
                    {renderSubMenu(menu.category)}
                  </div>
                </>
              ) : (
                <>
                  <Link to={menu.path}>
                    <span onClick={menuToggle}> {menu.name}</span>
                  </Link>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
