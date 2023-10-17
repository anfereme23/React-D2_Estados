import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Alerts from "./Alert"

const Formulario = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confirmContras, setConfirmContras] = useState('')
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const [alertMsg, setAlertMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const alerta = (msg, type) => {
        setAlertMsg(msg)
        setAlertType(type)
    }
    //validacion de datos
    const validarDatos = (e) => {
        e.preventDefault()
    
        if(nombre === '' || email === '' || contraseña === '' || confirmContras === ''){
            alerta("Faltan campos por llenar", "danger")
            return
        }
        if(!emailPattern.test(email)){
            alerta("El email no tiene un formato valido", "danger")
            return
        }
        if(contraseña !== confirmContras){
            alerta("Las contraseñas no son iguales", "danger")
             return
        }
        alerta("El usuario fue registrado con exito", "success")
        setNombre('')
        setEmail('')
        setContraseña('')
        setConfirmContras('')
    }
    return(
       <>
        <Form onSubmit={validarDatos} noValidate>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)} value={email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)} value={contraseña} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirm">
                <Form.Control type="password" placeholder="Confirma tu contraseña" onChange={(e) => setConfirmContras(e.target.value)} value={confirmContras}/>
            </Form.Group>
            <Button variant="success" type="submit" className="btnRegistro">
                Registrarse
            </Button>
        </Form>
        <Alerts msg={alertMsg} type={alertType}/>
       </> 
    )
}

export default Formulario