import "../../assets/ComponentStyling/CommonStyling/commonStyling.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CommonUserNumber from "../../components/FormComponents/CommonUserNumber/CommonUserNumber";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
const PersonalLoan = () => {
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
        <title>{heading.personalLoan.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.personalLoan.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.personalLoan.canonical} />
      </Helmet>
      <main id="primary" className="site-main">
        <section>
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
                      src={
                        process.env.PUBLIC_URL + "/assets/images/Path239.svg"
                      }
                      alt="Credmudra"
                    />

                    <div className="personal-banner-content">
                      <h1 className="h1">
                        Personal Loans - Handpicked Offers And Highest Disbursal
                        Rate
                      </h1>
                      <p className="p">
                        So why wait ? Make your move and take that first step
                        towards your aspirations.
                      </p>
                      <div
                        className="button-for-lender pb-3 pt-1"
                        style={{ display: "none" }}
                      >
                        <Link
                          onClick={() => scrollToTop()}
                          to="/get-registered/user-number"
                        >
                          <button>Get Matched Now !</button>
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
                        "/assets/images/personal-loan-banner.webp"
                      }
                      alt="get personal loan with highest disbursal rate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <section className="pl_feature_benefites">
              <div className="container-fluid">
                <div className="row align-items-md-center1">
                  <div className="col-md-6">
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
                          Repayment tenure ranges from a minimum of 3 months to
                          a maximum of 5 years, banks/NBFCs offering longer
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
                          Individuals with excellent credit profiles may qualify
                          for pre-approved or pre-qualified personal loans,
                          which come with instant disbursal.
                        </li>
                      </ul>
                      <h5>Eligibility Criteria for Personal Loans:</h5>
                      <ul className="ul_style">
                        <li>Age: 18 - 60 years</li>
                        <li>
                          Income: Minimum Rs 9,000/month for salaried applicants
                        </li>
                        <li>
                          Credit Score: Preferably 750 and above as having
                          higher credit scores increase the chances of your loan
                          approval at lower interest rates
                        </li>
                        <li>
                          Eligible only for individuals receiving their salary
                          in a bank account
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="offset-md-1 col-md-5">
                    <div className="pl_feature_benefites_one">
                      <p>
                        Credmudra isn't a lender itself but connects borrowers
                        with different lending partners. These partners offer
                        personal loans with varying APRs, typically ranging from
                        11.29% to 35%. The actual rates may depend on the
                        borrower's financial situation and loan requirements.
                      </p>
                      <p>
                        Loan terms usually range from a few weeks to a maximum
                        of 60 months (5 years), but they can vary between
                        lenders. It's important for borrowers to carefully
                        review the loan agreement provided by the lender before
                        accepting any offers. This agreement includes the final
                        APR, fees, and specific terms and conditions, ensuring
                        borrowers understand their financial obligations.
                      </p>
                      <p>
                        Assume you have availed a personal loan of ₹5,00,000
                        lakhs @ 11.50% p.a. with a repayment tenure of 5 years.
                        The processing fee charged for this loan is 1.5% of the
                        loan amount, i.e. ₹7,500. Therefore, the APR for your
                        personal loan will be 12.16%. The EMI will be ₹10,996.
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="gapls-sec">
                <div className="container">
                  <div className="row text-align-center">
                    <div className="col-md-12">
                      <h2>
                        Get A Personal Loan Starting From As Low As
                        <span style={{ color: "#fff" }}>
                          {" "}
                          Rs.1,000{" "}
                        </span>{" "}
                        <br />
                        To A Maximum Of
                        <span style={{ color: "#fff" }}>
                          {" "}
                          Rs.5 Lakh
                        </span>{" "}
                        Through Credmudra!
                      </h2>
                      <p>
                        Experience seamless borrowing with Credmudra! Instantly
                        meet your credit needs with easy online applications,
                        attractive interest rates, and minimum touchpoints. Sign
                        up, get matched with a lender, and complete quick
                        formalities for hassle-free disbursal.
                      </p>
                      <div className="button-for-lender pb-3 pt-1">
                        <Link
                          onClick={() => scrollToTop()}
                          to="/get-registered/user-number"
                        >
                          <button>Get Matched Now !</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="aplir pt-5 pb-5">
              <div className="container">
                <div className="row align-items-center">
                  <div className="left col-md-5 col-lg-6">
                    <h2>Attractive Personal Loan Interest Rates</h2>
                    <p>
                      Check out the applicable interest rate on personal loan
                      across several lenders:
                    </p>
                  </div>
                  <div className="col-md-7 col-lg-6">
                    <div className="table-of-grid">
                      <table>
                        <tbody>
                          <tr>
                            <th>LENDER</th>
                            <th>APPLICABLE INTEREST RATE</th>
                          </tr>
                          <tr>
                            <td>mPokket</td>
                            <td>0% to 48.0% per annum</td>
                          </tr>
                          <tr>
                            <td>CASHe</td>
                            <td>2.50% per month</td>
                          </tr>
                          <tr>
                            <td>MoneyTap</td>
                            <td>1.08% per month onward</td>
                          </tr>
                          <tr>
                            <td>Fibe</td>
                            <td>24.0% to 30.0% per annum</td>
                          </tr>
                          <tr>
                            <td>ICICI Bank</td>
                            <td>10.75% to 19.0% per annum</td>
                          </tr>
                          <tr>
                            <td>Bajaj Finance</td>
                            <td>11.0% to 39.0% per annum</td>
                          </tr>
                          <tr>
                            <td>HDFC Bank</td>
                            <td>10.50% to 24.0% per annum</td>
                          </tr>
                          <tr>
                            <td>Axis Bank</td>
                            <td>10.49% to 22.0% per annum</td>
                          </tr>
                          <tr>
                            <td>Kotak Mahindra Bank</td>
                            <td>10.99% per annum onward</td>
                          </tr>
                          <tr>
                            <td>IDFC FIRST Bank</td>
                            <td>10.49% to 36.0% per annum</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="not-get-a-loan">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/discover-smarter.webp"
                        }
                        alt="Why Choose Personal Loan from Credmudra"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="get-a-load-match">
                        <h2>Why Choose Personal Loan @ Credmudra?</h2>
                        <p></p>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingOne"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="true"
                                aria-controls="flush-collapseOne"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Best Loan Matchmaker:
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                As a loan matchmaker, we analyze your profile
                                and match you with the most suitable lender
                                based on their criteria. Within a few seconds we
                                show you the lender with the highest chances of
                                approving your credit request. Say goodbye to
                                lengthy processes and get your loan approval in
                                less than 3 minutes!*
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingSeven"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSeven"
                                aria-expanded="false"
                                aria-controls="flush-collapseSeven"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Quick Loan Disbursement:
                              </button>
                            </h2>
                            <div
                              id="flush-collapseSeven"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingSeven"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Experience the convenience of getting an instant
                                personal loan through our easy application
                                process. We prioritize quick verification,
                                allowing us to fulfill our promise of 'same day
                                disbursal'. With a remarkable disbursal rate of
                                98%, our lending process is designed to be
                                effortless, seamless, and customer-friendly. Say
                                goodbye to lengthy waiting periods and embrace
                                the speed and efficiency of Credmudra.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Affordable Interest Rate:
                              </button>
                            </h2>
                            <div
                              id="flush-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingTwo"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                You can get the market-best interest rate on
                                personal loans from us. The attractive interest
                                on the credit will make it much easier for you
                                to repay. It will keep the total outflowing
                                interest low and the instalment amount within
                                your budget.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Purpose-Based Loan:
                              </button>
                            </h2>
                            <div
                              id="flush-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingThree"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                For the immediate requirement of small-ticket
                                finance, you can go with short-term personal
                                loan. If you need a significant amount of money,
                                you can apply for a regular personal loan. Our
                                existing customers can also take a pre-approved
                                personal loan that comes with the facility of
                                instant approval.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingFour"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseFour"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Easy Online Application:
                              </button>
                            </h2>
                            <div
                              id="flush-collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingFour"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Visiting the offline branches of lending
                                institutions is hectic. Plus, you will have to
                                book a schedule during office hours only.
                                Eliminate all these inconveniences by applying
                                for a personal loan with us online. So, take the
                                first step and click on the “Apply Now” button.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingFive"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive"
                                aria-expanded="false"
                                aria-controls="flush-collapseFive"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Flexible Repayment Period:
                              </button>
                            </h2>
                            <div
                              id="flush-collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingFive"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Choose a period of repayment according to your
                                preference from the available range of up to 5
                                years. The extensive tenure will help you ensure
                                that the instalment amount is within your
                                repayment capacity. You can use a personal loan
                                EMI calculator to find the right tenure.
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingSix"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix"
                                aria-expanded="false"
                                aria-controls="flush-collapseSix"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Lenient Eligibility Criteria:
                              </button>
                            </h2>
                            <div
                              id="flush-collapseSix"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingSix"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                At Credmudra, we believe in making personal loan
                                eligibility hassle-free for you. Our easy
                                eligibility criteria ensure a seamless
                                qualification process. All you need to do is
                                fill up and submit our online application form.
                                We'll take care of the rest, matching you with
                                the lender that best suits your profile and
                                requirements. Say goodbye to complicated
                                eligibility processes and get closer to your
                                personal loan today.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-for-lender pb-3 pt-3">
                        <Link
                          onClick={() => scrollToTop()}
                          to="/get-registered/user-number"
                        >
                          <button>Get Matched Now !</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="personal-loan-discover-the-power accordian_white_bg">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="discover-the-power">
                        <h2>Why Is Personal Loan A Better Choice?</h2>
                        <p>
                          Why should you opt for a personal loan over other
                          credit facilities? Here are the reasons you should
                          know:
                        </p>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading8"
                            >
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
                                Restriction-Free End-Usage:
                              </button>
                            </h2>
                            <div
                              id="flush-collapse8"
                              className="accordion-collapse collapse show"
                              aria-labelledby="flush-heading8"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                The credit you get through the personal loan
                                will come with no restriction upon its usage.
                                That means you are free to spend the loan amount
                                in whichever way you prefer. Whether you use the
                                money to bear the expenses of travel, home or
                                kitchen renovation, healthcare bills, or other,
                                it depends solely on your discretion.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading9"
                            >
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
                                No Need for Collateral:
                              </button>
                            </h2>
                            <div
                              id="flush-collapse9"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading9"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Personal loan is a type of unsecured credit
                                facility. This means you do not need to keep
                                your dear properties as collateral. It is due to
                                this nature of the personal loan that you do not
                                need to put your property at risk. It also
                                minimises the time it would take to verify your
                                property-related documents, thereby expediting
                                the loan approval.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading10"
                            >
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
                                Minimal Documentation:
                              </button>
                            </h2>
                            <div
                              id="flush-collapse10"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading10"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Since no property is involved, you will not have
                                to provide documents regarding the collateral.
                                To apply for a personal loan, you will have to
                                provide only your basic documents which remain
                                easily available at your house. These include
                                only your KYC papers, identity proof and records
                                of income.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading11"
                            >
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
                                Immediate Credit Assistance:
                              </button>
                            </h2>
                            <div
                              id="flush-collapse11"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading11"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                With a personal loan, you can meet your
                                financial requirement at a much lower turnaround
                                time. Lenders approve personal loan applications
                                faster as the verification process is less
                                time-consuming. To get the loan without any
                                inconvenience, ensure that you meet the
                                eligibility criteria properly.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-for-lender pb-3 pt-3">
                        <Link
                          onClick={() => scrollToTop()}
                          to="/get-registered/user-number"
                        >
                          <button>Get Matched Now !</button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/get-a-loan.webp"
                        }
                        alt="Why Is Personal Loan A Better Choice"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pl_blue_bg_2_col_wrapper">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/cred_angle_full.webp"
                }
                alt="Credmudra logo"
              />

              <div className="container">
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div className="pl_blue_bg_2_col_wrapper_content">
                      <h2>Simple Criteria To Secure Your Personal Loan</h2>
                      <p>
                        You can get the personal loan easily by meeting the
                        simple eligibility criteria as mentioned below:
                      </p>
                      <ul>
                        <li>
                          <span>Nationality:</span> Indian
                        </li>
                        <li>
                          <span>Employment:</span> Both salaried and
                          self-employed individuals
                        </li>
                        <li>
                          <span>CIBIL Score:</span> Minimum 685
                        </li>
                        <li>
                          <span>Monthly Income:</span> More than Rs.25,000 per
                          month
                        </li>
                      </ul>
                      <span className="desc">
                        Note: These eligibility parameters are indicative and
                        subject to change
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pl_docs_need_wrapper">
              <div className="container">
                <div className="row align-items-md-center">
                  <div className="col-md-4">
                    <div className="pl_docs_need_cta">
                      <h2>Documents You Need To Prepare For Personal Loan</h2>
                      <p>
                        Here are the documents you will need to submit during
                        the personal loan application process:
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
                          <span>Residential Proof: </span> Voter ID Card,
                          Utility Bills (Electricity and Water Bill), etc.
                        </li>
                        <li>
                          <span>Income Proof: </span> Salary Slip (for salaried
                          individuals), Audited financial record (for
                          self-employed individuals), bank account statement.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pl_fees_charge_wrapper">
              <div className="container">
                <div className="row align-items-md-center">
                  <div className="col-md-8">
                    <div className="pl_fees_charge_content">
                      <p>
                        Following are the different charges applicable on a
                        personal loan:
                      </p>
                      <ul>
                        <li>Processing fee</li>
                        <li>Verification charge</li>
                        <li>Goods and Service Tax</li>
                        <li>Penal interest</li>
                        <li>Part-prepayment and foreclosure charge</li>
                        <li>Documentation charge</li>
                        <li>Stamp duty</li>
                        <li>Credit administration fee</li>
                      </ul>
                      <span className="desc">
                        Note: The charges of personal loan may vary across our
                        lenders. <br /> Before accepting the personal loan
                        offer, you should ideally carefully check these fees.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="pl_fees_charge_cta">
                      <h2>Personal Loan Fees And Charges</h2>
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
            </section>

            <section className="pl_5_block_wrapper">
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
                      You will first need to enter your mobile number and verify
                      it by providing the OTP received on it.
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
                      Mention the loan amount you will need along with a
                      convenient repayment period. Enter your PAN card and email
                      ID.
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
                      Select the type of your employment and enter other
                      relevant information regarding your profession.
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
                      Give necessary inputs like gross annual income, savings
                      account details, name, date of birth, present address,
                      etc. Disclose your present debt obligations.
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
                      Click the ‘Submit’ button after putting the tick mark on
                      the declaration box.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pl_fin_stable_wrapper">
              <div className="container">
                <div className="row align-items-md-center">
                  <div className="col-md-4">
                    <div className="pl_fin_stable_cta">
                      <h2>When Should You Avoid Taking A Personal Loan?</h2>
                      <p>
                        To safeguard your financial stability, it is advisable
                        that you avoid taking a personal loan if you are facing
                        situations as mentioned here:
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
                  <div className="col-md-8">
                    <div className="pl_fin_stable_content">
                      <ul>
                        <li>
                          <span>Unstable Job:</span> If your employment and
                          income are not stable, it is better if you stop taking
                          the personal loan. It may become challenging for you
                          to repay and get out of your debt obligations in case
                          of a sudden stop or decrease in the flow of your
                          income.
                        </li>
                        <li>
                          <span>Outstanding Debts:</span> If you are already
                          repaying your credit card bills and instalments of
                          other loans, you should avoid engaging in a new
                          financial obligation. You should keep an eye on your
                          debt-to-income ratio. An ideal debt-to-income ratio is
                          36% or below that.
                        </li>
                        <li>
                          <span>Poor Credit Score:</span> When your credit score
                          is below the minimum eligibility parameter, it is
                          better if you work on improving that before taking a
                          personal loan. If you still apply, the chances are
                          that the lender will reject your loan application,
                          leaving a negative impact on your credit report.
                        </li>
                        <li>
                          <span>Risky Investments:</span> The purpose of taking
                          a personal loan should never be to make an investment
                          in the stock market, other risky instruments or
                          gambling. This is so because you can book loss instead
                          of gaining profit. Under such a circumstance, it will
                          become difficult for you to repay.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pl_fin_stable_wrapper fin_stable_white_bg">
              <div className="container">
                <div className="row align-items-md-center">
                  <div className="col-md-8">
                    <div className="pl_fin_stable_content">
                      <ul>
                        <li>
                          <span>Medical Emergency:</span> Medical emergency is
                          uncertain in nature and you may require a small to
                          large credit within a short span. Taking a personal
                          loan from Credmudra will help you face the challenge
                          boldly. With us, you can get a loan credited to your
                          account quickly. It can even be on the same day.
                        </li>
                        <li>
                          <span>Debt Consolidations:</span> If you have multiple
                          loans, you need to remember the scheduled date of all
                          your loan instalments and pay them separately. Now, if
                          you go for debt consolidation, all your existing
                          obligations will be merged into one. So, you can repay
                          your outstanding debts by paying one instalment.
                        </li>
                        <li>
                          <span>Educational Expenses:</span> You can take a
                          personal loan to get immediate credit and pay for the
                          tuition fees of your child. This way, you will not
                          have to wait longer to arrange the necessary fund. You
                          can easily repay the credit with small instalments
                          starting from the next month.
                        </li>
                        <li>
                          <span>Family Festivals:</span> To plan family
                          occasions or events like weddings, you may need to
                          have a lump sum credit at your disposal. You can take
                          a personal loan if you do not have the required amount
                          during such events. As a result, you will not have to
                          compromise with your budget.
                        </li>
                        <li>
                          <span>Big Purchases:</span> There are some big and
                          luxurious expenses, like the purchase of a cosy flat
                          or vehicle, which you have wanted to realise for so
                          long. You can take a personal loan to meet those life
                          goals easily. You will get a lump sum end-usage-free
                          credit to bear any expenses you want.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="pl_fin_stable_cta">
                      <h2>When Should You Take A Personal Loan?</h2>
                      <p>
                        Here are some circumstances under which you can consider
                        taking a personal loan:
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
            </section>

            <section className="">
              <div className="not-get-a-loan">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/avoid_loan.webp"
                        }
                        alt="Avoid Personal Loan Request Rejection"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="get-a-load-match">
                        <h2>Tips to Avoid Personal Loan Request Rejection</h2>
                        <p>
                          There are a few aspects you need to stay mindful of to
                          ensure that the lender does not reject your request
                          for credit:
                        </p>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading12"
                            >
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
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Submit All the Required Documents
                              </button>
                            </h2>
                            <div
                              id="flush-collapse12"
                              className="accordion-collapse collapse show"
                              aria-labelledby="flush-heading12"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Ensure that you provide all the necessary
                                documents carefully. If any paper goes missing,
                                it can lead to the rejection of your loan
                                request. In such a scenario, you can convey the
                                same to your lender. They may ask you to submit
                                an alternative document.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading13"
                            >
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
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Meet the Eligibility Criteria
                              </button>
                            </h2>
                            <div
                              id="flush-collapse13"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading13"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Lenders ensure that you meet all parameters of
                                the eligibility criteria before approving the
                                personal loan. These parameters include the
                                minimum income, age limit, credit score,
                                citizenship, etc. When you meet these standards,
                                lenders get assurance that you can repay
                                positively.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading14"
                            >
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
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Correctly Fill in the Form
                              </button>
                            </h2>
                            <div
                              id="flush-collapse14"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading14"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                You should not make any incorrect entries on
                                your loan application form. The information
                                mentioned in the form and the information stated
                                in your documents must match. In case they do
                                not, the lender may ask you to repeat the loan
                                application process.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading15"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse15"
                                aria-expanded="false"
                                aria-controls="flush-collapse15"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Keep a Low Debt-to-Income Ratio
                              </button>
                            </h2>
                            <div
                              id="flush-collapse15"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading15"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                A high debt-to-income ratio can lead to the
                                rejection of your credit request as it suggests
                                that most of your income goes to paying EMIs and
                                it will be difficult for you to repay a new
                                loan. So, you need to repay your existing loans
                                first to earn the confidence of your lender
                                about your repayment potential.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading16"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse16"
                                aria-expanded="false"
                                aria-controls="flush-collapse16"
                              >
                                <span>
                                  <i
                                    className="fa-regular fa-circle-check"
                                    style={{
                                      color: "#fff",
                                      padding: "0",
                                      margin: "0",
                                      paddingRight: "1rem",
                                    }}
                                  ></i>
                                </span>
                                Get a Co-Borrower
                              </button>
                            </h2>
                            <div
                              id="flush-collapse16"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading16"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                In case you do not meet one or more of the
                                eligibility parameters, what you can do to avoid
                                rejection on your personal loan application is
                                apply with a co-borrower. However, you need to
                                ensure that the co-borrower meets the
                                eligibility standards.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-for-lender pb-3 pt-3">
                        <Link
                          onClick={() => scrollToTop()}
                          to="/get-registered/user-number"
                        >
                          <button>Get Matched Now !</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="lp_lender_disburse">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <h2>How Will Lenders Disburse The Personal Loan Amount?</h2>
                  </div>
                  <div className="col-md-7">
                    <p>
                      Lenders send the personal loan amount directly to the
                      account of their borrowers who can use the amount as they
                      wish. The turn-around time for the disbursal is
                      significantly less. You can get the amount in your account
                      within a few seconds or minutes of the document
                      verification and approval of your loan application.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/cred_angle_full.webp"
                }
                alt="Credmudra logo"
              />
            </section>

            <section>
              <div className="personal-loan-discover-the-power accordian_white_bg">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="discover-the-power">
                        <h2>Tips To Grab The Best Deal On Personal Loan</h2>
                        <p>
                          You can follow the tips mentioned below to grab the
                          best deal on personal loan and make repayment less
                          troublesome:
                        </p>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading17"
                            >
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
                                Determine the Required Credit:
                              </button>
                            </h2>
                            <div
                              id="flush-collapse17"
                              className="accordion-collapse collapse show"
                              aria-labelledby="flush-heading17"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Taking a credit more than your requirement will
                                lead you to pay more interest. As it will
                                increase the instalment amount, you may face
                                difficulties in repayment. This is why, before
                                applying to get an instant personal loan,
                                estimate the amount you will need to meet your
                                credit shortage. After this, you will not
                                mistakenly borrow less or more than required.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading18"
                            >
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
                                Check Your Credit Report:
                              </button>
                            </h2>
                            <div
                              id="flush-collapse18"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading18"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Since a personal loan is an unsecured credit
                                facility, lenders put more focus on the
                                creditworthiness of their borrowers. Credit
                                scores and reports contain all the necessary
                                information regarding your credibility as a
                                borrower. By checking the credit score and
                                report, you can ensure that all the information
                                mentioned there is correct. In case it is not,
                                you can raise a complaint.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading19"
                            >
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
                                Compare Loan Offers:
                              </button>
                            </h2>
                            <div
                              id="flush-collapse19"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading19"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                At Credmudra, there are more than 30 lenders
                                from which you can borrow. You can see that
                                their loan offers are not the same. The
                                interest, charges and other terms can vary. This
                                is why, you should ideally check all the
                                personal loan details properly and choose one
                                that charges comparatively lower. This will help
                                you keep your cost of borrowing as low as
                                possible.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-heading20"
                            >
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
                                Choose a Suitable Tenure:
                              </button>
                            </h2>
                            <div
                              id="flush-collapse20"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading20"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Choosing a suitable tenure is essential for
                                smooth repayment. When the tenure is longer, you
                                will have to be ready to pay more interest on
                                your loan. When you go with a shorter tenure,
                                your interest outgo stays low but the instalment
                                becomes high. Therefore, the tenure should be
                                optimum so that the instalment amount stays
                                within your capacity.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-for-lender pb-3 pt-3">
                        <Link
                          onClick={() => scrollToTop()}
                          to="/get-registered/user-number"
                        >
                          <button>Get Matched Now !</button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/best_deal.webp"
                        }
                        alt="Grab The Best Deal On Personal Loan"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="lp_faq_wrapper">
              <div className="container">
                <div className="row align-items-md-center">
                  <div className="col-md-4">
                    <h3>FAQs On Personal Loan</h3>
                  </div>
                  <div className="col-md-8">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFAQ"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-heading21">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse21"
                            aria-expanded="true"
                            aria-controls="flush-collapse21"
                          >
                            <span>
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            How can I calculate the instalment amount of my
                            personal loan?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse21"
                          className="accordion-collapse collapse show"
                          aria-labelledby="flush-heading21"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            You can calculate the instalment amount of your
                            personal loan by using an online personal loan
                            calculator. In this tool, you will simply have to
                            put in your loan amount, tenure, and the applicable
                            interest rate.
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
                            aria-expanded="true"
                            aria-controls="flush-collapse22"
                          >
                            <span>
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            What should I do if some lender rejects my request
                            for a personal loan?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse22"
                          className="accordion-collapse collapse show"
                          aria-labelledby="flush-heading22"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            If any lending institution rejects your loan
                            application, you need to first make a query about
                            the reason. Sometimes, they can reject the request
                            for credit due to missing certain documents or
                            filling in the application form incorrectly. In such
                            a scenario, you can reapply. However, if a poor
                            credit score is a reason for rejection, you should
                            consider taking measures to improve this score.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-heading23">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse23"
                            aria-expanded="false"
                            aria-controls="flush-collapse23"
                          >
                            <span>
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            Can I get tax benefits on a personal loan?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse23"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-heading23"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            No, a personal loan does not come with the benefit
                            of a tax deduction.
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
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            Do we have the option to foreclose my personal loan
                            after 2-3 months of repayment?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse24"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-heading24"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Provisions for foreclosing a loan are different
                            across lenders. Generally, lenders let you foreclose
                            a personal loan after 6-12 months. Go through the
                            terms and conditions of your chosen lender to know
                            about this provision.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="table-of-pb" style={{ display: "none" }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      "Personal Loan, Short Term Loan or Pre-Approved Loan:
                      Which One to Choose?"
                    </p>
                  </div>
                </div>
                <div className="table-of-grid">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="top-head">
                        <h2>CATEGORY</h2>
                      </div>
                      <div className="even-cell">
                        <p>
                          <strong>Purpose of Loan</strong>
                        </p>
                      </div>
                      <div className="odd-cell">
                        <p>
                          <strong>Loan Amount</strong>
                        </p>
                      </div>
                      <div className="even-cell">
                        <p>
                          <strong>Interest Rates</strong>
                        </p>
                      </div>
                      <div className="odd-cell">
                        <p>
                          <strong>Repayment Term</strong>
                        </p>
                      </div>
                      <div className="even-cell">
                        <p>
                          <strong>Approval Time</strong>
                        </p>
                      </div>
                      <div className="odd-cell">
                        <p>
                          <strong>Eligibility Criteria</strong>
                        </p>
                      </div>
                      <div className="even-cell">
                        <p>
                          <strong>Collateral Requirement</strong>
                        </p>
                      </div>
                      <div className="odd-cell">
                        <p>
                          <strong>Disbursement Time</strong>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="top-head">
                        <h2>SHORT TERM LOAN</h2>
                      </div>
                      <div className="even-cell">
                        <p>Immediate financial needs</p>
                      </div>
                      <div className="odd-cell">
                        <p>Usually up to Rs.50,000</p>
                      </div>
                      <div className="even-cell">
                        <p>Usually up to Rs.50,000s</p>
                      </div>
                      <div className="odd-cell">
                        <p>Usually up to 12 months</p>
                      </div>
                      <div className="even-cell">
                        <p>Within a few minutes to a few hours</p>
                      </div>
                      <div className="odd-cell">
                        <p>Minimum salary, employment tenure, credit score</p>
                      </div>
                      <div className="even-cell">
                        <p>Some lenders may require collateral</p>
                      </div>
                      <div className="odd-cell">
                        <p>Within a few minutes to a few hours</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="top-head">
                        <h2>PERSONAL LOAN</h2>
                      </div>
                      <div className="even-cell">
                        <p>Various personal expenses</p>
                      </div>
                      <div className="odd-cell">
                        <p>Rs.1,000 to Rs.20 lakhs</p>
                      </div>
                      <div className="even-cell">
                        <p>Lower interest rates</p>
                      </div>
                      <div className="odd-cell">
                        <p>Up to 5 years or more</p>
                      </div>
                      <div className="even-cell">
                        <p>Within a few hours to days</p>
                      </div>
                      <div className="odd-cell">
                        <p>Minimum salary, employment tenure, credit score</p>
                      </div>
                      <div className="even-cell">
                        <p>Unsecured loan</p>
                      </div>
                      <div className="odd-cell">
                        <p>Within a few hours to days</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="top-head">
                        <h2>PRE- APPROVED PERSONAL LOAN</h2>
                      </div>
                      <div className="even-cell">
                        <p>Various personal expenses</p>
                      </div>
                      <div className="odd-cell">
                        <p>Predetermined amount</p>
                      </div>
                      <div className="even-cell">
                        <p>Lower interest rate</p>
                      </div>
                      <div className="odd-cell">
                        <p>Predetermined tenure</p>
                      </div>
                      <div className="even-cell">
                        <p>Instant approval</p>
                      </div>
                      <div className="odd-cell">
                        <p>Pre-approval based on credit score</p>
                      </div>
                      <div className="even-cell">
                        <p>Unsecured loan</p>
                      </div>
                      <div className="odd-cell">
                        <p>Instant approval</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <p>
                      Note: The above table is for general reference purposes
                      only, and the features may vary based on the lender and
                      the type of loan offered. It is always recommended to read
                      the terms and conditions of the loan before applying.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="about-bottom d-flex justify-content-center align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="abt-heading">
                      Transform Your Financial Future: Sign Up For These And
                      Discover Credmudra's Proven Strategies
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <h2>Mudra Mentors+</h2>
                      <p>
                        Engage with extended community of Financial Advisors.
                      </p>
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
                    <div className="card ">
                      <h2>Resources</h2>
                      <p>Know the moves that lead to Financial Freedom.</p>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/user-engagementa.png"
                        }
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
                          "/assets/images/user-engagements.png"
                        }
                        alt="Get Solution"
                        className="card-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div id="snackbar"></div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default PersonalLoan;
