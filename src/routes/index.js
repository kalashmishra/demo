import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import LandingPage from "../views/LandingPage";
import BusinessLoan from "../views/BusinessLoan";
import PersonalLoan from "../views/PersonalLoan";
import DebtConsolidation from "../views/DebtConsolidation";
import PersonalLoanForMedicalEmergency from "../views/PersonalLoanForMedicalEmergency";
import PersonalLoanForTravel from "../views/PersonalLoanForTravel";
import PersonalLoanForTwoWheeler from "../views/PersonalLoanForTwoWheeler";
import PersonalLoanForHomeRenovation from "../views/PersonalLoanForHomeRenovation";
import PersonalLoanEligibility from "../views/PersonalLoanEligibility";
import PersonalLoanInterestRate from "../views/PersonalLoanInterestRate";
import PersonalLoanEmiCalculator from "../views/PersonalLoanEmiCalculator";
import AboutUs from "../views/AboutUs";
import TermsAndConditions from "../views/TermsAndConditions";
import PrivacyPolicy from "../views/PrivacyPolicy";
import GetRegistered from "../views/getRegistered";
import VerifyUser from "../components/FormComponents/Verify/VerifyUser";
import UserNumber from "../components/FormComponents/UserNumber/UserNumber";

import {
  Loan,
  EmployeType,
  Salaried,
  SelfEmployedDetails,
  PersonalDetails,
  AddressDetails,
  OtherDetails,
  Submit,
  Offers,
  Marketplace,
} from "../components/index";
import NotFound from "../views/NotFound";
import BusinessLanding from "../components/FormComponents/BusinessLanding";
const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />

          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/debt-consolidation" element={<DebtConsolidation />} />
          <Route
            path="/personal-loan-for-medical-emergency"
            element={<PersonalLoanForMedicalEmergency />}
          />
          <Route
            path="/personal-loan-for-travel"
            element={<PersonalLoanForTravel />}
          />
          <Route
            path="/personal-loan-for-two-wheeler"
            element={<PersonalLoanForTwoWheeler />}
          />
          <Route
            path="/personal-loan-for-home-renovation"
            element={<PersonalLoanForHomeRenovation />}
          />
          <Route
            path="/personal-loan-eligibility"
            element={<PersonalLoanEligibility />}
          />
          <Route
            path="/personal-loan-interest-rate"
            element={<PersonalLoanInterestRate />}
          />
          <Route
            path="personal-loan-emi-calculator"
            element={<PersonalLoanEmiCalculator />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/get-registered"
            element={<GetRegistered classname={"welcomeform"} />}
          >
            <Route
              path="/get-registered/user-number"
              element={<UserNumber />}
            />
            <Route
              path="/get-registered/verify-user"
              element={<VerifyUser />}
            />
            <Route path="/get-registered/loan" element={<Loan />} />
            <Route
              path="/get-registered/employe-type"
              element={<EmployeType />}
            />
            <Route path="/get-registered/salaried" element={<Salaried />} />
            <Route
              path="/get-registered/selfemployed"
              element={<SelfEmployedDetails />}
            />
            <Route
              path="/get-registered/personaldetails"
              element={<PersonalDetails />}
            />
            <Route
              path="/get-registered/addressdetails"
              element={<AddressDetails />}
            />
            <Route
              path="/get-registered/otherdetails"
              element={<OtherDetails />}
            />
            <Route path="/get-registered/submit" element={<Submit />} />
          </Route>
          <Route
            path="/get-registered/offers"
            element={<Offers classname={"welcomeform"} />}
          />
          <Route
            path="/get-registered/marketplace"
            element={<Marketplace classname={"welcomeform"} />}
          />
          <Route
            path="/business-loan/get-registered"
            element={<BusinessLanding classname={"welcomeform"} />}
          />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
