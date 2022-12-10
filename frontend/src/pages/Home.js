import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1 style={{textAlign:"center" , margin:"20px",fontSize:"50px",marginTop:"70px"}}>Welcome To Pokemons World</h1>
       <Link style={{textDecoration: "none",fontSize:"30px",margin:"50px",border:"1px solid black", borderRadius:"10px"}} to="/all" >Go To See All Pokemons</Link>
    </div>
  )
}

export default Home
