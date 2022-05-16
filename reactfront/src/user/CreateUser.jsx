import Axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


// damos la uri de nuestro backend
const URI = 'http://localhost:8000/users/'

const CompCreateUser = () => {
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
            <form onSubmit={createUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => {setEmail(e.target.value)}}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">username</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">password</label>
                    <input type="text" className="form-control" id="exampleInputPassword2" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword3" className="form-label">confirm password</label>
                    <input type="text" className="form-control" id="exampleInputPassword3" onChange={(e) => {setPasswordConfirm(e.target.value)}}/>
                </div>
                {
                    error ?(
                        <p className='text-danger h1 text-center w-100'>{error}</p>
                    ):(
                        <span className='d-none'></span>
                    )
                }
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )

}

export default CompCreateUser