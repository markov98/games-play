import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddGame from './components/AddGame/AddGame';
import Catalogue from './components/Catalogue/Catalogue';

function App() {

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add-game' element={<AddGame />} />
          <Route path='/catalogue' element={<Catalogue />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
