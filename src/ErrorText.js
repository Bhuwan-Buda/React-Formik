import React from 'react'

function ErrorText(props) {
    return (
        <i className='text-danger'>
            *{props.children}*
        </i>
    )
}

export default ErrorText
