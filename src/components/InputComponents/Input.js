import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ErrorText from '../ErrorText'
import '../style.css'

const Input = ({ label, name, id, ...rest }) => {
    return (
        <div className='mb-3'>
            <label htmlFor={id} className='form-label'>{label}</label>
            <Field id={id} name={name} {...rest} className='form-control'/>
            <ErrorMessage name={name} component={ErrorText}/>
        </div>
    )
}

export default Input
