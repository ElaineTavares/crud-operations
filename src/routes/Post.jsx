import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import loading from '/loading.svg'
import { Link, useParams } from "react-router-dom";
import "./Post.css"


export default function Post() {
    const [post, setPost] = useState([])
    const param = useParams()
    let {id} = param
    

    const getPosts = async () =>{
        try {
            const response = await blogFetch.get(`/usuarios/${id}`)
            const data = response.data
            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div className="post-unico">
        <h2 className="h2">Post:</h2>
           {!post.title ? (
            <div className="loading">
                <img  src={loading} alt="loading" />
                <Link className="btn" to="/">Voltar</Link>
            </div>
            
            ) : (
                
                <div className="container">
                    <h3>{post.title}</h3>
                    <p className="p-post">{post.text}</p>
                    <Link className="btn btn-post" to="/">Voltar</Link>
                </div>
            )}
    </div>
  )
}
