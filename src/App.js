import './index.css';
import React from "react"
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Getdata from "./components/GetData";
import Footer from "./components/Footer";

 export default function App() {
  return (
     <div className="App">
      <Router>
      <Nav/>
      <Footer/>
      <Getdata/>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/business" element={<Getdata props ="business"/>}/>
        <Route path="/general"  element={<Getdata props ="general" />}/>
        <Route path="/health"   element={< Getdata props ="health"/>}/> 
        <Route path="/entertainment" element={<Getdata props ="entertainment"/>}/>
        <Route path="/science"  element={<Getdata props ="science"/>}/>
        <Route path="/technology" element={<Getdata props ="technology"/>}/>
        <Route path="/sports"   element={<Getdata props ="sports"/>}/>
       </Routes> 
       </Router>
     
    </div>
  );
}