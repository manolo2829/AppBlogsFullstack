import Axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


// damos la uri de nuestro backend
const URI = 'http://localhost:8000/users/'

const CompShowUsers = () => {
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate()



    const createUser = (e) => {
        e.preventDefault()
        if(password === passwordConfirm){
            Axios.post(URI, {email: email, username: username, password: password})
            navigate('/')
            return;
        }

        setError('Las contraseñas no coinciden')

    }

    return(
        <div className='container-lg p-5'>
            <ul className="list-group">
                <li className="list-group-item"><Link to='/createUser'>Crear un usuario</Link></li>
                <li className="list-group-item"><Link to='/useUser'>Iniciar sesion</Link></li>

            </ul>
        </div>
    )

}

export default CompShowUsers