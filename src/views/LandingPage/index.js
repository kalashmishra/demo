import "../../assets/ComponentStyling/LandingPage/landingPage.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.css";
import "./slider.css";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { Subscribe } from "../../constant/services/credMudra";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
const LandingPage = () => {
  const [displayThanks, setDisplayThanks] = useState(false);
  const [LoadingButton, setLoadingButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    new Swiper(".swiper-feature-container", {
      direction: "horizontal",
      spaceBetween: 15,
      breakpoints: {
        1920: { slidesPerView: 4 },
        992: { slidesPerView: 4 },
        767: { slidesPerView: 2 },
        570: { slidesPerView: 1.5 },
        320: { slidesPerView: 1, dragSize: 100 },
      },
      navigation: {
        nextEl: ".swiper-button-next-f",
        prevEl: ".swiper-button-prev-f",
      },
      scrollbar: {
        el: ".swiper-scrollbar-f",
        draggable: true,
      },
    });

    new Swiper(".swiper-client-container", {
      direction: "horizontal",
      spaceBetween: 25,
      breakpoints: {
        1920: { slidesPerView: 4 },
        992: { slidesPerView: 4 },
        767: { slidesPerView: 2 },
        570: { slidesPerView: 1.5 },
        320: { slidesPerView: 1, dragSize: 100 },
      },
      navigation: {
        nextEl: ".swiper-button-next-c",
        prevEl: ".swiper-button-prev-c",
      },
      scrollbar: {
        el: ".swiper-scrollbar-c",
        draggable: true,
      },
    });
  }, []);

  const handleSubmit = async (e) => {
    setLoadingButton(true);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
    };
    const res = await Subscribe(data);
    setInterval(() => {
      setLoadingButton(false);
      if (res?.data?.status.code === 200) {
        setDisplayThanks(true);
      }
    }, 1500);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    routeRedirection(navigate);
    localStorage.removeItem("loanType");
    sessionStorage.removeItem("employmentType");
    dispatch(setLoanType(""));
    // dispatch(setEmployType(""));
  }, []);

  return (
    <>
      <Helmet>
        <title>{heading.landingPage.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.landingPage.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.landingPage.canonical} />
      </Helmet>
      <section id="home-slider">
        <div className="banner_wrapper">
          <img
            className="wave"
            src={process.env.PUBLIC_URL + "/assets/images/home_bg1.svg"}
            alt="wave"
          />
          <div className="container">
            <div className="row align-items-md-center">
              <div className="col-md-6 ">
                <div className="flex-div">
                  <div className="banner-content">
                    <h1>Your Short Term Loan Is Just A Match Away!</h1>
                    <p>On a mission of financial inclusion for every indian</p>
                  </div>
                </div>
                <div className="container p-0!important">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex mb-3">
                        <div>
                          <div className="features">
                            <Link
                              to="/personal-loan"
                              onClick={() => scrollToTop()}
                            >
                              <div className="feature-box">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/personal-loan.svg"
                                  }
                                  alt="get personal loan"
                                />
                                <span>Personal Loan</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="features">
                            <Link
                              to="/business-loan"
                              onClick={() => scrollToTop()}
                            >
                              <div className="feature-box">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/business-loan.svg"
                                  }
                                  alt="Get business loan"
                                />
                                <span>Business Loan</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="features">
                            <Link
                              to="/debt-consolidation"
                              onClick={() => scrollToTop()}
                            >
                              <div className="feature-box">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/debt-consolidation.svg"
                                  }
                                  alt="Get debt consolidation loan"
                                />
                                <span>Debt Consolidation</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="features">
                            <Link
                              to="/personal-loan-for-medical-emergency"
                              onClick={() => scrollToTop()}
                            >
                              <div className="feature-box">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/health.svg"
                                  }
                                  alt="Get medical emergency loan"
                                />
                                <span>Medical</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ display: "flex", marginBottom: "3px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="button-for-lender">
                  <Link
                    to="/get-registered/user-number"
                    onClick={() => scrollToTop()}
                  >
                    <button>Get Matched Now !</button>
                  </Link>
                </div>
              </div>
              <div
                className="col col-md-6"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div className="home_banner_image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/home-banner.webp"
                    }
                    alt="Get instant personal loan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="cred_brand_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-7">
              <div className="cred_brand_content">
                <h2>Envisioning Responsible Credit With A New Identity!</h2>
                <h4>#NewBeginnings</h4>
              </div>
            </div>
            <div className="col-md-5">
              <div className="cred_brand_image">
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/cred_brand_img.png"
                  }
                  alt="CredMudra"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section2">
        <div className="why_credmudra_wrapper">
          <img
            className="path"
            src={process.env.PUBLIC_URL + "/assets/images/Path199.svg"}
            alt="Credmudra"
          />
          <div className="container">
            <div>
              <div className="col-md-12">
                <h2>
                  Why Millions Of Indians Trust Credmudra For Short Term Loans?
                </h2>
              </div>
            </div>
          </div>

          <div className="home_feature_swiper_wrapper">
            <div className="container">
              <div className="home_feature_swiper_head">
                <br />
                <br />
              </div>
              <div className="swiper-container swiper-feature-container swiper-slide0 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-554b2103d93cc582e"
                  aria-live="polite"
                  style={{ transform: "translate3d(0px,0px,0px)" }}
                >
                  <div
                    className="swiper-slide swiper_feature_slider swiper-slide-active"
                    role="group"
                    aria-label="1 / 8"
                    style={{ width: "376px", marginRight: " 15px" }}
                  >
                    <div className="home_feature_swiper_item">
                      <img
                        className="lazyloaded"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/Layer_x0020_1.svg"
                        }
                        alt="Disbursal Rate"
                      />
                      <h5>90%+ Disbursal Rate</h5>
                      <p>
                        We work to match you with lenders that align with your
                        needs, increasing your chances of loan approval.
                      </p>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    role="group"
                    aria-label="2 / 8"
                    style={{ width: "376px", marginRight: "15px" }}
                  >
                    <div className="home_feature_swiper_item">
                      <img
                        className="lazyloaded"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/tablet.svg"
                        }
                        alt="Paperless"
                      />
                      <h5>100% Paperless</h5>
                      <p>
                        Apply for Link loan sitting in the comfort of your home,
                        as we are 100% digital.
                      </p>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="3 / 8"
                    style={{ width: "376px", marginRight: "15px" }}
                  >
                    <div className="home_feature_swiper_item">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/images/tick.svg"}
                        alt="Get Prequalified Offers"
                      />
                      <h5>Prequalified Offers</h5>
                      <p>
                        Check offer rates without having to worry about the
                        impact on your credit score.
                      </p>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="4 / 8"
                    style={{ width: "376px", marginRight: "15px" }}
                  >
                    <div className="home_feature_swiper_item">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/_x33_.svg"
                        }
                        alt="Customise Your Loan"
                      />
                      <h5>Tailor Your Loan</h5>
                      <p>
                        Customise your loan amount from INR 1000 to INR 1,00,000
                        within the tenure of 3 months to 2 years.
                      </p>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="5 / 8"
                    style={{ width: "376px", marginRight: "15px" }}
                  >
                    <div className="home_feature_swiper_item">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/dollar.svg"
                        }
                        alt="get Instant Approval"
                      />
                      <h5>Instant Approval</h5>
                      <p>
                        Online approval within 48 hours with less documentation
                        to those needing the loan urgently.
                      </p>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="6 / 8"
                    style={{ width: "376px", marginRight: "15px" }}
                  >
                    <div className="home_feature_swiper_item">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/worldwide-shipping.svg"
                        }
                        alt="No geographical boundation"
                      />
                      <h5>No geographical limitations*</h5>
                      <p>
                        The platform is also accessible in many remote and
                        underserved areas with an internet connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="7 / 8"
                    style={{ width: "376px", marginRight: "15px" }}
                  >
                    <div className="home_feature_swiper_item">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/transparency.svg"
                        }
                        alt="no hidden charges"
                      />
                      <h4>No Hidden Charges</h4>
                      <p>
                        Our process is transparent and fair, as there are no
                        hidden charges that may surprise you.
                      </p>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="8 / 8"
                    style={{ width: "376px", marginRight: "15px" }}
                  >
                    <div className="home_feature_swiper_item">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/protection.svg"
                        }
                        alt="secure and safe"
                      />
                      <h5>Safe and Secure</h5>
                      <p>
                        We follow all the necessary security protocols, and data
                        privacy standards to make sure that your information is
                        safe and secure.
                      </p>
                    </div>
                  </div>
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper_bar_wrapper">
                <div className="swiper_bar_div">
                  <div className="swiper-scrollbar swiper-scrollbar-f">
                    <div
                      className="swiper-scrollbar-drag"
                      style={{
                        transform: "translate(0px, 0px, 0px)",
                        width: "33.9026px",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="swiper_nav_wrapper">
                  <div
                    className="swiper-button-prev-f swiper-button-prev swiper-button-disabled"
                    tabIndex="-1"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-554b2103d93cc582e"
                    aria-disabled="true"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                  </div>
                  <div
                    className="swiper-button-next-f swiper-button-next"
                    tabIndex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper-wrapper-554b2103d93cc582e"
                    aria-disabled="false"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="start-your-journey pt-5">
          <img
            className="ellise-img"
            src={process.env.PUBLIC_URL + "/assets/images/Ellipse1909.png"}
            alt="ellispe"
          />
          <div className="container-fluid m-0" fluid>
            <div className="row align-items-md-center">
              <div className="col-md-6">
                <div className="start-your-journey-left">
                  <h2>Responsible Credit Redefined:</h2>
                  <p>
                    At Credmudra, responsible credit means more than just
                    borrowing. We're your advocates, understanding your needs
                    and matching you with the right financial products. Our
                    commitment spans from financial literacy to timely issue
                    resolution, ensuring you always have Link trusted partner by
                    your side.
                  </p>
                  <div className="button-for-lender">
                    <Link
                      to="/get-registered/user-number"
                      onClick={() => scrollToTop()}
                    >
                      <button>Get Matched Now !</button>
                    </Link>
                  </div>
                  <ul style={{ display: "none" }}>
                    <li>
                      <span>
                        <img
                          width="30px"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon-list.png"
                          }
                          alt=""
                        />
                      </span>
                      Find Link Lender
                    </li>
                    <li>
                      <span>
                        <img
                          width="30px"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon-list.png"
                          }
                          alt=""
                        />
                      </span>
                      Check Credit Score
                    </li>
                    <li>
                      <span>
                        <img
                          width="30px"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon-list.png"
                          }
                          alt=""
                        />
                      </span>
                      Calculate EMI
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="div-img">
                  <img
                    className="girlpic"
                    width="100%"
                    height="100%"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/girl-path.webp"
                    }
                    alt="match you with the right financial products."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_client_swiper_wrapper">
        <div className="container">
          <h2>Our Lending Partners</h2>
          <div className="home_feature_swiper_head"></div>
          <div className="swiper-container swiper-client-container swiper-slide0 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-7ac2b73694ba7107"
              aria-live="polite"
              style={{ transform: "translate3d (0px, 0px, 0px)" }}
            >
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_1.png"
                    }
                    alt="lending partners- zype"
                  />
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_2.png"
                    }
                    alt="lending partners- moneyveiw"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="3 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_3.png"
                    }
                    alt="lending partners- paysense"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="4 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_4.png"
                    }
                    alt="lending partners- fibe"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="5 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_5.png"
                    }
                    alt="lending partners- Cashe"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="6 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_6.png"
                    }
                    alt="lending partners- Kreditbee"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="7 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_7.png"
                    }
                    alt="lending partners- Moneytap"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="8 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_8.png"
                    }
                    alt="lending partners- mpocket"
                  />
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="9 / 9"
                style={{ width: "376px", marginRight: "15px" }}
              >
                <div className="home_feature_swiper_item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_client_9.png"
                    }
                    alt="lending partners- lendingkart"
                  />
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper_bar_wrapper">
            <div className="swiper_bar_div">
              <div className="swiper-scrollbar swiper-scrollbar-c swiper-scrollbar-horizontal">
                <div
                  className="swiper-scrollbar-drag"
                  style={{
                    transform: "translate3d (0px, 0px, 0px)",
                    width: "30.7968",
                  }}
                ></div>
              </div>
            </div>
            <div className="swiper_nav_wrapper">
              <div
                className="swiper-button-prev-c swiper-button-prev swiper-button-disabled"
                tabIndex="-1"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-7ac2b73694ba7107"
                aria-disabled="true"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              <div
                className="swiper-button-next-c swiper-button-next"
                tabIndex="0"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-7ac2b73694ba7107"
                aria-disabled="false"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="our-blog home_blog_wrapper">
          <img
            className="img-blog-path"
            src={process.env.PUBLIC_URL + "/assets/images/Path199.svg"}
            alt="Credmudra"
          />
          <div className="container">
            <div className="heading-and-button">
              <h3>Our Latest Blog Posts </h3>
              <Link
                to="https://credmudra.com/blog"
                target="_blank"
                className="see-all-blog btn-2"
              >
                See All Blog Posts
              </Link>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-7">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="fakeimg">
                          <div className="post-thumbnail">
                            <Link
                              target="_blank"
                              to="https://credmudra.com/blog/pan-and-aadhar-card-linking/"
                            >
                              <img
                                alt="Pancard and aadhar Linking"
                                width="640"
                                height="426"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/Paan-aadhar-Linking-768x512.jpg"
                                }
                                className="img-responsive-card wp-post-image"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="post-category-style">
                          <span>June 12, 2023</span>
                          <div className="post-categories">
                            <span>
                              <Link
                                target="_blank"
                                to="https://credmudra.com/blog/category/pancard/"
                                rel="category tag"
                              >
                                Pancard
                              </Link>
                            </span>
                          </div>
                        </div>
                        <Link
                          target="_blank"
                          to="https://credmudra.com/blog/pan-and-aadhar-card-linking/"
                        >
                          <h4>PAN And Aadhar Card Linking</h4>
                        </Link>
                        <p>
                          If your PAN card becomes invalid, you will not be able
                          to get all these financial services
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="fakeimg">
                          <div className="post-thumbnail">
                            <Link
                              target="_blank"
                              to="https://credmudra.com/blog/epfo-higher-pension-scheme/"
                            >
                              <img
                                alt="EPFO Higher Pension Scheme"
                                width="640"
                                height="426"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/EPFO-Steps-to-apply-for-higher-pension-768x512.webp"
                                }
                                className="img-responsive-card wp-post-image"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="post-category-style">
                          <span>June 5, 2023</span>
                          <div className="post-categories">
                            <span>
                              <Link
                                target="_blank"
                                to="https://credmudra.com/blog/category/saving-schemes/"
                                rel="category tag"
                              >
                                Saving schemes
                              </Link>
                            </span>
                          </div>
                        </div>
                        <Link
                          target="_blank"
                          to="https://credmudra.com/blog/epfo-higher-pension-scheme/"
                        >
                          <h4>EPFO Higher Pension Scheme</h4>
                        </Link>
                        <p>
                          Circulars on Employees' Provident Fund declared on
                          December 29, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div>
                  <div className="card-list">
                    <div className="container" fluid>
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-4">
                          <div className="post-thumbnail">
                            <Link
                              target="_blank"
                              to="https://credmudra.com/blog/post-office-monthly-income-scheme/"
                            >
                              <img
                                alt="Post Office Monthly Income Scheme"
                                width="640"
                                height="426"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/Post-office-monthly-income-scheme-2-768x512.webp"
                                }
                                className="img-responsive wp-post-image"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="post-category-style">
                            <span>May 25, 2023</span>
                            <div className="post-categories">
                              <span>
                                <Link
                                  target="_blank"
                                  to="https://credmudra.com/blog/category/saving-schemes/"
                                  rel="category tag"
                                >
                                  Saving schemes
                                </Link>
                              </span>
                            </div>
                          </div>
                          <Link
                            target="_blank"
                            to="https://credmudra.com/blog/post-office-monthly-income-scheme/"
                          >
                            <h4>Post Office Monthly Income Scheme</h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="line"></div>
                  <div className="card-list">
                    <div className="container" fluid>
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-4">
                          <div className="post-thumbnail">
                            <Link
                              target="_blank"
                              to="https://credmudra.com/blog/vidya-lakshmi-education-loan/"
                            >
                              <img
                                alt="Vidya Lakshmi Loan"
                                width="640"
                                height="426"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/Govt-Scheme-Vidhya-Laxmi-portal-768x511.webp"
                                }
                                className="img-responsive wp-post-image"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="post-category-style">
                            <span>May 25, 2023</span>
                            <div className="post-categories">
                              <span>
                                <Link
                                  target="_blank"
                                  to="https://credmudra.com/blog/category/saving-schemes/"
                                  rel="category tag"
                                >
                                  Saving schemes
                                </Link>
                              </span>
                            </div>
                          </div>
                          <Link
                            target="_blank"
                            to="https://credmudra.com/blog/vidya-lakshmi-education-loan/"
                          >
                            <h4>All You Need Know About Vidya Lakshmi Loan</h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="line"></div>
                  <div className="card-list">
                    <div className="container-fuild">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="post-thumbnail">
                            <Link
                              target="_blank"
                              to="https://credmudra.com/blog/rbi-floating-saving-bond/"
                            >
                              <img
                                alt="RBI Floating saving bond"
                                width="640"
                                height="426"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/RBI-Flexi-saving-bond-768x512.webp"
                                }
                                className="img-responsive wp-post-image"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="post-category-style">
                            <span>May 22, 2023</span>
                            <div className="post-categories">
                              <span>
                                <Link
                                  target="_blank"
                                  to="https://credmudra.com/blog/category/saving-schemes/"
                                  rel="category tag"
                                >
                                  Saving schemes
                                </Link>
                              </span>
                            </div>
                          </div>
                          <Link
                            target="_blank"
                            to="https://credmudra.com/blog/rbi-floating-saving-bond/"
                          >
                            <h4>
                              RBI Floating saving bond  Full Details Along with
                              Calculation Process
                            </h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="why-choose">
          <div className="container">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-6" md={6}>
                <h2>
                  Avoid The Pitfalls Of <br />
                  Short-Term Loans.
                </h2>
                <p>
                  Sign Up Now To Learn The Best Practices And Borrow Smartly!
                </p>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="page_subscriber_form_wrapper">
                  <form
                    onSubmit={handleSubmit}
                    className="form-for-getstarted page_subscriber_form"
                    id="page_subscriber_form"
                    style={{
                      display: displayThanks === false ? "" : "none",
                    }}
                  >
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    {LoadingButton === false ? (
                      <button
                        type="submit"
                        // onClick={handleSubmit}
                        id="page_subscriber_submit"
                        className="btn-get-started"
                      >
                        Get started
                      </button>
                    ) : (
                      <div
                        id="page_subscriber_submit"
                        className="btn-get-started"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <span>
                          Submitting
                          <i
                            style={{
                              fontSize: "22px",
                              verticalAlign: "middle",
                              marginLeft: "8px",
                            }}
                            class="fa fa-refresh fa-spin"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    )}
                  </form>

                  <div
                    className="page_subscriber_thankyou thankyou_msg_subscriber"
                    style={{
                      display:
                        displayThanks === true && LoadingButton === false
                          ? ""
                          : "none",
                    }}
                  >
                    <div className="thankyou_msg_svg_wrapper">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g>
                          <circle
                            className="circle"
                            cx="50"
                            cy="49.9999657"
                            r="47.5"
                          ></circle>
                          <circle
                            className="circle-dash"
                            cx="50"
                            cy="49.9999657"
                            r="47.5"
                          ></circle>
                          <polyline
                            className="check"
                            points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 	"
                          ></polyline>
                          <polyline
                            className="check-dash"
                            points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 	"
                          ></polyline>
                        </g>
                      </svg>
                    </div>
                    <h2>Thank You For Subscribe Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
