import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import CommonUserNumber from "../../components/FormComponents/CommonUserNumber/CommonUserNumber";
import "../../assets/ComponentStyling/CommonStyling/commonStyling.scss";
import { setEmployType, setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";

const PersonalLoanForMedicalEmergency = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("loanType");
    routeRedirection(navigate);
    dispatch(setLoanType(""));
    // dispatch(setEmployType(""));
    sessionStorage.removeItem("employmentType");
  }, []);

  return (
    <div>
      <Helmet>
        <title>{heading.medicalEmergency.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.medicalEmergency.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.medicalEmergency.canonical} />
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
                  <h1 className="h1">Personal Loan For Medical Emergency</h1>
                  <p className="p">
                    Medical emergencies can be a source of immense anxiety,
                    particularly if you are caught off-guard.
                  </p>
                  <p>
                    {" "}
                    In such situations, CredMudra’s personal medical loan can
                    help you and your loved ones stay protected regardless of
                    your financial circumstance.
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
                    "/assets/images/medical/pl_me_top.webp"
                  }
                  alt="Get Personal Loan For Medical Emergency"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pl_fees_charge_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4 ">
              <div className="pl_fees_charge_cta">
                <h2>Personal Loan For A Medical Emergency</h2>
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/get-registered/user-number"
                >
                  Get Matched Now!
                </Link>
              </div>
            </div>
            <div className="col-md-7 offset-md-1">
              <div className="pl_fees_charge_content">
                <p>
                  A medical loan is a form of unsecured personal loan, i.e.,
                  collateral-free, that can be used for health-related
                  emergencies or any urgent medical needs or health concerns.
                  This type of credit line provides financial assistance to
                  cover expenses that may arise during various medical
                  emergencies, such as:
                </p>
                <ul>
                  <li>
                    <span>Accidents </span>
                  </li>
                  <li>
                    <span>Dental emergencies </span>{" "}
                  </li>
                  <li>
                    <span>Medical prescription bills</span>{" "}
                  </li>
                  <li>
                    <span>Cosmetic procedures </span>{" "}
                  </li>
                  <li>
                    <span>Prolonged treatments </span>{" "}
                  </li>
                  <li>
                    <span>Hospitalisation bills </span>{" "}
                  </li>
                  <li>
                    <span>Chemotherapy </span>{" "}
                  </li>
                  <li>
                    <span>Surgeries and bypass surgeries </span>{" "}
                  </li>
                  <li>
                    <span>Other similar treatments </span>{" "}
                  </li>
                </ul>
                <p>
                  {" "}
                  Furthermore, there may be medical expenses that insurance
                  policies do not cover. In such cases, a medical loan can be a
                  lifesaver, providing access to financial assistance to help
                  meet the expenses of medical emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aplir pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="left col-md-4 col-lg-4">
              <h2 style={{ marginLeft: "0" }}>
                Lenders That Offer Medical Loans
              </h2>
              <p style={{ marginLeft: "0" }}>
                Here is a table listing several prominent financial institutions
                that provide personal loans for medical emergencies:
              </p>
              <p style={{ marginLeft: "0" }}>
                It is imperative that you compare personal medical loan offers
                across various lenders before deciding on which one to finalise,
                as per your financial needs and requirements.
              </p>
              <Link
                onClick={() => scrollToTop()}
                className="theme_cta"
                to="/get-registered/user-number"
              >
                Get Matched Now!
              </Link>
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="table-of-grid">
                <table>
                  <tbody>
                    <tr>
                      <th>LENDER</th>
                      <th>INTEREST RATE (P.A.)</th>
                      <th>LOAN AMOUNT</th>
                    </tr>
                    <tr>
                      <td>State Bank of India</td>
                      <td>11% – 15%</td>
                      <td>₹1,00,000 – ₹1,00,00,000</td>
                    </tr>
                    <tr>
                      <td>ICICI Bank</td>
                      <td>10.75% Onwards</td>
                      <td>₹50,000 – ₹50,00,000</td>
                    </tr>
                    <tr>
                      <td>Tata Capital</td>
                      <td>10.5% Onwards</td>
                      <td>₹75,000 – ₹25,00,000</td>
                    </tr>
                    <tr>
                      <td>Axis Bank</td>
                      <td>10.5% Onwards</td>
                      <td>₹75,000 – ₹25,00,000</td>
                    </tr>
                    <tr>
                      <td>Axis Bank</td>
                      <td>11.25% Onwards</td>
                      <td>₹50,000 – ₹40,00,000</td>
                    </tr>
                    <tr>
                      <td>Fullerton India</td>
                      <td>10.49% Onwards</td>
                      <td>Up to ₹25,00,000</td>
                    </tr>
                    <tr>
                      <td>Kotak Mahindra Bank</td>
                      <td>11.9% Onwards</td>
                      <td>₹50,000 – ₹40,00,000</td>
                    </tr>
                    <tr>
                      <td>IDFC First Bank</td>
                      <td>10.49% Onwards</td>
                      <td>₹20,000 – ₹1,00,00,000</td>
                    </tr>
                    <tr>
                      <td>IndusInd Bank</td>
                      <td>10.49% Onwards</td>
                      <td>₹30,000 – ₹15,00,000</td>
                    </tr>
                    <tr>
                      <td>Bajaj Finserv</td>
                      <td>11% Onwards</td>
                      <td>₹30,000 – ₹15,00,000</td>
                    </tr>
                    <tr>
                      <td>Dhani Loans</td>
                      <td>11.9% Onwards</td>
                      <td>₹1,000 – ₹15,00,000</td>
                    </tr>
                    <tr>
                      <td>MoneyTap</td>
                      <td>13% – 24%</td>
                      <td>₹3,000 – ₹5,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plme_feature_benefit_wrapper">
        <div className="container">
          <div className="row">
            <h2>Features And Benefits Of A Medical Loan</h2>
            <h6>
              Mentioned below are <b>9 key features</b> and benefits of personal
              medical loans:
            </h6>
            <ul>
              <li>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_1.png"
                  }
                  alt="easy online application modes"
                />
                <p>
                  Lenders offer easy online application modes for personal
                  medical loans.
                </p>
              </li>
              <li>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_2.png"
                  }
                  alt="Instant loan approval"
                />
                <p>
                  Instant loan approval process and fast loan amount
                  disbursement process.
                </p>
              </li>
              <li>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_3.png"
                  }
                  alt="minimal documentation"
                />
                <p>
                  Straightforward and minimal documentation is needed to apply
                  for a medical loan, including proof of identity and address.
                </p>
              </li>
              <li>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_4.png"
                  }
                  alt="lowest interest rate"
                />
                <p>
                  Interest is charged only on the loan amount that you use, not
                  on the entire sum.
                </p>
              </li>
              <li>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_5.png"
                  }
                  alt="Withdrawal amounts are available"
                />
                <p>
                  Withdrawal amounts are available as per your financial needs
                  and requirements, up to the maximum approved limit.
                </p>
              </li>
              <li>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_6.png"
                  }
                  alt="No need to pledge any security or collateral."
                />
                <p>No need to pledge any security or collateral.</p>
              </li>
              <li>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_7.png"
                  }
                  alt="flexible loan repayment"
                />
                <p>
                  Lenders offer flexible loan repayment terms and EMI options.
                </p>
              </li>
              <li>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/medical/plme_f_8.png"
                  }
                  alt="funds for all kinds of unforeseen medical emergencies."
                />
                <p>
                  Being a loan for medical expenses, these funds can be used to
                  finance any and all kinds of unforeseen medical emergencies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="plme_loan_elig_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-12 col-lg-3">
              <div className="plme_loan_elig_cta">
                <h2>Medical Loan Eligibility Criteria</h2>
                <p>
                  Following are the typical eligibility criteria for a medical
                  loan:
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
            <div className="col-md-12 col-lg-9">
              <ul>
                <li>
                  <h5>Citizenship</h5>
                  <p>
                    You should not only be residing in India but also have an
                    Indian citizenship.
                  </p>
                </li>
                <li>
                  <h5>Income</h5>
                  <p>
                    You should be earning a minimum income of at least ₹20,000 –
                    ₹30,000 per month.
                  </p>
                </li>
                <li>
                  <h5>Age</h5>
                  <p>
                    Your age should range from 21 years old to 58 years old to
                    apply for a medical loan.
                  </p>
                </li>
                <li>
                  <h5>Employment Type</h5>
                  <p>
                    You must either be a full-time employee on a monthly salary
                    or a self-employed professional in a business vintage.
                  </p>
                </li>
                <li>
                  <h5>Work Experience</h5>
                  <p>
                    You must have a total work experience of 1 year or more.
                    Furthermore, you should be employed in your current firm for
                    6 months or more.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pl_fin_stable_wrapper fin_stable_white_bg plme_page">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4">
              <div className="pl_fin_stable_cta">
                <h2>Factors Affecting Personal Loan EMI</h2>
                <p>
                  Take a look at these factors that play a significant role in
                  determining your EMI amount:
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
            <div className="col-md-7 offset-md-1">
              <div className="pl_fin_stable_content">
                <ul>
                  <li>
                    <span>Repayment Tenure:</span> The loan repayment tenure you
                    choose is inversely proportional to your EMI amount. This
                    means the lower the repayment tenure, the higher the EMI
                    amount, and vice-versa. Thus, you might find that having a
                    longer loan tenure is more convenient. However, interest
                    outgo is higher for longer loan tenure.
                  </li>
                  <li>
                    <span>Principal Amount:</span> The principal amount that
                    your lender approves depends on a lot of factors, such as
                    your credit score, repayment history, your relationship with
                    the lender, etc. Also, the higher the principal amount, the
                    higher the EMI. So, make your decisions carefully and within
                    your capabilities.
                  </li>

                  <li>
                    <span>Rate of Interest:</span> The EMI is directly
                    proportional to the interest rate. Also, in the case of
                    personal loans, the rate of interest depends mostly on the
                    borrower. If your creditworthiness sounds promising to the
                    lender, they will sanction your loan at the lowest rate of
                    interest possible.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plme_docs_wrapper">
        <div className="container">
          <div className="plme_docs_head">
            <div className="row align-items-md-center">
              <div className="col-md-8 col-lg-9">
                <div className="plme_docs_head_content">
                  <h2>Documents Required For A Medical Loan</h2>
                  <p>
                    The documents required to avail of a medical personal loan
                    are provided below:
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="plme_docs_cta">
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
          <div className="plme_docs_4_col">
            <div className="row">
              <div className="col-md-3">
                <div className="plme_docs_item">
                  <img
          
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/medical/plme_d_1.png"
                    }
                    alt="Identity proof"
                  />
                  <h4> 1) Proof of Identity</h4>
                  <ul>
                    <li>Passport</li>
                    <li>Voter ID</li>
                    <li>Aadhaar Card</li>
                    <li>PAN Card</li>
                    <li>Passport-sized photograph</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plme_docs_item">
                  <img
          
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/medical/plme_d_2.png"
                    }
                    alt="Address proof"
                  />
                  <h4>2) Proof of Address</h4>
                  <ul>
                    <li>Voter ID </li>
                    <li> Driver’s licence </li>
                    <li>PAN card</li>
                    <li>Passport</li>
                    <li>Aadhaar card</li>
                    <li>Ration card</li>
                    <li>Electricity/Telephone /Utility bills</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plme_docs_item">
                  <img
          
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/medical/plme_d_3.png"
                    }
                    alt="income proof"
                  />
                  <h4>3) Proof of Income</h4>
                  <ul>
                    <li>Past 3 months’ salary slips</li>
                    <li>Income Tax Return documents</li>
                    <li>Form 16</li>
                    <li>Recent bank statements</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="plme_docs_item">
                  <img
          
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/medical/plme_d_4.png"
                    }
                    alt="employment proof"
                  />
                  <h4>4) Proof of Employment</h4>
                  <ul>
                    <li>Employer issued identity card</li>
                    <li>ppointment letter from employer</li>
                    <li>A Employment certificate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pl_5_block_wrapper">
        <div className="container">
          <h2>Steps To Apply For A Medical Loan At Credmudra</h2>
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
                Provide Mobile <br /> Number And OTP
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
                State Your Loan <br /> Requirements
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
                Declare <br /> Employment Details
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
                Enter Personal, Income, <br /> Residential And Other Details
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
                Submit Loan <br /> Request
              </h5>
              <p>
                Click the ‘Submit’ button after putting the tick mark on the
                declaration box.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="plme_sense_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="plme_sense_content">
                <h2>
                  Why Does Taking A Personal Loan For A Medical Emergency Make
                  Sense?
                </h2>
                <p>
                  1) Medical loans can be a low-cost alternative to using credit
                  cards to pay for your medical expenses.
                </p>
                <p>
                  2) A medical loan can be a life saving grace when you do not
                  have medical insurance or when your insurance policy does not
                  cover all the expenses.
                </p>
                <p>
                  {" "}
                  3) A medical personal loan can help you budget and control
                  medical costs while providing flexible monthly repayment
                  options over a loan term.
                </p>
                <p>
                  {" "}
                  4) Medical loans can be used to pay for doctor’s fees,
                  hospital stays, medical bills, and surgical procedures
                  immediately.
                </p>
                <p>
                  Given the rising costs of healthcare, not everyone can afford
                  a comprehensive health insurance plan that provides coverage
                  against all potential medical uncertainties. With CredMudra’s
                  medical loan, you can be assured of timely medical attention
                  without worrying about the ensuing financial burden.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img
      
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/medical/plme_s_img.webp"
                }
                alt="why to get a personal loan for medical emergencies"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="lp_faq_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4">
              <h3>FAQs On Personal Loan For Medical Emergencies</h3>
            </div>
            <div className="col-md-8">
              <div className="accordion accordion-flush" id="accordionFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-heading17">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse17"
                      aria-expanded="true"
                      aria-controls="flush-collapse17"
                    >
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                      Do borrowers need to pay a down payment to avail of a
                      personal medical loan?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse17"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-heading17"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      {" "}
                      No, there is no need to make any deposit or down payment
                      to obtain a personal medical loan.{" "}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-heading18">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse18"
                      aria-expanded="false"
                      aria-controls="flush-collapse18"
                    >
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>{" "}
                      </span>
                      Can I still obtain a personal medical loan with an average
                      credit score?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse18"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading18"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Obtaining a personal medical loan with an average credit
                      score will vary depending on the lender’s terms and
                      conditions. It is generally advisable to maintain a credit
                      score above 750 to obtain a reasonable interest rate.
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
                        <i className="fa fa-circle" aria-hidden="true"></i>{" "}
                      </span>
                      Does the lending institution have any say in determining
                      the type of treatment prescribed?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse19"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading19"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      No, the lending organisation has no say or role in
                      deciding what type of treatment you should be provided
                      with.{" "}
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
                        <i className="fa fa-circle" aria-hidden="true"></i>{" "}
                      </span>
                      How is the interest rate and loan repayment tenure
                      determined for a personal medical loan?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse20"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading20"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      The interest rate and loan repayment tenure are determined
                      based on the borrower’s loan requirements, eligibility
                      criteria, and the lender’s terms and conditions.
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
                        <i className="fa fa-circle" aria-hidden="true"></i>{" "}
                      </span>
                      Is there a waiting period for personal medical loans, as
                      there is with health insurance?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse21"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading21"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      No, unlike health insurance policies, there is no waiting
                      period when availing of a personal medical loan.
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
                        <i className="fa fa-circle" aria-hidden="true"></i>{" "}
                      </span>
                      Are there any restrictions on the type of treatments that
                      can be funded by medical loans?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse22"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading22"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      No, there are no restrictions on the type of treatments
                      where you can use a medical loan. Thus, medical loans can
                      be used to finance any kind of medical expense.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-bottom d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="abt-heading">
                Transform Your Financial Future: Sign Up For These And Discover
                Credmudra's Proven Strategies
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h2>Mudra Mentors+</h2>
                <p>Engage with extended community of Financial Advisors.</p>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/user-engagement.png"
                  }
                  alt="Mudra Mentors"
                  className="card-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card green">
                <h2>Resources</h2>
                <p>Know the moves that lead to Financial Freedom.</p>
                <img
        
                  src={process.env.PUBLIC_URL + "/assets/images/jigsaw.png"}
                  alt="resources"
                  className="card-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h2>Seek Solutions?</h2>
                <p>Let’s connect at Support@Credmudra.com</p>
                <img
        
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/human-resources.png"
                  }
                  className="card-img"
                  alt="Get Solution"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalLoanForMedicalEmergency;
