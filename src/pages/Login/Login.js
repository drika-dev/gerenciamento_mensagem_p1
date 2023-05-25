import styles from "./Login.module.css"
const Login = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <form  class="contact-us">
                <title> <h1>Login</h1>  </title>
                <input name="customerEmail" placeholder="Email" type="email" />
                <input name="customerPassword" placeholder="Senha" type="password" />
                <button type="button">Enviar Dados</button>
            </form>
            <br />
            <br />
        </div>
        
    )
}
export default Login