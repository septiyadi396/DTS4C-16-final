import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from '../../context/AuthContext';
import BgImage from "./../../utils/bgImage";

const Login = () => {
    const bg = BgImage()
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    };

    return (
        <div className="w-full">
            <img
                className='hidden sm:block absolute w-full h-screen object-cover'
                src={bg.bgImage}
                alt='/'
            />
            <div className='bg-black/40 fixed top-0 left-0 w-full h-screen'>
                <div className='fixed w-full px-4 py-8 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign In</h1>
                            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                            <form
                                onSubmit={handleSubmit}
                                className='w-full flex flex-col py-4'
                            >
                                <input
                                    name="email"
                                    type="email"
                                    // variant="filled"
                                    placeholder="name@mail.com"
                                    value={email}
                                    onChange={ e => setEmail(e.target.value)}
                                    fullWidth={true}
                                    required
                                    autoFocus
                                    className='p-3 my-2 bg-gray-700 rouded'
                                    autoComplete='email'
                                />
                                <input
                                    name="password"
                                    type="password"
                                    // variant="filled"
                                    placeholder="password"
                                    value={password}
                                    onChange={ e => setPassword(e.target.value)}
                                    fullWidth={true}
                                    required
                                    className='p-3 my-2 bg-gray-700 rouded'
                                    autoComplete='current-password'
                                />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p className="text-white"><Link to={'/reset'}>Forget Password</Link></p>
                                    <p className="text-white"><Link to={'/register'}>Sign Up</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;