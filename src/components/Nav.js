import React from 'react'
import {Link} from "react-router-dom";
export default function Nav() {
  return (
      <div className ="nav">
         <Link to="/">
         <div className="images"><p>Home</p></div>
       </Link>
       <Link to="/general">
         <div className="breaking"><p>Breaking</p></div>
       </Link>
       <Link to="/business">
         <div><p>Business</p></div>
       </Link>
       <Link to="/Health">
         <div><p>Health</p></div>
       </Link>
       <Link to="/entertainment">
         <div><p>Entertainment</p></div>
       </Link>
       <Link to="/science">
         <div><p>Science</p></div>
         </Link>
         <Link to="/Technology">
         <div><p>Technology</p></div>
         </Link>
         <Link to="/sports">
         <div><p>Sports</p></div>
       </Link>
    </div>
  )}

