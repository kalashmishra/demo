import React, { useEffect, useState } from "react";
import CasheLogo from "../../../assets/Images/Leanders/cashe.png";
import FaircentLogo from "../../../assets/Images/Leanders/faircent.png";
import FibeLogo from "../../../assets/Images/Leanders/fibe.png";
import KisshtLogo from "../../../assets/Images/Leanders/kissht.png";
import LendingkartLogo from "../../../assets/Images/Leanders/lendingkart.png";
import LoantapLogo from "../../../assets/Images/Leanders/loantap.png";
import MoneytapLogo from "../../../assets/Images/Leanders/moneytap.png";
import MoneyviewLogo from "../../../assets/Images/Leanders/moneyview.png";
import MoneywideLogo from "../../../assets/Images/Leanders/moneywide.png";
import MpocketLogo from "../../../assets/Images/Leanders/mpocket.png";
import NiraLogo from "../../../assets/Images/Leanders/nira.png";
import PaysenseLogo from "../../../assets/Images/Leanders/paysense.png";
import ProtiumLogo from "../../../assets/Images/Leanders/protium.png";
import StashfinLogo from "../../../assets/Images/Leanders/stashfin.png";
import ZypeLogo from "../../../assets/Images/Leanders/zype.png";
import Indifi from "../../../assets/Images/Leanders/indifi.png";
import Truebalance from "../../../assets/Images/Leanders/truebalance.png";
import Incred from "../../../assets/Images/Leanders/incred.svg";
import Upwards from "../../../assets/Images/Leanders/upwards.png";
import prefr from "../../../assets/Images/Leanders/prefr.webp";
import fatakPay from "../../../assets/Images/Leanders/fatak_pay.png";
import abfl from "../../../assets/Images/Leanders/abfl.png";
import privo from "../../../assets/Images/Leanders/privoLogo.png";
import sbl from "../../../assets/Images/Leanders/sbl.png";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../../redux/selectors";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setFormData, setIsLoading } from "../../../redux/actions";
import {
  LeadDetails,
  LeadStatus,
  MarketPlaceImpression,
  MarketplaceClick,
  PublicLeadStatus,
} from "../../../constant/services/credMudra/users";
import Loader from "../../../layouts/Loader/Index";
import MyModal from "./Components/CongratsDialog";
import { Button, Grid, Typography } from "@mui/material";
import Kreditbee from "../../../assets/Images/Leanders/kreditbee.png";
import { routeRedirection } from "../../../utils/commonFunctions";

