import React from "react";
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import Header from './../components/Header'

const Home = () => {
    const navigate = useNavigate()

    const logOut = () => {
        navigate('/login')
    }

    return (
        <>
            <Header/>
            <h1>Home Page</h1>
            <Button onClick={logOut}>Log Out</Button>
        </>
    )
}

export default Home;