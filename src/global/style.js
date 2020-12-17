import {createGlobalStyle} from 'styled-components'

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        
        color: ${props => props.theme.text};

        font-family: 'Ubuntu', sans-serif;

        transition: background 200ms;
    }
    body{
        background: ${props => props.theme.background};
    }
    a{
        text-decoration: none;
    }
`

export default globalStyle