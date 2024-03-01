import React, {useState } from "react";
import {
  Typography,
  Checkbox,
  Box,
  CssBaseline,
  Grid,
  FormHelperText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectGetFormData } from "../../../redux/selectors";
import {
  GenerateLead,
  LeadStatus,
} from "../../../constant/services/credMudra/users";
import {
  setFormData,
  setIsLoading,
  setLenderDetails,
} from "../../../redux/actions";
import NavButton from "../../../layouts/NavButton";
import { useFormik } from "formik";
import ModalLoader from "../../../layouts/LoaderModal";
import ThankyouModal from "../../../layouts/ThankyouModal";
import ContinueModal from "../../../layouts/ContinueModal";
import { submitSchema } from "../../../utils/validateSchema";
import { SubmitErrorFocus } from "../../../utils/errorFocus";
import { getInitialSubmitValues } from "../../../utils/initialValues";
import { scrollToTop } from "../../../utils/commonFunctions";
const Submit = () => {
  const [Read, setRead] = useState(false);
  const navigate = useNavigate();
  const formData = useSelector(selectGetFormData);
  const dispatch = useDispatch();
  const [submitLoader, setSubmitLoader] = useState(false);
  const [thankYouLoader, setThankYouLoader] = useState(false);
  const [ContinueLoader, setContinueLoader] = useState(false);

  const generateLead = async () => {
    setSubmitLoader(true);
    const res = await GenerateLead(formData);
    const response = res?.data?.data;
    if (res?.data?.status.code === 404) {
      alert("Provided leadId does not exists");
      dispatch(
        setFormData({
          leadId: "",
          stage: "",
          contactNo: "",
          termsAndCondition: true,
          loan: {
            reason: null,
            amount: 1000,
            tenure: 1,
          },

          panCard: "",
          emailId: "",

          employmentType: "",

          employmentDetails: {
            companyTypeId: "",
            industryTypeId: "",
            companyName: "",
            designation: "",
            address: "",
            pinCode: "",
            countryId: "",
            stateId: "",
            cityId: "",
            yearsWorkingIn: "",
            businessTypeId: "",
            professionTypeId: "",
            turnover: "",
            monthlyProfit: "",
            income: "",
            salaryMode: "",
            bankId: "",
            currentAccountBankId: "",
            savingAccountBankId: "",
            businessOwnedId: "",
            gst: "",
          },

          personalInfo: {
            emailId: "",
            firstName: "",
            lastName: "",
            genderId: "",
            dateOfBirth: "",
            qualificationId: "",
            maritalStatus: "",
          },
          address: {
            addressLine1: "",
            addressLine2: "",
            pinCode: "",
            countryId: "",
            stateId: "",
            cityId: "",
            residenceTypeId: "",
            yearsLivingIn: "",
          },
          finance: {
            panCard: "",
          },
          others: {
            totalEmiPaidMonthly: 0,
            interestedToGetCreditCard: true,
          },
          utm: {
            id: "",
            url: "",
            source: "",
            medium: "",
            campaign: "",
            term: "",
            content: "",
            clickId: "",
          },
          extras: {
            browser: "",
            operatingSystem: "",
            ipAddress: "",
            timestamp: "",
            userAgent: "",
            location: "",
          },
        })
      );
      return navigate("/");
    }
    if (res?.data?.status.code === 400) {
      alert("Provided leadId does not exists");
      dispatch(
        setFormData({
          leadId: "",
          stage: "",
          contactNo: "",
          termsAndCondition: true,
          loan: {
            reason: null,
            amount: 1000,
            tenure: 1,
          },

          panCard: "",
          emailId: "",

          employmentType: "",

          employmentDetails: {
            companyTypeId: "",
            industryTypeId: "",
            companyName: "",
            designation: "",
            address: "",
            pinCode: "",
            countryId: "",
            stateId: "",
            cityId: "",
            yearsWorkingIn: "",
            businessTypeId: "",
            professionTypeId: "",
            turnover: "",
            monthlyProfit: "",
            income: "",
            salaryMode: "",
            bankId: "",
            currentAccountBankId: "",
            savingAccountBankId: "",
            businessOwnedId: "",
            gst: "",
          },

          personalInfo: {
            emailId: "",
            firstName: "",
            lastName: "",
            genderId: "",
            dateOfBirth: "",
            qualificationId: "",
            maritalStatus: "",
          },
          address: {
            addressLine1: "",
            addressLine2: "",
            pinCode: "",
            countryId: "",
            stateId: "",
            cityId: "",
            residenceTypeId: "",
            yearsLivingIn: "",
          },
          finance: {
            panCard: "",
          },
          others: {
            totalEmiPaidMonthly: 0,
            interestedToGetCreditCard: true,
          },
          utm: {
            id: "",
            url: "",
            source: "",
            medium: "",
            campaign: "",
            term: "",
            content: "",
            clickId: "",
          },
          extras: {
            browser: "",
            operatingSystem: "",
            ipAddress: "",
            timestamp: "",
            userAgent: "",
            location: "",
          },
        })
      );
      return navigate("/");
    }
    if (response?.duplicate === true) {
      setTimeout(() => {
        setSubmitLoader(false);
        dispatch(setIsLoading(false));
        setThankYouLoader(true);
      }, 2000);
      setTimeout(async () => {
        setThankYouLoader(false);
        navigate("/get-registered/offers");
      }, 10000);
    } else {
      const data = {
        leadId: sessionStorage.getItem("leadId"),
      };
      setTimeout(async () => {
        const res = await LeadStatus(data);
        const response = JSON.stringify(res);
        sessionStorage.setItem("Lenders", response);
        dispatch(setLenderDetails(res));
        if (res?.data?.data?.status?.length === 0) {
          dispatch(setIsLoading(false));
          setSubmitLoader(false);
          navigate("/get-registered/offers");
        } else {
          dispatch(setIsLoading(false));
          setSubmitLoader(false);
          setContinueLoader(true);
        }
      }, 14000);
    }
  };
  const handlePrev = () => {
    navigate(-1);
  };
  const handleSubmit = () => {
    scrollToTop()
    generateLead();
  };
  const formik = useFormik({
    initialValues: getInitialSubmitValues(formData),
    validationSchema: submitSchema,
    onSubmit: handleSubmit,
  });

  // useEffect(() => {
  //   if (
  //     formData.employmentType === undefined ||
  //     formData.employmentType === ""
  //   ) {
  //     navigate("/");
  //   }
  // }, []);

  const toggleRead = () => {
    setRead(true);
  };

  const offRead = () => {
    setRead(false);
  };

  return (
    <>
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <Grid  rowGap={6} container>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "35px", lg: "36px", xl: "40px" },
              fontWeight: "900",
            }}
          >
            Submit Loan Request
          </Typography>
          <Grid container rowGap={1}>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Checkbox
                  name="termsAndCondition"
                  id="termsAndCondition"
                  onChange={(e) => {
                    dispatch(
                      setFormData({
                        termsAndCondition: e.target.checked,
                      })
                    );
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                  checked={formData.termsAndCondition}
                />
                <Typography>
                  I hereby declare that I have read, understood and agree to the
                  {"  "}
                  <Link
                    style={{ fontWeight: "600" }}
                    to={"/terms-and-conditions"}
                  >
                    Terms & Conditions
                  </Link>
                  {"  "}
                  and the {"  "}
                  <Link style={{ fontWeight: "600" }} to={"/privacy-policy"}>
                    Privacy Policy
                  </Link>
                  .{"  "}I authorize Credmudra to receive my Credit Information
                  from CIBIL, Equifax, Experian, and CRIF regularly.{" "}
                  {Read ? (
                    <>
                      This authorization remains valid until the objective of
                      obtaining the Bureau Score for connecting with Credmudra's
                      lending partner is achieved, or up to six months from the
                      consent collection date. <br />
                      Additionally, I grant permission to Credmudra, its Lending
                      Partners, and affiliated entities to contact me for
                      various communication from Credmudra via SMS, E-mail, and
                      WhatsApp for loans, credit cards, or other relevant
                      information or promotions.{" "}
                      <Link onClick={offRead} to={""}>
                        Read Less{" "}
                      </Link>
                    </>
                  ) : (
                    <Link onClick={toggleRead} to={""}>
                      Read More{" "}
                    </Link>
                  )}
                </Typography>
              </Box>
              {formik.errors.termsAndCondition && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.termsAndCondition}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <NavButton
            handlePrev={handlePrev}
            ErrorFocus={() => SubmitErrorFocus(formik)}
            isSubmit={true}
          />
        </Grid>
      </form>
      {submitLoader ? <ModalLoader /> : ""}
      {thankYouLoader ? <ThankyouModal /> : ""}
      {ContinueLoader ? <ContinueModal /> : ""}
    </>
  );
};

export default Submit;
