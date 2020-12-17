import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background: ${props => props.bg?'none':'rgba(0, 0, 0, 0.8)'};

    #content{
        display: flex;
        align-items: center;
        align-items: center;
        flex-direction: column;
        width: auto;
        height: auto;
        
        padding: 20px;
        
        background: ${props => props.theme.window};
        border-radius: 30px;

        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
`