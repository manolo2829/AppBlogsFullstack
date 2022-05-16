import Axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// damos la uri de nuestro backend
const URI = 'http://localhost:8000/users/'

const CompUseUser = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [res, setRes] = useState(null);

    const iniciarSesion = async(e) => {
        e.preventDefault()
        setRes(await Axios.get(URI+email))
        if(!res){
            console.log('no se encontro ese usuario')
            return
        }
        setUsername(res.data.username)
        console.log(res.data)
    }

    return(
        <div className='container-lg p-5'>
            <form onSubmit={iniciarSesion}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => {setEmail(e.target.value)}} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">password</label>
                    <input type="text" className="form-control" id="exampleInputPassword2" onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-primary">iniciar sesion</button>
            </form>

            {
                res ? (
                    <p className='text-primary'>{res.data.username}</p>
                ):(
                    <p className='text-danger'>no hay usuario</p>
                )
            }
        </div>
    )
}

export default CompUseUser