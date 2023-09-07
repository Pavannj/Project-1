import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Addmovie() {
    let navigate=useNavigate()
    console.log(navigate);

    const [movieName,setmovieName]=useState("")
    const [hero,sethero]=useState("")
    const [heroine,setheroine]=useState("")
    const [director,setdirector]=useState("")
    const [year,setyear]=useState("")
    const [poster,setposter]=useState("")
    const [genere,setgenere]=useState("")
    const [story,setstory]=useState("")
    const [rating,setrating]=useState("")

    let handleSubmit = (e) => {
        e.preventDefault();

        let newMovie = {movieName,hero,heroine,director,year,poster,genere,story,rating};

        fetch("http://localhost:4000/movies" , 
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newMovie)
        } 
        )
        .then(()=>{
            alert("new movie added");
            navigate("/");
        })
    }
  return (
    <div >
            
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="">Movie Name</label>
                
                <input type="text"
                    value={movieName}
                    onChange={(e)=>{ setmovieName(e.target.value); }}
                />
                
                <label htmlFor="">Hero</label> 
                <input type="text" value={hero}
                    onChange={(e)=>{ sethero(e.target.value); }}/> 
                
                <label htmlFor="">Heroine</label> 
                <input type="text" value={heroine}
                    onChange={(e)=>{ setheroine(e.target.value); }}/> 

                <label htmlFor="">Director</label> 
                <input type="text" value={director}
                    onChange={(e)=>{ setdirector(e.target.value); }}/> 
                
                <label htmlFor="">Year</label> 
                <input type="number" min={0} max={2022} value={year}
                    onChange={(e)=>{ setyear(e.target.value); }}/> 
                
                <label htmlFor="">Genere</label> 
                <input type="text" value={genere}
                    onChange={(e)=>{ setgenere(e.target.value); }}/> 
                
                <label htmlFor="">Rating</label> 
                <input type="number" step="0.1" max="10" min="0.1" value={rating}
                    onChange={(e)=>{ setrating(e.target.value); }}/> 
                
                <label htmlFor="">Movie Poster</label> 
                <input type="url" value={poster}
                    onChange={(e)=>{ setposter(e.target.value); }} /> 
                
            
                
                <label htmlFor="">Synopsis</label> 
                <textarea cols="5" rows="5" value={story}
                    onChange={(e)=>{ setstory(e.target.value); }}></textarea>
                
                <input type="submit" id='button' />
    
            </form>
            
    </div>
  )
}

export default Addmovie