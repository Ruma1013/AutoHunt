
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage authentication
const [menu, setMenu] = useState('');

const handleLogout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
};

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="Home"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Unregistered")}}><Link style={{ textDecoration: 'none'}} to='/Unregistered'>Unregistered</Link>{menu==="Unregistered"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Used")}}><Link style={{ textDecoration: 'none'}} to='/Used'>Used</Link>{menu==="Used"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Valuation")}}><Link style={{ textDecoration: 'none'}} to='/Valuation'>Valuation</Link>{menu==="Valuation"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-signup">
                {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to='/login'><button>Sign Up</button></Link>
                )}
            </div>
      
    </div>
  )
}

export default Navbar
