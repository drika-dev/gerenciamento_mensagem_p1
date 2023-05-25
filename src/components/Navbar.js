import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
    return <nav>
        <NavLink to="/">
           <div className={styles.tituloLAMIA}> LAMIA &nbsp; - &nbsp;
           <span className={styles.titulol}>Liga Acadêmica de Medicina e Inteligência Artificial</span>
            </div> 
            <br/>
            <br/>
        </NavLink>

        <ul className={styles.navbar}>
            <li><NavLink to="/"> Home</NavLink></li>
            <li><NavLink to="/Cadastro"> Cadastro</NavLink></li>
            <li><NavLink to="/Login"> Login</NavLink></li>
            <li><NavLink to="/"> Home</NavLink></li>
            <li><NavLink to="/"> Home</NavLink></li>
        </ul>
    </nav>

};

export default Navbar;