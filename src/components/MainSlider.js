import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
// import { Card } from "@mui/material";
// import { Watch } from "@mui/icons-material";

const baseUrl =  process.env.REACT_APP_THEMOVIEDB_BASE_URL
const apiKey = process.env.REACT_APP_THEMOVIEDB_V3
const imageUrl = process.env.REACT_APP_THEMOVIEDB_IMAGE_URL
const endpoint = '/movie/now_playing'

const Watch = () => {
    const navigate = useNavigate()
    navigate('/watch')
}

const MainSlider = () => {
    const [movies, setMovies] = useState([]);

    const api = baseUrl+endpoint
    useEffect(() => {
        axios.get(api, {
            params : {
                api_key: apiKey,
                language: 'en-US',
                page:'1',
                region:'id'
            }
        }).then((response) => {
            // console.log('hasil res',response.data.results); 
            setMovies(response.data.results)
        }).catch((error) => {
            console.log('err', error)
        })
    }, []);
    console.log('m',movies); 
    return (
        <div className="mainSection">
            {/* <img src='#'></img> */}
            {movies.map((movie, index) => {
                // console.log('ahsffasd',movie);
                return (
                    <div key={index} style={{maxWidth:'100%'}}>
                        <img src={(movie.backdrop_path == null) ? `${imageUrl}/original${movie.poster_path}` : `${imageUrl}/original${movie.backdrop_path}`} style={{width:'100%'}}></img>
                        <p className="title">{movie.original_title}</p>
                        <p className="language">{movie.original_language.toUpperCase()}</p>
                        <p className="overview">{(movie.overview == null || movie.overview == undefined) ? '' : movie.overview}</p>
                        <button className="detail" onClick={Watch}>Preview</button>
                    </div>
                )
            })}
        </div>
    )
}

export default MainSlider