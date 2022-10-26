import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./../context/AuthContext";

const pages = ['Home', 'Series', 'Movies', 'New and Popular', 'My List'];
const settings = ['Logout'];

const Header = () => {
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
        <div className="flex item-center justify-between p-4 z-10">
            <a href="/" className="logo">
                <img src={logo} alt="Logo" className="logo" style={{height: '8vh'}} />
            </a>
            { (user?.email) ? (
                <div className="header" style={{height: '8vh', padding: '1em'}}>
                    <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white" onClick={handleLogOut}>Sign Out</button>
                </div>
            ) : (
                <div className="header" style={{height: '8vh', padding: '1em'}}>
                    <Link to={'/login'}>
                        <button className="bg-red-600 px-6 py-2 mx-2 rounded cursor-pointer text-white">Sign In</button>
                    </Link>
                    <Link to={'/register'}>
                        <button className="bg-red-600 px-6 py-2 mx-2 rounded cursor-pointer text-white">Sign Up</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Header;