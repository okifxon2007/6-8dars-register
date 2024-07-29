import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/signup'
import Signin from './components/signin'


function App() {

  return (
    <>
      <div className="conta">
    
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
