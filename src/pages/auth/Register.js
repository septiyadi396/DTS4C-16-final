import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { TextField, Button, Divider } from "@mui/material"
import { signingUp } from './../../utils/firebase/register'
import logo from "./../../assets/logo.png"

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        console.log('data signup',email,password);
        try {
            const authorizing = await signingUp(email, password)
            console.log('auth try', authorizing);
            if (authorizing != null) {
                navigate('/login')
            }
        } catch (error) {
            console.log('error authorizing', error);
        }
    }

    return (
        <>
            <div className="register">
                <div className="registerCard">
                    <img src={logo} alt="Logo"/>
                    <h1>Sign Up</h1>

                    <form>
                        <TextField
                            name="email"
                            className="email"
                            type="email"
                            variant="filled"
                            placeholder="name@mail.com"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                            required
                            autoFocus
                        />

                        <TextField
                            name="password"
                            className="password"
                            type="password"
                            variant="filled"
                            placeholder="password"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                            required
                        />

                        <Button onClick={signUp}>Sign Up</Button>

                        <div className="tambahan">
                            <Divider/>
                            <Link to={'/login'}>Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;