// import React from 'react'
// import {useParams} from 'react-router-dom'
// import useFetch from './useFetch'
// import Movieslist from './Movieslist'

// function Searchpage() {
//  let {searchVal}=useParams()
//    let {data:movies ,pending ,error}=useFetch("http://localhost:4000/movies")


//     return (
//     <div>
//       <h1>This is search page of {searchVal}</h1>
//         {
//             movies && <Movieslist
//             movies={movies.filter((movie)=>{ return(movie.movieName.toLowerCase().includes(searchVal.toLowerCase())) || 
//                                                    (movie.hero.toLowerCase().includes(searchVal.toLowerCase())) || 
//                                                    (movie.genere.toLowerCase().includes(searchVal.toLowerCase()))
//             })}/>
//         }
//     </div>
//   )
// }

// export default Searchpage
import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";
import useFetch from "./useFetch";

const Searchpage = () => {

    let {searchVal} = useParams();
    let {data : movies  , pending , error} = useFetch("http://localhost:4000/movies");

    return ( 
        <div>
            <h1>This is a search page of { searchVal} </h1>
            {
                movies && <Movieslist 
                movies={movies.filter((movie)=>{ return(movie.movieName.toLowerCase().includes(searchVal.toLowerCase())) || 
                                                        (movie.hero.toLowerCase().includes(searchVal.toLowerCase())) || 
                                                        (movie.genere.toLowerCase().includes(searchVal.toLowerCase()))
                })} 
                title="search result" />
            }

        </div>
    );
}
export default Searchpage;