import React from 'react';
import { Link } from 'react-router-dom'; 
import './Weeknav.css'; 

const Weeknav = () => {
  return (
    <nav className="weeknav">
      <ul className="weeknav-list">
        <li><Link to="/monday">Monday</Link></li>
        <li><Link to="/tuesday">Tuesday</Link></li>
        <li><Link to="/wednesday">Wednesday</Link></li>
        <li><Link to="/thursday">Thursday</Link></li>
        <li><Link to="/friday">Friday</Link></li>
        <li><Link to="/saturday">Saturday</Link></li>
      </ul>
    </nav>
  );
};

export default Weeknav;
