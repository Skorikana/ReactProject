import './index.css';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
//import Home from "./pages/Home";
import Getdata from "./components/GetData";

export default function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Getdata/>
      <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      {/* <Route path="/general" element={<Divisions props ="general"/>}/>
      <Route path="/science" element={<Divisions props ="science"/>}/> */}
   
     </Routes> 
     </Router>
    </div>
  );
}