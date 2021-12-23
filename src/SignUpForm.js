import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "./ErrorText";
import "./style.css";

const initialValues = {
  name: "",
  address: "",
  phone: "",
  gender: "",
  country: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const genderOptions = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
];

const countryOptions = [
  { key: "Select a country", value: "" },
  { key: "Nepal", value: "nepal" },
  { key: "India", value: "india" },
  { key: "China", value: "china" },
  { key: "Japan", value: "japan" },
];
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Provide your name"),
  address: Yup.string().required("Provide your address"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Phone number should be atleast 10 digits")
    .required("Provide your contact number"),
  gender: Yup.string().required("Please select your gender"),
  country: Yup.string().required("Please select your country"),
  email: Yup.string()
    .email("Invalid email address!!")
    .required("Email is required!!"),
  password: Yup.string()
    .required("Password is mandatory")
    .min(8, "Password must contain atleast 8 characters."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password doesnot match")
    .required("Please confirm the password"),
  acceptTerms: Yup.bool()
    .oneOf([true], "Please select our terms and conditions.")
    .required("Terms and conditions should be accepted."),
});

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const SignUpForm = () => {
  return (
    <>
      <h1 className="text-black text-center text-lg font-weight-bold">
        SignUp Form using Formik+Yup
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="container text-white p-3 form-control login-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Fullname
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Rowan Atkinson"
                  className="form-control"
                />
                <ErrorMessage name="name" component={ErrorText} />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="San Andreas"
                  className="form-control"
                />
                <ErrorMessage name="address" component={ErrorText} />
              </div>
              <div className="mb-3">
                <label htmlFor="semail" className="form-label">
                  Email
                </label>
                <Field
                  type="text"
                  id="semail"
                  name="email"
                  placeholder="abc@example.com"
                  className="form-control"
                />
                <ErrorMessage name="email" component={ErrorText} />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <Field
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="+97798********"
                  className="form-control"
                />
                <ErrorMessage name="phone" component={ErrorText} />
              </div>
              <div className="mb-3">
                <label htmlFor="gender">Gender</label>{" "}
                <Field name="gender" id="gender" className="form-control">
                  {({ field }) => {
                    return genderOptions.map((option) => {
                      return (
                        <React.Fragment key={option.key}>
                          <input
                            type="radio"
                            id={option.value}
                            {...field}
                            value={option.value}
                            checked={field.value === option.value}
                          />{" "}
                          <label htmlFor={option.value} className="form-label">
                            {option.key}
                          </label>{" "}
                        </React.Fragment>
                      );
                    });
                  }}
                </Field>
                <ErrorMessage name="gender" component={ErrorText} />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="form-control"
                >
                  {countryOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name="country" component={ErrorText} />
              </div>
              <div className="mb-3">
                <label htmlFor="spassword" className="form-label">
                  Password
                </label>
                <Field
                  type="password"
                  id="spassword"
                  name="password"
                  placeholder="Vdoeqr@3wjf"
                  className="form-control"
                />
                <ErrorMessage name="password" component={ErrorText} />
              </div>
              <div className="mb-3">
                <label htmlFor="sconfirmPassword" className="form-label">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="sconfirmPassword"
                  name="confirmPassword"
                  placeholder="Vdoeqr@3wjf"
                  className="form-control"
                />
                <ErrorMessage name="confirmPassword" component={ErrorText} />
              </div>
              <div className="mb-3">
                <Field type="checkbox" id="sterms" name="acceptTerms" />{" "}
                <label htmlFor="sterms" className="form-label">
                  Accept terms and conditions.
                </label>
                <br />
                <ErrorMessage name="acceptTerms" component={ErrorText} />
              </div>
              <div className="mb-3">
                <button type="reset" className="btn btn-outline-danger btn-sm">
                  <i className="fas fa-trash-alt"></i> Reset
                </button>{" "}
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-sm"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  <i className="fas fa-arrow-right"></i> Register
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
