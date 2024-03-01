import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../../redux/selectors";
import { useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet";
import headings from "../../../ssr/db/headings.json";
import Loader from "../../../layouts/Loader/Index";
import UserNumber from "../UserNumber/UserNumber";
import { useNavigate } from "react-router-dom";
import { routeRedirection } from "../../../utils/commonFunctions";

const BusinessLanding = (props) => {
  const hideOnSm = useMediaQuery("(max-width:600px)");
  const isLoading = useSelector(selectIsLoading);
  const navigate=useNavigate()
  useEffect(() => {
    routeRedirection(navigate)
    document.body.classList.add(props?.classname);
    return () => {
      document.body.classList.remove(props?.classname);
    };
  });

  return (
    <div>
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
                      {isLoading === true ? <Loader /> : <UserNumber />}
                    </div>
                  </div>
                </section>
                <br />
              </div>
            </div>

            {/**other paragraph section */}
            {/* {hideOnSm ? (
              <div style={{ height: "50px", width: "100%" }}></div>
            ) : ( */}
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
          </div>
          {hideOnSm ? (
            ""
          ) : (
            <div
              class="col-md-12 col-lg-6 col-xl-7 form_image_div "
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
    </div>
  );
};

export default BusinessLanding;
