import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './index.css'   
import Box from './components/Box.jsx'
import Title from './components/Title.jsx'

const App = () => {
  return (
    <div >
      <Title/>
      <Box></Box>
    </div>
  )
}

export default App
