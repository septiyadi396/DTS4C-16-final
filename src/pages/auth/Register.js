import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { TextField, Button, Divider, Grid, Card, CardContent, CardMedia } from "@mui/material"
import { signingUp } from './../../utils/firebase/register'
import logo from "./../../assets/logo.png"

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        console.log('data signup', email,password);
        try {
            const authorizing = await signingUp(email, password)
            if (authorizing.message === "Firebase: Error (auth/email-already-in-use).") {
                console.log('Registration filed, user exist');
                navigate('/login')
            }
            if (authorizing.operationType === "signIn") {
                alert('Registration succes, please login')
                navigate('/login')
            }
        } catch (error) {
            console.log('error authorizing', error);
        }
    }

    return (
        <>
        <div className="register">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center" 
                justify="center"
                sx={{ minHeight: '100vh', marginTop:'5vh' }}
                >

                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }} className="registerCard">
                        <CardMedia component="img" image={logo} height="350" alt="Logo"/>
                        {/* <h1>Sign In</h1> */}
                        <CardContent>
                        {/* <CardContent sx={{ backgroundColor: '#141414'}}> */}
                            <form>
                                <TextField
                                    name="email"
                                    className="email"
                                    type="email"
                                    variant="filled"
                                    placeholder="name@mail.com"
                                    value={email}
                                    onChange={ e => setEmail(e.target.value)}
                                    fullWidth={true}
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
                                    fullWidth={true}
                                    required
                                />

                                <Button onClick={signUp} variant="outlined" sx={{width:'100%', marginTop:'1em', marginBottom:'1em'}}>Sign Up</Button>

                                <div className="tambahan" style={{textAlign: 'center'}}>
                                    <Divider/>
                                    <Link to={'/login'}>Sign In</Link>
                                </div>
                            </form>
                            
                        </CardContent>
                    </Card>
                </Grid>      
            </Grid>
        </div>
            {/* <div className="register">
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
            </div> */}
        </>
    )
}

export default Register;