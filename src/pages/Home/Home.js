import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="contact-us">
      <main className={styles.paragrafo}>
        <section>
          <h1>Bem-vindo à LAMIA</h1>
          <p>
            A Liga Acadêmica de Medicina e Inteligência Artificial (LAMIA) é uma
            organização dedicada a promover a integração entre a medicina e a
            inteligência artificial.
          </p>
          <p>
            Nossa missão é explorar o potencial da inteligência artificial para
            avançar os cuidados de saúde, desenvolver soluções inovadoras e
            proporcionar um ambiente de aprendizado e pesquisa para estudantes e
            profissionais interessados nesse campo.
          </p>
        </section>

        <section>
          <h2>Nossos Objetivos</h2>
          <ul>
            <li>
              Estimular o estudo e a pesquisa na intersecção entre medicina e
              inteligência artificial
            </li>
            <li>
              Promover eventos, palestras e workshops relacionados ao tema
            </li>
            <li>
              Desenvolver projetos práticos que apliquem inteligência artificial
              na área da saúde
            </li>
            <li>
              Fomentar o debate e a troca de conhecimentos entre os membros da
              liga
            </li>
            <li>
              Colaborar com outras instituições acadêmicas e profissionais da
              área
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};
export default Home;
