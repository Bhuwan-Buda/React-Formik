import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import * as Yup from "yup";
import "../style.css";

const dropDownValues = [
  { key: "Select a country", value: "" },
  { key: "Nepal", value: "nepal" },
  { key: "India", value: "india" },
  { key: "China", value: "china" },
  { key: "Bhutan", value: "bhutan" },
];

const radioValues = [
  { key: "Male", value: "Male" },
  { key: "Female", value: "Female" },
];

const checkValues = [
  { key: "HTML", value: "html" },
  { key: "CSS", value: "css" },
  { key: "ReactJs", value: "reactjs" },
  { key: "Django", value: "django" },
];

const initialValues = {
  name: "",
  email: "",
  address: "",
  number: "",
  comment: "",
  country: "",
  gender: "",
  skill: [],
  date: null,
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  address: Yup.string().required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Phone number should have atleast 10 digits.")
    .required("Required"),
  comment: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  skill: Yup.array().required("Required").min(1, "You must have atleast one skill"),
  date: Yup.date().required("Required").nullable(),
});

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="container lsd p-3 form-control text-white">
            <FormikControl
              control="input"
              label="Name"
              type="text"
              id="name"
              name="name"
              placeholder="Rowan Atkinson"
            />
            <FormikControl
              control="input"
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="abc@example.com"
            />
            <FormikControl
              control="input"
              label="Address"
              type="text"
              id="address"
              name="address"
              placeholder="California"
            />
            <FormikControl
              control="input"
              label="Phone"
              type="number"
              id="number"
              name="number"
              placeholder="+97798********"
            />
            <FormikControl
              control="textarea"
              label="Comments"
              id="comment"
              name="comment"
              placeholder="Your comments"
            />
            <FormikControl
              control="select"
              label="Country"
              id="country"
              name="country"
              options={dropDownValues}
            />
            <FormikControl
              control="radio"
              label="Gender:"
              id="gender"
              name="gender"
              options={radioValues}
            />
            <FormikControl
              control="checkbox"
              label="Your Skills:"
              id="skill"
              name="skill"
              options={checkValues}
            />
            <FormikControl
              control="date"
              label="Birth Date"
              id="date"
              name="date"
            />
            <button type="reset" className="btn btn-outline-danger btn-sm">
              <i className="fas fa-trash-alt"></i> Reset
            </button>{" "}
            <button
              type="submit"
              className="btn btn-outline-primary btn-sm"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              <i className="fas fa-save"></i> Save
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
