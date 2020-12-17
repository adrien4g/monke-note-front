import React from 'react'
import {Link} from 'react-router-dom'

//components
import Button from '../../global/components/button/submit'

//Styles
import {Container} from './style'
import {FaSmileWink} from 'react-icons/fa'

//Images
import logoName from '../../images/logos/logook.png'
import instagram from '../../images/social/instagram.svg'
import discord from '../../images/social/discord.svg'

const Welcome = () =>{
    return(
        <Container>
            <img src={logoName} alt='logo' />
            
            <h3>Saudações! O MonkeNote dá as boas-vindas!
                <FaSmileWink />
            </h3>

            <p>Eu sou uma <span id='social'>rede social</span> que está nascendo. 
                Vou te ajudar criar <span id='ties'>novos laços</span>, 
                sair pra <span id='role'>rolês</span>, chegar no <span id='crush'>crush</span> e muito mais! 
                Se cadastre e venha fazer parte!
            </p>

            <Link to='/user'><Button fontSize='20'>Acessar</Button></Link>

            <div>
                <p>Minhas redes sociais</p>

                <div id='icons'>

                    <a href='https://www.instagram.com/oi_sou_adrien/' target='_blank' rel="noopener noreferrer">
                        <img src={instagram} alt='instagram'/>
                    </a>
                    
                    <a href='https://discord.com/channels/768455993402589185/768455993964232726' target='_blank' rel="noopener noreferrer">
                        <img src={discord} alt='telegram'/>
                    </a>

                </div>
            </div>
        </Container>
    )
}

export default Welcome