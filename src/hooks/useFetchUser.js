import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchUser = (userCollection, id) => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      try {
        const usRef = await us(db, userCollection, id);
        const usSnap = await getDoc(usRef);

        setUsers(usSnap.data());
      } catch (error) {
        console.log(error);
        setError(error.message);
      }

      setLoading(false);
    };

    loadUsers();
  }, [userCollection, id]);

  console.log(users);

  return { users, loading, error };
};
