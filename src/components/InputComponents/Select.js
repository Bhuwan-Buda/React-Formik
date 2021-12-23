import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ErrorText from '../ErrorText'

const Select = ({ label, name, id, options, ...rest }) => {
    return (
        <div className='mb-3'>
            <label htmlFor={id} className='form-label'>{label}</label>
            <Field as="select" id={id} name={name} {...rest} className='form-control'>
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.key}</option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default Select
