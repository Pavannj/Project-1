import React from 'react'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <div className='not'>
        <h1>404: Page not found</h1>
        <Link to={"/"}>
         <button> Redirect to Home</button></Link>
    </div>
  )
}

export default Notfound