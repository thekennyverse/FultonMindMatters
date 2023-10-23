import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>About Us</h4>
          <p>Fulton Mind Matters is dedicated to promoting mental health awareness, providing support, and bridging gaps in mental health services. Our mission is to create a nurturing environment for individuals seeking mental well-being.</p>
        </div>
        <div className='footer-section'>
          <h4>Contact</h4>
          <p>Email: info@fultonmindmatters.com<br />Phone: 123-456-7890<br />Address: 123 Mental Health Street, Fulton County, USA</p>
        </div>
        <div className='footer-section'>
          <h4>Follow Us</h4>
          <div className='social-icons'>
            <a href='https://www.facebook.com/profile.php?id=61552518998230&sk=about' target='_blank' rel='noopener noreferrer'>
              <img className='social-icon' src='/image/facebook.png' alt='Facebook' />
            </a>
            <a href='https://twitter.com/fultonminds' target='_blank' rel='noopener noreferrer'>
              <img className='social-icon' src='/image/twitter.png' alt='Twitter' />
            </a>
            <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
              <img className='social-icon' src='/image/youtube.png' alt='YouTube' />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div>&copy; {new Date().getFullYear()} Fulton Mind Matters - All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
