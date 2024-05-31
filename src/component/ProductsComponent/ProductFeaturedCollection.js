// src/components/ProductList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/product/productSlice";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import "./product.scss";
import productImage1 from "../../assets/images/product/1.webp";
import productImage2 from "../../assets/images/product/2.webp";
import productImage3 from "../../assets/images/product/3.webp";
import productImage4 from "../../assets/images/product/4.webp";
import productImage5 from "../../assets/images/product/5.webp";
import productImage6 from "../../assets/images/product/6.webp";
import productImage7 from "../../assets/images/product/7.webp";
import productImage8 from "../../assets/images/product/8.webp";
import Slider from "react-slick";

const ProductFeaturedCollection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const Settings2row = {
    className: "center",
    centerPadding: "40px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...Settings2row}>
      {products?.map((item, index) => (
          <div className="product" key={index}>
            <div className="thumb">
              <Link to="" className="image">
                <img className="fit-image" src={item.image} alt="Product" />
              </Link>
              <span className="badges">
                <span className="sale"> -{item.sale}%</span>
              </span>
              <div className="actions">
                <Link to="" className="action wishlist">
                  <FaRegHeart />
                </Link>
                <Link to="" className="action compare">
                  <FaCodeCompare />
                </Link>
                <Link to="#" className="action quickview">
                  <CiSearch />
                </Link>
              </div>
              <div className="add-cart-btn">
                <button className="btn btn-sm btn-whited btn-hover-primary text-capitalize add-to-cart">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="content">
              <h5 className="title">
                <Link to="single-product.html">{item.name}</Link>
              </h5>
              <span className="price">
                <span className="new">${item.price}</span>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductFeaturedCollection;
