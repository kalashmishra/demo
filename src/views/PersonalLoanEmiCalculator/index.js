import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import * as echarts from "echarts";
import "../../assets/ComponentStyling/CalcStyling/calcStyling.scss";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { scrollToTop, routeRedirection } from "../../utils/commonFunctions";

const PersonalLoanEmiCalculator = () => {
  const options = { maximumFractionDigits: 2 };

  const [pValue, setPValue] = useState(5000000);

  const [yearVAlue, setYearVAlue] = useState(16);

  const [interestValue, setInterestValue] = useState(8);

  const pMAX = 10000000;
  const principalFormatted = Intl.NumberFormat("en-US", options).format(pValue);
  const yMax = 30;
  const iMAx = 15;

  const duration = yearVAlue * 12;
  const intr = interestValue / 1200;

  const emi = duration
    ? (pValue * intr) / (1 - Math.pow(1 / (1 + intr), duration))
    : 0;
  const emiFormatted = Intl.NumberFormat("en-US", options).format(emi);

  const totalAmt = duration * emi;
  const totalFormatted = Intl.NumberFormat("en-US", options).format(totalAmt);

  var totalAmountOfCredit = (emi / intr) * (1 - Math.pow(1 + intr, -duration));

  const totalAmountOfInterest = totalAmt - totalAmountOfCredit;
  const interestFormatted = Intl.NumberFormat("en-US", options).format(
    totalAmountOfInterest
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("loanType");
    routeRedirection(navigate);
    dispatch(setLoanType(""));

    sessionStorage.removeItem("employmentType");
  }, []);
  useEffect(() => {
    var chartDom = document.getElementById("pie-chart");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "EMI Calculator",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
            textStyle: {
              color: "red",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: pValue,
              name: "Principal",
              itemStyle: { color: "#2b364a" },
            },
            {
              value: totalAmountOfInterest,
              name: "Interest",
              itemStyle: { color: "#5ab56b" },
              label: { textStyle: { color: "#ffff" } },
            },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  }, [pValue, interestValue, yearVAlue]);

  return (
    <div>
      <Helmet>
        <title>{heading.EMIcalculate.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.EMIcalculate.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.EMIcalculate.canonical} />
      </Helmet>
      <div className="ple_page_wrapper plec_top_wrapper">
        <div className="container">
          <div className="ple_page_container">
            <div className="row">
              <div className="col-md-9">
                <div className="ple_page_content">
                  <h1>Personal Loan EMI Calculator</h1>
                  <p>
                    A personal loan is one of the most sought-after credit
                    facilities available. This hike in popularity is due to the
                    ease of its application process and higher approval rates.
                    In the time of emergencies, the availability of funds
                    matters the most to you than anything else.
                  </p>
                  <p>
                    The repayment process can be a hassle-free affair if you
                    plan it properly. This is why you should use a personal loan
                    EMI calculator before you apply for the credit. Using this
                    tool is extremely easy. You can figure out how much credit
                    you should apply for so that you can comfortably pay it off.
                  </p>
                  <p>
                    Personal loan interest rates are usually higher than the
                    other types of credit facilities. This is due to the fact
                    that it falls under the “unsecured loan” header. Higher
                    interest means higher EMI outflow. Missing out on one EMI
                    can lead to a hefty penalty payment. This will further
                    enhance your loan's burden.
                  </p>
                  <p>
                    You can avoid these mishaps with the{" "}
                    <b> personal loan EMI calculator </b>online at the right
                    time.
                  </p>
                  <p>
                    Learn the particulars of a personal loan EMI calculator and
                    more in this blog by <b> Credmudra. </b>
                  </p>
                  <h2>
                    How Does Online Personal Loan EMI Calculator Calculate Loan
                    EMI?
                  </h2>
                  <p>A personal loan EMI has two components:</p>
                  <ul>
                    <li>
                      <span>Principal amount component</span>{" "}
                    </li>
                    <li>
                      <span>Interest amount component</span>{" "}
                    </li>
                  </ul>
                  <p>
                    The repayment procedure is not linear. Hence, calculating
                    the EMI amount manually is not simple. However, there is a
                    mathematical expression that you can use to figure it out.
                    Take a look at the formula below:
                  </p>

                  <p>The formula –</p>

                  <p className="pl_formula">
                    <b> EMI = [P x R x (1+R)^N]/[(1+R)^N-1]</b>
                  </p>

                  <p>Here</p>
                  <div className="credmdra_table">
                    <table>
                      <tbody>
                        <tr>
                          <td>EMI</td>
                          <td>Equated Monthly Payment</td>
                        </tr>
                        <tr>
                          <td>P</td>
                          <td>Principal amount</td>
                        </tr>
                        <tr>
                          <td>R</td>
                          <td>Rate of interest</td>
                        </tr>
                        <tr>
                          <td>N</td>
                          <td>Number of months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    Suppose, you have taken a{" "}
                    <b> personal loan (P) of Rs.50,000.</b> The lender has
                    levied interest at a rate of <b> 11% per month (R).</b> The
                    repayment tenure is <b> 2 years or 24 months (N). </b>
                  </p>
                  <p>Now, putting these values in the formula, we get –</p>
                  <p>
                    <b> EMI = [50,000 x 11 x (1+11)^24]/[(1+11)^24-1]</b>
                  </p>
                  <p>
                    Hence, you have to pay a monthly{" "}
                    <b> EMI of Rs.2330 per month for the next 24 months.</b>
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ple_page_sidebar">
                  <div className="ple_sidebar_links">
                    <h4> Personal Loan Pages </h4>
                    <ul>
                      <li>
                        <Link
                          onClick={() => scrollToTop()}
                          to="./../personal-loan-interest-rate"
                        >
                          Personal Loan Interest Rate
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          onClick={() => scrollToTop()}
                          to="./../personal-loan-eligibility"
                        >
                          Personal Loan Eligibility
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          onClick={() => scrollToTop()}
                          to="./../personal-loan-emi-calculator"
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

      <div className="ple_calc_wrapper">
        <div className="container">
          <div className="ple_calc_head">
            <h2>The Process Is Pretty Time-Consuming, Isn't It?</h2>
            <h6>
              Choose the faster, more accurate, and easier option – the personal
              loan EMI calculator online.
            </h6>
          </div>
          <div className="sub-container">
            <div className="row align-items-lg-center">
              <div className="col-md-12 col-lg-6">
                <div className="ple_calc_div">
                  <div className="detail_wrapper">
                    <div className="detail">
                      <p>Amount</p>
                      <p id="loan-amt-text">
                        {principalFormatted}
                        <span className="calc_rupee">₹</span>
                      </p>
                    </div>
                    <input
                      type="range"
                      className="form-control-range"
                      id="loan-amount"
                      min="0"
                      defaultValue={pValue}
                      max={pMAX}
                      value={pValue}
                      onChange={(e) => {
                        setPValue(e.target.value);
                      }}
                    />
                  </div>
                  <div className="detail_wrapper">
                    <div className="detail">
                      <p>Length</p>
                      <p id="loan-period-text">
                        {yearVAlue} <span className="calc_rupee">years</span>
                      </p>
                    </div>
                    <input
                      type="range"
                      className="form-control-range"
                      id="loan-amount"
                      min="1"
                      defaultValue={yearVAlue}
                      max={yMax}
                      value={yearVAlue}
                      onChange={(e) => {
                        setYearVAlue(e.target.value);
                      }}
                    />
                  </div>
                  <div className="detail_wrapper">
                    <div className="detail">
                      <p>% Interest</p>
                      <p id="interest-rate-text">
                        {interestValue}
                        <span className="calc_rupee">%</span>
                      </p>
                    </div>
                    <input
                      type="range"
                      className="form-control-range"
                      id="loan-amount"
                      min="1"
                      defaultValue={interestValue}
                      max={iMAx}
                      value={interestValue}
                      onChange={(e) => {
                        setInterestValue(e.target.value);
                      }}
                    />
                  </div>
                  <div className="month_pay">
                    <p id="price-container">
                      <span id="price">
                        {emiFormatted}
                        <span className="calc_rupee">₹</span>
                      </span>
                      /mo
                    </p>
                  </div>
                  <div className="calc_cta">
                    <Link
                      onClick={() => scrollToTop()}
                      className="theme_cta"
                      to="/get-registered/user-number"
                    >
                      Apply Now!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="ple_chart_div">
                  {/* <canvas id="pieChart" width="375" height="373" style={{ display: "block", boxSizing: "border-box", height: "299px", width: "300px" }}></canvas> */}
                  <div
                    id="pie-chart"
                    style={{
                      display: "block",
                      boxSizing: "border-box",
                      width: "100%",
                      height: "400px",
                      marginBottom: "-10px",
                    }}
                  ></div>
                  <div className="loan-details">
                    <div className="chart-details">
                      <p className="chart-details-head">Principal</p>
                      <p id="cp">
                        {principalFormatted}
                        <span className="calc_rupee">₹</span>
                      </p>
                    </div>
                    <div className="chart-details">
                      <p className="chart-details-head">Interest</p>
                      <p id="ci">
                        {interestFormatted}
                        <span className="calc_rupee">₹</span>
                      </p>
                    </div>
                    <div className="chart-details">
                      <p className="chart-details-head">Total Payable</p>
                      <p id="ct">
                        {totalFormatted}
                        <span className="calc_rupee">₹</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- <canvas id="lineChart" height="200px" width="200px"></canvas> --> */}
        </div>
      </div>

      <div className="ple_page_wrapper plec_bottom_wrapper">
        <div className="container">
          <div className="ple_page_container">
            <div className="row">
              <div className="col-md-9">
                <div className="ple_page_content">
                  <h2>Steps To Use A Personal Loan EMI Calculator</h2>
                  <p>
                    The steps are extremely simple to follow and you can figure
                    it out from any place at any time.
                  </p>
                  <ul>
                    <li>
                      <span>Step 1:</span> Enter your loan amount.{" "}
                    </li>
                    <li>
                      <span>Step 2:</span>Enter the interest rate applicable to
                      your lender.
                    </li>
                    <li>
                      <span>Step 3:</span> Choose your preferred tenure for
                      repayment.
                    </li>
                  </ul>
                  <p>
                    You should note that the higher the repayment tenure, the
                    lower will be the EMI amount. However, in the long run, you
                    will end up paying more interest. This is why, if feasible,
                    you should go for a shorter repayment tenure.
                  </p>

                  <h2>Benefits Of Using A Personal Loan EMI Calculator</h2>
                  <p>
                    Check out the following pointers to know how you can benefit
                    from using a personal loan EMI calculator:
                  </p>

                  <ul>
                    <li>
                      <span>Fast &amp; Accurate Results:</span> By using a
                      personal loan EMI calculator, you will get faster and more
                      accurate results in just a few seconds.{" "}
                    </li>
                    <li>
                      <span>Compare &amp; Select Lenders:</span> You can compare
                      different lenders and their interest rates and choose the
                      one most suitable to your requirements.{" "}
                    </li>
                    <li>
                      <span>Choose Your Repayment Tenure:</span> You can choose
                      different repayment tenures and choose the one you are
                      most comfortable with.{" "}
                    </li>
                    <li>
                      <span>More Info than Just EMI:</span> With a personal loan
                      EMI calculator, you also get the amortisation or repayment
                      schedule. This will help you get a clear idea about your
                      loan repayment structure and the outstanding amount after
                      each payment.
                    </li>
                    <li>
                      <span>Free of Cost: </span> Using this calculator is
                      totally free. So, you can perform as much "trial and
                      error" as you need to come to the conclusion most feasible
                      for you.{" "}
                    </li>
                    <li>
                      <span></span>{" "}
                    </li>

                    <li>
                      <span>100% Paperless Process:</span> Our loan process from
                      application to approval is totally digital. Your physical
                      presence is not required at all and you can apply for it
                      from any place at any time.{" "}
                    </li>
                    <li>
                      <span>Explore Flexible Options:</span> For loan amounts
                      ranging between Rs.1,000 to Rs.1,00,000, you can choose a
                      tenure between 3 months to 2 years as per your preference.{" "}
                    </li>
                  </ul>

                  <h2>Factors Affecting Personal Loan EMI</h2>

                  <p>
                    Take a look at these factors that play a significant role in
                    determining your EMI amount:
                  </p>

                  <ul>
                    <li>
                      <span>Repayment Tenure:</span> The loan repayment tenure
                      you choose is inversely proportional to your EMI amount.
                      This means the lower the repayment tenure, the higher the
                      EMI amount, and vice-versa. Thus, you might find that
                      having a longer loan tenure is more convenient. However,
                      interest outgo is higher for longer loan tenure.
                    </li>
                    <li>
                      <span>Principal Amount:</span> The principal amount that
                      your lender approves depends on a lot of factors, such as
                      your credit score, repayment history, your relationship
                      with the lender, etc. Also, the higher the principal
                      amount, the higher the EMI. So, make your decisions
                      carefully and within your capabilities.
                    </li>
                    <li>
                      <span>Rate of Interest:</span> The EMI is directly
                      proportional to the interest rate. Also, in the case of
                      personal loans, the rate of interest depends mostly on the
                      borrower. If your creditworthiness sounds promising to the
                      lender, they will sanction your loan at the lowest rate of
                      interest possible.
                    </li>
                  </ul>

                  <h2>How To Use Credmudra Personal Loan EMI Calculator</h2>

                  <p>
                    Using the <b> Credmudra Personal Loan EMI Calculator </b> is
                    so straightforward and simple that even a person who is the
                    least accustomed to the internet can operate it with
                    absolute ease.
                  </p>
                  <p>
                    You just need to enter the loan amount, rate of interest
                    applicable, and preferred tenure correctly in the respective
                    sections.{" "}
                  </p>
                  <p>
                    Consider all the factors mentioned and choose your repayment
                    tenure and lender carefully before applying for the loan.
                    Lastly, using a <b> personal loan EMI calculator </b> is
                    absolutely recommended for making an informed decision,
                    which will offer financial benefits as well as stability.
                  </p>
                </div>

                <div className="ple_banner_content_banner">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/cred_angle_full.webp"
                    }
                    alt="Credmudra icon"
                  />
                  <div className="row align-items-lg-center">
                    <div className="col-lg-8">
                      <h4>
                        Apply For A Personal Loan Online With
                        <span> Minimal Documentation</span>
                      </h4>
                    </div>
                    <div className="col-lg-4">
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
                            1. How much is the average rate of interest on
                            personal loans?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse17"
                          className="accordion-collapse collapse show"
                          aria-labelledby="flush-heading17"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Usually, most banks and NBFCs offer personal loans
                            at an interest rate ranging from 10.50% to 24.00%
                            per annum. However, this might vary with the various
                            factors that affect the interest rates. In order to
                            get the actual personal loan interest rate, you
                            should contact with your lender and enquire about
                            the same with them.{" "}
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
                            2. What happens if I fail to repay one EMI for a
                            personal loan?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse18"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-heading18"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Even the slightest delay in repaying the monthly
                            instalment will negatively affect your credit score.
                            This will indicate poor repayment behaviour,
                            reducing the chances of loan approvals in the long
                            run. In order to reduce these complications, it is
                            best to set a reminder and keep the money ready to
                            pay before the EMI payment date.
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
                            3. Which is better, fixed or floating personal loan
                            interest rate?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse19"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-heading19"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            The rate of interest remains fixed throughout the
                            repayment tenure in case of a fixed rate. On the
                            other hand, the rate of interest keeps changing with
                            the fluctuations in the market in the case of a
                            floating interest rate. Willing borrowers should
                            keep this thing in mind and choose the option that
                            best suits their needs.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanEmiCalculator;
