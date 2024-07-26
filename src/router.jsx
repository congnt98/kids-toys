import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import DefaultLayout from "Layout/customRouterLayout/DefaultLayout";
import SidebarLayout from "Layout/customRouterLayout/SidebarLayout";
import Homepage from "./pages/homepage/HomePage";
import Product from "./pages/product/ProductPage";
import Notfound from "./pages/notfound/NotFoundPage";
import BrandsPage from "pages/brands/BrandsPage";
import GuidesPage from "pages/guides/GuidesPage";
import PromotionalPrograms from "pages/promotional-programs/PromotionalPrograms";

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
    path: `/${ROUTERS.USER.PRODUCT}/:category`,
    component: <Product />,
    layout: SidebarLayout,
  },
  {
    path: ROUTERS.USER.BRANDS,
    component: <BrandsPage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.GUIDES,
    component: <GuidesPage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.PROMOTIONALPROGRAMS,
    component: <PromotionalPrograms />,
    layout: DefaultLayout,
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
