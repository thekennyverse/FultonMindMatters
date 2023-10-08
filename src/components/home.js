// Home.js
import './home.css';
import React, { useState } from 'react';

function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // will send login data to API once backend is made.
  }

  return (
    <div>
      <h1>Login</h1>
      
      <form className="login-form" onSubmit={handleSubmit} >
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Home;
