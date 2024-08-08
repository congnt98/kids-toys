import DefaultLayout from "@Layout/customRouterLayout/DefaultLayout";
import NotFoundLayout from "@Layout/customRouterLayout/NotFoundLayout";
import SidebarLayout from "@Layout/customRouterLayout/SidebarLayout";
import BrandsPage from "@pages/brands/BrandsPage";
import GuidesPage from "@pages/guides/GuidesPage";
import HomePage from "@pages/homepage/HomePage";
import Product from "@pages/product/ProductPage";
import UpdatePage from "@pages/update/UpdatePage";
import { ROUTERS } from "@utils/router";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";

const userRouter = [
  {
    path: ROUTERS.USER.HOME,
    component: <HomePage />,
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
    component: <UpdatePage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.USER,
    component: <UpdatePage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.CART,
    component: <UpdatePage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.NOTFOUND,
    component: <NotFoundLayout />,
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
