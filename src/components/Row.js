import { React, useState,useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({rowID, title, api, query}) => {
    
    console.log('get',rowID,title,api, query);
    const baseUrl =  process.env.REACT_APP_THEMOVIEDB_BASE_URL
    const apiKey = process.env.REACT_APP_THEMOVIEDB_V3
    const [movies, setMovies] = useState([]);
    // https://api.themoviedb.org/3/search/movie?api_key=31f2475183015cbd458e6b862e2489c1&language=en-US&query=thor&page=1&include_adult=false&region=id

    const option = () => {
        if (rowID == 4) {
            return {api_key: apiKey}
        }
        if (rowID == 5) {
            return {
                api_key: apiKey,
                query: query,
                language:'en-US',
                page:1,
                region:'id',
                include_adult:false
            }
        }

        return {
            api_key: apiKey,
            language:'en-US',
            page:1,
            region:'id'
        }
    }
    useEffect(() => {
        const fetchURL = baseUrl+api
        console.log('id 4',fetchURL,option());
        axios.get(fetchURL, {
            params : option()
        }).then((response) => {
            setMovies(response.data.results);
        });
        }, []);
  
    const slideLeft = () => {
      var slider = document.getElementById('slider' + rowID);
      slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
      var slider = document.getElementById('slider' + rowID);
      slider.scrollLeft = slider.scrollLeft + 500;
    };
  
    return (
      <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
          <MdChevronLeft
            onClick={slideLeft}
            className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />
          <div
            id={'slider' + rowID}
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
          >
            {movies && movies.map((item, index) => (
              <Movie key={index} item={item} />
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />
        </div>
      </>
    );
  };
  

export default Row