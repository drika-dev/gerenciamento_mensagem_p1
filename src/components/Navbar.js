import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../Context/AuthContext";

const Navbar = () => {

    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    return <nav>
        <NavLink to="/" className={styles.tituloLAMIA}>
            <span> LAMIA &nbsp; - &nbsp; Liga Acadêmica de Medicina e Inteligência Artificial</span>
            <br />
            <br />
        </NavLink>
        <ul className={styles.navbar}>
            <li ><NavLink to="/" className={styles.NavLink}> <label>Home</label></NavLink></li>

            <li><NavLink to="/About" className={styles.NavLink}> Sobre</NavLink></li>
            {!user && (<>
                <li><NavLink to="/Cadastro" className={styles.NavLink}> Cadastro</NavLink></li>
                <li><NavLink to="/Login" className={styles.NavLink}> Login</NavLink></li>
            </>
            )}

            {user && (<>
                <li> <NavLink to="/NewMessage" className={styles.NavLink} >Nova mensagem</NavLink> </li>
                <li> <NavLink to="/Dashboard" className={styles.NavLink} > Dashboard </NavLink> </li>
            </>
            )}
            {user && (<li> <NavLink onClick={logout} className={styles.NavLink} >Sair</NavLink> </li>)}
            
        </ul>
    </nav>
};

export default Navbar;