const Marketplace = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [incorrectId, setIncorrectId] = useState(false);
  const [lenderData, setLenderData] = useState({});
  const isLoading = useSelector(selectIsLoading);
  const [LenderDetails, setLenderDetails] = useState(
    sessionStorage.getItem("Lenders")
      ? JSON.parse(sessionStorage.getItem("Lenders"))
      : ""
  );
  useEffect(() => {
    routeRedirection(navigate);
  }, [])
  const getQueryParam = (name) => {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  };
  const leadId = getQueryParam("id");
  useEffect(() => {
    if (LenderDetails?.data?.data?.status?.length === 0) {
      navigate("/get-registered/offers");
    }
    if (leadId) {
      getLenders();
    }
  }, []);

  const getLenders = async () => {
    dispatch(setIsLoading(true));
    const data = {
      leadId: leadId,
    };
    const res = await PublicLeadStatus(data);
    const employmentType = res?.data?.data?.employmentType;
    sessionStorage.setItem('employmentType', employmentType);
    if (res?.data?.status?.code === 404) {
      setIncorrectId(true);
    }
    if (res?.data?.data?.status?.length === 0) {
      navigate("/get-registered/offers");
    }
    const response = JSON.stringify(res);
    sessionStorage.setItem("Lenders", response);
    const LenderDetailss = sessionStorage.getItem("Lenders")
      ? JSON.parse(sessionStorage.getItem("Lenders"))
      : "";
    setLenderDetails({ ...LenderDetailss });
    dispatch(setIsLoading(false));
  };

  const getLeadDetails = async () => {
    const data = {
      leadId: leadId,
    };
    const res = await LeadDetails(data);
    const response = JSON.stringify(res?.data?.data);
    sessionStorage.setItem("leadData", response);
  };

  useEffect(() => {
    getLeadDetails();
    if (sessionStorage.getItem("leadId")) {
      MarketPlaceImpressionAsync();
    }
  }, [LenderDetails]);
  const MarketPlaceImpressionAsync = async () => {
    const data = {
      leadId: sessionStorage.getItem("leadId"),
    };
    const res = await MarketPlaceImpression(data);
  };
  useEffect(() => {
    localStorage.removeItem("loanType");
    window.onpopstate = () => {
      navigate("/");
    };
  }, []);
  const MarketplaceClickAsync = async (LenderId, redirectionLink) => {
    const data = {
      lenderId: LenderId,
      leadId: sessionStorage.getItem("leadId"),
    };
    const res = await MarketplaceClick(data);
    window.open(redirectionLink, "_blank");
  };
  const applyNow = (lenderId, redirectionLink) => {
    const accessToken = sessionStorage.getItem("accessToken")
      ? sessionStorage.getItem("accessToken")
      : "undefined";

    if (accessToken !== "undefined") {
      MarketplaceClickAsync(lenderId, redirectionLink);
    } else {
      setLenderData({
        lenderId: lenderId,
        redirectionLink: redirectionLink,
      });
      setOpen(true);
    }
  };
  useEffect(() => {
    document.body.classList.add(props?.classname);
    return () => {
      document.body.classList.remove(props?.classname);
    };
  }, []);

  const logo = (lender) => {
    const lowercaseName = lender?.name?.toLowerCase(); 
    return lowercaseName === "cashe"
      ? CasheLogo
      : lowercaseName === "mpocket"
      ? MpocketLogo
      : lowercaseName === "fibe"
      ? FibeLogo
      : lowercaseName === "kreditbee"
      ? Kreditbee
      : lowercaseName === "moneytap"
      ? MoneytapLogo
      : lowercaseName === "lendingkart"
      ? LendingkartLogo
      : lowercaseName === "paysense"
      ? PaysenseLogo
      : lowercaseName === "moneyview"
      ? MoneyviewLogo
      : lowercaseName === "loantap"
      ? LoantapLogo
      : lowercaseName === "zype"
      ? ZypeLogo
      : lowercaseName === "moneywide"
      ? MoneywideLogo
      : lowercaseName === "stashfin"
      ? StashfinLogo
      : lowercaseName === "faircent"
      ? FaircentLogo
      : lowercaseName === "nira"
      ? NiraLogo
      : lowercaseName === "kissht"
      ? KisshtLogo
      : lowercaseName === "protium"
      ? ProtiumLogo
      : lowercaseName === "indifi"
      ? Indifi
      : lowercaseName === "truebalance"
      ? Truebalance
      : lowercaseName === "incred"
      ? Incred
      : lowercaseName === "upwards"
      ? Upwards
      : lowercaseName === "prefr"
      ? prefr
      : lowercaseName === "fatakpay"
      ? fatakPay
      : lowercaseName === "abfl"
      ? abfl
      : lowercaseName === "privo"
      ? privo
      : lowercaseName === "sbl"
      ? sbl
      : "";
  };

  const checkName = (Lender) => {
    return Lender === "mpocket" ? "mpokket" : Lender;
  };
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
  const handleLoadMore = async () => {
    const data = {
      leadId: sessionStorage?.getItem("leadId") || leadId,
    };
    const res = await LeadStatus(data);
    const response = JSON.stringify(res);
    sessionStorage.setItem("Lenders", response);
    const LenderDetailss = sessionStorage.getItem("Lenders")
      ? JSON.parse(sessionStorage.getItem("Lenders"))
      : "";
    setLenderDetails({ ...LenderDetailss });
  };

  if (isLoading === true) {
    return <Loader />;
  }
  return (
    <div>
      {incorrectId === true ? (
        <div className="marketplace_head mt-5">
          <h1>
            The provided lead id is incorrect, Please provide the correct Lead
            ID
          </h1>
        </div>
      ) : (
        <main id="primary" className="site-main">
          {/* <img className="wave" src="../assets/images/wave.svg" alt="wave" /> */}
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="marketplace_head">
                  <h1>Congratulations</h1>
                  <p>
                    You've been successfully matched with the following lenders:
                  </p>
                </div>
                {LenderDetails?.data?.data?.status?.length > 0 ? (
                  <div className="mark_listing_wrapper">
                    <div className="best_match">
                      <h4>Best Match-</h4>

                      <div className="mark_listing_item">
                        <div className="mark_listing_image">
                          <img
                            src={logo(LenderDetails?.data?.data?.status[0])}
                            alt="Logo"
                          />
                        </div>
                        <div className="mark_listing_heading">
                          {/* <h3>{(LenderDetails?.data?.data[0]?.name)}</h3> */}
                          <h3>
                            {checkName(
                              LenderDetails?.data?.data?.status[0]?.name
                            )}
                          </h3>
                        </div>
                        <div className="mark_listing_desc">
                          <h6>
                            {/* {LenderDetails?.data?.lender[0]?.features[0].type === "header"
                          ? LenderDetails?.data?.lender[0]?.features[0].title
                          : "Features"} */}
                            Features
                          </h6>
                          <ul>
                            {LenderDetails?.data?.data?.status[0]?.features?.map(
                              (list) => (
                                <li>
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  ></i>
                                  {list.title}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="mark_listing_rating">
                          <h4>Self Rating</h4>
                          <span className="rating_no">
                            {LenderDetails?.data?.data?.status[0]?.rating}
                          </span>
                        </div>
                        <div className="mark_listing_button">
                          <Link
                            style={{
                              color: "#f7d64a",
                              textDecoration: "none",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              applyNow(
                                LenderDetails?.data?.data?.status[0]?.lenderId,
                                LenderDetails?.data?.data?.status[0]
                                  ?.redirectionLink
                              );
                            }}
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    {LenderDetails?.data?.data?.status?.length > 1 && (
                      <div className="mark_listing_all">
                        <h4>Recommended-</h4>
                        {Array.isArray(LenderDetails?.data?.data?.status) &&
                          LenderDetails?.data?.data?.status?.map((val, i) => (
                            <>
                              {i !== 0 ? (
                                <div className="mark_listing_item">
                                  <div className="mark_listing_image">
                                    <img src={logo(val)} alt="Logo" />
                                  </div>
                                  <div className="mark_listing_heading">
                                    <h3>{checkName(val?.name)}</h3>
                                  </div>
                                  <div className="mark_listing_desc">
                                    <h6>
                                      {/* {val?.features[0].type === "header"
                          ? val?.features[0].title
                          : "Features"} */}
                                      Features
                                    </h6>
                                    <ul>
                                      {val?.features?.map((list) => (
                                        <li>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
                                          {list.title}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="mark_listing_rating">
                                    <h4>Self Rating</h4>
                                    <span className="rating_no">
                                      {val?.rating}
                                    </span>
                                  </div>
                                  <div className="mark_listing_button">
                                    <Link
                                      style={{
                                        color: "#f7d64a",
                                        textDecoration: "none",
                                      }}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        applyNow(
                                          val.lenderId,
                                          val.redirectionLink
                                        );
                                      }}
                                    >
                                      Apply Now
                                    </Link>
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                            </>
                          ))}
                      </div>
                    )}
                    <div className="mark_listing_all"></div>
                  </div>
                ) : (
                  ""
                )}
                {LenderDetails?.data?.data?.loadMore && (
                  <Grid
                    item
                    xs={12}
                    mt={2}
                    sx={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      onClick={handleLoadMore}
                      sx={{
                        width: "176px",
                        height: "35px",
                        flexShrink: 0,
                        backgroundColor: "#243771",
                        gap: " 8.723px",
                        ":hover": {
                          backgroundColor: "#243771",
                          color: "#FFF",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#FFF",
                          fontFamily: "Inter",
                          fontsize: "18px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "normal",
                        }}
                      >
                        Load More
                      </Typography>
                    </Button>
                  </Grid>
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      <MyModal
        setOpen={setOpen}
        open={open}
        MarketplaceClickAsync={MarketplaceClickAsync}
        lenderData={lenderData}
      />
    </div>
  );
};

export default Marketplace;
