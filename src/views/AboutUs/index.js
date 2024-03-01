import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import "../../assets/ComponentStyling/AboutStyling/aboutStyling.scss";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { routeRedirection } from "../../utils/commonFunctions";

const AboutUs = () => {
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
        <title>{heading.about.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.about.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.about.canonical} />
      </Helmet>
      <img
        className="wave"
        src={process.env.PUBLIC_URL + "/assets/images/wave.svg"}
        alt="wave"
      />
      <section id="abouts-slider">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/Path199.png"}
          className="about-baner-icon"
          alt="icon"
        />
        <div className="about_banner_wrapper pt-5">
          <div className="container text-center">
            <h1>About The Team !</h1>
            <p>
              We were once dreamers who took actions to fulfil our aspirations.
            </p>
            <p>
              We created CredMudra with the conviction that action is the key to
              achieving financial freedom and success. The same way we created
              Team Credmudra and named it Mudra Mentors.
            </p>
            <br />
          </div>
        </div>
      </section>

      <section className="mentor-section">
        <div className="container">
          <h1 className="text-center">Mudra Mentors</h1>
          <p className="text-center">a bunch of solution seekers</p>
          <div className="reverse-colin-mobile row d-flex align-items-center pb-5">
            <div class="col-md-6">
              <p style={{ fontWeight: "500" }}>Meet</p>
              <h1 className="mentor_name">Arif Khan</h1>
              <h1 style={{ fontWeight: "700", fontSize: "20px" }}>
                Co-founder
              </h1>
              <p>
                Arif, the co-founder of Credmudra, has been the driving force
                behind the company and its growth. With over a decade of
                experience in revolutionizing lending technology in the USA
                market, Arif brings a wealth of expertise to the fintech
                landscape. He is a staunch advocate for collaboration,
                crisscrossing the globe to foster strategic partnerships and
                expansive networks. Arif's overarching mission is to generate
                value for all stakeholders, positively impacting every life
                touched by his endeavours. His leadership is a driving force
                behind Credmudra's commitment to responsible lending and
                inclusive financial empowerment.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/arif.png"}
                alt="Arif"
              />
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/lavit.webp"}
                alt="lavit"
              />
            </div>
            <div className="col-md-6">
              <p style={{ fontWeight: "500" }}>Meet</p>
              <h1 className="mentor_name">Lavit Dighe</h1>
              <h1 style={{ fontWeight: "700", fontSize: "20px" }}>
                Co-founder and CEO
              </h1>
              <p>
                With profound experience in fintech, Lavit is well-versed in the
                intricate world of financial products. His extensive industry
                connections establish him as a key figure within the lending
                community. Lavit excels in high-stakes financial scenarios,
                blending strategic acumen with a personable touch. As the
                driving force behind Credmudra, Lavit ensures all financial
                aspirations are entrusted to capable hands.
              </p>
            </div>
          </div>
          <div className="reverse-colin-mobile row d-flex align-items-center pb-5">
            <div className="col-md-6">
              <p style={{ fontWeight: "500" }}>Meet</p>
              <h1 className="mentor_name">Parul Shrivastava</h1>
              <h1 style={{ fontWeight: "700", fontSize: "20px" }}>
                Co-Founder and CMO
              </h1>
              <p>
                A seasoned marketing professional with over fifteen years of
                diverse expertise in brand and marketing. With a foundation in
                engineering from JIIT, Noida, and a PGDM from SIMSR, Mumbai, she
                brings a unique blend of technical, analytical, and strategic
                marketing acumen. With countless triumphant GMT projects, she
                has crafted unparalleled customer experiences, an undeniable
                testament to her proven brilliance for ensuring foolproof
                perfection in delivering unmatched consumer delight.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/parul.webp"}
                alt="parul"
              />
            </div>
          </div>
          <div className="row d-flex align-items-center pb-5">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/varun.png"}
                alt="varun"
              />
            </div>
            <div className="col-md-6">
              <p style={{ fontWeight: "500" }}>Meet</p>
              <h1 className="mentor_name">Varun Gour</h1>
              <h1 style={{ fontWeight: "700", fontSize: "20px" }}>
                Co-Founder and CTO
              </h1>
              <p>
                A product development stalwart with 15+ years of tech expertise,
                his strong technical foundation and leadership have powered
                numerous successes. Varun excels in data integration
                architecture, crafting tailored solutions to client challenges.
                His management finesse, mentorship, and knack for innovation
                make him invaluable. With him at the helm, Credmudra guarantees
                the safety and seamlessness of your financial dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-community">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="center-div">
                <p>
                  Our community of Mudra Mentors has since grown beyond the
                  co-founders of CredMudra, and we are now a diverse group of
                  passionate individuals dedicated to helping others achieve
                  their goals through financial freedom. We roll up our sleeves
                  and get our hands dirty to help you find the perfect financial
                  product match.
                </p>
                <br />
                {/* <!-- <a className="btn-2">We are Hiring!</a>  --> */}
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-light text-secondary px-4 py-5 text-center">
          <div className="py-5">
            <h1 className="dmk_heading">
              So What Are You Waiting For? Let's Make That Move Together And
              Make Your Dreams Come True!
            </h1>
            <div className="col-lg-6 mx-auto">
              {/* <!--  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a href="/" type="button" className="btn-2  btn-sm px-4 me-sm-3">Download Media Kit</a>
                <a href="/" type="button" className="btn-3 btn-outlined btn-md px-4 me-sm-3">Co founder Profiles</a>
                </div> --> */}
            </div>
          </div>
        </div>
      </section>

      <section className="about-bottom d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h1>Mudra Mentors+</h1>
                <p>Engage with extended community of Financial Advisors.</p>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/human-resources.png"
                  }
                  className="card-img"
                  alt="Mudra Mentors"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card green">
                <h1>Resources</h1>
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
                <h1>Seek Solutions?</h1>
                <p>Let’s connect at support@credmudra.com</p>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/user-engagement.png"
                  }
                  alt="Get Solution"
                  className="card-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
