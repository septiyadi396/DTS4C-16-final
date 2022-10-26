import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import requests from '../Request';


const Main = () => {
  const baseUrl =  process.env.REACT_APP_THEMOVIEDB_BASE_URL
  const apiKey = process.env.REACT_APP_THEMOVIEDB_V3
  const endpoint = '/movie/popular'
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log('main',movie);
  
  const api = baseUrl+endpoint
  useEffect(() => {
    axios.get(api, {
      params : {
          api_key: apiKey,
          language: 'en-US',
          page:'1',
      }
    }).then((response) =>{
      setMovies(response.data.results);
    })
    
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  
  // console.log("🚀 ~ file: Main.jsx ~ line 7 ~ Main ~ movies", movies)



  // const slideLeft = () => {
  //   var slider = document.getElementById('slider' );
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };
  // const slideRight = () => {
  //   var slider = document.getElementById('slider' );
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };

  return (
    
    <div>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-[600px] object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>{movie?.title}</h1>
          <div className='my-4'>
            <Link to={`/${movie?.id}`}>
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                Play
              </button>
            </Link>
            {/* <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button> */}
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p>
        </div>

        {/* <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div> */}

      </div>


    </div>
  )
}

export default Main