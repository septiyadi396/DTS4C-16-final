import {React, useEffect, useState} from 'react';
import axios from 'axios'


const BgImage = () => {
    const baseUrl =  process.env.REACT_APP_THEMOVIEDB_BASE_URL
    const apiKey = process.env.REACT_APP_THEMOVIEDB_V3
    const endPoint = '/discover/movie'
    const imageUrl = process.env.REACT_APP_THEMOVIEDB_IMAGE_URL

    const [bgImage, setBgImage] = useState([]);

    useEffect(() => {
        const api = baseUrl+endPoint
        axios.get(api, {
            params : {
                api_key: apiKey,
                language: 'en-US',
                page:'1',
                region:'id',
                sort_by:'popularity.desc',
                include_adult:false,
                include_video:false,
                'vote_average.gte':7,
                with_watch_monetization_types:'flatrate'
            }
        }).then((response) => {
            const items = Array.from(response.data.results);
            const select = items[Math.floor(Math.random() * items.length)].backdrop_path; 
            console.log('hasil select',select);
            setBgImage({
                bgImage: imageUrl+'/original'+select
            })
            console.log('hasil',bgImage);
        }).catch((error) => {
            console.log('err', error)
        })
    }, []);

    return bgImage
}

export default BgImage