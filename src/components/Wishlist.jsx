import React from 'react'
import { useState,useEffect } from 'react'
import Movieslist from './Movieslist'
function Wishlist() {
    let [wishList,setWishlist]=useState(null)
    
    useEffect(()=>{
        let wish=localStorage.getItem("wishList")
        wish=JSON.parse(wish)
        setWishlist(wish)
    },[])

  return (
    <div>
        {wishList && <Movieslist movies={wishList} title="Movie added to Fav"/>}
    </div>
  )
}

export default Wishlist