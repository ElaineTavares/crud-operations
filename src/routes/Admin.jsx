import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import loading from '/loading.svg'
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import './Admin.css'

export default function Admin() {
    let navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [mensagem, setMensagem] = useState("Gerenciar Posts:")

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
        setMensagem("Post deletado com sucesso!")

        setTimeout(() => {
            setMensagem("Gerenciar Posts:")
        }, 3000);

    }

    useEffect(() => {
        getPosts()
    }, [])

    

  return (
    <section className="admin">
        <h1 className="h1">{mensagem}</h1>
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
