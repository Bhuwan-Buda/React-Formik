import React from "react";
import Input from "../InputComponents/Input";
import Radio from "../InputComponents/Radio";
import Select from "../InputComponents/Select";
import Textarea from "../InputComponents/Textarea";
import CheckBox from "../InputComponents/Checkbox";
import DateField from "../InputComponents/DateField";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
        return <Select {...rest} />;
    case "radio":
        return <Radio {...rest} />;
    case "checkbox":
        return <CheckBox {...rest} />;
    case "date":
      return <DateField {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
