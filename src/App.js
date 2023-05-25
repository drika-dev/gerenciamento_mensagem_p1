import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cadastro' element={<Cadastro />}></Route>
          <Route path='/Login' element={<Login />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
