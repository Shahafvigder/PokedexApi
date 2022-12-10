import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/global.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AllPokemonList from "./pages/AllPokemonsList"
import AboutMe from "./pages/AboutMePage"
import ErrorPage from "./pages/Error404Page"

const App = () => {
  return (
    <BrowserRouter>
    <nav>
     <Navbar/>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/all" element={<AllPokemonList/>}/>
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

