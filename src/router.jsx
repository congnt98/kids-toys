import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import DefaultLayout from "Layout/customRouterLayout/DefaultLayout";
import GuidesPage from "pages/GuidesPage/GuidesPage";
import BrandsPage from "pages/BrandsPage/BrandsPage";
import NotFoundLayout from "Layout/customRouterLayout/NotFoundLayout";
import ProductPage from "pages/ProductPage/ProductPage";
import UpdatePage from "pages/UpdatePage/UpdatePage";
import AuthPage from "pages/AuthPage";
import CartPage from "pages/CartPage";
import HomePage from "pages/homepage/HomePage";

const userRoutes = [
  {
    path: ROUTERS.USER.HOME,
    component: <HomePage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.PRODUCT,
    component: <ProductPage />,
    layout: DefaultLayout,
  },
  // {
  //   path: `/${ROUTERS.USER.PRODUCT}/:category`,
  //   component: <ProductPage />,
  //   layout: DefaultLayout,
  // },
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
    path: ROUTERS.USER.CART,
    component: <CartPage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.USER,
    component: <AuthPage />,
    layout: DefaultLayout,
  },
  {
    path: ROUTERS.USER.NOTFOUND,
    component: <NotFoundLayout />,
    layout: null,
  },
];

const renderUserRoutes = () => (
  <Routes>
    {userRoutes.map((route, index) => {
      const Layout = route.layout || DefaultLayout;
      return (
        <Route
          key={index}
          path={route.path}
          element={
            Layout ? <Layout>{route.component}</Layout> : route.component
          }
        />
      );
    })}
  </Routes>
);

const RouterCustom = () => renderUserRoutes();

export default memo(RouterCustom);
