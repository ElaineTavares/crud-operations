import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NewPost.css'

export default function NewPost() {

  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [algo, setAlgo] = useState("")
  const [mensagem, setMensagem] = useState("Crie o seu Post:")

  const createPost = async (e) =>{
    e.preventDefault()

    await blogFetch.post("/usuarios", {
      body: 
        algo, title, text
      
    })
    setMensagem("Post criado com sucesso!")

    setTimeout(() => {
      navigate("/")
    }, 3000);
  }

 
  


  return (
    <section className="new-post">
      <h2 className="h2">{mensagem}</h2>
      <form onSubmit={(e) => createPost(e)}>
        <input style={{display: "none"}} type="text" value={algo} onChange={(e) => setAlgo(e.target.value)} />
        <div className="form-control">
          <label>
            Título:
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Digite o título" id="title" />
          </label>
          <label>
            Conteúdo:
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} placeholder="Digite o conteúdo" id="content" />
          </label>
          <button className="btn-criar">Criar post</button>
        </div>
      </form>
    </section>
  )
}
