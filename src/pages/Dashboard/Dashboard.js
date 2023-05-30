import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../Context/AuthContext";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { useDeleteUsers } from "../../hooks/useDeleteUsers";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { users: us } = useFetchUsers("registercontacts", null, uid);

  const { deleteDocument } = useDeleteUsers("registercontacts");

  console.log(uid);
  console.log(us);

  return (
    <div className="contact-us">
      <h1>Dashboard</h1>
      <h3>Gerencie os contatos cadastrados</h3>
      <br />
      <br />
      <br />
      {us && us.length === 0 ? (
        <div className={styles.nousers}>
          <p>Não foram encontrados cadastros</p>
        </div>
      ) : (
        <div className={styles.users_header}>
          <div>
            <span>Nome</span>
          </div>
          <div>
            <span>Email</span>
          </div>
          <div>
            <span>Telefone</span>
          </div>
          <div>
            <span>Ações</span>
          </div>
        </div>
      )}

      {us &&
        us.map((user) => (
          <div className={styles.users_row} key={user.id}>
            <div>
              <span>{user.displayName}</span>
            </div>
            <div>
              <span>{user.email}</span>
            </div>
            <div>
              <span>{user.telefone}</span>
            </div>

            <div className={styles.actions}>
              <Link onClick={() => deleteDocument(user.id)}>Excluir</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
