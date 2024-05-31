import { Link } from "react-router-dom";
import NavLinkMobile from "./NavLinkMobile";

const MobileNavigation = () => {
  return (
    <>
      <div className="mobile-menu-wrapper open">
        <div className="offcanvas-overlay"></div>

        <div className="mobile-menu-inner">
          <div className="offcanvas-btn-close">
            <i className="pe-7s-close"></i>
          </div>

          <div className="mobile-menu-inner-wrapper">
            <div className="search-box-offcanvas">
              <form>
                <input
                  className="search-input-offcanvas"
                  type="text"
                  placeholder="Search product..."
                />
                <button className="search-btn">
                  <i className="pe-7s-search"></i>
                </button>
              </form>
            </div>
            <div className="mobile-navigation">
              <NavLinkMobile/>
            </div>
            <div className="offcanvas-lag-curr mb-6">
              <div className="header-top-lan-curr-link">
                <div className="header-top-lan dropdown">
                  <h4 className="title">Language:</h4>
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
                    English <i className="fa fa-angle-down"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <Link className="dropdown-item" to="#">
                        English
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Japanese
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Arabic
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Romanian
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-top-curr dropdown">
                  <h4 className="title">Currency:</h4>
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
                    USD <i className="fa fa-angle-down"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <Link className="dropdown-item" to="#">
                        USD
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Pound
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-auto bottom-0">
              <ul className="contact-links">
                <li>
                  <i className="fa fa-phone"></i>
                  <Link to="#"> +012 3456 789</Link>
                </li>
                <li>
                  <i className="fa fa-envelope-o"></i>
                  <Link to="#"> info@example.com</Link>
                </li>
                <li>
                  <i className="fa fa-clock-o"></i>
                  <span>Monday - Sunday 9.00 - 18.00</span>
                </li>
              </ul>
              <div className="widget-social">
                <Link title="Facebook" to="#">
                  <i className="fa fa-facebook-f"></i>
                </Link>
                <Link title="Twitter" to="#">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link title="Linkedin" to="#">
                  <i className="fa fa-linkedin"></i>
                </Link>
                <Link title="Youtube" to="#">
                  <i className="fa fa-youtube"></i>
                </Link>
                <Link title="Vimeo" to="#">
                  <i className="fa fa-vimeo"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
