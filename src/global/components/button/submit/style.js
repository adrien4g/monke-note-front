import styled from 'styled-components'

export const ButtonComponent = styled.button`
    background: none;

    border: solid 3px ${props => props.theme.text};
    border-radius: 30px;
    
    padding: 8px 12px;
    margin: 5px;
    
    cursor: pointer;

    font-weight: 700;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '14px'};

    width: ${props => props.width? `${props.width}px` : 'auto'};

    &:hover{
        background: ${props => props.theme.button};
    }
    &:focus{
        outline: none;
        
    }
`