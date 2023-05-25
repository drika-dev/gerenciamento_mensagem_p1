import styles from "./Cadastro.module.css"
import { useState } from "react";
import { useInsertUser } from "../../hooks/userRegister"

const Cadastro = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [formError, setFormError] = useState("");

    /*const navigate = useNavigate();

    */const { insertUser, response } = useInsertUser("registercontacts");
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");
        console.log({
            displayName,
            email,
            telefone
        });
        /*
            if(formError) return
        
            insertDocument({
              title,
              image,
              body,
              tags: tagsArray,
              uid: user.uid,
              createdBy: user.displayName,
            });
        
            // redirect to home page
            navigate("/");*/
    };

    return (
        <div className={styles.contactus}>
            <h2> Cadastre seu contato para receber
                <p></p>nossas notícias e atualizações</h2>
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <input placeholder="Nome" required="" type="text" name="displayName" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
                <input type="email" name="email" required placeholder="E-mail do usuário" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="tel" name="telefone" required placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} value={telefone} />
                {!response.loading && <button className="btn">Enviar Contato!</button>}
                {response.loading && (
                    <button className="btn" disabled>
                        Aguarde.. .
                    </button>
                )}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>
        </div>
    )
}
export default Cadastro