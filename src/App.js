import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Profile from './pages/Profiles';
import Header from './components/Header';
import RouteProtect from './components/RouteProtect';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "/register",
//     element: <Register/>
//   },
//   {
//     path: "/login",
//     element: <Login/>
//   },
//   {
//     path: "/profile",
//     element: <Profiles/>,
//   },
//   {
//     path: "/watch:watchId",
//     element: <div>Movie Detail Page</div>,
//   },
// ])

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<RouteProtect><Home /></RouteProtect>} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        {/* <Routes path='/watch:watchId' element={< />} /> */}
      </Routes>
    </>
    // <>
    //   <RouterProvider router={router}/>
    // </>
  );
}

export default App;
