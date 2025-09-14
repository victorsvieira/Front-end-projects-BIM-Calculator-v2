import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'
import ExtraInfo from './components/ExtraInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Homepage'>
        <h1>CALCULADORA DE IMC (Índice de Massa Corporal)</h1>
        <Calculator />
        <ExtraInfo />
       
      </div>
    </>
  )
}

export default App
