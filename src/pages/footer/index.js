import { memo } from "react";
import "./style.scss"
const HomePage = () => {
  return (
    <>
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
                    <a title="Facebook" href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a title="Twitter" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a title="Linkedin" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a title="Youtube" href="#">
                      <i className="fa fa-youtube"></i>
                    </a>
                    <a title="Vimeo" href="#">
                      <i className="fa fa-vimeo"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-8">
                <div className="single-footer-widget">
                  <h2 className="widget-title">Contact Us</h2>
                  <ul className="contact-links">
                    <li>
                      <i className="pe-7s-home"></i>{" "}
                      <span>Your address goes here</span>{" "}
                    </li>
                    <li>
                      <i className="pe-7s-mail"></i>
                      <a href="mailto:info@example.com"> info@example.com</a>
                    </li>
                    <li>
                      <i className="pe-7s-call"></i>
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
                      <a href="contact.html">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="contact.html">Payment Methode</a>
                    </li>
                    <li>
                      <a href="contact.html">Product Warranty</a>
                    </li>
                    <li>
                      <a href="contact.html">Return Process</a>
                    </li>
                    <li>
                      <a href="contact.html">Payment Security</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-8">
                <div className="single-footer-widget">
                  <h2 className="widget-title">Signup for newsletter</h2>
                  <div className="widget-body">
                    <div className="newsletter-form-wrap pt-1">
                      <form id="mc-form" className="mc-form" novalidate="true">
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
                    © 2022 <strong>Toyqo </strong> Made with{" "}
                    <i className="fa fa-heart text-danger"></i> by{" "}
                    <a href="https://hasthemes.com/">HasThemes.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default memo(HomePage);
