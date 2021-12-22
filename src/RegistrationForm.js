import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import ErrorText from "./ErrorText";
import * as Yup from "yup";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  phoneNumbers: [""],
  password: "",
  confirmPassword: "",
  comments: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  address: Yup.string().required("Required"),
  phoneNumbers: Yup.array().of(
    Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, 'Phone number should be atleast 10 digits.')
      .required("Required")
  ),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must match")
    .required("Password confirmation required"),
  comments: Yup.string().required("Required"),
});

function RegistrationForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="container mt-3 mb-3 p-3 form-control">
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label text-primary">
            First Name
          </label>
          <Field
            type="text"
            id="firstname"
            name="firstname"
            className="form-control"
          />
          <ErrorMessage name="firstname" component={ErrorText} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label text-primary">
            Last Name
          </label>
          <Field
            type="text"
            id="lastname"
            name="lastname"
            className="form-control"
          />
          <ErrorMessage name="lastname" component={ErrorText} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-primary">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
          <ErrorMessage name="email" component={ErrorText} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label text-primary">
            Address
          </label>
          <Field
            type="text"
            id="address"
            name="address"
            className="form-control"
          />
          <ErrorMessage name="address" component={ErrorText} />
        </div>
        <div className="mb-3">
          <label htmlFor="pnumber" className="form-label text-primary">
            Provide phone numbers
          </label>
          <FieldArray name="phoneNumbers">
            {(props) => {
              const { push, remove, form } = props;
              const { values } = form;
              const { phoneNumbers } = values;
              return (
                <div>
                  {phoneNumbers.map((phoneNumber, index) => (
                    <div key={index}>
                      <Field
                        name={`phoneNumbers[${index}]`}
                        className="form-control"
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm m-1"
                          onClick={() => remove(index)}
                        >
                          Del
                        </button>
                      )}
                      <button
                        type="button"
                        className="btn btn-success btn-sm m-1"
                        onClick={() => push("")}
                      >
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
          <ErrorMessage name="phoneNumbers" component={ErrorText} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-primary">
            Password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
          <ErrorMessage name="password" component={ErrorText} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label text-primary">
            Confirm Password
          </label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
          />
          <ErrorMessage name="confirmPassword" component={ErrorText} />
        </div>
        <div className="mb-3">
          <label htmlFor="comments" className="form-label text-primary">
            Comments
          </label>
          <Field
            as="textarea"
            id="comments"
            name="comments"
            className="form-control"
          />
          <ErrorMessage name="comments" component={ErrorText} />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-success btn-sm justify-right"
          >
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
