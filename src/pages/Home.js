import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './../components/Header'
import MainSlider from './../components/MainSlider'
// import { Button } from "@mui/material"

const Home = () => {
    const navigate = useNavigate()

    const logOut = () => {
        navigate('/login')
    }

    return (
        <>
            <MainSlider/>
            <h1>Home Page</h1>
            <button onClick={logOut}>Log Out</button>
        </>
    )
}

export default Home;