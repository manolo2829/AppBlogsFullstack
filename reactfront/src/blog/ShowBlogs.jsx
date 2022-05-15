import Axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

// damos la uri de nuestro backend
const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        getBlogs()
    }, [])
    
    // procedimiento para mostrar todos los blogs
    const getBlogs = async() => {
        // axios obtiene los datos de esta uri
        const res = await Axios.get(URI)
        // la agregamos a los blogs
        setBlogs(res.data)
    }

    // procedimineto para eliminar un blog
    const deleteBlog = async(id) => {
        // hacemos la conexion y le pasamos el metodo delete y el id asi el backend sabe que registro eliminar
        await Axios.delete(`${URI}${id}`)
        getBlogs()
    }


    return(
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Link to='/create' className='btn btn-primary my-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map( (blog) => {
                                    return(
                                        <tr key={ blog.id }>
                                            <td>{ blog.title }</td>
                                            <td>{ blog.content }</td>
                                            <td>
                                                <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                <button className='btn btn-danger' onClick={ () =>deleteBlog(blog.id)}><i className="fa-solid fa-delete-left"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>            
        </div>
    )

}

export default CompShowBlogs