import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateUser = (usCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateUser = async (uid, data) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const docRef = await doc(db, usCollection, uid);

      console.log(docRef);

      const updateUser = await updateDoc(docRef, data);

      console.log(updateUser);

      checkCancelBeforeDispatch({
        type: "UPDATED_DOC",
        payload: updateUser,
      });
    } catch (error) {
      console.log(error);
      checkCancelBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { updateUser, response };
};
