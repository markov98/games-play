import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from "./contexts/authContext";
import { login } from "./services/authService";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddGame from './components/AddGame/AddGame';
import Catalogue from './components/Catalogue/Catalogue';
import GameDetails from './components/GameDetails/GameDetails';


function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    try {
      const result = await login(values);
    
      setAuth(result);
  
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  }

  const values = {
    loginSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthencticated: !!auth.username
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
          </Routes>
        </main>

      </div>
    </AuthContext.Provider>
  )
}

export default App;
