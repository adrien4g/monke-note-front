import React, {useEffect, useRef} from 'react'
import {useField} from '@unform/core'

import {InputComponent} from './style'

const Input = ({name, ...props}) =>{
    const inputRef = useRef(null)
    const {fieldName, registerField, error} = useField(name)

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return(
        <>
            {error ? <span>{error}</span>: null}
            <InputComponent placeholder={name} ref={inputRef} {...props}/>
            
        </>
    )
}

export default Input