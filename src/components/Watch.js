import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Row from '../components/Row';

const Watch = (props) => {
    const {watchId} = useParams()
    const [watch, setWatch] = useState([]);
    const [detail, setDetail] = useState([]);
    const baseUrl =  process.env.REACT_APP_THEMOVIEDB_BASE_URL
    const apiKey = process.env.REACT_APP_THEMOVIEDB_V3
    const endpoint = '/movie/'+watchId
    // https://api.themoviedb.org/3/movie/157336?api_key=31f2475183015cbd458e6b862e2489c1&append_to_response=videos
    
    // const data = watch.videos.results
    const playId = watch[Math.floor(Math.random() * watch.length)];

    const api = baseUrl+endpoint
    useEffect(() => {
        axios.get(api, {
            params : {
                api_key: apiKey,
                append_to_response:'videos',
            }
        }).then((response) =>{
            setWatch(response.data.videos.results);
            setDetail(response.data.id)
        }).catch(err => console.log('error',err))
    },[]);
    console.log('param', detail);

    if (detail.length == 0) {
        console.log('if', detail);
        return <>Loading..</>
    }
  return (
    <>
        <div style={{
            position: 'relative',
            width: '100%',
            height: '0',
            paddingBottom: '56.25%'
        }}>
            <iframe style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%'
            }} 
            src={`https://www.youtube.com/embed/${playId?.key}`} 
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        {detail && <Row rowID='4' title='Similar' api={'/movie/'+detail+'/similar'}/>}
    </>
  )
}

export default Watch