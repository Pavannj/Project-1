import { useState } from "react"
import {Link} from 'react-router-dom'

function Navbar() {
  const [searchVal,setSearchVal]=useState()

  return (
    <nav className="navbar">
        <h1>Movies</h1>
        <div>
            <input type="search"   style={{width:"400px"}} value={searchVal}
            onChange={(e)=>{setSearchVal(e.target.value)}}/>
            
            <Link to={`/serach${searchVal}`}>
            <button>Search</button>
            </Link>
        </div>
        <Link to="/" >Home</Link>
        <Link to="/wish">Wish List</Link>
        <Link to="/create">Create New Movie</Link>
    </nav>
  )
}

export default Navbar