import React from 'react'

import {Container} from './styles'

const Modal = ({children = null, ...props}) =>{
    return(
        <Container {...props}>
            <div id='content'>
                {children}
            </div>
        </Container>
    )
}

export default Modal