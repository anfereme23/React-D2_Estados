import Alert from 'react-bootstrap/Alert'

function Alerts ({msg, type}){
    return(
        <Alert variant={type}>{msg}</Alert>
    )
}

export default Alerts