import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../ErrorText";

const Radio = ({ label, name, id, options, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>{" "}
      <Field id={id} name={name} {...rest} className="form-control">
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />{" "}
                <label htmlFor={option.value} className="form-label">{option.key}</label>{" "}
              </React.Fragment>
            );
          });
        }}
      </Field><br />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default Radio;
