import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";
import { ROUTERS } from "./utils/router";
import { memo } from "react";
import Product from "./pages/product/ProductPage";
import Notfound from "./pages/notfound/NotFoundPage";
import DefaultLayout from "Layout/customRouterLayout/DefaultLayout";
import SidebarLayout from "Layout/customRouterLayout/SidebarLayout";

const userRouter = [
  {
    path: ROUTERS.USER.HOME,
    component: <Homepage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.PRODUCT,
    component: <Product />,
    layout: SidebarLayout,
  },
  {
    path: `/${ROUTERS.USER.PRODUCT}/:cat`,
    component: <Product />,
    layout: SidebarLayout,
  },
  {
    path: ROUTERS.USER.NOTFOUND,
    component: <Notfound />,
    layout: null,
  },
];

const renderUserRouter = () => {
  return (
    <Routes>
      {userRouter.map((item, index) => {
        const Layout = item.layout === undefined ? DefaultLayout : item.layout;
        return (
          <Route
            key={index}
            path={item.path}
            element={
              Layout === null ? (
                item.component
              ) : (
                <Layout>{item.component}</Layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default memo(RouterCustom);
