import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LogInSignUpForm from './components/LogInSignUpForm'
import ShowPost from './components/ShowPost'
import LogAuth from './components/LogAuth'



const App = () => {



  return (
    <>
      <Routes>
        <Route path="/" element={<LogInSignUpForm />} />
        <Route path='/showpost' element={<ShowPost />} />
        {/* <Route path=  */}
      </Routes>
    </>
  )
}

export default App
