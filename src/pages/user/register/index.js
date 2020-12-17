import React, {useRef} from 'react'
import { Form } from '@unform/web'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

//Components
import Modal from '../../../global/components/modal/base'
import Input from '../../../global/components/form/input'
import Button from '../../../global/components/button/submit'

import { Container } from './style'

const Register = () => {
  const formRef = useRef(null)
  const navitate = useNavigate()
  
  const handleSubmit = async (data) =>{
    const errorMessages = {}

    const schema = Yup.object().shape({
      username: Yup.string()
      .required('O nome é obrigatório'),
      email: Yup.string()
        .email('Digite um email válido')
        .required('O email é obrigatório!'),
      password: Yup.string()
        .min(8,'No mínimo 8 caracteres')
        .required('A senha é obrigatória'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas não são iguais'),
      key: Yup.string().required('Insira um token')
    })
  try{
    await schema.validate(data, {
      abortEarly: false,
    })
    
  }catch(e){   
      if (e instanceof Yup.ValidationError){
        e.inner.forEach(error =>{
          errorMessages[error.path] = error.message
        })
        return formRef.current.setErrors(errorMessages)
      }
    }
    const response = await axios.post('https://monkenoteserver.herokuapp.com/user/new', data)
    console.log(response)
    if (response.data.error) return formRef.current.setErrors({email: 'Email já cadastrado!.'})

    if (response.data.token){
      localStorage.setItem('token', response.data.token)
      navitate('/home')
    }else{
      formRef.current
      .setErrors({key: 'Token inválido.'})
    }
  }

  return (
    <Container>
      <Modal bg='false'>
        <h2>Junte-se a nós!</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type='text' name='username' placeholder='Nome' />
          <Input type='text' name='email' />
          <Input type='password' name='password' />
          <Input type='password' name='passwordConfirm' placeholder='confirm password'/>
          <Input type='text' name='key' />
          
          <Button type='submit'>Confirmar</Button>
        </Form>
      </Modal>
    </Container>
  )
}

export default Register