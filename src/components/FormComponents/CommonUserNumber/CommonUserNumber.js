import { FormHelperText } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOpt } from "../../../constant/services/credMudra";
import { selectGetFormData } from "../../../redux/selectors";
import { setFormData, setIsLoading } from "../../../redux/actions";
import { useFormik } from "formik";
import { UserNumberErrorFocus } from "../../../utils/errorFocus";
import { getInitialUserNumberValues } from "../../../utils/initialValues";
import { userNumberSchema } from "../../../utils/validateSchema";
import { scrollToTop } from "../../../utils/commonFunctions";
const CommonUserNumber = () => {
  const formData = useSelector(selectGetFormData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToVerify = () => {
    navigate("/get-registered/verify-user");
  };

  const handleSubmit = async () => {
    const anonymousId = sessionStorage.getItem("anonymousId") || "";
    const requestData = {
      contactNo: formData.contactNo,
      resend: false,
      anonymousId: anonymousId || "",
    };
    dispatch(setIsLoading(true));
    const res = await sendOpt(requestData);
    dispatch(setIsLoading(false));
    scrollToTop()
    navigateToVerify();
  };

  const formik = useFormik({
    initialValues: getInitialUserNumberValues(formData),
    validationSchema: userNumberSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <span className="form_disc">
        Enter your 10 digit mobile number to proceed
      </span>
      <form name="mobile_form" onSubmit={formik.handleSubmit}>
        <div className="pl_mobile_form mobile_form">
          <div className="mobile_input_wrapper">
            <div className="mno-responsive">
              <span>🇮🇳 +91 </span>
              <input
                type="tel"
                autoFocus
                name="contactNo"
                id="contactNo"
                placeholder="XXXXXXXXXX"
                maxLength="10"
                onChange={(e) => {
                  if (
                    /^\d*$/.test(e.target.value) &&
                    e.target.value.length <= 10
                  ) {
                    dispatch(
                      setFormData({
                        contactNo: e.target.value,
                      })
                    );
                    formik.handleChange(e);
                  }
                }}
                value={formData.contactNo}
              />
              <button
                type="submit"
                onClick={() => UserNumberErrorFocus(formik)}
                className="mobile_submit sendOtp"
              >
                Apply Now
              </button>
            </div>
            {formik.touched.contactNo && formik.errors.contactNo && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "14px",
                  ml: 1,
                }}
              >
                {formik.errors.contactNo}
              </FormHelperText>
            )}
          </div>
          <label className="form-check-label" style={{ paddingTop: "8px" }}>
            <div className="squaredThree">
              <input
                type="checkbox"
                id="termsAndCondition"
                name="termsAndCondition"
                onChange={(e) => {
                  dispatch(
                    setFormData({
                      termsAndCondition: e.target.checked,
                    })
                  );
                  formik.setFieldValue("termsAndCondition", e.target.checked);
                }}
                onBlur={formik.handleBlur}
                checked={formData.termsAndCondition}
              />
              <label htmlFor="termsAndCondition"></label>
            </div>
            By continuing, I agree to Credmudra's
            <Link to="/privacy-policy">Privacy Policy</Link> and
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            and receive communication from Credmudra via SMS, E-mail, and
            WhatsApp.
          </label>
          {formik.touched.termsAndCondition &&
            formik.errors.termsAndCondition && (
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
        </div>
      </form>
    </>
  );
};

export default CommonUserNumber;
