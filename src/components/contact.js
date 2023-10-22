
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '/Users/kennyverse/Digitalcraft/Mental Health Project/fultonmindmatters/src/components/contact.css'; 




const Contact = () => {
  const team = [
    {
      name: 'Seth Smith ',
      role: 'Community Outreach Coordinator:',
      email: 'seth.smith@fultonmind.com',
      image: '/image/sethImage.png'
    },
    {
      name: 'Liam Johnson',
      role: 'Social Worker',
      email: 'liam.johnson@fultonmind.com',
      image: '/image/mwhealthcare.png' 
    },
    {
      name: 'Sophia Lee',
      role: 'Clinical Psychologist',
      email: 'sophia.lee@fultonmind.com',
      image: '/image/bwhealthcare.png' 
    },
    
    {
      name: 'Ava Martinez',
      role: 'Psychiatric Nurse Practitioner',
      email: 'avs.martinez@fultonmind.com',
      image: '/image/bthealthcare.png' 
    },
    {
      name: 'Elijah Wilson',
      role: 'Occupational Therapist',
      email: 'elijah.wilson@fultonmind.com',
      image:  '/image/bmmhealthcare.png' 
    },
 
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="aboutus">
      <h1>Contact Us</h1>
          <p>If you need to speak to an emergency counselor immediately, you can contact our team members below 24/7.</p>
    <p>Our counselors are trained mental health professionals who can provide support and resources in a crisis.</p>
    <p>Please reach out if you need someone to talk to - we are here to help.</p>

      <div className="card-slider">
        <div className="card" style={{ transform: `translateX(-${index * 100}%)` }}>
          {team.map((member, idx) => (
            <div key={idx} className="card-container">
              <img src={member.image} alt={member.name} /> {}
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.email}</p>
            </div>
          ))}
        </div>

        <FiChevronLeft onClick={() => setIndex((prevIndex) => Math.max(prevIndex - 1, 0))} />
        <FiChevronRight
          onClick={() => setIndex((prevIndex) => Math.min(prevIndex + 1, team.length - 1))}
        />
      </div>
    </div>
  );
};

export default Contact;