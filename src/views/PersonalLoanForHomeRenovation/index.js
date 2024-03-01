import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.css";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import CommonUserNumber from "../../components/FormComponents/CommonUserNumber/CommonUserNumber";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";

const PersonalLoanForHomeRenovation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("loanType");
    routeRedirection(navigate);
    dispatch(setLoanType(""));
    sessionStorage.removeItem("employmentType");
  }, []);

  useEffect(() => {
    const mySwiper = new Swiper(".swiper-feature-container", {
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
    return () => {
      mySwiper.destroy();
    };
  });

  return (
    <div>
      <Helmet>
        <title>{heading.homeRenovation.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.homeRenovation.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.homeRenovation.canonical} />
      </Helmet>
      <div className="banner_wrapper-personal-blog">
        <img

          className="wave"
          src={process.env.PUBLIC_URL + "/assets/images/wave.svg"}
          alt="wave"
        />
        <div className="banner-padding">
          <div className="row align-items-md-center">
            <div className="col-md-6 align-items-center">
              <div className="bnr-left-col">
                <img
        
                  className="img-bnr-path"
                  src={process.env.PUBLIC_URL + "/assets/images/Path199.svg"}
                  alt="Credmudra"
                />
                <div className="personal-banner-content">
                  <h1 className="h1">
                    Experience The Joy Of Home Transformation.
                  </h1>
                  <p className="p">
                    Revamp, Refresh, and Revitalize Your Home with Our Home
                    Improvement Loan.
                  </p>
                  <div
                    className="button-for-lender pb-3 pt-1"
                    style={{ display: "none" }}
                  >
                    <Link
                      onClick={() => scrollToTop()}
                      to="/get-registered/user-number"
                    >
                      <button style={{ marginLeft: "1px" }}>
                        Get Matched Now !
                      </button>
                    </Link>
                  </div>
                  <CommonUserNumber />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bnr-right-col">
                <img
        
                  width="100%"
                  src={process.env.PUBLIC_URL + "/assets/images/pl_hr_top.jpg"}
                  alt="Apply for home renovation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="personal-loan-discover-the-power accordian_white_bg accordian_image_left">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="pl_accordian_image">
                <img
        
                  src={process.env.PUBLIC_URL + "/assets/images/pl_hr_acc1.jpg"}
                  alt="Benefits Of House Renovation loan"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="discover-the-power">
                <h2>Benefits Of Personal Loan For House Renovation</h2>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading18">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse18"
                        aria-expanded="true"
                        aria-controls="flush-collapse18"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Quick loan approvals
                      </button>
                    </h2>
                    <div
                      id="flush-collapse18"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading18"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        When you fulfil all the eligibility criteria and submit
                        the necessary paperwork, there are chances that the
                        lender may sanction your loan application faster as
                        compared to other loans. This feature enables you to
                        receive the loan amount instantly.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading19">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse19"
                        aria-expanded="false"
                        aria-controls="flush-collapse19"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        No need for any collateral
                      </button>
                    </h2>
                    <div
                      id="flush-collapse19"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading19"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Unlike any other credit option, you do not have to
                        mortgage or pledge any asset to get a loan for home
                        improvement. The lender will sanction your request based
                        on your eligibility and credit score.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading20">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse20"
                        aria-expanded="false"
                        aria-controls="flush-collapse20"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Flexible repayment terms
                      </button>
                    </h2>
                    <div
                      id="flush-collapse20"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading20"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        One of the most beneficial aspects of a loan for home
                        improvement is that you can choose a repayment plan as
                        per your financial capacity. Borrowers can select
                        repayment tenure between three months to two years as
                        per their financial strength.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-for-lender pb-3 pt-3">
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/get-registered/user-number"
                >
                  Get Matched Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_blue_bg_2_col_wrapper bl_criteria_wrapper">
        <img

          src={process.env.PUBLIC_URL + "/assets/images/cred_angle_full.webp"}
          alt="Credmudra icon"
        />
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-5">
              <div className="pl_blue_bg_2_col_wrapper_content bl_criteria_content">
                <h2>
                  Eligibility Criteria For A Personal Loan For Home Renovation
                </h2>
                <p>
                  In order to get a personal loan, borrowers will have to fulfil
                  a set of eligibility requirements. Although, these parameters
                  vary from one lender to another, here is a basic list of
                  eligibility criteria set by most lending partners in India:
                </p>
              </div>
            </div>
            <div className="offset-md-1 col-md-6">
              <div className="pl_blue_bg_2_col_wrapper_content bl_criteria_points">
                <ul>
                  <li>
                    <span>Nationality:</span> Indian
                  </li>
                  <li>
                    <span>Employment:</span> Both salaried and self-employed
                    individuals
                  </li>
                  <li>
                    <span>Credit Score:</span> Minimum 685
                  </li>
                  <li>
                    <span>Monthly Income: </span>More than Rs.25,000 per month
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_docs_need_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-5">
              <div className="pl_docs_need_cta">
                <h2>
                  Documents Required For A Personal Loan For Home Renovation
                </h2>
                <p>
                  Here are the documents you will need to submit while applying
                  for a personal loan for home renovation:
                </p>
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/get-registered/user-number"
                >
                  Get Matched Now!
                </Link>
              </div>
            </div>
            <div className="offset-md-1 col-md-6">
              <div className="pl_docs_need_content">
                <ul>
                  <li>
                    <span>Identity proof-</span> Voter ID Card, Passport,
                    Driving License, Aadhaar Card, PAN Card, etc.
                  </li>
                  <li>
                    <span>Residential proof-</span> Voter ID Card, Utility
                    bills(Electricity and Water Bill), etc.{" "}
                  </li>
                  <li>
                    <span>Income proof-</span> Audited financial records(for
                    self-employed individuals), Salary slip(for salaried
                    individuals), Bank account statement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_5_block_wrapper">
        <div className="container">
          <h2>Apply For A Personal Loan For Home Renovation From Credmudra</h2>
          <h6>
            You can follow these simple steps if you are looking forward to
            applying for a personal loan from Credmudra:
          </h6>
          <div className="pl_5_block_div">
            <div className="pl_5_block_item">
              <img
      
                src={process.env.PUBLIC_URL + "/assets/images/plf_1.webp"}
                alt="enter your mobile and get otp"
              />
              <h4>STEP 1</h4>
              <h5>
                Provide Mobile <br />
                Number And OTP
              </h5>
              <p>
                You will first need to enter your mobile number and verify it by
                providing the OTP received on it.
              </p>
            </div>
            <div className="pl_5_block_item">
              <img
      
                src={process.env.PUBLIC_URL + "/assets/images/plf_2.webp"}
                alt="Mention the loan amount"
              />
              <h4>STEP 2</h4>
              <h5>
                State Your Loan <br />
                Requirements
              </h5>
              <p>
                Mention the loan amount you will need along with a convenient
                repayment period. Enter your PAN card and email ID.
              </p>
            </div>
            <div className="pl_5_block_item">
              <img
      
                src={process.env.PUBLIC_URL + "/assets/images/plf_3.webp"}
                alt="Declare Employement detail"
              />
              <h4>STEP 3</h4>
              <h5>Declare Employment Details</h5>
              <p>
                Select the type of your profession and enter other relevant
                information regarding your profession.
              </p>
            </div>
            <div className="pl_5_block_item">
              <img
      
                src={process.env.PUBLIC_URL + "/assets/images/plf_4.webp"}
                alt="Enter Personal, Income, Residential And Other Details"
              />
              <h4>STEP 4</h4>
              <h5>
                Enter Personal, Income, <br />
                Residential And Other Details
              </h5>
              <p>
                Give necessary inputs like gross annual income, savings account
                details, name, date of birth, present address, etc. Disclose
                your present debt obligations.
              </p>
            </div>
            <div className="pl_5_block_item">
              <img
      
                src={process.env.PUBLIC_URL + "/assets/images/plf_5.webp"}
                alt="Submit loan request"
              />
              <h4>STEP 5</h4>
              <h5>
                Submit Loan <br />
                Request
              </h5>
              <p>
                Click the ‘Submit’ button after putting the tick mark on the
                declaration box.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="why_credmudra_wrapper pl_hr_why_wrapper">
        <img

          className="path"
          src={process.env.PUBLIC_URL + "/assets/images/Path199.svg"}
          alt="Credmudra"
        />
        <div className=" container">
          <div className="row">
            <div className="col-md-12">
              <h2>Why Choose Credmudra?</h2>
              <h6>
                There are a number of reasons why hundreds of people choose us
                during a financial crisis. Following are some of the reasons
                that make us one of the leading ‘loan match-making’ portals in
                the market:
              </h6>
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
                id="swiper-wrapper-4f19f3ddebbad6c7"
                aria-live="polite"
                style={{
                  transform: "translate3d(0px, 0px 0px",
                  transitionDuration: "0ms",
                }}
              >
                <div
                  className="swiper-slide swiper_feature_slider swiper-slide-active"
                  role="group"
                  aria-label="1 / 8"
                  style={{ marginRight: "25px" }}
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
                    <h4>90%+ Disbursal Rate</h4>
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
                  style={{ marginRight: "25px" }}
                >
                  <div className="home_feature_swiper_item">
                    <img
            
                      src={process.env.PUBLIC_URL + "/assets/images/tablet.svg"}
                      alt="Paperless"
                    />
                    <h4>100% Paperless</h4>
                    <p>
                      Apply for a loan sitting in the comfort of your home, as
                      we are 100% digital.
                    </p>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 8"
                  style={{ marginRight: "25px" }}
                >
                  <div className="home_feature_swiper_item">
                    <img
            
                      src={process.env.PUBLIC_URL + "/assets/images/tick.svg"}
                      alt="Get Prequalified Offers"
                    />
                    <h4>Prequalified Offers</h4>
                    <p>
                      Check offer rates without having to worry about the impact
                      on your credit score.
                    </p>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="4 / 8"
                  style={{ marginRight: "25px" }}
                >
                  <div className="home_feature_swiper_item">
                    <img
            
                      src={process.env.PUBLIC_URL + "/assets/images/_x33_.svg"}
                      alt="customise Your Loan"
                    />
                    <h4>Tailor Your Loan</h4>
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
                  style={{ marginRight: "25px" }}
                >
                  <div className="home_feature_swiper_item">
                    <img
            
                      src={process.env.PUBLIC_URL + "/assets/images/dollar.svg"}
                      alt="get Instant Approval"
                    />
                    <h4>Instant Approval</h4>
                    <p>
                      Online approval within 48 hours with less documentation to
                      those needing the loan urgently.
                    </p>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="6 / 8"
                  style={{ marginRight: "25px" }}
                >
                  <div className="home_feature_swiper_item">
                    <img
            
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/worldwide-shipping.svg"
                      }
                      alt="No geographical boundation"
                    />
                    <h4>No geographical limitations*</h4>
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
                  style={{ marginRight: "25px" }}
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
                  style={{ marginRight: "25px" }}
                >
                  <div className="home_feature_swiper_item">
                    <img
            
                      src={
                        process.env.PUBLIC_URL + "/assets/images/protection.svg"
                      }
                      alt="secure and safe"
                    />
                    <h4>Safe and Secure</h4>
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
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper_bar_wrapper">
              <div className="swiper_bar_div">
                <div className="swiper-scrollbar swiper-scrollbar-f">
                  <div
                    className="swiper-scrollbar-drag"
                    style={{
                      transform: "translate3d(0px, 0px 0px",
                      transitionDuration: "0ms",
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
                  aria-controls="swiper-wrapper-4f19f3ddebbad6c7"
                  aria-disabled="true"
                >
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div
                  className="swiper-button-next-f swiper-button-next"
                  tabIndex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-4f19f3ddebbad6c7"
                  aria-disabled="false"
                >
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bl_interest_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-5 ">
              <div className="bl_interest_content">
                <h2>
                  Financial Institutions Offering Personal Loans For Home
                  Renovation
                </h2>
                <p>
                  For further convenience, we listed down some of the leading
                  financial institutions offering personal loans for home
                  renovation, along with the associated interest rates:
                </p>
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/get-registered/user-number"
                >
                  Get Matched Now!
                </Link>
              </div>
            </div>
            <div className="offset-md-1 col-md-6">
              <div className="table-of-grid">
                <table>
                  <tbody>
                    <tr>
                      <th>FINANCIAL INSTITUTION</th>
                      <th>INTEREST RATE</th>
                    </tr>
                    <tr>
                      <td>HDFC Bank</td>
                      <td>10.50% per annum</td>
                    </tr>
                    <tr>
                      <td>Axis Bank</td>
                      <td>10.49% per annum</td>
                    </tr>
                    <tr>
                      <td>IndusInd Bank</td>
                      <td>10.49% per annum</td>
                    </tr>
                    <tr>
                      <td>Bajaj Finserv</td>
                      <td>11.00% per annum</td>
                    </tr>
                    <tr>
                      <td>Tata Capital</td>
                      <td>10.99% per annum</td>
                    </tr>
                    <tr>
                      <td>YES Bank</td>
                      <td>10.99% per annum</td>
                    </tr>
                    <tr>
                      <td>Fullerton India</td>
                      <td>11.99% per annum</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <span className="cred_note">
                <b> Note:</b> These interest rates are subject to change without
                any prior notice. Hence, you should get in touch with the lender
                in order to know the applicable interest rates.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lp_faq_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4">
              <h3>Faqs On Personal Loans For Home Renovation</h3>
            </div>
            <div className="col-md-8">
              <div className="accordion accordion-flush" id="accordionFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-heading23">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse23"
                      aria-expanded="true"
                      aria-controls="flush-collapse23"
                    >
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                      Can I use a personal loan for my house renovation?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse23"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-heading23"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, you can use the borrowed sum of money for any
                      purpose, including your home renovation-related expenses.
                      The bank or NBFC will not imply any restriction or
                      obligation on the usage of the borrowed money.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-heading24">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse24"
                      aria-expanded="false"
                      aria-controls="flush-collapse24"
                    >
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                      Is a personal loan for home improvement tax deductible?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse24"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading24"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, under Section 24(B) of the Income Tax Act of 1961,
                      you can claim a tax deduction of up to ₹ 30,000 per annum
                      on the interest you pay for a personal loan for home
                      renovation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-heading25">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse25"
                      aria-expanded="false"
                      aria-controls="flush-collapse25"
                    >
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                      Are part payments allowed in a personal loan?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse25"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading25"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Some of the leading financial institutions offer part
                      payment facilities. However, in order to know your
                      lender-specific guidelines, consider reading the loan
                      agreement or getting in touch with the lender directly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="snackbar"></div>
    </div>
  );
};

export default PersonalLoanForHomeRenovation;
