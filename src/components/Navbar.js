import {React,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "./../context/AuthContext";

function Navbar() {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    // console.log(user.email)

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to={'/'}>
        <h1 className='text-red-600 font-bold cursor-pointer'>MOVIES</h1>
      </Link>
      { (user?.email) ? (
        <div>
          <div>
              <Link to={'/search'}>
                <span>Search</span>
              </Link>
          </div>
          <div>
            <button className='bg-red-600 px-6 py-2 cursor-pointer' onClick={handleLogOut}>Sign Out</button>
          </div>
        </div>
      ) : (
        <div>
          <Link to={'/login'}>
            <button className='text-white pr-5'>Sign In</button>
          </Link>
          <Link to={'/register'}>
            <button className='bg-red-600 px-6 py-2 cursor-pointer'>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar