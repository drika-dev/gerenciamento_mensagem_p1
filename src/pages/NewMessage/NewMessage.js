import styles from "./NewMessage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewMessage = () => {
  const [titulo, setTitulo] = useState("");
  const [corpo, setCorpo] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // check values
    if (!titulo || !corpo) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log({
      titulo,
      corpo,
    });

    if (formError) return;
  };

  return (
    <div className="body-us">
      <h2>Nova Mensagem</h2>
      <p></p>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <label>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
          />
        </label>
        <label>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo da mensagem"
            onChange={(e) => setCorpo(e.target.value)}
            value={corpo}
          ></textarea>
        </label>
        <button className="btn">Enviar Mensagem</button>
      </form>
    </div>
  );
};

export default NewMessage;
