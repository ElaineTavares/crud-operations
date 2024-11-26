import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import loading from '/loading.svg'

import { Link } from "react-router-dom";

import './Admin.css'

export default function Admin() {
    const [posts, setPosts] = useState([])

    const getPosts = async () =>{
        try {
            const response = await blogFetch.get("/usuarios")
            const data = response.data.sort((a, b) => b.id - a.id)
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }


    const deletePost = async(id) =>{
        console.log("DELETADO", id)
        await blogFetch.delete(`/usuarios/${id}`)
        getPosts()
    }

    useEffect(() => {
        getPosts()
    }, [])

    

  return (
    <section className="admin">
        <h1 className="h1">Gerenciar Posts</h1>
        {posts.length === 0 ? (
        <img className="loading" src={loading} alt="loading" />
        ) : (
        posts.map((post) => post.title == null ? null: (
            <div className="card" key={post.id}>
                <h2 className="h2">{post.title}</h2>
                <h3 className="h3">{post.text}</h3>
                <div className="action">
                    <Link to={`/usuarios/edit/${post.id}`} className="btn">Editar</Link>
                    <button onClick={() => deletePost(post.id)} className="btn btn-deletar">Excluir</button>
                </div>
            </div>
        )))}
    </section>
  )
}
