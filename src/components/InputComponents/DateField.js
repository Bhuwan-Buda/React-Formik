import React from "react";
import DatePicker from "react-datepicker";
import { Field, ErrorMessage } from 'formik'
import ErrorText from '../ErrorText'
import 'react-datepicker/dist/react-datepicker.css'


const DateField = ({ label, id, name, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <Field id={id} name={name} className="form-control">
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              id={id}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default DateField;
