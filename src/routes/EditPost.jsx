import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './EditPost.css'

export default function EditPost() {
    const navigate = useNavigate()

    const param = useParams()
    let {id} = param

    const [algo, setAlgo] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [mensagem, setMensagem] = useState("Edit Post:")
    

    const getPosts = async () =>{
        try {
            const response = await blogFetch.get(`/usuarios/${id}`)
            const data = response.data
            setTitle(data.title)
            setText(data.text)
        } catch (error) {
            console.log(error)
        }
    }


    const editPost = async (e) =>{
        e.preventDefault()
    
        await blogFetch.post("/usuarios", {
          body: 
            algo, title, text
          
        })
        setMensagem("Post editado com sucesso!")
    
        setTimeout(() => {
          navigate("/admin")
        }, 3000);
      }

    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div className="edit-post">
        <h2 className="h2">{mensagem}</h2>
        <form onSubmit={editPost}>
        <input type="text" style={{display: "none"}} value={algo} onChange={(e) => setAlgo(e.target.value)} /> 
            <div className="form-control">
            <label>
                Título:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> 
            </label>
            <label>
                Conteúdo:
                <textarea rows={5} value={text} onChange={(e) => setText(e.target.value)} /> 
            </label>
            <button className="btn btn-editar">Editar post</button>
            </div>
        </form>
        
    </div>
    
  )
}
