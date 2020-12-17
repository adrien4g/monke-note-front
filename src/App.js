import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Version from './global/components/version'

import Routes from './services/routes'

//Themes
import {ThemeProvider} from 'styled-components'
import Style from './global/style'
import themes from './global/themes'

const App = () =>{
  return(
    <>
    <ThemeProvider theme={themes['purple']}>
      <Router>
        <Routes/>
        <Style />
      </Router>
    </ThemeProvider>
    <Version />
    </>
  )
}
export default App;
