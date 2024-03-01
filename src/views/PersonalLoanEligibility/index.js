import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/commonFunctions";

import { routeRedirection } from "../../utils/commonFunctions";

const PersonalLoanEligibility = () => {
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
        <title>{heading.Eligibility.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.Eligibility.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.Eligibility.canonical} />
      </Helmet>
      <div className="ple_banner_wrapper">
        <div className="container">
          <div className="ple_banner_container">
            <div className="row align-items-md-center">
              <div className="col-md-7">
                <h4>
                  Apply For A Personal Loan Online With{" "}
                  <span> Minimum Documentation</span>
                </h4>
              </div>
              <div className="col-md-5">
                <Link
                  onClick={() => scrollToTop()}
                  className="theme_cta"
                  to="/get-registered/user-number"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/ple_banner_img.webp"
              }
              alt="Personal Loan Online eligiblity"
            />
          </div>
        </div>
      </div>

      <div className="ple_page_wrapper">
        <div className="container">
          <div className="ple_page_container">
            <div className="row">
              <div className="col-md-9">
                <div className="ple_page_content">
                  <h1>
                    Check Your Personal Loan Eligibility To Get A Credit Of Up
                    To Rs.20 Lakh From Credmudra!
                  </h1>
                  <p>
                    A personal loan is one of the choicest go-to options for
                    individuals with immediate requirement of funds. The main
                    reason behind its popularity is the flexibility of loan
                    customisation, easy application process, and instant fund
                    disbursement. In addition, the personal loan eligibility
                    criteria are quite lenient which ensures you can get assured
                    and instant credit approval on applying correctly.{" "}
                  </p>
                  <p>
                    Before proceeding with the credit application process you
                    should note that the eligibility requirements for salaried
                    and self-employed people are somewhat different. Let’s dive
                    deep to get an explicit idea regarding each.
                  </p>
                  <h2>Eligibility Criteria For Salaried Persons</h2>
                  <p>
                    If you are a salaried individual, you will need to fulfil
                    some simple eligibility criteria to get an instant approval
                    for your credit application. These are as follows:
                  </p>
                  <ul>
                    <li>
                      <span>Nationality:</span> Indian
                    </li>
                    <li>
                      <span>Age range:</span> Between 21 years and 80 years
                    </li>
                    <li>
                      <span>CIBIL score :</span> Above 685
                    </li>
                    <li>
                      <span>Employment status :</span> Must be an employee of an
                      MNC, private or a public limited company.
                    </li>
                  </ul>
                  <p>
                    Disclaimer: The eligibility criteria of salaried individuals
                    can vary with the lender that you select for availing a
                    personal loan.
                  </p>
                  <h2>Eligibility Criteria For Self-Employed Persons</h2>
                  <p>
                    Are you a self-employed individual? If yes, check the{" "}
                    <b> personal loan eligibility criteria </b> to ensure that
                    that you can get instant approval for your credit:
                  </p>
                  <ul>
                    <li>
                      <span>Nationality:</span> Indian
                    </li>
                    <li>
                      <span>Age range:</span> Between 24 years and 70 years
                    </li>
                    <li>
                      <span>CIBIL score :</span> 685 or Above
                    </li>
                    <li>
                      <span>Business vintage:</span> A minimum of 3 years
                    </li>
                  </ul>
                  <p>
                    Disclaimer: The eligibility criteria of Self-Employed
                    individuals can vary with the lender that you are selecting
                    for availing a personal loan.
                  </p>
                  <h2>Eligibility Of Top Banks And Private Lenders</h2>
                  <p>
                    The minimum income and age range to stand eligible for
                    personal credit vary considerably with lenders. Here are
                    some personal loan eligibility check boxes that are
                    imperative to tick for getting credit approval from some of
                    the top banks and private lenders:
                  </p>

                  <div className="table-of-grid">
                    <table>
                      <tbody>
                        <tr>
                          <th>LENDER</th>
                          <th>MINIMUM INCOME</th>
                          <th>AGE RANGE</th>
                        </tr>
                        <tr>
                          <td>CASHe</td>
                          <td>Rs.15,000 per month</td>
                          <td>23 years to 58 years</td>
                        </tr>
                        <tr>
                          <td>MoneyTap</td>
                          <td>Rs.20,000 per month</td>
                          <td>23 years to 55 years</td>
                        </tr>
                        <tr>
                          <td>Fibe</td>
                          <td>Rs.15,000 per month</td>
                          <td>21 years to 55 years</td>
                        </tr>
                        <tr>
                          <td>Bajaj Finance</td>
                          <td>Rs.25,000 per month</td>
                          <td>21 years to 67 years</td>
                        </tr>
                        <tr>
                          <td>Axis Bank</td>
                          <td>Rs.15,000 per month</td>
                          <td>21 years to 60 years</td>
                        </tr>
                        <tr>
                          <td>ICICI Bank</td>
                          <td>Rs.17,500 per month</td>
                          <td>23 years to 58 years</td>
                        </tr>
                        <tr>
                          <td>HDFC Bank</td>
                          <td>Rs.25,000 per month</td>
                          <td>21 years to 60 years</td>
                        </tr>
                        <tr>
                          <td>IndusInd Bank</td>
                          <td>Rs.25,000 per month</td>
                          <td>21 years to 60 years</td>
                        </tr>
                        <tr>
                          <td>Punjab National Bank</td>
                          <td>Rs.15,000 per month</td>
                          <td>Above 18 years</td>
                        </tr>
                        <tr>
                          <td>State Bank of India</td>
                          <td>Rs.15,000 per month</td>
                          <td>Above 18 years</td>
                        </tr>
                        <tr>
                          <td>Standard Chartered Bank</td>
                          <td>Above Rs.22,000 per month</td>
                          <td>22 years to 58 years</td>
                        </tr>
                        <tr>
                          <td>IDFC First Bank</td>
                          <td>Rs.20,000 per month</td>
                          <td>23 years to 65 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <b> Disclaimer:</b> You must keep in mind that these figures
                    are just an average. The rate of interest that the lender
                    charges can change based on your application.
                  </p>

                  <div className="ple_banner_content_banner">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/cred_angle_full.webp"
                      }
                      alt="Credmudra logo"
                    />
                    <div className="row align-items-md-center">
                      <div className="col-md-8">
                        <h4>
                          Apply For A Personal Loan Online With
                          <span> Minimal Documentation</span>
                        </h4>
                      </div>
                      <div className="col-md-4">
                        <div className="ple_banner_div">
                          <Link
                            onClick={() => scrollToTop()}
                            className="theme_cta"
                            to="/get-registered/user-number"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2>Factors Influencing Personal Loan Eligibility</h2>
                  <p>
                    Wondering which factors can have a prominent effect on the
                    personal loan eligibility criteria? Here are some of the
                    primary ones that have a notable effect on your personal
                    credit eligibility:
                  </p>
                  <ul>
                    <li>
                      <span>Credit Score:</span> Personal loan, being an
                      unsecured credit type demands a higher CIBIL score. This
                      assures creditors that you are a trustworthy borrower and
                      they can expect you to pay your monthly instalments on
                      time. Since no collateral is involved, it is vital to
                      maintain a score of 700 and above.
                    </li>
                    <li>
                      <span>Age bar:</span> As you have already seen that most
                      of the lenders have set the minimum age bar to 21 years,
                      it becomes mandatory to have reached it to get approval.
                      Also, you must ensure that your maximum age at the time
                      you complete loan repayment should be 58 or as the lender
                      specifies.
                    </li>
                    <li>
                      <span>Minimum income:</span> If a borrower has a high
                      income, lenders are sure that you will have sufficient
                      cash to pay an increased monthly instalment. So, you can
                      easily go for a sumptuous credit amount. On the contrary,
                      if your monthly salary is less or below the minimum income
                      bar, there are chances of rejection of credit application.
                    </li>
                    <li>
                      <span>Repayment capacity:</span> While reviewing your
                      personal loan application, lenders check the liabilities
                      that you already have. If you have multiple credits to
                      repay at the time of loan application, lenders realise
                      that it can pose a financial burden to repay another
                      credit. So, they might reject your application or lower
                      the allowed credit amount.
                    </li>
                    <li>
                      <span>Business or working experience:</span> Several
                      financial institutions have set a minimum work experience
                      of two years or more as an eligibility criterion for
                      salaried individuals. Also, some lenders demand a business
                      vintage of 3 years, which self-employed individuals need
                      to fulfil to stand eligible for credit approval.
                    </li>
                  </ul>

                  <h2>How Can You Boost Your Personal Loan Eligibility?</h2>
                  <p>
                    Worried about getting low personal loan approval due to the
                    impact of the above factors? Here are some of the sure-shot
                    steps that you can take for improving your{" "}
                    <b> personal loan eligibility:</b>
                  </p>

                  <ul>
                    <li>
                      <span>Nationality:</span> Go for a co-applicant or
                      guarantor: In case you have a low CIBIL score and want a
                      personal loan urgently, you can request your friends or
                      family members with a good CIBIL score to be your
                      co-applicant or even a guarantor. This can lead to a
                      prompt improvement in your personal loan eligibility and
                      approval of credit application.
                    </li>
                    <li>
                      <span>Refrain from frequent job switches:</span> Wondering
                      why frequent job switches hamper your loan eligibility? If
                      you keep changing your job again and again, lenders are
                      not able to estimate your monthly income and view you as a
                      high-risk borrower. Hence, it would be prudent to avoid
                      changing your job randomly.
                    </li>
                    <li>
                      <span>Maintain a credit score above 750:</span> A credit
                      score above 750 makes lenders believe that you are an
                      ardent financial planner having good experience in
                      repaying your credits. However, if you have a lower score,
                      try to take some effective steps to improve it immediately
                      and fulfil the loan eligibility criteria.
                    </li>
                    <li>
                      <span>Do not for multiple loan applications:</span> If you
                      already have more than one credit to repay, it can pose a
                      financial burden to pay EMIs for all. Also, at times it
                      can make you miss out on the monthly instalment date,
                      leading to lowering of your CIBIL score. Thus, it would be
                      prudent to apply for credit only when needed.
                    </li>
                    <li>
                      <span>Create sources of additional income:</span> Creating
                      additional sources of income allows you to earn extra
                      every month. This eases the payment of monthly instalments
                      on time. In view of this, creditors will see you as a more
                      eligible candidate and approve your loan immediately after
                      application.
                    </li>
                  </ul>
                </div>

                <section className="lp_faq_wrapper ple_faq">
                  <div className="container">
                    <h3>FAQs On Personal Loan</h3>
                    <div
                      className="accordion accordion-flush"
                      id="accordionFAQ"
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
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            How do we select the best lender for you?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse17"
                          className="accordion-collapse collapse show"
                          aria-labelledby="flush-heading17"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            To find a fitting lender all you have to do is fill
                            up the personal loan application form on our website
                            stating your requirements. Accordingly, we match you
                            with lenders whose offerings are congruent with your
                            needs. Once done, you will have to simply fill up
                            some last-minute information and get instant
                            disbursal of the loan amount.{" "}
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
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>{" "}
                            </span>
                            Can you get a personal loan without income proof?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse18"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-heading18"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Yes, there are several lenders that approve your
                            personal loan application even if you do not have
                            income proof. For this, you can highlight additional
                            income sources, maintain a high CIBIL score and even
                            request someone to be a co-applicant or guarantor.
                            Additionally, you should also maintain a good
                            relationship with the lender to increase credit
                            approval chances.
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
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>{" "}
                            </span>
                            How can you use personal loan money?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse19"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-heading19"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            There is no end-use restriction on the money that
                            you receive from a personal loan. You can use these
                            funds to plan your wedding, pay for expensive
                            treatment and costly medicines, go for a foreign
                            vacation with your family, pay the education fees
                            for your kids, and so on. So, are you ready to apply
                            for a personal loan?{" "}
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
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>{" "}
                            </span>
                            How can I check my eligibility for a personal loan?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse20"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-heading20"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            You can simply use a personal loan eligibility
                            calculator to determine the credit amount that you
                            are eligible for. To use this calculator, you can
                            simply navigate to this calculator and input the
                            necessary details. Once done, you can instantly view
                            the loan amount that you can apply for. These
                            calculators are easy to use and provide instant and
                            accurate results.{" "}
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
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>{" "}
                            </span>
                            What are the essential documents required for a
                            personal loan?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse21"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-heading21"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Some of the important documents that you will need
                            while applying for a personal loan if you are a
                            salaried individual are KYC documents, an employee
                            ID card, the last three months’ bank account
                            statement and the last three months’ salary slips.
                            In case you are a self-employed individual, you will
                            have to submit proof of business in addition to
                            other documents.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-3">
                <div className="ple_page_sidebar">
                  <div className="ple_sidebar_links">
                    <h4> Personal Loan Pages </h4>
                    <ul>
                      <li>
                        <Link
                          onClick={() => scrollToTop()}
                          to="/personal-loan-interest-rate"
                        >
                          Personal Loan Interest Rate
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          onClick={() => scrollToTop()}
                          to="/personal-loan-eligibility"
                        >
                          Personal Loan Eligibility
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          onClick={() => scrollToTop()}
                          to="/personal-loan-emi-calculator"
                        >
                          Personal Loan EMI Calculator
                        </Link>
                      </li>
                    </ul>
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

export default PersonalLoanEligibility;
