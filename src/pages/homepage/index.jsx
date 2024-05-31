import { memo, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./home.scss";
import productImage1 from "../../assets/images/product/1.webp";
import productImage2 from "../../assets/images/product/2.webp";
import productImage3 from "../../assets/images/product/3.webp";
import productImage4 from "../../assets/images/product/4.webp";
import productImage5 from "../../assets/images/product/5.webp";
import productImage6 from "../../assets/images/product/6.webp";
import productImage7 from "../../assets/images/product/7.webp";
import productImage8 from "../../assets/images/product/8.webp";
import post1 from "../../assets/images/post/1.webp";
import post2 from "../../assets/images/post/2.webp";
import post3 from "../../assets/images/post/3.webp";
import banner1 from "../../assets/images/banner/slider2-1.webp";
import banner2 from "../../assets/images/banner/slider2-2.webp";

import Rating from "react-rating";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import { useSelector } from "react-redux";
import axios from "axios";
import ProductList from "../../component/ProductsComponent/ProductFeaturedCollection";
import ProductFeaturedCollection from "../../component/ProductsComponent/ProductFeaturedCollection";

const HomePage = () => {
  // const [product,setProduct] = useState([])
  // const listProduct = useSelector((stage) => stage.product);


  const Settings3row = {
    className: "center",
    centerPadding: "40px",
    slidesToShow: 4,
    speed: 500,
    rows: 3,
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


  const Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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

  const SettingsFull = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ListBanerHero = [
    {
      img: banner1,
      title: " New Arrivals ",
      title1: "Amazing Craft ",
      text: "Latest baby product & toy collections.",
      sale: "20",
    },
    {
      img: banner2,
      title: "Get -30% off",
      text: "Latest baby product & toy collections.",
      sale: "20",
    },
  ];

  const ListProduct = [
    {
      img: productImage1,
      title: "Dinosaur Toys for Baby",
      price: "$12.50",
      sale: "20",
    },
    {
      img: productImage2,
      title: "Dinosaur Toys for Baby",
      price: "$12.50",
      sale: "20",
    },
    {
      img: productImage3,
      title: "Dinosaur Toys for Baby",
      price: "$12.50",
      sale: "20",
    },
    {
      img: productImage4,
      title: "Dinosaur Toys for Baby",
      price: "$12.50",
      sale: "20",
    },
    {
      img: productImage5,
      title: "Dinosaur Toys for Baby",
      price: "$12.50",
      sale: "20",
    },
    {
      img: productImage6,
      title: "Dinosaur Toys for Baby",
      price: "$12.50",
      sale: "20",
    },
    {
      img: productImage7,
      title: "Dinosaur Toys for Baby",
      price: "$12.50",
      sale: "20",
    },
    {
      img: productImage8,
      title: "Dinosaur Toys for Baby",
      price: "$12.50",
      sale: "20",
    },
  ];

  const ListPost = [
    {
      cat: "Testimonials",
      img: post1,
      title: "There are many variations of passages of lorem ipsum",
      author: "Admin",
      date: "May 21, 2022",
      cmt: "3",
    },
    {
      cat: "Testimonials",
      img: post2,
      title: "There are many variations of passages of lorem ipsum",
      author: "Admin",
      date: "May 21, 2022",
      cmt: "3",
    },
    {
      cat: "Testimonials",
      img: post3,
      title: "There are many variations of passages of lorem ipsum",
      author: "Admin",
      date: "May 21, 2022",
      cmt: "3",
    },
  ];

  const bannerHero = ListBanerHero?.map((item, key) => (
    <div className="hero-slide-item" key={key}>
      <div className="hero-slide-bg">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="container">
        <div className="hero-slide-content">
          <h2 className="title m-0 text-white">
            {item.title} <br /> {item.title1}
          </h2>
          <p class="text-white">{item.text}</p>
          <Link to="shop.html" class="btn btn-secondary btn-hover-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  ));


  const OnSaleProduct = ListProduct?.map((item, key) => (
    <div className="product" key={key}>
      <div className="single-product-list mb-6">
        <div className="product">
          <div className="thumb">
            <Link to="" className="image">
              <img
                className="fit-image first-image"
                src={item.img}
                alt={item.title}
              />
            </Link>
          </div>
        </div>

        <div className="product-list-content">
          <h6 className="product-name">
            <Link to="">Simple Toy Duck</Link>
          </h6>
          <span className="ratings justify-content-start mb-3">
            <Rating
              emptySymbol="fa-regular fa-star "
              fullSymbol="fa-solid fa-star yellow"
            />
          </span>
          <span className="price">
            <span className="new">$12.50</span>
            <span className="old">$15.85</span>
          </span>
        </div>
      </div>
    </div>
  ));

  const post = ListPost?.map((item, key) => (
    <div className="single-blog" key={key}>
      <div className="blog-thumb">
        <Link to="blog-details.html">
          <img className="fit-image" src={item.img} alt={item.title} />
        </Link>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <p>
            {item.date} | <span>{item.author}</span>
          </p>
        </div>
        <h5 className="blog-title">
          <Link to="blog-details.html">{item.title}</Link>
        </h5>
      </div>
    </div>
  ));

  return (
    <>
      {/* hero-slider */}
      <section className="hero-slider">
        <Slider {...SettingsFull}>{bannerHero}</Slider>
      </section>
      {/* hero-slider */}
      {/* Featured Collection */}
      <section className="featured-collection position-relative">
        <div className="container">
          <div className="row mb-lg-8 mb-6">
            <div className="col-lg col-12">
              <div className="section-title mb-0 text-center aos-init aos-animate">
                <h2 className="title mb-2">Featured Collection</h2>
                <p>Add featured products to weekly lineup</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-carousel">
              <div className="product-wrapper">
                <div className="slider-container">
               <ProductFeaturedCollection/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Collection */}
      {/* On-Sale Product */}
      <section className="on-sale-product position-relative">
        <div className="container">
          <div className="row mb-lg-8 mb-6">
            <div className="col-lg col-12">
              <div className="section-title mb-0 text-center aos-init aos-animate">
                <h2 className="title mb-2">On-Sale Product</h2>
                <p>Check out on-sale Producs</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-carousel">
              <div className="product-wrapper">
                <div className="slider-container">
                  <Slider {...Settings3row}>{OnSaleProduct}</Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* On-Sale Product */}
      {/* Testimonials */}
      <section className="testimonials position-relative">
        <div className="container">
          <div className="row mb-lg-8 mb-6">
            <div className="col-lg col-12">
              <div className="section-title mb-0 text-center aos-init aos-animate">
                <h2 className="title mb-2">Testimonials</h2>
                <p>What they say</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="post-carousel">
              <div className="post-wrapper">
                <Slider {...Settings}>{post}</Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      {/* brand-logo-carousel */}
      <section className="featured-collection position-relative">
        <div className="container">
          <div className="row mb-lg-8 mb-6">
            <div className="col-lg col-12">
              <div className="section-title mb-0 text-center aos-init aos-animate">
                <h2 className="title mb-2">Featured Collection</h2>
                <p>Add featured products to weekly lineup</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-carousel">
              <div className="product-wrapper">
              <ProductFeaturedCollection/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* brand-logo-carousel */};
    </>
  );
};
export default memo(HomePage);
