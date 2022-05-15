import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

    // procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await Axios.put(URI+id, {
            title: title,
            content: content
        })
        navigate('/')
    }

    useEffect( () => {
        getBlogById()
    }, [])

    const getBlogById = async() => {
        const res = await Axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)

    }

    return(
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}

export default CompEditBlog