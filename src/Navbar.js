import React from "react"
import logo from "./react-icon-small.png";

export default function Navbar(){
   return( 
    <nav>
        <img src={logo} className="nav--icon"/>
        <h1 className="nav--logo_text">React facts</h1>
    </nav>
   )
}