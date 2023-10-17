import { useState } from "react"
import Alerts from "./Alert"
import Formulario from "./Formulario"
import Social from "./SocialButton"
import {faFacebook, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

function Registro() {
    const [alert, setAlert] = useState({tipo: "", msg:""})
    const alerta = (tipo, msg) => {
        setAlert({tipo, msg})
    }
    return (
      <div className="box">
      <h2>Crea una cuenta</h2>
      <div className="btnSocial">
        <Social icon={faFacebook}/>
        <Social icon={faGithub}/>
        <Social icon={faLinkedinIn}/>
      </div>
      <p>O usa tu email para registrarte</p>
      <Formulario/>
      <br />
      <Alerts type={alert.tipo} msg={alert.msg}/>
     </div>
    )
  }
  
  export default Registro