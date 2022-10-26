import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Profile from './pages/Profiles';
import Header from './components/Header';
import RouteProtect from './components/RouteProtect';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path='/' element={<RouteProtect><Home /></RouteProtect>} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        {/* <Routes path='/watch:watchId' element={< />} /> */}
      </Routes>
    </>
  );
}

export default App