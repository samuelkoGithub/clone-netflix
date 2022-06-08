/*
  This Main.jsx display the front page of the Netflex page.
*/
import axios from 'axios';
import requests from '../Requests';
import React, {useState, useEffect} from 'react';

const Main = () => {
  const [movies, setMovies] = useState([]);  
    
  // Below calcuation is to pick up the random movie one at a time for display
  const result_movies = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    // axios make a http (i.e. API call over the Internet to grap the movies data)
    axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results);
    })
  }, []);
  //console.log(result_movies);

  /* 
     Truncate the long message under overview, put '...' i
     nstead for more info.  Write a javaScript function to 
     perform that
  */
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }
  /* End of the truncateString in overview section */

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
         <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img 
              className='w-full h-full object-cover' 
              src={`https://image.tmdb.org/t/p/original/${result_movies?.backdrop_path}`} 
              alt={result_movies?.title} 
            />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{result_movies?.title}</h1>
                    <div>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                          Play
                        </button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
                          Watch Later
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {result_movies?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                      {truncateString(result_movies?.overview, 150)}
                    </p>
            </div>
      </div>
    </div>
  )
}

export default Main;