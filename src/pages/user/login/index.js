import React from 'react'
import axios from 'axios'
import {Form} from '@unform/web'
import {Link, useNavigate} from 'react-router-dom'

import {Container} from './style'
import Modal from '../../../global/components/modal/base'
import Input from '../../../global/components/form/input'
import Button from '../../../global/components/button/submit'

const Login = () =>{
    const navigate = useNavigate()
    const handleSubmit = async(data) =>{
        console.log('entrou')
        console.log(data)
        const response = await axios.get('https://monkenoteserver.herokuapp.com/user/login',{headers:data})
        if (response.data.error) return alert('error')
        localStorage.setItem('token', response.data.token)

        navigate('/home')
    }
    return(
        <Container>
            <Modal bg='false'>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Input type='email ' name='email' />
                    <Input type='password' name='password' />
                    <div>
                        <Button width='100' type='submit' >Entrar</Button>
                        <Link to='/user/register'>
                            <Button width='100'>Registrar</Button>
                        </Link>
                    </div>
                    
                </Form>
            </Modal>
        </Container>
    )
}

export default Login