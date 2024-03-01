import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setFormData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { GoogleExitImpression } from "../../../constant/services/credMudra/users";
import { selectEmployType } from "../../../redux/selectors";
import { routeRedirection } from "../../../utils/commonFunctions";
const Offers = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const employType = useSelector(selectEmployType);
  const employTypes = sessionStorage.getItem("employmentType") || "";
  useEffect(() => {
    document.body.classList.add(props?.classname);
    return () => {
      document.body.classList.remove(props?.classname);
    };
  }, []);
  useEffect(() => {
    dispatch(
      setFormData({
        leadId: "",
        stage: "",
        contactNo: "",
        termsAndCondition: true,
        loan: {
          reason: null,
          amount: 1000,
          tenure: 1,
        },

        panCard: "",
        emailId: "",

        employmentType: "",

        employmentDetails: {
          companyTypeId: "",
          industryTypeId: "",
          companyName: "",
          designation: "",
          address: "",
          pinCode: "",
          countryId: "",
          stateId: "",
          cityId: "",
          yearsWorkingIn: "",
          businessTypeId: "",
          professionTypeId: "",
          turnover: "",
          monthlyProfit: "",
          income: "",
          salaryMode: "",
          bankId: "",
          currentAccountBankId: "",
          savingAccountBankId: "",
          businessOwnedId: "",
          gst: "",
        },
        personalInfo: {
          emailId: "",
          firstName: "",
          lastName: "",
          genderId: "",
          dateOfBirth: "",
          qualificationId: "",
          maritalStatus: "",
        },
        address: {
          addressLine1: "",
          addressLine2: "",
          pinCode: "",
          countryId: "",
          stateId: "",
          cityId: "",
          residenceTypeId: "",
          yearsLivingIn: "",
        },
        finance: {
          panCard: "",
        },
        others: {
          totalEmiPaidMonthly: 0,
          interestedToGetCreditCard: true,
        },
        utm: {
          id: "",
          url: "",
          source: "",
          medium: "",
          campaign: "",
          term: "",
          content: "",
          clickId: "",
        },
      })
    );
  }, []);
  useEffect(() => {
    googleImpression();
  }, []);
  useEffect(() => {
    localStorage.removeItem("loanType");
    window.onpopstate = () => {
      navigate("/");
    };
  }, []);
  const googleImpression = async () => {
    const data = {
      leadId: sessionStorage.getItem("leadId"),
    };
    const res = await GoogleExitImpression(data);
  };
  useEffect(() => {
    routeRedirection(navigate);
  }, []);
  return (
    <>
      {employTypes === "Self Employed" ? (
        <div id="primary" className="site-main">
          {/* <img className="wave" src="../assets/images/wave.svg" alt="wave" /> */}
          <img
            className="wave"
            src={process.env.PUBLIC_URL + "/assets/images/wave.svg"}
            alt="wave"
          />
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-12 col-lg-7">
                <div className="g_exit_content">
                  <div className="g_exit_header">
                    <h2>Congratulations</h2>
                    <p>
                      Your application has been submitted successfully. Based on
                      your information, we recommended suitable offers for you
                      from our partners.
                    </p>
                  </div>
                  <div className="g_exit_ad">
                    <h5>Sponsored Ads-</h5>
                    <ul>
                      <li style={{ display: "flex" }}>
                        <h4>Self Employed Home Loans</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Self Employed Home Loans&src=dp`}
                        >
                          {/* to="https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Students&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Students&amp;src=dp"> */}
                          Request Loan Now
                        </Link>
                      </li>
                      <li>
                        <h4>Personal Loan For Self Employed</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Personal Loan For Self Employed&src=dp`}
                          // to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1={tg1}&tg2={tg2}&tg3={tg3}&txt={ad.text}&src=dp`}
                        >
                          Request Loan Now
                        </Link>
                      </li>
                      <li>
                        <h4>Funding for Small Businesses</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Funding for Small Businesses&src=dp`}
                        >
                          {/* to="https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Housewife&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Housewife&amp;src=dp"> */}
                          Request Loan Now
                        </Link>
                      </li>
                      <li>
                        <h4>Starting Small Business Ideas</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Starting Small Business Ideas&src=dp`}
                        >
                          {/* to="https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Doctors&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Doctors&amp;src=dp"> */}
                          Request Loan Now
                        </Link>
                      </li>

                      <li>
                        <h4>Loans for Self Employed with Bad Credit</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Loans for Self Employed with Bad Credit&src=dp`}
                        >
                          {/* "https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Bad Credit&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Bad Credit&amp;src=dp" */}
                          Request Loan Now
                        </Link>
                      </li>

                      <li>
                        <h4>Loans for Small Businesses</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Loans for Small Businesses&src=dp`}
                        >
                          {/* to="https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Doctors&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Doctors&amp;src=dp"> */}
                          Request Loan Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5 pt-5 d-md-none d-lg-block">
                <img
                  // src="./../assets/images/form-new-image.png"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/form-new-image.png"
                  }
                  alt="form-bnr"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="primary" className="site-main">
          {/* <img className="wave" src="../assets/images/wave.svg" alt="wave" /> */}
          <img
            className="wave"
            src={process.env.PUBLIC_URL + "/assets/images/wave.svg"}
            alt="wave"
          />
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-12 col-lg-7">
                <div className="g_exit_content">
                  <div className="g_exit_header">
                    <h2>Congratulations</h2>
                    <p>
                      Your application has been submitted successfully. Based on
                      your information, we recommended suitable offers for you
                      from our partners.
                    </p>
                  </div>
                  <div className="g_exit_ad">
                    <h5>Sponsored Ads-</h5>
                    <ul>
                      <li>
                        <h4>Get Personal Loan For Self Employed</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Get Personal Loan For Self Employed&src=dp`}
                        >
                          Request Loan Now
                        </Link>
                      </li>
                      <li>
                        <h4>Get Personal Loan For Bad Credit</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Get Personal Loan For Bad Credit&src=dp`}
                        >
                          {/* "https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Bad Credit&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Bad Credit&amp;src=dp" */}
                          Request Loan Now
                        </Link>
                      </li>
                      <li>
                        <h4>Get Personal Loan For Housewife</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Get Personal Loan For Housewife&src=dp`}
                        >
                          {/* to="https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Housewife&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Housewife&amp;src=dp"> */}
                          Request Loan Now
                        </Link>
                      </li>
                      <li>
                        <h4>Get Personal Loan For Students</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Get Personal Loan For Students&src=dp`}
                        >
                          {/* to="https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Students&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Students&amp;src=dp"> */}
                          Request Loan Now
                        </Link>
                      </li>
                      <li>
                        <h4>Get Personal Loan For Doctors</h4>
                        <Link
                          to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                            JSON.parse(Cookies.get("utms"))?.id || ""
                          }&tg2=${
                            JSON.parse(Cookies.get("utms"))?.source || ""
                          }&tg3=${
                            JSON.parse(Cookies.get("utms"))?.medium || ""
                          }&tg4=${
                            JSON.parse(Cookies.get("utms"))?.campaign || ""
                          }&tg5=${
                            JSON.parse(Cookies.get("utms"))?.term || ""
                          }&txt=Get Personal Loan For Doctors&src=dp`}
                        >
                          {/* to="https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=Get Personal Loan For Doctors&amp;tg2={tg2}&amp;tg3={tg3}&amp;txt=Get Personal Loan For Doctors&amp;src=dp"> */}
                          Request Loan Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5 pt-5 d-md-none d-lg-block">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/form-new-image.png"
                  }
                  // src="./../assets/images/form-new-image.png"
                  alt="form-bnr"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Offers;
