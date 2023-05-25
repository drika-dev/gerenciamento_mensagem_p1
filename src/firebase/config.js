import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBgd6umCbh89aOwvEnhaiLHNLEKdOvnhAk",
    authDomain: "gerenciamentomensagem-96b22.firebaseapp.com",
    projectId: "gerenciamentomensagem-96b22",
    storageBucket: "gerenciamentomensagem-96b22.appspot.com",
    messagingSenderId: "998533193809",
    appId: "1:998533193809:web:baa5f87343bf297b6b5870"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };