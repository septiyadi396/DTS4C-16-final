import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { signingIn } from './../../utils/firebase/login'
import { TextField, Button, FormControlLabel, Checkbox, Divider } from "@mui/material"
import logo from "./../../assets/logo.png"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        console.log('data signin',email,password);
        try {
            const authorizing = await signingIn(email, password)
            if (authorizing != null) {
                navigate('/')
            }
        } catch (error) {
            console.log('error authorizing', error);
        }
    }

    return (
        <>
            <div className="login">
                <div className="loginCard">
                    <img src={logo} alt="Logo"/>
                    <h1>Sign In</h1>

                    <form>
                        <TextField
                            name="email"
                            className="email"
                            type="email"
                            variant="filled"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                            autoFocus
                        />

                        <TextField
                            name="password"
                            className="password"
                            type="password"
                            variant="filled"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                        />

                        <Button onClick={signIn}>Sign In</Button>

                        <div className="tambahan">
                            <FormControlLabel
                                style={{ marginLeft: "-12px" }}
                                control={
                                <Checkbox style={{ color: "rgb(229, 9, 20)" }} name="checkedB" />
                                }
                                label="Remember Me"
                            />
                            <Link to={'/reset'}>Forget Password</Link>
                            <Divider/>
                            <Link to={'/register'}>Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;