import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()

    // procedimineto guardar
    
    const store = async (e) => {
        e.preventDefault()
        Axios.post(URI, {title: title, content: content})
        navigate('/')
    }

    return(
        <div>
            <h3>Create POST</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                        type="text"
                        onChange={ (e) => {setTitle(e.target.value)}}
                        className='form-control'
                        value={title}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea 
                        type="text"
                        onChange={ (e) => {setContent(e.target.value)}}
                        className='form-control'
                        value={content}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}


export default CompCreateBlog