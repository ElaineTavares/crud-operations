import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import loading from '/loading.svg'


import { Link } from "react-router-dom";

import './Home.css'


export default function Home() {
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

    useEffect(() => {
        getPosts()
    }, [])



  return (
    <section className="home">
        <h1>Posts:</h1>
        <div className="container-home">
            {posts.length === 0 ? (
            <img className="loading" src={loading} alt="loading" />
            ) : (
            posts.map((item) =>
                item.title == null ? null : (
                <div key={item.id} className="post">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Link className="btn" to={`usuarios/${item.id}`}>
                    Ler mais
                    </Link>
                </div>
                )
              )
            )}
        </div>
    </section>
  )
}



                
   