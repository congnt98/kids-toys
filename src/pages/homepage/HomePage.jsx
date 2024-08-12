import { memo } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import Banner from "Layout/main/Banner";
import FeaturedCategories from "Layout/main/FeaturedCategories";
import AgeCatalog from "Layout/main/AgeCatalog";

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
