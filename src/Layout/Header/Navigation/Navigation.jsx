import logo from "../../../assets/images/logo.webp";
import Action from "../Actions/Action";
import { ActionsItem } from "../../../component/ActionItem";
import Menu from "../Menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-2/12">
        <Link to="/">
          <img src={logo} className="rounded mx-auto d-block" alt="..." />
        </Link>
      </div>
      <div className="w-auto"></div>
      <div className="w-full sm:w-1/2 lg:w-4/12">
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
