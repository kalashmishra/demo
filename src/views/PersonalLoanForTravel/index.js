import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import CommonUserNumber from "../../components/FormComponents/CommonUserNumber/CommonUserNumber";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";

const PersonalLoanForTravel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("loanType");
    routeRedirection(navigate);
    dispatch(setLoanType(""));
    sessionStorage.removeItem("employmentType");
  }, []);

  return (
    <div>
      <Helmet>
        <title>{heading.travalLoan.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.travalLoan.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.travalLoan.canonical} />
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
                  <h1 className="h1">Travel Loan Tailored To Your Dreams!</h1>
                  <p className="p">
                    Say goodbye to financial worries and bon voyage to your
                    dream destination!
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
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/travelLoan/tl_top.webp"
                  }
                  alt="Get Personal Loan For travel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bl_interest_wrapper tl_offer_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4 ">
              <div className="bl_interest_content">
                <h2>Banks That Offer Travel Loan</h2>
                <p>
                  Take a look at the following table to learn about some of the
                  top banks that offer travel loans at competitive interest
                  rates:
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
            <div className="offset-md-2 col-md-6">
              <div className="table-of-grid">
                <table>
                  <tbody>
                    <tr>
                      <th>BANK</th>
                      <th>INTEREST RATE</th>
                    </tr>
                    <tr>
                      <td>HDFC Bank</td>
                      <td>Starting from 10.50% p.a.</td>
                    </tr>
                    <tr>
                      <td>IDFC First Bank</td>
                      <td>Starting from 10.49% p.a.</td>
                    </tr>
                    <tr>
                      <td>Kotak Mahindra Bank</td>
                      <td>Starting from 10.99% p.a.</td>
                    </tr>
                    <tr>
                      <td>ICICI Bank</td>
                      <td>Starting from 10.75% p.a.</td>
                    </tr>
                    <tr>
                      <td>Axis Bank</td>
                      <td>Starting from 10.25% p.a.</td>
                    </tr>
                    <tr>
                      <td>Standard Chartered</td>
                      <td>Starting from 11% p.a.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plme_feature_benefit_wrapper tl_feature_benefit_wrapper">
        <div className="container">
          <div className="row">
            <h2>Features And Benefits Of Travel Loan</h2>
            <ul>
              <li>
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_2.png"
                  }
                  alt="Instant loan approval"
                />
                <div className="feature_benefit_item">
                  <h5>Instant Travel Loan</h5>
                  <p>
                    Due to low eligibility criteria, travel loan takes the
                    minimum time possible for approval. Take our compatibility
                    test to hasten the process.
                  </p>
                </div>
              </li>
              <li>
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_7.png"
                  }
                  alt="Flexible Borrowing Terms"
                />
                <div className="feature_benefit_item">
                  <h5>Flexible Borrowing Terms</h5>
                  <p>
                    With available flexible borrowing terms and conditions,
                    withdraw the amount as and when required and pay interest
                    only on the amount used.
                  </p>
                </div>
              </li>
              <li>
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_5.png"
                  }
                  alt="Fast Disbursal"
                />
                <div className="feature_benefit_item">
                  <h5>Fast Disbursal</h5>
                  <p>
                    Once your documents are verified and you satisfy all our
                    eligibility criteria, your loan takes the shortest time
                    possible which can range between a few hours and a few days.
                  </p>
                </div>
              </li>
              <li>
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_1.png"
                  }
                  alt="100% Paperless Process"
                />
                <div className="feature_benefit_item">
                  <h5>100% Paperless Process</h5>
                  <p>
                    Our whole process is digital. You can complete the process
                    from application to approval from the comfort of your place.
                  </p>
                </div>
              </li>
              <li>
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_8.png"
                  }
                  alt="Ample Disbursal Amount"
                />
                <div className="feature_benefit_item">
                  <h5>Ample Disbursal Amount</h5>
                  <p>
                    Our loan amount varies within the range of Rs.500 and Rs.10
                    lakhs. Depending upon your requirement and repayment
                    capability, you can avail a loan of as much amount as you
                    require.
                  </p>
                </div>
              </li>
              <li>
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_3.png"
                  }
                  alt="Minimal documentation"
                />
                <div className="feature_benefit_item">
                  <h5>Minimal Documentation</h5>
                  <p>
                    All we need is a few KYC documents and your income proof. We
                    keep our documentation process minimal so that the queue of
                    our customers waiting remains as short as possible.
                  </p>
                </div>
              </li>
              <li>
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_4.png"
                  }
                  alt="Pre-Approved Offers"
                />
                <div className="feature_benefit_item">
                  <h5>Pre-Approved Offers</h5>
                  <p>
                    If you are pre-approved for availing the personal loan
                    facility, you get quick access to the personal loan for
                    travel.
                  </p>
                </div>
              </li>
              <li>
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_6.png"
                  }
                  alt="No Collateral Needed"
                />
                <div className="feature_benefit_item">
                  <h5>No Collateral Needed</h5>
                  <p>
                    The best part is that you don’t need to put anything
                    mortgage or as collateral. This cuts down half of the hassle
                    of documentation process. However, for short-term loans,
                    some of our lenders might require collateral.
                  </p>
                </div>
              </li>
            </ul>
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
                <h2>Find Out When Are You Not Eligible</h2>
                <p>
                  You need to satisfy our few simple eligibility criteria in
                  order to get connected with our lender and get a travel loan
                  online.
                </p>
              </div>
            </div>
            <div className="offset-md-1 col-md-6">
              <div className="pl_blue_bg_2_col_wrapper_content bl_criteria_points">
                <ul>
                  <li>
                    <span></span> Business owners, individuals, entrepreneurs,
                    MSMEs, startups and self-employed professionals, such as CS,
                    CAs, architects and doctors
                  </li>
                  <li>
                    <span></span> Public and private limited companies,
                    partnership firms, sole proprietorships, LLPs{" "}
                  </li>
                  <li>
                    <span></span> Large enterprises dealing only in trading,
                    services and manufacturing sectors
                  </li>
                  <li>
                    <span></span> Co-operative societies, NGOs and trusts
                  </li>
                  <li>
                    <span>Age:</span> 21 to 65 years old
                  </li>
                  <li>
                    <span>Employment type:</span> Self-employed
                  </li>
                  <li>
                    <span>Business tenure:</span> At least 1 year or more
                  </li>
                  <li>
                    <span>Minimum yearly turnover:</span>Vary across lenders
                  </li>
                  <li>
                    <span>Credit score:</span> 750 or more{" "}
                  </li>
                </ul>
                <span className="desc">
                  Note: The above-mentioned details can vary from lender to
                  lender depending on their terms and conditions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_docs_need_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4">
              <div className="pl_docs_need_cta">
                <h2>Documents Required To Apply For A Travel Loan</h2>
                <p>
                  The documentation process is really simple and minimal.
                  Lenders just need the following documents to run a quick check
                  before proceeding to disburse your <b> travel loan:</b>
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
            <div className="offset-md-1 col-md-7">
              <div className="pl_docs_need_content">
                <ul>
                  <li> PAN card details</li>
                  <li>
                    Valid ID proof (Driving License, Voter ID, Aadhaar ID,
                    Passport)
                  </li>
                  <li>
                    Valid address proof (Driving License, Passport, Aadhaar
                    Card)
                  </li>
                  <li>Bank statement for the last 3 months</li>
                  <li>Income proof (Payslip or IT Returns)</li>
                  <li>Photographs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_5_block_wrapper">
        <div className="container">
          <h2>Steps To Apply For A Travel Loan At Credmudra</h2>
          <h6>
            The application process for a personal loan for travel involves
            simple few steps and takes a few minutes to complete. All you need
            is a stable internet connection and follow the given steps:
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
              <h5>
                Declare <br />
                Employment Details
              </h5>
              <p>
                Select the type of your employment and enter other relevant
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

      <div className="pldc_overview_wrapper pldc_overview_wrapper_2 bl_type_wrapper">
        <div className="container-fluid">
          <div className="row align-items-md-center">
            <div className="col-md-6">
              <div className="pldc_overview_content">
                <h2>Why Should You Consider Availing a Travel Loan?</h2>
                <p>
                  Travelling requires only two of your most important things in
                  life – your time and money. We can manage the latter one for
                  you. But now that you are on our page, you must have been
                  thinking back and forth before applying for a personal loan
                  for travel. Let us give you some good reasons that might
                  convince you:
                </p>
                <ul>
                  <li>
                    The primary reason would be not liquidating your other
                    savings or long-term investments.
                  </li>
                  <li>
                    Instant approval and quick disbursal so that you don’t need
                    to postpone your plan further due to unavailability of
                    funds.
                  </li>
                  <li>Flexibility in repayment terms and conditions.</li>
                  <li>
                    You can also use the extra line of credit for emergency
                    purposes while on vacation if required.
                  </li>
                  <li>
                    You can monitor your travel expenses and refrain from
                    overspending.
                  </li>
                </ul>

                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/get-registered/user-number"
                >
                  Get Matched Now!
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pldc_overview_image">
                <img
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/travelLoan/tl_smily.webp"
                  }
                  alt="Why a Travel Loan is Right for You"
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
                  
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/travelLoan/tl_acc1.webp"
                  }
                  alt="Things To know before Applying For A Travel Loan"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="discover-the-power">
                <h2>Things To Consider Before Applying For Travel Loans</h2>
                <p>
                  Although these facilities and flexibilities might seem
                  tempting, you should be careful while applying for a travel
                  loan. After all, you will need to pay off the debt through
                  travel loan EMIs.{" "}
                </p>
                <p>
                  {" "}
                  Check out the following pointers that you should consider
                  before applying for a travel loan online:
                </p>
              </div>
              <ul className="ul_style">
                <li>
                  Draft your repayment plan beforehand and budget accordingly.
                </li>
                <li>You might need to pay foreign currency conversion fees.</li>
                <li>
                  As travel loans are one type of personal loan, the travel loan
                  interest rates are higher. So, compare and choose the most
                  suitable option for you.
                </li>
                <li>
                  Use an online EMI calculator to find out your travel loan EMI
                  estimates and check if it fits within your monthly
                  expenditures.
                </li>
              </ul>
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

      <div className="lp_faq_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4">
              <h3>FAQs About Personal Loan For Travel</h3>
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
                      Can I take a travel loan for international vacations?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse23"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-heading23"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, you can avail a travel loan for international
                      vacations upon meeting the eligibility criteria of your
                      lender. However, you also need to stay prepared for
                      unexpected expenses and pay for foreign currency
                      conversion charges.
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
                      What are the benefits of our pre-approved personal loan?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse24"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading24"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      If you are eligible for our pre-approved personal loan,
                      you can enjoy benefits such as lower interest rates,
                      instant approval and disbursement.
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
                      How much personal loan for travel can I get at Credmudra?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse25"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading25"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You can avail a personal loan for travel ranging between
                      Rs.1,000 and Rs.20 lakhs depending on your requirement and
                      eligibility.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-heading26">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse26"
                      aria-expanded="false"
                      aria-controls="flush-collapse26"
                    >
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                      How can I repay my travel loan?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse26"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading26"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      The most convenient way to pay off your loan is by paying
                      EMIs. But if you fear defaulting on your monthly payments,
                      you can set up standing instructions or turn on the auto
                      debit facility. Just make sure that you have sufficient
                      balance in your linked bank account.
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

export default PersonalLoanForTravel;
