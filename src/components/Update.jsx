import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import useFetch from './useFetch' 

function Update() {

    let {id}=useParams();
    let {data:movie ,pending ,error}=useFetch("http://localhost:4000/movies")

    const [movieName,setmovieName]=useState("")
    const [hero,sethero]=useState("")
    const [heroine,setheroine]=useState("")
    const [director,setdirector]=useState("")
    const [year,setyear]=useState("")
    const [poster,setposter]=useState("")
    const [genere,setgenere]=useState("")
    const [story,setstory]=useState("")
    const [rating,setrating]=useState("")
  
    let navigate=useNavigate();

    useEffect(()=>{
        if(movie){
          setmovieName(movie.movieName);
          sethero(movie.hero);
          setheroine(movie.heroine)
          setdirector(movie.director);
          setyear(movie.year)
          setgenere(movie.genere);
          setposter(movie.poster);
          setrating(movie.rating);
          setstory(movie.story);
        }
    },[movie])

    let handleUpdate = (e) => {
        e.preventDefault();

        let replacingMovie= {movieName,hero,heroine,director,year,poster,genere,story,rating};

        fetch(`http://localhost:4000/movies/${id}`,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(replacingMovie)
        } 
        )
        .then(()=>{
            alert("movie replaced");
            navigate("/");
        })
    }
    return (
    <div className='add'>
    <h1>Update movie</h1>
     <hr />
    
     <form onSubmit={handleUpdate} className="form">
         <label htmlFor="">Movie Name</label>
        
         <input type="text"
             value={movieName}
             onChange={(e)=>{ setmovieName(e.target.value); }}/>
        
        
        
         <label htmlFor="">Hero</label> <input type="text" value={hero}
             onChange={(e)=>{ sethero(e.target.value); }}/>  
            
         <label htmlFor="">Heroine</label> <input type="text" value={heroine}
             onChange={(e)=>{ setheroine(e.target.value); }}/> 
        
         <label htmlFor="">Director</label> <input type="text" value={director}
             onChange={(e)=>{ setdirector(e.target.value); }}/> 
        
          <label htmlFor="">Year</label> <input type="text" value={year}
             onChange={(e)=>{ setyear(e.target.value); }}/> 
        
         <label htmlFor="">Genere</label> <input type="text" value={genere}
             onChange={(e)=>{ setgenere(e.target.value); }}/> 
        
         <label htmlFor="">Rating</label> <input type="number" step="0.1" max="10" min="0.1" value={rating}
             onChange={(e)=>{ setrating(e.target.value); }}/> 
        
         <label htmlFor="">Movie Poster</label> <input type="url" value={poster}
             onChange={(e)=>{ setposter(e.target.value); }} /> 
        
         <label htmlFor="">Synopsis</label> 
        
         <textarea cols="10" rows="10" value={story}
             onChange={(e)=>{ setstory(e.target.value); }}></textarea>
        
         <input type="submit" value="update" />

     </form>

    </div>
  )
}

export default Update