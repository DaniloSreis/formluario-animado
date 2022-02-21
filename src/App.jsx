import React from 'react'
import InputEmail from './components/InputEmail/InputEmail'
import InputPassword from './components/Inputpassword/inputPassword'
import './components/animacao/formulario.css'
import './App.css'

function handleClick(event) {
  event.preventDefault()
}

function App() {
  return (
    <div className="containerForm" >
      <h1 >Enter the Rocket</h1>
      <form action="">
        <InputEmail />
        <InputPassword />
        <button onClick={handleClick}>Login</button>
      </form>

    </div>
  )
}

export default App
