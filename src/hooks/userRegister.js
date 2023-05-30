import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp, query, where, getDocs } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
  duplicateUser: false,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null, duplicateUser: false };
    case "INSERTED_DOC":
      return { loading: false, error: null, duplicateUser: false };
    case "ERROR":
      return { loading: false, error: action.payload, duplicateUser: false };
    case "DUPLICATE_USER":
      return { loading: false, error: null, duplicateUser: true };
    default:
      return state;
  }
};

export const useInsertUser = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const checkDuplicateUser = async (email, phone) => {
    try {
      const emailQuery = query(collection(db, docCollection), where("email", "==", email));
      const emailDocs = await getDocs(emailQuery);
      const emailExists = !emailDocs.empty;

      const phoneQuery = query(collection(db, docCollection), where("phone", "==", phone));
      const phoneDocs = await getDocs(phoneQuery);
      const phoneExists = !phoneDocs.empty;

      return emailExists || phoneExists;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const insertUser = async (usuers) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const newUser = { ...usuers, createdAt: Timestamp.now() };

      const inserterdUsers = await addDoc(
        collection(db, docCollection),
        newUser
      );

      checkCancelBeforeDispatch({
        type: "INSERTED_DOC",
        payload: inserterdUsers,
      });
    } catch (error) {
      checkCancelBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertUser, response };
};
