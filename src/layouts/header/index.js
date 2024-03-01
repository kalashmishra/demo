import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/components/credmudra_megamenu.scss";
import { scrollToTop } from "../../utils/commonFunctions";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleElement = (element) => {
    if (window.innerWidth <= 991) {
      if (element === "menu") {
        setIsMenuVisible(!isMenuVisible);
      } else if (element === "dropdown") {
        setIsDropdownVisible(!isDropdownVisible);
      }
    }
  };

 
  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsDropdownVisible(true);
    scrollToTop();
  };
  const isPathAvailable = window.location.href.includes("/get-registered");
;

  return (
    <>
      {isPathAvailable === false && (
        <header className="sticky-header credmudra_header" id="top">
          <div className="container-md">
            <nav className="credbar">
              <div className="brand-and-icon">
                <Link to="/" onClick={()=> scrollToTop()} className="credbar-brand">
                  <img
                    width="215"
                    height="39"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/credmudra_logo_new.png"
                    }
                    className="custom-logo"
                    alt="Credmudra"
                    decoding="async"
                  />
                </Link>
                <button
                  onClick={() => {
                    toggleElement("menu");
                    scrollToTop();
                  }}
                  type="button"
                  className="credbar-toggler"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div
                className="credbar-collapse"
                style={{ display: isMenuVisible ? "none" : "block" }}
              >
                <ul className="credbar-nav">
                  <li>
                    <Link
                      onClick={() => {
                        setIsMenuVisible(!isMenuVisible);
                        scrollToTop();
                      }}
                      to="/business-loan"
                    >
                      Business Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        toggleElement("dropdown");
                        scrollToTop();
                      }}
                      to="#"
                      className="menu-link"
                    >
                      Personal Loan
                      <span className="drop-icon">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </Link>
                    <div
                      className="sub-menu"
                      style={{ display: isDropdownVisible ? "none" : "block" }}
                    >
                      <div className="container1">
                        <div className="row lign-items-md-center">
                          <div className="col-md-4 sub-menu-item">
                            <h4>Personal Loan</h4>
                            <p>
                              Experience The Convenience Of Getting An Instant
                              Personal Loan Through Our Easy Application
                              Process.
                            </p>
                          </div>
                          <div className="col-md-4 sub-menu-item">
                            <ul>
                              <li>
                                <Link onClick={handleClick} to="/personal-loan">
                                  Personal Loan
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={handleClick}
                                  to="/debt-consolidation"
                                >
                                  Personal Loan for Debt Consolidation{" "}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={handleClick}
                                  to="/personal-loan-for-medical-emergency"
                                >
                                  Personal Loan for Medical Emergencies
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={handleClick}
                                  to="/personal-loan-for-travel"
                                >
                                  Personal Loan for Travel
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={handleClick}
                                  to="/personal-loan-for-two-wheeler"
                                >
                                  Personal Loan For Two Wheeler
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4 sub-menu-item">
                            <ul>
                              {/* <!-- <li><Link to="/personal-loan-for-self-employed-professionals/">Personal Loan For Self-Employed Professionals</Link></li> --> */}
                              <li>
                                <Link
                                  onClick={handleClick}
                                  to="/personal-loan-for-home-renovation"
                                >
                                  Personal Loan For Home Renovation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={handleClick}
                                  to="/personal-loan-eligibility"
                                >
                                  Personal loan Eligibility
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={handleClick}
                                  to="/personal-loan-interest-rate"
                                >
                                  Personal Loan Interest Rate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={handleClick}
                                  to="/personal-loan-emi-calculator"
                                >
                                  Personal Loan EMI Calculator
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link target="_blank" to="https://credmudra.com/blog/">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* //   {/* {isVisible && <div className="header_notice" style={{ display: isVisible ? 'block' : 'none' }}>
    //     <div className="container">
    //       <div className="row align-items-md-center">
    //         <div className="col-md-9">
    //           <div className="header_notice_content">
    //             <p>We are thrilled to announce that Credmudra has been honored with a prestigious certificate of recognition as a startup by the Ministry of Promotion of Industry and Internal Trade, Government of India!</p>
    //           </div>
    //         </div>
    //         <div className="col-md-3">
    //           <div className="header_notice_logo">
    //             <img src={process.env.PUBLIC_URL + "assets/images/startup_india_logo.svg"} alt="" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <i onClick={() => setIsVisible(!isVisible)} className="fa fa-window-close" id="si_close" aria-hidden="true"></i>
    //   </div>} */}
        </header>
      )}
      {isPathAvailable && (
        <header className="sticky-header credmudra_header">
          <nav
            className="navbar navbar-expand-lg"
            style={{
              flexWrap: "nowrap",
            }}
          >
            <div className="container">
            <Link to="/" onClick={()=> scrollToTop()} className="credbar-brand">
                <img
                  width="215"
                  height="39"
                  src={process.env.PUBLIC_URL + "/assets/images/credmudra_logo_new.png"}
                  className="custom-logo"
                  alt="Credmudra"
                  decoding="async"
                />
             
             </Link>
               
              <div className=" form_nav_div ">
                <div className="form_nav_inner">
                  <p>
                    Recognition as a startup by <br /> Government of India
                  </p>
                  <img src="./../assets/images/startup_india_logo.svg" alt="" />
                </div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
