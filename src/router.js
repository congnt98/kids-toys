import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/masterLayout";
import Shop from "./pages/shop";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
    {
      path: ROUTERS.USER.SHOP,
      component: <Shop />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
