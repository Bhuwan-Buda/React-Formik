import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const style = {
  margin: "50px auto",
};

const initialValues = {
  email: "",
  name: "",
  contact: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required !!"),
  email: Yup.string()
    .required("Email is required !!")
    .email("Invalid email address !!"),
  contact: Yup.string().required("Contact is required !!"),
  password: Yup.string().required("Password is required !!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ''], "Passwords must match")
    .required("Password should be confirmed.")
});

function FormikForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div className="container" style={style}>
        <Form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <Field
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="abc@example.com"
              name="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Fullname
            </label>
            <Field
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Jonny Deep"
              name="name"
            />
            <ErrorMessage name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              Contact
            </label>
            <Field
              type="number"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="123*******"
              name="contact"
            />
            <ErrorMessage name="contact" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput4" className="form-label">
              Password
            </label>
            <Field
              type="password"
              className="form-control"
              id="exampleFormControlInput4"
              placeholder="foaRafioadf@fja"
              name="password"
            />
            <ErrorMessage name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput5" className="form-label">
              Confirm Password
            </label>
            <Field
              type="password"
              className="form-control"
              id="exampleFormControlInput5"
              placeholder="foaRafioadf@fja"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" />
          </div>
          <button className="btn btn-primary btn-sm" type="submit">
            -Submit-
          </button>
        </Form>
      </div>
    </Formik>
  );
}

export default FormikForm;
