import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './Context/AuthContext';
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';


import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import About from "./pages/About/About"
import Dashboard from "./pages/Dashboard/Dashboard"
import NewMessage from "./pages/NewMessage/NewMessage"

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className='App'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Cadastro' element={<Cadastro />}></Route>
            <Route path="/Login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/Dashboard" element={user ? <Dashboard/> : <Navigate to="/Login" />} />
            <Route path="/NewMessage" element={user ? <NewMessage/> : <Navigate to="/Login" />} />
            <Route path='/About' element={<About />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>

    </div>

  );
}

export default App;
