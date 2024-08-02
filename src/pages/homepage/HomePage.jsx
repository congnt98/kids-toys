import { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";

import FeaturedCategories from "Layout/Main/FeaturedCategories";
import Banner from "Layout/Main/Banner";
import AgeCatalog from "Layout/Main/AgeCatalog";

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
        <div className="container"></div>
      </section>

      <section className="section-sex-catalog">
        <div className="container">
          <AgeCatalog />
        </div>
      </section>
    </>
  );
};
export default memo(HomePage);
