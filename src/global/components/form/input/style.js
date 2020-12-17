import styled from 'styled-components'

export const InputComponent = styled.input`
    font-weight: 700;
    font-size: 15px;
    text-align: center;

    resize: horizontal;

    padding: 5px;
    margin: 8px;

    border-radius: 30px;
    
    color: ${props => props.theme.textInput};

    &:focus{
        outline: none;
    }
`