import React from 'react'
import { Link } from "react-router-dom";
import { NavbarDiv, LinksDiv } from "./NavbarDesign"
const Navbar = () => {
  return (
    <NavbarDiv>
    <h1 className="h1NavBar">Pokemon Api</h1>
    <LinksDiv>
    <Link  style={{textDecoration: "none"}} to="/" >Home</Link>
    <Link style={{textDecoration: "none"}} to="/all" >All</Link>
    <Link style={{textDecoration: "none"}} to="/about" >About</Link>
    </LinksDiv>
    </NavbarDiv>
  )
}

export default Navbar
