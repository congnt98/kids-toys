import { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";

import FeaturedCategories from "Layout/main/FeaturedCategories";
import ProductCatalog from "Layout/main/ProductCatalog";
import SexCatalog from "Layout/main/SexCatalog";
import Banner from "Layout/main/Banner";

const HomePage = () => {
  return (
    <>
      <section className="section-banner">
        <div className="container">
          <Banner />
        </div>
      </section>
      <section className="featured-collection relative">
        <div className="container">
          <FeaturedCategories />
        </div>
      </section>

      <section className="section-product-catalog">
        <div className="container">
          <ProductCatalog />
        </div>
      </section>

      <section className="section-sex-catalog">
        <div className="container">
          <SexCatalog />
        </div>
      </section>
    </>
  );
};
export default memo(HomePage);
