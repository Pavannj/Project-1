import React from 'react'
import {useEffect} from 'react'
import Movieslist from './Movieslist'
import useFetch from './useFetch'

function Home() {

  useEffect(()=>{
    if( localStorage.getItem("wishList")== null)
    {
        localStorage.setItem("wishList" , "[]" );
    }
  },[])
   let {data:movies ,pending ,error}=useFetch("http://localhost:4000/movies")
  return (
    <div className='home'>
        {error && <h1>{error}</h1>}
        {pending && <div className='loader'></div> }
        {movies && <Movieslist movies={movies}/>}
    </div>
  )
}

export default Home