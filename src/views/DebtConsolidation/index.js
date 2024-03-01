import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import CommonUserNumber from "../../components/FormComponents/CommonUserNumber/CommonUserNumber";
import { setEmployType, setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";

const DebtConsolidation = () => {
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
    <>
      <Helmet>
        <title>{heading.debtConsolidation.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.debtConsolidation.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.debtConsolidation.canonical} />
      </Helmet>
      <div className="banner_wrapper-personal-blog">
        <img
          className="wave"
          src={process.env.PUBLIC_URL + "/assets/images/wave.svg"}
          alt="wave"
        />
        <div className="banner-padding">
          <div className="row align-items-md-center">
            <div className="col-md-6">
              <div className="bnr-left-col">
                <img
                  className="img-bnr-path"
                  src={process.env.PUBLIC_URL + "/assets/images/Path199.svg"}
                  alt="Credmudra"
                />
                <div className="personal-banner-content">
                  <h1 className="h1">Personal Loan For Debt Consolidation</h1>
                  <p className="p">
                    Debts can severely affect your financial strength and
                    prevent you from saving money for future goals. To bypass
                    such complications, you can consider consolidating your debt
                    using a personal loan.
                  </p>
                  <p>
                    {" "}
                    In this regard, you can consider applying for a debt
                    consolidation loan on Credmudra and reduce your financial
                    burden considerably.
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
              <div className="bnr-right-col pldc_head_img">
                <img
                  width="100%"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/debt_consolidation/pldc_top_img.webp"
                  }
                  alt="get Personal Loan For Debt Consolidation"
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
                    process.env.PUBLIC_URL +
                    "/assets/images/debt_consolidation/pldc_focus.webp"
                  }
                  alt="What is debt consolidation loan"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="pldc_overview_content">
                <h2>Debt Consolidation Loan: An Overview</h2>
                <p>
                  The method of opting for a single loan to close several
                  ongoing debts is known as debt consolidation. Consolidating
                  multiple debts will help you save considerable money that you
                  would otherwise pay in the form of interest. Moreover, opting
                  for debt consolidation will allow you to manage your finances
                  in a better way.
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
          </div>
        </div>
      </div>

      <div className="personal-loan-discover-the-power accordian_white_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="discover-the-power">
                <h2>Features and Benefits of Debt Consolidation Loan</h2>
                <p>
                  Here are the features and benefits that make debt
                  consolidation loans a viable option to manage finances:
                </p>
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
                        Seamless loan approval
                      </button>
                    </h2>
                    <div
                      id="flush-collapse8"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading8"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you apply for a personal loan to consolidate your
                        ongoing debts, chances are, the lender may process your
                        loan application in just a few hours. After you make an
                        application, the lending partner will review your
                        application, check your credit score and verify your
                        documents. You will receive the loan amount within the
                        shortest waiting time if your loan application passes
                        all the criteria set by the lender.
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
                        Collateral-free credit facility
                      </button>
                    </h2>
                    <div
                      id="flush-collapse9"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading9"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Unlike other secured credit facilities, you will not
                        have to keep your assets as collateral in order to opt
                        for a personal loan for debt consolidation purposes. You
                        will be able to get the required sum using your CIBIL
                        score.
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
                        Flexible repayment terms
                      </button>
                    </h2>
                    <div
                      id="flush-collapse10"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading10"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Choosing the repayment term is one of the biggest
                        advantages of opting for a personal loan for debt
                        consolidation. You can select loan repayment tenure
                        between 3 months to 2 years per your financial strength.
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
            <div className="col-md-6">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/debt_consolidation/pldc1_acc.webp"
                }
                alt="Benefits Of Debt Consolidation Loan"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pl_blue_bg_2_col_wrapper pl_dc_elig">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/cred_angle_full.webp"}
          alt="Credmudra logo"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="pl_blue_bg_2_col_wrapper_content">
                <h2>Eligibility Criteria For Debt Consolidation Loan</h2>
                <p>
                  Although the eligibility criteria for a debt consolidation
                  loan can vary from lender to lender, here are some basic
                  parameters that an applicant must meet to get the required
                  funds:
                </p>
                <ul>
                  <li>
                    <span>Nationality:</span> Indian
                  </li>
                  <li>
                    <span>Employment:</span> Both salaried and self-employed
                    individuals
                  </li>
                  <li>
                    <span>CIBIL Score:</span> Minimum 685
                  </li>
                  <li>
                    <span>Monthly Income:</span> More than Rs.25,000 per month
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
            <div className="col-md-4">
              <div className="pl_docs_need_cta">
                <h2>
                  Documents Required To Apply For A Debt Consolidation Loan
                </h2>
                <p>
                  Here are the documents you will need to submit during the
                  personal loan application process:
                </p>
                <Link
                  onClick={() => scrollToTop()}
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
                    <span>Identity Proof: </span> Voter ID Card, Passport,
                    Driving License, Aadhaar Card, PAN Card, etc.
                  </li>
                  <li>
                    <span>Residential Proof: </span> Voter ID Card, Utility
                    Bills (Electricity and Water Bill), etc.
                  </li>
                  <li>
                    <span>Income Proof: </span> Salary Slip (for salaried
                    individuals), Audited financial record (for self-employed
                    individuals), bank account statement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl_5_block_wrapper">
        <div className="container">
          <h2>Step-By-Step Process To Apply For Debt Consolidation Loan</h2>
          <h6>
            Here is the stepwise process you need to follow to apply for a Debt
            Consolidation loan online through Credmudra:
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
                alt="give employement detail"
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

      <div className="pldc_overview_wrapper pldc_overview_wrapper_2">
        <div className="container-fluid">
          <div className="row align-items-md-center">
            <div className="col-md-6">
              <div className="pldc_overview_content">
                <h2>
                  Will Consolidating Debts With A Personal Loan Affect Your
                  CIBIL Score?
                </h2>
                <p>
                  If you consolidate your ongoing debt into a new loan, the
                  low-interest credit can hurt your CIBIL score in the short
                  term.{" "}
                </p>
                <p>
                  Nevertheless, if you continue making regular payments toward
                  your debt consolidation loan, you can improve your CIBIL score
                  fast and build a decent score that will help you get quick
                  loan approvals in the long run. Timely EMI payments will help
                  you maintain an excellent credit history.
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
            <div className="col-md-6">
              <div className="pldc_overview_image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/pldc_good.jpg"}
                  alt="Consolidating Debts Affect Your CIBIL Score"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="personal-loan-discover-the-power accordian_white_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/debt_consolidation/pldc_2acc.webp"
                }
                alt="Things To Consider When Choosing Debt Consolidation loan"
              />
            </div>
            <div className="col-md-6">
              <div className="discover-the-power">
                <h2>
                  Top 3 Things to Consider When Choosing a Personal Loan for
                  Debt Consolidation
                </h2>
                <p>
                  Though a debt consolidation loan can help reduce your
                  financial burden, willing applicants must always be careful
                  with such financial decisions. Simple misses can negatively
                  affect your finances.
                </p>
                <p>Here are some pointers to take note of:</p>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
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
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Never opt for a loan without thorough market research
                      </button>
                    </h2>
                    <div
                      id="flush-collapse17"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading17"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        If you do not research or plan your debt consolidation
                        loan properly before applying, it can negatively affect
                        your finances. This instance can be truer if you are
                        someone who cannot manage finances properly. <br />
                        Therefore, to avoid such complications and reap the
                        maximum benefits of a debt consolidation loan, it is
                        best to make a repayment plan before applying for
                        credit.
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
                          <i className="fa-regular fa-circle-check"></i>
                        </span>
                        Always compare different credit options
                      </button>
                    </h2>
                    <div
                      id="flush-collapse18"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading18"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Most people apply for a personal loan for debt
                        consolidation to save some money that they would
                        otherwise have to spend on repaying multiple other
                        debts. However, if you do not research properly and
                        compare all the credit options, debt consolidation might
                        not serve the purpose of building your savings.
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
                        Know the prepayment charges for maximum savings
                      </button>
                    </h2>
                    <div
                      id="flush-collapse19"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading19"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        A debt consolidation loan helps you to close ongoing
                        loans. This means you may have to pay some pre-closure
                        charges to the existing lender. These fees add up the
                        total expenses. <br />
                        Hence, you must enquire with your existing lender about
                        these pre-closure charges and then apply for a new debt
                        consolidation loan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Hence, you must enquire with your existing lender about these
                pre-closure charges and then apply for a new debt consolidation
                loan.
              </p>
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

      <div className="pldc_right_way_wrapper">
        <div className="container">
          <h2>Know The Right Way To Use A Debt Consolidation</h2>
          <p>
            once you apply for a debt consolidation loan, you must ensure the
            existing debt does not come back after you have paid them off. The
            best way to avoid this circumstance is by not opting for any credit
            while you are repaying the existing debts. This is because fresh
            debts during this period will increase your financial burden, making
            it hard for you to tackle the debt load.
          </p>
          <p>
            For instance, if you have accumulated debt from your credit card, it
            is best to stop using the credit card completely. You can use a
            debit card to manage your finances. Even after repaying the existing
            debts, make it a thumb rule to only use a credit card for emergency
            situations.
          </p>
          <p>
            Further, once you have paid off all the existing debts, inculcate
            some healthy money habits that will save you from debt burden in the
            future. Budgeting is an effective way to better financial
            management. By making a proper budget, you can evaluate every
            expense and organise your payments and bills throughout the month.
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

      <div className="not-get-a-loan pldc_acc3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="get-a-load-match">
                <h2>
                  Debt Consolidation Vs. Balance Transfer - Which Is Your Safest
                  Bet?
                </h2>
                <p>
                  Although both methods are effective in debt management, you
                  must consider all the features of these credit facilities
                  before opting for one.
                </p>
                <p> Here are a few points you should take into account:</p>
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
                          <i
                            className="fa-regular fa-circle-check"
                            style={{
                              padding: "0",
                              margin: "0",
                              paddingRight: "1rem",
                            }}
                          ></i>
                        </span>
                        Evaluate the monetary benefit
                      </button>
                    </h2>
                    <div
                      id="flush-collapse12"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading12"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Whether you are opting for a balance transfer or a debt
                        consolidation, you must calculate the monetary benefits
                        that you can achieve. The best way to evaluate this is
                        by weighing the amount of money you will save by opting
                        for either of these options. Based on this calculation,
                        choose the facility that has a more saving scope.
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
                          <i
                            className="fa-regular fa-circle-check"
                            style={{
                              padding: "0",
                              margin: "0",
                              paddingRight: "1rem",
                            }}
                          ></i>
                        </span>
                        Know the costs involved
                      </button>
                    </h2>
                    <div
                      id="flush-collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading13"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Even if the interest rates are low, you must take into
                        account several additional costs, such as processing
                        charges for a balance transfer or debt consolidation
                        loan, foreclosure charges, documentation charges, etc.
                        Consider these charges as they add to the total costs
                        involved and make an informed decision accordingly.
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
                          <i
                            className="fa-regular fa-circle-check"
                            style={{
                              padding: "0",
                              margin: "0",
                              paddingRight: "1rem",
                            }}
                          ></i>
                        </span>
                        Read all terms and conditions carefully
                      </button>
                    </h2>
                    <div
                      id="flush-collapse14"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading14"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Both balance transfer credits and debt consolidation
                        loans are new loans. The terms and conditions for both
                        will be fresh yet different. You must read all the
                        points in the terms and conditions carefully to avoid
                        unnecessary hassles in the long run.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                With all this information in hand, we hope you can make an
                informed decision on whether to apply for a debt consolidation
                loan to reduce your financial burden.
              </p>
              <p>
                With Credmudra, you can get the required funds directly into
                your bank account within the shortest waiting period.
              </p>
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
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/pldc_3acc.webp"}
                alt="Debt Consolidation Vs. Balance Transfer"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="lp_faq_wrapper">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-md-4">
              <h3>FAQs About Personal Loan For Debt Consolidation</h3>
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
                      1. Is balance transfer better than debt consolidation?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse17"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-heading17"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Both of these debt management facilities have their own
                      pros and cons. You must take into account all these
                      factors while choosing the suitable option. Your primary
                      motive must be to select a facility that will reduce your
                      debt load while helping you save a considerable sum of
                      money.
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
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                      2. What should I avoid while consolidating debts?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse18"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading18"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      While consolidating your existing debts, you should try to
                      avoid the following types of credits:
                      <ul>
                        <li>Loans with a high interest rate </li>
                        <li>Loans with high additional charges </li>
                        <li>Home equity loans</li>
                        <li>401(k) loans</li>
                      </ul>
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
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                      3. Can I select tenure for repaying a personal loan for
                      debt consolidation?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse19"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading19"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes. With Credmudra, you can select your loan repayment
                      tenure, i.e., from three months to two years. The
                      flexibility of repayment is a primary reason that makes us
                      one of the best short-term loan aggregators in the market.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="snackbar"></div>
    </>
  );
};

export default DebtConsolidation;
