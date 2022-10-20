import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/profile",
    element: <div>Profile Page</div>,
  },
  {
    path: "/watch:watchId",
    element: <div>Movie Detail Page</div>,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
