import React from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.scss";
import {
  FaFacebook,
  FaHeart,
  FaLinkedinIn,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="section footer-section">
      <div className="footer-top bg-primary section-padding">
        <div className="container">
          <div className=" flex flex-wrap mb-n8">
            <div className="lg:flex-[0_0_25%] sm:flex-[0_0_50%] flex-auto">
              <div className="single-footer-widget">
                <h1 className="widget-title">About Us</h1>
                <p className="desc-content">hello i'm front-end developer</p>
                <ul className="widget-social justify-content-start mb-n2">
                  <li className="icon-content">
                    <Link
                      title="Facebook"
                      to=""
                      aria-label="Facebook"
                      data-social="Facebook"
                    >
                      <div className="filled"></div>
                      <FaFacebook />
                    </Link>
                    <div className="tooltip">Facebook</div>
                  </li>
                  <li className="icon-content">
                    <Link
                      title="Twitter"
                      to=""
                      aria-label="Twitter"
                      data-social="Twitter"
                    >
                      <div className="filled"></div>
                      <FaXTwitter />
                    </Link>
                    <div className="tooltip">Twitter</div>
                  </li>
                  <li className="icon-content">
                    <Link
                      title="LinkedinIn"
                      to=""
                      aria-label="LinkedinIn"
                      data-social="LinkedinIn"
                    >
                      <div className="filled"></div>
                      <FaLinkedinIn />
                    </Link>
                    <div className="tooltip">LinkedinIn</div>
                  </li>
                  <li className="icon-content">
                    <Link
                      title="Youtube"
                      to=""
                      aria-label="Youtube"
                      data-social="Youtube"
                    >
                      <div className="filled"></div>
                      <FaYoutube />
                    </Link>
                    <div className="tooltip">Youtube</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex-[0_0_25%] sm:flex-[0_0_50%] flex-auto">
              <div className="single-footer-widget">
                <h2 className="widget-title">Contact Us</h2>
                <ul className="contact-links">
                  <li>
                    <CiHome />
                    <span>Your address goes here</span>
                  </li>
                  <li>
                    <MdOutlineMail />
                    <a href="mailto:info@example.com"> ntcong.exe@gamil.com</a>
                  </li>
                  <li>
                    <FaPhone />
                    <a href="tel:+012-3456-789"> +012 3456 789</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex-[0_0_25%] sm:flex-[0_0_50%] flex-auto">
              <div className="single-footer-widget aos-init aos-animate">
                <h2 className="widget-title">Information</h2>
                <ul className="widget-list">
                  <li>
                    <Link to=""></Link>
                  </li>
                  <li>
                    <Link to=""></Link>
                  </li>
                  <li>
                    <Link to=""></Link>
                  </li>
                  <li>
                    <Link to="">Return Process</Link>
                  </li>
                  <li>
                    <Link to=""></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex-[0_0_25%] sm:flex-[0_0_50%] flex-auto">
              <div className="single-footer-widget">
                <h2 className="widget-title">Signup for newsletter</h2>
                <div className="widget-body">
                  <div className="newsletter-form-wrap pt-1">
                    <div className="input-group">
                      <input
                        type="email"
                        className="input"
                        id="Email"
                        name="Email"
                        placeholder="uiverse@verse.io"
                        autoComplete="off"
                      />
                      <input
                        className="button--submit"
                        value="Subscribe"
                        type="submit"
                      />
                    </div>
                    <div className="mailchimp-alerts text-centre">
                      <div className="mailchimp-submitting"></div>
                      <div className="mailchimp-success text-success"></div>
                      <div className="mailchimp-error text-danger"></div>
                    </div>
                  </div>

                  <p className="desc-content mb-0">
                    Join over 1+ people who get free and fresh content delivered
                    automatically each time we publish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-secondary pt-4 pb-4">
        <div className="container">
          <div className="row items-center">
            <div className="w-full text-center">
              <div className="copyright-content">
                <p className="mb-0">
                  © 2024 <strong>HCM </strong> Made with
                  <FaHeart /> by
                  <Link to="https://hasthemes.com/">ntcong.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
