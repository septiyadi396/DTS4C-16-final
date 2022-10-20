import React from "react";
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    const logOut = () => {
        navigate('/login')
    }

    return (
        <>
            <h1>Home Page</h1>
            <Button onClick={logOut}>Log Out</Button>
        </>
    )
}

export default Home;