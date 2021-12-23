import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "./ErrorText";
import './style.css'


const initialValues = {
  name: "",
  email: "",
  address: "",
  number: "",
};

const savedData1 = {
  name: "Bhuwan Buda ",
  email: "bhuwanbuda143@gmail.com",
  address: "BDM-17, Kanchanpur",
  number: "9868792901",
};

const numberReg =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  address: Yup.string().required("Required"),
  number: Yup.string()
    .matches(numberReg, "Please provide valid number.")
    .min(10, "Number should contain minimum of 10 digits.")
    .required("Required"),
});

const onSubmit = (values, setSubmitProps) => {
  alert("Your data is saved in console.");
  console.log(values);
  setSubmitProps.setSubmitting(false);
  setSubmitProps.resetForm();
};

function LoadSavedData() {
  const [savedData, setSavedData] = useState(null);
  return (
    <Formik
      initialValues={savedData || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form className="container lsd p-3 form-control text-white">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Jonny Deep"
              />
              <ErrorMessage name="name" component={ErrorText} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="abc@example.com"
              />
              <ErrorMessage name="email" component={ErrorText} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="address">
                Address
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="form-control"
                placeholder="San Francisco"
              />
              <ErrorMessage name="address" component={ErrorText} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="number">
                Number
              </label>
              <Field
                type="number"
                id="number"
                name="number"
                className="form-control"
                placeholder="98********"
              />
              <ErrorMessage name="number" component={ErrorText} />
            </div>
            <div className="mb-3">
              <button type="reset" className="btn btn-danger btn-sm">
                <i className="fas fa-trash-alt"></i> Reset
              </button>{" "}
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setSavedData(savedData1)}
              >
                <i className="fas fa-save"></i> Saved Data
              </button>{" "}
              <button
                type="submit"
                className="btn btn-success btn-sm"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                <i className="fas fa-save"></i> Save
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoadSavedData;
