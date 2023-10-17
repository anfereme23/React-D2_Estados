import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = ({icon}) =>{
    return (
        <button id="btn-image">
            <FontAwesomeIcon icon={icon} size="xl"/>
        </button> 
    )
}

export default Social 