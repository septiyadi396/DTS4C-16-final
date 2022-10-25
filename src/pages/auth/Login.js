import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { signingIn } from './../../utils/firebase/login'
import logo from "./../../assets/logo.png"

import { 
    TextField, 
    Button, 
    FormControlLabel, 
    Checkbox, 
    Divider, 
    Card, 
    CardMedia, 
    Grid,
    CardContent,
    Typography
} from "@mui/material"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        console.log('data signin',email,password);
        try {
            const authorizing = await signingIn(email, password)
            console.log('afgusd',authorizing);
            if (authorizing.operationType == 'signIn') {
                localStorage.setItem('access_token', authorizing.user.accessToken)
                navigate('/profile')
            }
            else (
                alert('invalid email or password')
            )
        } catch (error) {
            console.log('error authorizing', error);
        }
    }

    return (
        <div className="login">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center" 
                justify="center"
                sx={{ minHeight: '100vh', marginTop:'5vh' }}
                >

                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }} className="loginCard">
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
                                    value={email}
                                    onChange={ e => setEmail(e.target.value)}
                                    fullWidth={true}
                                    placeholder='name@email.com'
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
                                />

                                <Button onClick={signIn} variant="outlined" sx={{width:'100%', marginTop:'1em', marginBottom:'1em'}}>Sign In</Button>

                                <div className="tambahan">
                                    {/* <FormControlLabel
                                        style={{ marginLeft: "-12px" }}
                                        control={
                                        <Checkbox style={{ color: "rgb(229, 9, 20)" }} name="checkedB" />
                                        }
                                        label="Remember Me"
                                    /> */}
                                    <Grid 
                                        container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                            <Grid item>
                                                <Link to={'/reset'}>Forget Password</Link>
                                            </Grid>
                                            <Grid item>
                                                <Link to={'/register'}>Sign Up</Link>
                                            </Grid>
                                        </Grid>
                                    {/* <Divider/> */}
                                </div>
                            </form>
                            
                        </CardContent>
                    </Card>
                </Grid>      
            </Grid>
        </div>
    )
}

export default Login;