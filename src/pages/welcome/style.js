import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 90vw;
    max-width: 1200px;

    height: 90vh;
    max-height: 700px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    box-sizing: border-box;

    img{
        width: 230px;
    }
    
    h3{
        font-size: 32px;
        text-align: center;

        max-width: 90%;

        display: flex;
        align-items: center;

        svg{
            margin-left: 10px;
        }
    }

    p{
        font-size: 20px;
        margin-top: 15px;
        max-width: 80%;
        text-align: center;

        #social{
            color: #fab1a0;
        }
        #ties{
            color: #ffeaa7;
        }
        #role{
            color: #55efc4;
        }
        #crush{
            color: #ff7675;
        }
    }
    h2{
        text-align: center;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        width: 100%;

        #icons{
            display: flex;
            flex-direction: row;

            cursor: pointer;
            img{
                width: 30px;
                margin: 5px 10px;
                transition: 200ms;

                &:hover{
                    opacity: 0.6;
                }
            }
        }
    }

    @media(max-width: 900px){
        h3{
            flex-direction: column;

            svg{
                margin-left: 0;
                margin-top: 10px;
            }
        }
        p{
            max-width: 90%;
        }
    }
    @media(max-width: 520px){
        h3{
            font-size: 25px;
        }
        p{
            font-size: 18px;
        }
        h2{
            font-size: 20px;
        }
    }
    @media(max-height: 470px){
        img{
            width: 180px;
        }
        h3{
            font-size: 20px;
        }
        p{
            font-size:15px;
        }

        h2{
            font-size: 18px;
        }
    }

`