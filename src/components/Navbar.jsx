import { Link } from 'react-router-dom'
import './Navbar.css'
import { LuMenuSquare } from "react-icons/lu";
import { useState } from 'react';



function Navbar() {

    const [mostraUl, setMostraUl] = useState(false)

    const toggleMenu = () =>{
        setMostraUl(!mostraUl)
    }

    return (
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <h2 className="navbar-h2">Crud Operations</h2>
        </Link>
  
        <LuMenuSquare onClick={toggleMenu} className="menu" />
  
        <ul onClick={toggleMenu} className={mostraUl ? ("navbar-ul-show") : ("navbar-ul-hidden")}>
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/new" className="navbar-link new-btn">
              New Post
            </Link>
          </li>
          <li>
            <Link to="/admin" className="navbar-link new-btn">
              Gerenciar
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
