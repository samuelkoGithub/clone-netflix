import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL])

    // console.log(movies);

    // Create a javaScript function to scroll the 1) left->right 2) right->left
    const slideLeft = () => {
        var slider = document.getElementById('slider'+ rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

/*
                   <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
*/

/*
    <div className='relative flex items-center group'>
*/

    return (
        <>
           <h2 className='text-red-600 font-bold md:text-xl p-4'>{title}</h2>
           <div className='relative flex items-center group'>
               <MdChevronLeft 
               onClick={slideLeft} 
               className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' sigt={40} />
               <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' >
                  {movies.map((item, id) => (
                      <Movie key={id} item={item} />
                  ))}  
               </div>
               <MdChevronRight 
               onClick={slideRight} 
               className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' sigt={40} />
           </div>
        </>
  )
}

export default Row;