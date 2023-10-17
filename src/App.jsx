import './App.css'
import Registro from './components/Registro'
import { useState } from 'react'


function App() {

  const [alertMsg, setAlertMsg] = useState('')
  const [alertType, setAlertType] = useState('')

  const alerta = (msg, type) => {
    setAlertMsg(msg)
    setAlertType(type)
}
  return (
    <>
    <Registro/>
    </>
  )
}

export default App
