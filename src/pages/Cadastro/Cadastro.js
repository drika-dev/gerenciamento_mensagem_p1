import styles from "./Cadastro.module.css";
import { useState } from "react";
import { useInsertUser } from "../../hooks/userRegister";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [formError, setFormError] = useState("");
  const [cadastroEfetuado, setCadastroEfetuado] = useState(false);

  const navigate = useNavigate();

  const { insertUser, response } = useInsertUser("registercontacts");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    insertUser({
      displayName,
      email,
      telefone,
    });

   /* setCadastroEfetuado(true);*/
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="body-us">
        <h2>
          {" "}
          Cadastre seu contato para receber
          <p></p>nossas notícias e atualizações
        </h2>
        <br />
        <br />
        <br />
        <br />
        <input
          placeholder="Nome"
          required=""
          type="text"
          name="displayName"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail do usuário"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="tel"
          name="telefone"
          required
          placeholder="Telefone"
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />
        {!response.loading && <button className="btn">Enviar Contato!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
        {(response.duplicateUser || formError) && (
          <p className="error">Cadastro duplicado</p>
        )}
        {cadastroEfetuado && (
        <div className={styles.popup}>
          <p>Cadastro efetuado com sucesso!</p>
        </div>
      )}
      </form>
    </div>
  );
};
export default Cadastro;
