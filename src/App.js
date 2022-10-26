import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Profile from './pages/Profiles';
import RouteProtect from './components/RouteProtect';
import Watch from './components/Watch';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<RouteProtect><Home /></RouteProtect>} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:watchId' element={<Watch />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App