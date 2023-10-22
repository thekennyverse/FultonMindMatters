// Login.js

import React, {useState} from 'react'

import './login.css';

function Login({setIsLoggedIn, setToggleLogin}) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleOnClick = () => {
    setToggleLogin(false);
  }

  const handleOnChange = (e) => {
    const name = e.target.placeholder.toLowerCase();
    const value  = e.target.value;
    
    setFormData((previousState) => ({
      ...previousState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = "POST";
    const body = JSON.stringify(formData);
    const url = 'http://localhost:4000/login';
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method,
      headers,
      body
    });

    const data = await response.json();
    setIsLoggedIn(data.authenticated)
  }


  return (
    <div className="loginDiv">
<div className="login-page">
      <h1>Welcome to Fulton Mind Matters</h1>
      <p>Fulton County #1 source for Resources</p>
      
      <form onSubmit={handleSubmit}>
        <input type="username" placeholder="Username" value={formData.username} onChange={handleOnChange}/>
        <input type="password" placeholder="Password" value={formData.password} onChange={handleOnChange}/>
        <button type="submit">Log In</button>
      </form>
      <button onClick={handleOnClick} className="signup">Not signed up?</button>
    </div>
    </div>
    
  )
}

export default Login