
import React, {useState}  from 'react';
import Paths from './components/paths.js';
import Login from './components/login.js';
import Registration from './components/registration.js';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(true)

  const loadPaths = () => {
    if ( isLoggedIn) return (<Paths/>)
    else {
      if (toggleLogin) return (<Login setIsLoggedIn={setIsLoggedIn} setToggleLogin={setToggleLogin}/>)
      else return (<Registration setIsLoggedIn={setIsLoggedIn} setToggleLogin={setToggleLogin}/>)
    }
  }

  return (
    <div className="headContainer">
      {loadPaths()}
    </div>
  );

}
  