
import React, { useState } from 'react';

import './aboutus.css'; 
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function AboutUs() {

  const team = [
    { 
      name: 'John Doe',
      role: 'Developer'
    },
    {
      name: 'Jane Doe', 
      role: 'Designer'
    }
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="aboutus">
      
      <h1>About Fulton Mind Matters</h1>

      <p>Fulton Mind Matters is a mental health support platform based in Atlanta, Georgia, dedicated to providing access to resources and information about mental health in Fulton County.</p>

<p>The project aims to create a supportive online community, connecting individuals in need with reliable mental health resources specific to the Atlanta area.</p>

<p>Fulton Mind Matters was created by the Kennyverse team of developers and mental health professionals who saw a need for easier access to local mental health services.</p>

<p>We welcome your feedback on the platform. Please reach out through the contact page!</p>

      <h2>Meet Our Team</h2>

      <div className="card-slider">
        <div className="card" style={{transform: `translateX(-${index * 100}%)`}}>
          {team.map(member => (
            <div className="card-container">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        <FiChevronLeft className="arrow left" onClick={() => setIndex(index => index - 1)}/>
        <FiChevronRight className="arrow right" onClick={() => setIndex(index => index + 1)}/>
      </div>

    </div>
  );
}
