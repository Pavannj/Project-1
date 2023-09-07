import { useNavigate, useParams , Link} from "react-router-dom";
import useFetch from "./useFetch";

const Moviedetails = () => {

    let navigate = useNavigate();    
    let { id } = useParams();
    
    let {data : movie , pending , error} = useFetch("http://localhost:4000/movies/" + id ) ;

    let handleDelete = ()=>{

        fetch("http://localhost:4000/movies/" + id , 
        {
            method:"DELETE"
        }
        )
        .then(()=>{
            alert("Movie has been removed successfully");
            navigate("/");
        })

    }
    
    
    return ( 
        <div >  
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"></div>  }
            {movie &&
                <div className="movie-details">
                    <h1>Movie Name : {movie.movieName} </h1>
                    <img src={movie.poster} alt="not found"  />
                    <h2>Hero : {movie.hero} </h2>
                    <h2>Heroine : {movie.heroine}</h2>
                    <h2>Director : {movie.director} </h2>
                    <h2>Genere : {movie.genere} </h2>
                    <h4>Story: {movie.story}</h4>

                    <button onClick={handleDelete}> Delete </button>

                    <Link to={`/update${movie.id}`}>
                        <button>Update movie</button> 
                    </Link> 

                </div>
            } 
        </div>
    );
}

export default Moviedetails;