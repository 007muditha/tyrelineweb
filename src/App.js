import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/nav/Nav'
import Brands from './pages/Brands'
import Footer from './components/Footer/Footer'
import ContactUs from './pages/ContactUs'
import {BrowserRouter , Route,Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <header>
    <Nav/>
    </header>
    <main>
    <Routes >
    <Route path="/"  element={<Home/>}/>
    <Route path="/about"  element={<About/>}/>
    <Route path="/brands"  element={<Brands/>}/>
    <Route path="/contactus"  element={<ContactUs/>}/>
    </Routes >
    </main>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
