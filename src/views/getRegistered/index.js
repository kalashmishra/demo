import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../getRegistered/index.css";
import { useSelector } from "react-redux";
import {
  selectGetFormData,
  selectIsLoading,
  selectLoanType,
} from "../../redux/selectors";
import Loader from "../../layouts/Loader/Index";
import { useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet";
import headings from "../../ssr/db/headings.json";
import { scrollToTop } from "../../utils/commonFunctions";

const GetRegistered = (props) => {
  const navigate = useNavigate();
  const loanType = useSelector(selectLoanType);
  const formData = useSelector(selectGetFormData);
  const hideOnSm = useMediaQuery("(max-width:600px)");
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    document.body.classList.add(props?.classname);
    return () => {
      document.body.classList.remove(props?.classname);
    };
  });
  useEffect(() => {
    const handleUnload = (event) => {
      const confirmationMessage =
        "Are you sure you want to leave? Your changes may not be saved.";
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };
    const handleLoad = () => {
      const a = localStorage.getItem("loanType");
      if (a === "businessLoan") {
        scrollToTop();
        navigate("/business-loan");
      } else {
        scrollToTop();
        navigate("/get-registered/user-number");
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <Helmet>{headings.getRegister.title}</Helmet>
      <img
        className="wave"
        src={process.env.PUBLIC_URL + "/assets/images/wave.svg"}
        alt="wave"
      ></img>
      <div className="container">
        <div className="row" style={{ paddingTop: "5rem" }}>
          <div className="col-md-12 col-lg-6 col-xl-5 form-section-col">
            {/**-----formSection------------*/}
            <div className="form-div">
              <div
                className="form-section current"
                style={{ position: "relative" }}
                data-step="mobile"
              >
                <section id="mobile-no">
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        minHeight: "20vh",
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "50px",
                      }}
                    >
                      {isLoading === true ? <Loader /> : <Outlet />}
                    </div>
                  </div>
                </section>
                <br />
              </div>
            </div>
            {/**other paragraph section */}
            {loanType === "businessLoan" ||
            formData?.employmentType === "Self Employed" ? (
              <section className="pl_feature_benefites">
                <div className="container-fluid" style={{ display: "block" }}>
                  <div className="row align-items-md-center1">
                    <div className="col-md-12">
                      <div className="pl_feature_benefites_one">
                        <h4>Features of Business loan:</h4>
                        <ul className="ul_style">
                          <li>Instant Disbursal</li>
                          <li>Collateral-free Advances</li>
                          <li>Hassle-free Documentation</li>
                          <li>Convenient Repayment Facility</li>
                          <li>No End-use Restriction Attached</li>
                        </ul>

                        <h5>Eligibility Criteria For A Business Loan:</h5>
                        <ul className="ul_style">
                          <li>Age: 21 to 65 years old</li>
                          <li>Employment type: Self-employed</li>
                          <li>Business tenure: At least 1 year or more</li>
                          <li>Minimum yearly turnover: Vary across lenders</li>
                          <li>Credit score: 750 or more</li>
                          <li>
                            Business owners, individuals, entrepreneurs, MSMEs,
                            startups and self-employed professionals, such as
                            CS, CAs, architects and doctors
                          </li>
                          <li>
                            Public and private limited companies, partnership
                            firms, sole proprietorships, LLPs
                          </li>
                          <li>
                            Large enterprises dealing only in trading, services
                            and manufacturing sectors
                          </li>
                          <li>Co-operative societies, NGOs and trusts</li>
                        </ul>
                        <p>
                          <span
                            style={{
                              color: "#243771",
                              fontWeight: 700,
                              marginBottom: "20px",
                              fontSize: "15px",
                            }}
                          >
                            Note:
                          </span>{" "}
                          The above-mentioned details can vary from lender to
                          lender depending on their terms and conditions.
                        </p>
                      </div>
                      <div className="pl_feature_benefites_one">
                        <h5>Documents Required:</h5>
                        <ul className="ul_style">
                          <li>Passport-sized photographs</li>
                          <li>
                            KYC documents, such as Aadhaar card, PAN card,
                            driving license, passport, electricity or water
                            bills, voter ID card
                          </li>
                          <li>
                            ITR Required for more than 10 Lakh Business loan*
                          </li>
                          <li>Previous 1 year's bank account statement</li>
                          <li>Non-collateral overdraft copy (if applicable)</li>
                          <li>Copy of business incorporation paperwork</li>
                        </ul>
                        <h5>Disclaimer:</h5>
                        <p>
                          Credmudra functions as a loan aggregator and provides
                          services on behalf of its partners, duly authorized
                          for the purpose. The registered address is B No.08
                          Nirupam, PH-II Nirupam state, Ahmedpur kalan Hujur,
                          Bhopal, Madhya Pradesh 46202
                        </p>
                      </div>
                    </div>
                    <div className="offset-md-1 col-md-5"></div>
                  </div>
                </div>
              </section>
            ) : (
              <section className="pl_feature_benefites">
                <div className="container-fluid" style={{ display: "block" }}>
                  <div className="row align-items-md-center1">
                    <div className="col-md-12">
                      <div className="pl_feature_benefites_one">
                        <h4>Features and Benefits of Personal Loans:</h4>
                        <ul className="ul_style">
                          <li>
                            Personal loans come with no restrictions on how the
                            funds are used.
                          </li>
                          <li>
                            The loan amount can go up to Rs. 40 lakh, or even
                            higher based on the discretion of the lenders.
                          </li>
                          <li>
                            Repayment tenure ranges from a minimum of 3 months
                            to a maximum of 5 years, banks/NBFCs offering longer
                            durations.
                          </li>
                          <li>
                            Minimal documentation is required to apply for a
                            personal loan.
                          </li>
                          <li>
                            Quick disbursals ensure fast access to the funds.
                          </li>
                          <li>
                            Individuals with excellent credit profiles may
                            qualify for pre-approved or pre-qualified personal
                            loans, which come with instant disbursal.
                          </li>
                        </ul>
                        <h5>Eligibility Criteria for Personal Loans:</h5>
                        <ul className="ul_style">
                          <li>Age: 18 - 60 years</li>
                          <li>
                            Income: Minimum Rs 15,000/month for salaried
                            applicants
                          </li>
                          <li>
                            Credit Score: Preferably 750 and above as having
                            higher credit scores increase the chances of your
                            loan approval at lower interest rates
                          </li>
                          <li>
                            Eligible only for individuals receiving their salary
                            in a bank account
                          </li>
                        </ul>
                      </div>
                      <div className="pl_feature_benefites_one">
                        <h5>APR (Annual Percentage Rate) on Personal Loans</h5>
                        <p>
                          Credmudra isn't a lender itself but connects borrowers
                          with different lending partners. These partners offer
                          personal loans with varying APRs, typically ranging
                          from 11.29% to 35%. The actual rates may depend on the
                          borrower's financial situation and loan requirements.
                        </p>
                        <p>
                          Loan terms usually range from a few weeks to a maximum
                          of 60 months (5 years), but they can vary between
                          lenders. It's important for borrowers to carefully
                          review the loan agreement provided by the lender
                          before accepting any offers. This agreement includes
                          the final APR, fees, and specific terms and
                          conditions, ensuring borrowers understand their
                          financial obligations.
                        </p>
                        <p>
                          Assume you have availed a personal loan of ₹5,00,000
                          lakhs @ 11.50% p.a. with a repayment tenure of 5
                          years. The processing fee charged for this loan is
                          1.5% of the loan amount, i.e. ₹7,500. Therefore, the
                          APR for your personal loan will be 12.16%. The EMI
                          will be ₹10,996.
                        </p>

                        <p>Principal Amount: ₹5,00,000</p>

                        <p>Interest Charges (@11.5%): ₹1,59,778</p>
                        <p>Loan Processing Fees (@1.5%): ₹7,500</p>
                        <p>EMI per month: ₹ 10,996</p>
                        <p>Total Amount paid after 5 Years: ₹ 6,67,278</p>

                        <p>
                          *Interest rate and processing fees varies as per your
                          product depending on the lender's policy.
                        </p>
                        <p>
                          <b>Disclaimer: </b> Credmudra functions as a loan
                          aggregator and provides services on behalf of its
                          partners, duly authorized for the purpose.
                        </p>
                        <p>
                          The registered address is B No.08 Nirupam, PH-II
                          Nirupam state, Ahmedpur kalan Hujur, Bhopal, Madhya
                          Pradesh 462026.
                        </p>
                      </div>
                    </div>
                    <div className="offset-md-1 col-md-5"></div>
                  </div>
                </div>
              </section>
            )}
          </div>
          {hideOnSm ? (
            ""
          ) : (
            <div
              className="col-md-12 col-lg-6 col-xl-7 form_image_div "
              id="form_image_div"
            >
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/form-new-image.png"
                }
                alt="Get registered"
              />
            </div>
          )}
        </div>
      </div>
      <div id="snackbar"></div>
    </>
  );
};

export default GetRegistered;
