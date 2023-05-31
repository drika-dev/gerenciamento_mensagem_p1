import styles from "./Login.module.css"
import { useAuthentication } from "../../hooks/useAuthentication";
import { useEffect, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password,
        };

        const res = await login(user);

        console.log(res);
    };

    useEffect(() => {
        console.log(authError);
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div>
            <form class="body-us" onSubmit={handleSubmit}>
                <title> <h1>Login</h1>  </title>
                <input type="email" name="email" required placeholder="E-mail do usuário" onChange={(e) => setEmail(e.target.value)} value={email}
          />
                <input type="password" name="password" required placeholder="Insira a senha" onChange={(e) => setPassword(e.target.value)} value={password}
          />
                {!loading && <button className="btn">Entrar</button>}
                {loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {error && <p className="error">{error}</p>}
            </form>
        </div>

    )
}
export default Login