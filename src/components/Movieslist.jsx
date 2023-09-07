import React from 'react'
import { Link } from 'react-router-dom'
function Movieslist({movies,title,deleteMovies}) {
    let handleWishlist=(movie)=>{

        let wish = localStorage.getItem("wishList");
        wish = JSON.parse(wish);


        console.log(wish)
        var isPresent = wish.some((WishMovie)=>{ return WishMovie.id ==  movie.id });
        console.log(isPresent);

        if(isPresent==true)
        {
            alert("Movie already added to fav");
            console.log(wish.indexOf(movie));;
        }
        else
        {
            wish.push(movie);
            wish = JSON.stringify(wish);
            localStorage.setItem("wishList" , wish);
        }
    }
    
  return (
    <div className='movieslist'>

        {
            movies.map((movie)=>{
                return (
                    <div key={movie.id} className="movie">
                       
                        <Link to={`/moviedetails${movie.id}`}>
                        <h3>Movie name:{movie.movieName}</h3>
                        <h5>Hero : {movie.hero}</h5>
                        <h5>Heroine : {movie.heroine}</h5>
                        <h5>Rating : {movie.rating}</h5>
                        </Link>
                        
                        <div>
                            <img src={movie.poster} alt="" />
                        </div>
                        <button onClick={()=>{handleWishlist(movie)}}>Add to Wishlist</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Movieslist
