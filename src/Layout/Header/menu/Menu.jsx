import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import MenuAPI from "@api/Menu";

const Menu = () => {
  const { data: dataMenu } = useQuery({
    queryKey: ["menu"],
    queryFn: MenuAPI.getAllMenu,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const renderSubMenu = (submenus, level = 1) => {
    return (
      <>
        <ul className={`menu-items submenu menu-items-level-${level}`}>
          {submenus.map((submenu) => (
            <li
              key={submenu.id}
              className={`menu-item menu-item-level-${level} ${
                submenu.image ? "has-image" : ""
              }`}
            >
              <Link to={submenu.path}>
                <span> {submenu.name}</span>
                {submenu.image && (
                  <img src={submenu.image} alt={submenu.name} />
                )}
                {submenu.subcategory && level === 1 && <FaCaretDown />}
              </Link>
              {submenu.subcategory &&
                renderSubMenu(submenu.subcategory, level + 1)}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="main-menu">
        <ul className="menu-items menu-items-level-0">
          {dataMenu?.map((menu, menuKey) => (
            <li
              key={menuKey}
              className={`menu-item  ${
                menuKey === 0 ? "active" : ""
              } menu-item-level-0`}
            >
              <Link to={menu.path}>
                <span> {menu.name}</span>
              </Link>
              {menu.category && <FaCaretDown />}
              {menu.category && (
                <div className="wrapper-submenu">
                  {renderSubMenu(menu.category)}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
