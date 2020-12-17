import React from 'react'
import {
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';

import Welcome from '../pages/welcome'
import Login from '../pages/user/login'
import Register from '../pages/user/register'
import Home from '../pages/home'

import authenticationVerify from '../services/auth'


const PrivateRoute = ({element:Element, ...rest}) =>
    <Route {...rest} element={authenticationVerify()
        ?Element
        :<Navigate to='/' />
    }/>

const MainRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/user' element={<Login/>} />
            <Route path='/user/register' element={<Register/>}/>
            <PrivateRoute path='/home' element={<Home/>} />
        </Routes>
    )
}

export default MainRoutes