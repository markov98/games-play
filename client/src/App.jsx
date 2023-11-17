import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./components/Home"
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
