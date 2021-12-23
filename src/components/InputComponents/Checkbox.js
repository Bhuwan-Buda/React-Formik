import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../ErrorText";

const CheckBox = ({ label, name, id, options, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label><br />
      <Field id={id} name={name} {...rest} className="form-control">
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />{" "}
                <label htmlFor={option.value} className="form-label">{option.key}</label><br />
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default CheckBox;
