import React from 'react'

import {ButtonComponent} from './style'

const Button = ({children, ...props}) =>{
    return(
        <ButtonComponent {...props}>
            {children}
        </ButtonComponent>
    )
}

export default Button