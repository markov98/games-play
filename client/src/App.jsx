import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddGame from './components/AddGame/AddGame';
import Catalogue from './components/Catalogue/Catalogue';
import GameDetails from './components/GameDetails/GameDetails';
import AuthContext from "./contexts/authContext";

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
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
