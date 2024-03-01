import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonUserNumber from "../../components/FormComponents/CommonUserNumber/CommonUserNumber";
import "../../assets/ComponentStyling/CommonStyling/commonStyling.scss";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";

const BusinessLoan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    routeRedirection(navigate);
    localStorage.setItem("loanType", "businessLoan");
    dispatch(setLoanType("businessLoan"));
    sessionStorage.setItem("employmentType", "Self Employed");
    // dispatch(setEmployType("BusinessLoan"));
  }, []);

  return (
    <div>
      <Helmet>
        <title>{heading.businessPage.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.businessPage.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.businessPage.canonical} />
      </Helmet>

      <div className="banner_wrapper-personal-blog">
        <img
       
          className="wave"
          src={process.env.PUBLIC_URL + "/assets/images/home_bg1.svg"}
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
                    We Provide Funds For All Your Business Needs
                  </h1>
                  <p className="p">
                    Empowering Businesses to Thrive and Grow with our Innovative
                    and Tailored Financing Solutions
                  </p>
                  <div
                    className="button-for-lender pb-3 pt-1"
                    style={{ display: "none" }}
                  >
                    <Link
                      onClick={() => scrollToTop()}
                      to="/business-loan/get-registered"
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
                    "/assets/images/business_loan_top.webp"
                  }
                  alt="Get business loan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pldc_overview_wrapper">
        <div className="container-fluid">
          <div className="row align-items-md-center">
            <div className="col-md-6">
              <div className="pldc_overview_image">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/what_are_bl.webp"
                  }
                  alt="What are Business Loans"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="pldc_overview_content">
                <h2>What are Business Loans?</h2>
                <p>
                  A business loan is a type of unsecured credit instrument that
                  business owners can apply for in order to fund planned as well
                  as urgent business-related expenses.{" "}
                </p>
                <p>
                  Further, leading financial institutions and NBFCs offer
                  business loans at competitive interest rates and do not demand
                  any collateral against the borrowed sum.{" "}
                </p>
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/business-loan/get-registered"
                >
                  Get Matched Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="personal-loan-discover-the-power accordian_white_bg accordian_image_right">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="discover-the-power">
                <h2>Choose Credmudra for the Best Business Loan</h2>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading8">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse8"
                        aria-expanded="true"
                        aria-controls="flush-collapse8"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Prompt Loan Disbursal
                      </button>
                    </h2>
                    <div
                      id="flush-collapse8"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading8"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        With us, the TAT of borrowing a business loan is reduced
                        to meet your financial requirements without wasting
                        time. We promise to sanction and disburse the loan
                        amount the same day.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading9">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse9"
                        aria-expanded="false"
                        aria-controls="flush-collapse9"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Loan Match Making
                      </button>
                    </h2>
                    <div
                      id="flush-collapse9"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading9"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Just apply for the loan, submit necessary papers and
                        relax. We will do the rest. Finding the right lending
                        partner that matches your requirements is what we do.
                        And we do it best.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading10">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse10"
                        aria-expanded="false"
                        aria-controls="flush-collapse10"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Easy Application
                      </button>
                    </h2>
                    <div
                      id="flush-collapse10"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading10"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Our application process is user-friendly and seamless.
                        You only need to furnish your mobile phone number,
                        required details and mention your loan requirements.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading11">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse11"
                        aria-expanded="false"
                        aria-controls="flush-collapse11"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Loan Tenure at your Discretion
                      </button>
                    </h2>
                    <div
                      id="flush-collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading11"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Choose the loan tenure per your convenience. Just ensure
                        the chosen EMI is within your repayment capacity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-for-lender pb-3 pt-3">
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/business-loan/get-registered"
                >
                  Get Matched Now !
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pl_accordian_image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/bl_acc1.webp"}
                  alt="Choose Credmudra For The Best Business Loan"
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
                  src={process.env.PUBLIC_URL + "/assets/images/bl_acc2.webp"}
                  alt="Business Loan features and benefits"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="discover-the-power">
                <h2>Features and Benefits of a Business Loan</h2>
                <p>
                  If you are planning to apply for a business loan, you must
                  know the following features and benefits of this credit
                  facility:{" "}
                </p>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading12">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse12"
                        aria-expanded="true"
                        aria-controls="flush-collapse12"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Instant Disbursal
                      </button>
                    </h2>
                    <div
                      id="flush-collapse12"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading12"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The requested sum of money gets credited to your account
                        real quick once the application and documents are
                        verified successfully. <br />
                        If you choose Credmudra, the wait time is minimal.
                        Moreover, you can get the amount credited the same day.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading13">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse13"
                        aria-expanded="false"
                        aria-controls="flush-collapse13"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Collateral-free Advances
                      </button>
                    </h2>
                    <div
                      id="flush-collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading13"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        As unsecured loans, financial institutions do not ask
                        for any collateral while sanctioning the loan
                        application.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading14">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse14"
                        aria-expanded="false"
                        aria-controls="flush-collapse14"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Hassle-free Documentation
                      </button>
                    </h2>
                    <div
                      id="flush-collapse14"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading14"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Only a handful of documents are needed while sanctioning
                        business loan applications.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading15">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse15"
                        aria-expanded="false"
                        aria-controls="flush-collapse15"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Convenient Repayment Facility
                      </button>
                    </h2>
                    <div
                      id="flush-collapse15"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading15"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Use a business loan EMI calculator to determine the EMI
                        amount and choose the instalment that best suits your
                        financial strength.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading16">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse16"
                        aria-expanded="false"
                        aria-controls="flush-collapse16"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        No End-use Restriction Attached
                      </button>
                    </h2>
                    <div
                      id="flush-collapse16"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading16"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        You can use the borrowed sum to fund any business
                        expense without any obligation or restriction from the
                        lender.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-for-lender pb-3 pt-3">
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/business-loan/get-registered"
                >
                  Get Matched Now !
                </Link>
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
                <h2>Interest Rates On Business Loan Offers</h2>
                <p>
                  Please check the applicable interest rates on business loan
                  offers extended by several leading financial institutions in
                  our country:
                </p>
                <p>
                  You must note that these interest rates are subject to change
                  without any prior notice. Further, the applicable interest
                  rate will depend on your eligibility for the credit facility.
                  Hence, contact your lending institution in order to know the
                  actual interest rate applicable to your business loan.
                </p>
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/business-loan/get-registered"
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
                      <th>BANK OR NBFC</th>
                      <th>INTEREST RATE RANGE</th>
                    </tr>
                    <tr>
                      <td>Axis Bank</td>
                      <td>14.95% to 19.20% per annum</td>
                    </tr>
                    <tr>
                      <td>Bajaj Finserv</td>
                      <td>9.75% to 30% per annum</td>
                    </tr>
                    <tr>
                      <td>HDB Financial Services Ltd.</td>
                      <td>Up to 36% per annum</td>
                    </tr>
                    <tr>
                      <td>HDFC Bank</td>
                      <td>10% to 22.50% per annum</td>
                    </tr>
                    <tr>
                      <td>IDFC FIRST Bank</td>
                      <td>10.50% per annum onwards</td>
                    </tr>
                    <tr>
                      <td>Kotak Mahindra Bank</td>
                      <td>16% to 26% per annum</td>
                    </tr>
                    <tr>
                      <td>Tata Capital</td>
                      <td>12% per annum onwards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_blue_bg_2_col_wrapper bl_criteria_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-5">
              <div className="pl_blue_bg_2_col_wrapper_content bl_criteria_content">
                <h2>Eligibility Criteria For A Business Loan</h2>
                <p>
                  Eligibility Assessment Made Easy: Find Out If You Qualify in
                  Under 3 minutes*
                </p>
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/business-loan/get-registered"
                >
                  Get Matched Now !
                </Link>
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
                <h2>Documents Required For A Business Loan</h2>
                <p>
                  Along with fulfilling all the eligibility parameters, you will
                  have to submit some documents in order to get loan approval.
                </p>
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/business-loan/get-registered"
                >
                  Get Matched Now!
                </Link>
              </div>
            </div>
            <div className="offset-md-1 col-md-7">
              <div className="pl_docs_need_content">
                <ul>
                  <li>
                    <span> </span> Passport-sized photographs
                  </li>
                  <li>
                    <span> </span> KYC documents, such as Aadhaar card, PAN
                    card, driving license, passport, electricity or water bills,
                    voter ID card
                  </li>
                  <li>
                    <span></span> Previous 1 year's bank account statement
                  </li>
                  <li>
                    <span></span>Non-collateral overdraft copy (if applicable)
                  </li>
                  <li>
                    <span></span>Copy of business incorporation paperwork
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_5_block_wrapper">
        <div className="container">
          <h2>Step-By-Step Process To Apply For Personal Loan</h2>
          <h6>
            Here is the stepwise process you need to follow to apply for a
            personal loan online through Credmudra:
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
                Business Details
              </h5>
              <p>
                Select the type of your business and enter other relevant
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
                <h2>What Are The Types Of Business Loans?</h2>
                <p>
                  Based on your requirement, you can opt for any of the
                  following types of business loans:
                </p>
                <ul>
                  <li>
                    <span>Term loan</span>
                  </li>
                  <li>
                    <span>Working capital loan</span>
                  </li>
                  <li>
                    <span>Bill or invoice discounting</span>
                  </li>
                  <li>
                    <span>Letter of credit</span>
                  </li>
                  <li>
                    <span>Point-of-Sale loan</span>
                  </li>
                  <li>
                    <span>Overdraft</span>
                  </li>
                </ul>

                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/business-loan/get-registered"
                >
                  Get Matched Now!
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pldc_overview_image">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/what_are_bl_2.webp"
                  }
                  alt="Types Of Business Loans"
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
                  src={process.env.PUBLIC_URL + "/assets/images/bl_acc3.webp"}
                  alt="best business loan for your firm"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="discover-the-power">
                <h2>Factors To Consider Before Taking A Business Loan</h2>
                <p>
                  You must take into account several essential factors while you
                  decide on the best business loan for your firm.
                </p>
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
                        Purpose of the Loan
                      </button>
                    </h2>
                    <div
                      id="flush-collapse18"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading18"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        In order to make the best use of borrowed money, you
                        must know your financial needs before applying for
                        credit.
                        <br />
                        <br />
                        For example, you must determine what equipment you need
                        to buy if you are opting for a loan to upgrade your
                        business. This will help you determine the exact amount
                        you need and what type of business loan you should opt
                        for.
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
                        Interest Rates and Other Costs
                      </button>
                    </h2>
                    <div
                      id="flush-collapse19"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading19"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        To get the best deal, you must compare the interest
                        rates offered by different lenders. Based on the
                        comparison, choose a lender that offers the lowest
                        interest rate. <br /> <br />
                        Further, you should keep an eye out for additional
                        costs, such as processing charges, foreclosure fees,
                        etc. These costs add up to the total loan amount.
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
                        Repayment Schedule
                      </button>
                    </h2>
                    <div
                      id="flush-collapse20"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading20"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Make sure you know all the repayment terms of the credit
                        you are applying for. Factors, such as business loan
                        length, repayment schedule and charges associated with
                        early and late payments should be known by every
                        borrower.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading21">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse21"
                        aria-expanded="false"
                        aria-controls="flush-collapse21"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Company Cash Flow
                      </button>
                    </h2>
                    <div
                      id="flush-collapse21"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading21"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Assess your business's cash flow in order to determine
                        your repayment capability. This will help you make a
                        repayment plan and save from a financial burden.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading22">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse22"
                        aria-expanded="false"
                        aria-controls="flush-collapse22"
                      >
                        <span>
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Lender’s Reputation
                      </button>
                    </h2>
                    <div
                      id="flush-collapse22"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading22"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Do thorough research about the financial institution or
                        NBFC you are choosing. Learn about the lender's
                        reputation in the market, customer service, etc. You can
                        look for ratings and reviews from previous borrowers in
                        order to learn more about a financial institution.
                        <br /> <br />
                        Credmudra has partnered with some of the leading
                        business loan providers in India. With our user-friendly
                        interface and paperless loan application process, take a
                        step closer to reaching your business goals.
                        Nevertheless, if you face any issues while applying for
                        a loan from our portal, contact our Mudra Mentors to
                        receive comprehensive assistance.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-for-lender pb-3 pt-3">
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/business-loan/get-registered"
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
              <h3>FAQs On Business Loans</h3>
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
                      What is a good Credit Score to apply for a business loan
                      in India?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse23"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-heading23"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Financial institutions and NBFCs usually consider a Credit
                      score of 750 or above as a good credit score for a
                      business loan.
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
                      What is the maximum repayment tenure for a business loan
                      in India?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse24"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading24"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      The maximum tenure for an unsecured business loan can be
                      up to five years. However, repayment tenure for a credit
                      facility varies from one lender to another. Hence, you
                      should get in touch with the lenders in order to know
                      their repayment terms and other details.
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
                      Can I get a business loan to start a farming business?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse25"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading25"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, you can get a business loan to start a farming or
                      agriculture business. Once you make an application, submit
                      the necessary documents and get verified, you will get the
                      money to fund your business expenses.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan;
