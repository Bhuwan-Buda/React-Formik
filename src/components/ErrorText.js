import React from 'react'

const ErrorText = (props) => {
    return (
        <i className='text-danger'>
            *{props.children}
        </i>
    )
}

export default ErrorText
