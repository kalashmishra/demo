import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Subscribe } from "../../constant/services/credMudra";
import { scrollToTop } from "../../utils/commonFunctions";

const Footer = () => {
  const [displayThanks, setDisplayThanks] = useState(false);
  const [LoadingButton, setLoadingButton] = useState(false);

 

  const handleSubmit = async (e) => {
    setLoadingButton(true);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
    };
    const res = await Subscribe(data);
    setInterval(() => {
      setLoadingButton(false);
      if (res?.data?.status.code === 200) {
        setDisplayThanks(true);
      }
    }, 1500);
  };
  return (
    <footer>
      <div className="footer-wrapper">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-3'>
              <img src={process.env.PUBLIC_URL + "/assets/images/credmudra_logo_new.png"} alt="Credmudra" />
              <div className="footer_ratting_wrapper">
                4.9 <span>{"                  "}</span>
                <i className="fa fa-star" aria-hidden="true"></i>
                <span>{"                  "}</span>
                <i className="fa fa-star" aria-hidden="true"></i>
                <span>{"                  "}</span>
                <i className="fa fa-star" aria-hidden="true"></i>
                <span>{"                  "}</span>
                <i className="fa fa-star" aria-hidden="true"></i>
                <span>{"                  "}</span>
                <i className="fa fa-star" aria-hidden="true"></i>

              </div>
              <span className="ratting_text">Rated by our customer </span>
              <h5>Follow Us On-</h5>
              <div className="social_icon">

                <Link
                  title="Facebook"
                  to="https://www.facebook.com/credmudra"
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </Link>
                <span>{"                  "}</span>
                <Link
                  title="Twitter"
                  to="https://twitter.com/Credmudra?t=Gaww4U3bGpfn5Hg1dw7N1A&amp;s=09"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <span>{"                  "}</span>
                <Link
                  title="Instagram"
                  to="https://www.instagram.com/credmudra/"
                >
                  <i className="fab fa-instagram" target="_blank"></i>
                </Link>
                <span>{"                  "}</span>
                <Link title="Youtube" to="https://www.youtube.com/@Credmudra">
                  <i className="fab fa-youtube" target="_blank"></i>
                </Link>
                <span>{"                  "}</span>
                <Link
                  title="Linked In"
                  target="_blank"
                  to="https://www.linkedin.com/company/credmudra/?originalSubdomain=in"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
              {/*<div className="social-icons"></div> */}
            </div>
            <div className="col-md-6 col-lg-2">
              <h3>Our Company</h3>
              <ul style={{ paddingTop: "1rem" }}>
                <li>
                  <Link to="/about-us" onClick={()=> scrollToTop()}>
                    About Us
                  </Link>{" "}
                </li>
                {/* <!--<li><a to="">We are hiring</a> </li> --> */}
                {/* <!--<li><a to="">Partner with us</a></li>--> */}
                <li>
                  <Link to="/terms-and-conditions" onClick={()=> scrollToTop()}>
                    Terms and Condition
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" onClick={()=> scrollToTop()}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://credmudra.com/blog/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://careers.credmudra.com/">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h3>Contact With Us</h3>
              <p style={{ paddingTop: "1rem" }}>
                Mumbai Location: <br />
                912 SURESHWARI TECHNO IT PARK PREMISES VILLAGE EKSAR, LINK ROAD
                BORIVALI (W) Mumbai, 400092
              </p>
              <p style={{ padding: "0" }}>
                Bhopal Location: <br /> B NO. 8 NIRUPAM, PH-II, NIRUPAM ESTATE,
                AHMEDPUR KALAN, HUZUR, BHOPAL, Madhya Pradesh, India, 462026
              </p>
              <p style={{ paddingTop: "16px" }}>
                Contact Email: <br /> Support@credmudra.com
              </p>
            </div>

            <div className='col-md-6 col-lg-4'>
              <img src={process.env.PUBLIC_URL + "/assets/images/footer_startup.png"} alt="Startupindia" />
              <h3>Join Our Newsletter</h3>
              <div className="newsletter">
                <div className="content">
                  <form
                    onSubmit={handleSubmit}
                    className="footer_subscriber_form"
                    id="footer_subscriber_form"
                    style={{ display: displayThanks === false ? "" : "none" }}
                  >
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                      <div className="input-group-btn">
                        {LoadingButton === false ? (
                          <button className="btn" id="footer_subscriber_submit">
                            Subscribe Now
                          </button>
                        ) : (
                          <div
                            className="btn"
                            id="footer_subscriber_submit"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <span>
                              Submitting
                              <i
                                style={{
                                  fontSize: "22px",
                                  verticalAlign: "middle",
                                  marginLeft: "8px",
                                }}
                                className="fa fa-refresh fa-spin"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                  <div
                    className="footer_subscriber_thankyou thankyou_msg_subscriber"
                    style={{
                      display:
                        displayThanks === true && LoadingButton === false
                          ? ""
                          : "none",
                    }}
                  >
                    <div className="thankyou_msg_svg_wrapper">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style={{ enableBackground: "new 0 0 100 100" }}
                        xmlSpace="preserve"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g>
                          <circle
                            className="circle"
                            cx="50"
                            cy="49.9999657"
                            r="47.5"
                          ></circle>
                          <circle
                            className="circle-dash"
                            cx="50"
                            cy="49.9999657"
                            r="47.5"
                          ></circle>
                          <polyline
                            className="check"
                            points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 	"
                          ></polyline>
                          <polyline
                            className="check-dash"
                            points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 	"
                          ></polyline>
                        </g>
                      </svg>
                    </div>
                    <h2>Thank You For Subscribe Us</h2>
                  </div>
                </div>
                <p>
                  * Will send you weekly updates for your better finance
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="hr-line">
          <p style={{ textAlign: "center", padding: "10px" }}>
            Copyright @ Credmudra 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
