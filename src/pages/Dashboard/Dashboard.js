import styles from "./Dashboard.module.css"
import { Link } from "react-router-dom";

import { useAuthValue } from "../../Context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
    const { user } = useAuthValue();

    const { users: usuarios } = useFetchDocument("registercontacts", null);

    const { deleteDocument } = useDeleteDocument("registercontacts");
    console.log(usuarios);

    return (
        <div className="contact-us">
            <h2>Dashboard</h2>
            <p>Gerencie os usuários cadastrados</p>
            <div className={styles.post_header}>
                <span>Nome</span>
                <span>Email</span>
                <span>Telefone</span>
            </div>
            {usuarios &&
                usuarios.map((post) => (
                    <div className={styles.post_row} key={post.id}>
                        <p>{post.displayName}</p>
                        <div className={styles.actions}>
                            <Link to={`/posts/${post.id}`} className="btn btn-outline">
                                Ver
                            </Link>
                            <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                                Editar
                            </Link>
                            <button
                                onClick={() => deleteDocument(post.id)}
                                className="btn btn-outline btn-danger"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Dashboard;