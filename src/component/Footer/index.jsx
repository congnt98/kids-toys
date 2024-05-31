import React from 'react'
import "./style.scss"
import { Link } from "react-router-dom";
import {  CiHome } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaHeart, FaLinkedinIn, FaPhone, FaVideo , FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="section footer-section">
    <div className="footer-top bg-primary section-padding">
      <div className="container">
        <div className="row mb-n8">
          <div className="col-12 col-sm-6 col-lg-3 mb-8">
            <div className="single-footer-widget">
              <h1 className="widget-title">About Us</h1>
              <p className="desc-content">
                We are a team of designers and developers that create high
                quality wordpress, shopify, Opencart
              </p>
              <div className="widget-social justify-content-start mb-n2">
                <Link title="Facebook" t0="">
                <FaFacebook />
                </Link>
                <Link title="Twitter" t0="">
                <FaXTwitter />
                </Link>
                <Link title="Linkedin" t0="">
                <FaLinkedinIn />
                </Link>
                <Link title="Youtube" t0="">
                <FaYoutube />
                </Link>
                <Link title="Vimeo" t0="">
                <FaVideo />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-8">
            <div className="single-footer-widget">
              <h2 className="widget-title">Contact Us</h2>
              <ul className="contact-links">
                <li>
                <CiHome />
                  <span>Your address goes here</span>
                </li>
                <li>
                <MdOutlineMail />
                  <a href="mailto:info@example.com"> info@example.com</a>
                </li>
                <li>
                <FaPhone />
                  <a href="tel:+012-3456-789"> +012 3456 789</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-8">
            <div className="single-footer-widget aos-init aos-animate">
              <h2 className="widget-title">Information</h2>
              <ul className="widget-list">
                <li>
                  <Link to="" >Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="">Payment Methode</Link>
                </li>
                <li>
                  <Link to="">Product Warranty</Link>
                </li>
                <li>
                  <Link to="">Return Process</Link>
                </li>
                <li>
                  <Link to="">Payment Security</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-8">
            <div className="single-footer-widget">
              <h2 className="widget-title">Signup for newsletter</h2>
              <div className="widget-body">
                <div className="newsletter-form-wrap pt-1">
                  <form id="mc-form" className="mc-form">
                    <input type="email" id="mc-email" className="form-control email-box mb-4" placeholder="demo@example.com" name="EMAIL" />
                    <button
                      id="mc-submit"
                      className="newsletter-btn"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting"></div>
                    <div className="mailchimp-success text-success"></div>
                    <div className="mailchimp-error text-danger"></div>
                  </div>
                </div>

                <p className="desc-content mb-0">
                  Join over 1,000 people who get free and fresh content
                  delivered automatically each time we publish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom bg-secondary pt-4 pb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <div className="copyright-content">
              <p className="mb-0">
                © 2022 <strong>Toyqo </strong> Made with
                <FaHeart /> by
                <Link to="https://hasthemes.com/">HasThemes.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
