
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {

const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}><Link to='/'>Home</Link>{menu==="Home"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Unregistered")}}><Link to='/Unregistered'>Unregistered</Link>{menu==="Unregistered"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Used")}}><Link to='/Used'>Used</Link>{menu==="Used"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Valuation")}}><Link to='/Valuation'>Valuation</Link>{menu==="Valuation"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login">
            <Link to='/login'><button>Login</button></Link>
        </div>
      
    </div>
  )
}

export default Navbar
