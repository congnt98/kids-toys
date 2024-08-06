import logo from "../../../assets/images/logo.webp";
import Action from "./Action";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="logo w-full flex-[0_1_180px]">
        <Link to="/">
          <img src={logo} className="rounded  d-block" alt="..." />
        </Link>
      </div>
      <div className="search w-auto flex-[2_2_auto]">
        <Search />
      </div>
      <div className=" action w-full  flex-[0_1_200px]">
        <div className="actions">
          <Action menuToggle={handleMenuToggle} />
        </div>
      </div>
      <div className={`menu w-full ${menuOpen ? "show" : "hide"}`}>
        <Menu menuToggle={handleMenuToggle} />
      </div>
    </>
  );
};

export default Navigation;
