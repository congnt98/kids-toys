import logo from "../../../assets/images/logo.webp";
import Action from "./Action";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navigation = () => {
  return (
    <>
      <div className="w-full flex-[0_1_180px]">
        <Link to="/">
          <img src={logo} className="rounded mx-auto d-block" alt="..." />
        </Link>
      </div>
      <div className="w-auto flex-[2_2_auto]">
        <Search />
      </div>
      <div className="w-full  flex-[0_1_200px]">
        <div className="actions">
          <Action />
        </div>
      </div>
      <div className="d-none d-lg-block w-full ">
        <Menu />
      </div>
    </>
  );
};

export default Navigation;
