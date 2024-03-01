import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import CommonUserNumber from "../../components/FormComponents/CommonUserNumber/CommonUserNumber";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";

const PersonalLoanForTwoWheeler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("loanType");
    routeRedirection(navigate);
    dispatch(setLoanType(""));
    sessionStorage.removeItem("employmentType");
  }, []);

  return (
    <div>
      <Helmet>
        <title>{heading.twoWheeler.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.twoWheeler.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.twoWheeler.canonical} />
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
                    Cruise Through Life With Affordable Loans For Two-Wheelers
                  </h1>
                  <p className="p">
                    Say Goodbye to Two-Wheeler Worries with Competitive
                    Solutions and Convenient EMI options.
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
                  src={process.env.PUBLIC_URL + "/assets/images/pl_tw_top.webp"}
                  alt="Apply for two wheeler loan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_blue_bg_2_col_wrapper bl_criteria_wrapper">
        <img
          
          src={process.env.PUBLIC_URL + "/assets/images/cred_angle_full.webp"}
          alt="Credmudra logo"
        />
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-5">
              <div className="pl_blue_bg_2_col_wrapper_content bl_criteria_content">
                <h2>Eligibility Criteria For Two-Wheeler Personal Loan</h2>
                <p>
                  Various lenders set their own set of eligibility parameters.
                  Thus, you must individually check out their regulations before
                  entering into a personal loan relationship. Hereby we have
                  listed some general guidelines that most lenders adhere to
                  while approving a personal loan for two wheeler:
                </p>
              </div>
            </div>
            <div className="offset-md-1 col-md-6">
              <div className="pl_blue_bg_2_col_wrapper_content bl_criteria_points">
                <ul>
                  <li> You must be an Indian by birth.</li>
                  <li>
                    {" "}
                    Your age should be at least 18 years while applying. Also,
                    applicants above 65 years are not generally given personal
                    loans.
                  </li>
                  <li>
                    While applying you must have a stable income source, i.e.,
                    you must both be a salaried individual, a self-employed
                    person, a pensioner, and so on.
                  </li>
                </ul>
                <span className="desc">
                  <b> Note:</b> The eligibility criteria for a Two wheeler loan
                  may differ depending on the lender. Therefore, it is
                  recommended to review the lender's eligibility requirements
                  before applying for a Two wheeler loan.
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
                <h2>Documents Required To Apply For A Two Wheeler Loan</h2>
                <p>
                  You will be surprised to see the extremely short list of
                  necessary documents while applying from Credmudra. Here is all
                  you need:
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
                  <li>
                    Any valid address/ ID proof like utility bills, Aadhaar
                    card, PAN card, Passport, etc.
                  </li>
                  <li>Duly-filled loan application of the desired lender</li>
                  <li>Passport-sized photograph</li>
                </ul>
                <p>
                  Besides these documentation procedures, you may need to bear
                  minimal on-boarding fees. Every small detail is relayed to you
                  before loan approval to maintain 100% transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pldc_overview_wrapper pldc_overview_wrapper_2 bl_type_wrapper">
        <div className="container-fluid">
          <div className="row align-items-md-center">
            <div className="col-md-6">
              <div className="pldc_overview_content">
                <h2>
                  4 Key Features Of Two-Wheeler Personal Loans To Consider
                </h2>
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
                        Attractive Interests
                      </button>
                    </h2>
                    <div
                      id="flush-collapse8"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading8"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Interest rates can be as low as possible per annum
                        provided you select the right vendor. On top of that,
                        you do not need to wait for long to get the approval.
                        Also, minimal paperwork has to be done.
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
                        100% Financing is Available
                      </button>
                    </h2>
                    <div
                      id="flush-collapse9"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading9"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        This facility is made available for those who may be
                        finding it difficult to pay a certain amount of the
                        on-road price upfront. It not only helps you purchase
                        your dream scooty or bike but also assists in keeping
                        your savings intact. These services are given to anyone
                        as long as they are meeting the personal loan
                        eligibility credentials.
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
                        Completely Digital Process
                      </button>
                    </h2>
                    <div
                      id="flush-collapse10"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading10"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Now you do not have to wait in long queues like earlier
                        applicants. Starting from loan verification to disbursal
                        everything happens instantly, on the go. This increased
                        role of digitisation has made the whole financing model
                        more accessible for all.
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
                        Low Processing Fee
                      </button>
                    </h2>
                    <div
                      id="flush-collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading11"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Processing fees for these loans can be as low as 0.5%
                        for customers eligible for pre-approved offers. All they
                        have to do is perform a few clicks to provide their
                        consent of availing the loan offer.
                      </div>
                    </div>
                  </div>
                </div>
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
                  
                  src={process.env.PUBLIC_URL + "/assets/images/pl_tw_1.webp"}
                  alt="Features Of Two-Wheeler Personal Loans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_5_block_wrapper">
        <div className="container">
          <h2>Steps To Apply For A Two Wheeler Loan At Credmudra</h2>
          <h6>
            Follow these steps to successfully bag an two wheeler loan on
            Credmudra:
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

      <div className="pl_edu_table_wrapper pl_tw_table_wrapper aplir">
        <div className="container-fluid">
          <div className="pl_edu_table_head">
            <h2>Interest Rate &amp; Other Charges</h2>
            <p>
              Applying for a two-wheeler loan is now very easy as the entire
              procedure gets executed online. Just go through the interest rates
              and other particulars to decide the best plan. Finally, wait for
              instant disbursal of the loan amount from the lender's end.
            </p>
            <Link
              onClick={() => scrollToTop()}
              className="theme_cta"
              to="/get-registered/user-number"
            >
              Get Matched Now!
            </Link>
          </div>
          <div className="table-of-grid pl_edu_table_div pl_tw_table_div">
            <table>
              <tbody>
                <tr>
                  <th>LENDER</th>
                  <th>MAXIMUM LOAN AMOUNT</th>
                  <th>INTEREST RATES</th>
                  <th>PROCESSING FEES</th>
                  <th>FORECLOSURE CHARGES</th>
                </tr>
                <tr>
                  <td>ICICI Bank</td>
                  <td>100% of the vehicle’s on-road price</td>
                  <td>9.00% p.a. onwards</td>
                  <td>Up to 4.75% of the borrowed principal</td>
                  <td>5% of the loan amount + GST</td>
                </tr>
                <tr>
                  <td>Bajaj Auto Finance</td>
                  <td>100% of the vehicle’s on-road price</td>
                  <td>8.50% p.a. onwards</td>
                  <td>Up to 3.00% of the borrowed principal</td>
                  <td>Not applicable after 12 months</td>
                </tr>
                <tr>
                  <td>Axis Bank</td>
                  <td>100% of the vehicle’s on-road price</td>
                  <td>11.00% p.a. onwards</td>
                  <td>Up to 2.50% of the borrowed principal</td>
                  <td>5% of the loan amount</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>Up to Rs. 10 Lakhs</td>
                  <td>11.15% p.a. onwards</td>
                  <td>0.5% of the principal subject to Rs.500 to Rs.1000</td>
                  <td>Nil</td>
                </tr>
                <tr>
                  <td>Fullerton India</td>
                  <td>Up to Rs. 30 Lakhs</td>
                  <td>8.00% p.a. onwards</td>
                  <td>Up to 5.00% of the borrowed principal</td>
                  <td>3% of the loan amount</td>
                </tr>
                <tr>
                  <td>Tata Capital</td>
                  <td>100% of the vehicle’s on-road price</td>
                  <td>11.50% p.a. onwards</td>
                  <td>Up to 2.50% of the borrowed principal</td>
                  <td>4% of the loan amount + GST</td>
                </tr>
                <tr>
                  <td>HeroFinCorp</td>
                  <td>Up to Rs. 1.5 Lakhs</td>
                  <td>10.65% p.a. onwards</td>
                  <td>Up to 2.50% of the borrowed principal</td>
                  <td>4% of the loan amount + GST</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="lp_faq_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4">
              <h3>FAQs About Personal Loan For Two Wheeler</h3>
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
                      Where to find the best personal loan offer for a
                      two-wheeler?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse23"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-heading23"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You may reach out to Credmudra mentors for a one-on-one
                      discussion on how to negotiate for the best interest rate.
                      We have a bunch of reputed lenders offering the lowest
                      interest on personal loans.
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
                      Can I get a bike loan if my CIBIL score is 650?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse24"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading24"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Credit score requirements tend to vary from one lender to
                      another. However, there remains a significant chance of
                      grabbing a personal loan with 650 CIBIL score but in
                      exchange of higher interest rates.
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
                      What is the minimum salary for a loan from Credmudra?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse25"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading25"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You can opt for a loan even if you are currently employed
                      with a salary of Rs. 9000. The only reason a lender asks
                      for your monthly income is to determine your repaying
                      capacity after taking the loan.
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
                      How many years is a bike loan?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse26"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading26"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Depending on the lender’s policies, a two-wheeler loan
                      typically exceeds no more than 5 years. Many financing
                      companies allow you to make partial prepayments at
                      occasional intervals to bring down the interest rates in
                      exchange for some foreclosure charges.
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

export default PersonalLoanForTwoWheeler;
