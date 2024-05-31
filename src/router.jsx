import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { ROUTERS } from "./utils/router";
import Shop from "./pages/shop";
// import Notfound from "pages/notfound";
import DefaultLayout from "./component/DefaultLayout/DefaultLayout";
import { Fragment, memo } from "react";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Notfound from "./pages/notfound";

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
    {
      path: ROUTERS.USER.PRODUCT,
      component: <Product />,
    },
    {
      path: ROUTERS.USER.PRODUCTDETAIL,
      component: <ProductDetail />,
    },
    {
      path: ROUTERS.USER.NOTFOUND,
      component: <Notfound />,
      layout: null,
    },
  ];

  return (
    <>
      <Routes>
        {userRouter.map((item, index) => {
          let Layout = DefaultLayout;
          if (item.layout) {
            Layout = item.layout;
          } else if (item.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={item.path}
              element={<Layout>{item.component}</Layout>}
            />
          );
        })}
      </Routes>

    </>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default memo(RouterCustom);
