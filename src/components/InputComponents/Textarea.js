import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ErrorText from '../ErrorText'


const Textarea = ({ label, name, id, ...rest }) => {
    return (
        <div className='mb-3'>
            <label htmlFor={id}>{label}</label>
            <Field as='textarea' id={id} name={name} {...rest} className="form-control" />
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default Textarea
