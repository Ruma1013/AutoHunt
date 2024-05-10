import React from 'react'
import './CSS/Login.css'

function Login() {



    
  return (
    <div className="main-container">
    <div className='wrapper'>
      <div className='form-box-login'>
        <form action=''>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='text ' placeholder='Username' required />
          </div>
          <div className='input-box'>
            <input type='paassword' placeholder='Paasword' required />
          </div>
          <div className="remember-forgot">
            <label><input type='textbox'/>
            Remember me</label>
            <a href='#'>Forgot paasword?</a>
          </div>
          <button type='submit'>Login</button>
          <div className="register-link"> </div>
          <p>Don't have an account? <a href='#'>Register</a></p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login