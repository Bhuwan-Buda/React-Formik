import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "./ErrorText";
import "./style.css";

const initialValues = {
  email: "",
  password: "",
  acceptTerms: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address!!")
    .required("Email is required!!"),
  password: Yup.string().required("Password is mandatory"),
  acceptTerms: Yup.bool()
    .oneOf([true], "Please select our terms and conditions.")
    .required("Terms and conditions should be accepted."),
});

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const LoginForm = () => {
  return (
    <>
      <h1 className="text-black text-center text-lg font-weight-bold">
        Login Form using Formik+Yup
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
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="abc@example.com"
                  className="form-control"
                />
                <ErrorMessage name="email" component={ErrorText} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Vdoeqr@3wjf"
                  className="form-control"
                />
                <ErrorMessage name="password" component={ErrorText} />
              </div>
              <div className="mb-3">
                <Field type="checkbox" id="terms" name="acceptTerms" />{" "}
                <label htmlFor="terms" className="form-label">
                  Accept terms and conditions.
                </label>
                <br />
                <ErrorMessage name="acceptTerms" component={ErrorText} />
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-sm"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  <i className="fas fa-arrow-right"></i> Login
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
