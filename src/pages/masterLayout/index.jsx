import { memo } from "react";
// import Header from "../header";
import MobileNavigation from "component/navbar/MobileNavigation";
import { Header } from "component/Header";
import { Footer } from "component/Footer";
const MasterLayout = ({children, ...pros}) => {
  return (
    <>
    <div {...pros}>
      < Header/>
      {children}
      <Footer/>
    </div>
      <MobileNavigation/>
    </>
  );
};
export default memo(MasterLayout);
