import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from "./contexts/authContext";
import { login, logout, register } from "./services/authService";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddGame from './components/AddGame/AddGame';
import Catalogue from './components/Catalogue/Catalogue';
import GameDetails from './components/GameDetails/GameDetails';
import Logout from "./components/Logout/Logout";


function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    try {
      const result = await login(values.email, values.password);
    
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  }

  const registerSubmitHandler = async (values) => {
    try {
      if (values['password'] !== values['confirm-password']) {
        throw new Error('Passwords do not match!')
      }

      register(values.email, values.password);

      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  }

  const logoutHandler = async () => {
    try {
      await logout();

      setAuth({});
      localStorage.clear('accessToken');

      navigate('/');
    } catch (err) {
      alert(err);
    }
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/add-game' element={<AddGame />} />
            <Route path='/catalogue' element={<Catalogue />} />
            <Route path="/games/:gameId" element={<GameDetails />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </main>

      </div>
    </AuthContext.Provider>
  )
}

export default App;
