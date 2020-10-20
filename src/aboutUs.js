import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="aboutUsDiv">
      <div className="headerDiv">
        <div className="logo">
          Suscat
        </div>
        <div className="registerLink">
          <Link to={'signup'}>Sign Up</Link>
        </div>
      </div>
        <div className="integrantesDiv">
          <p>David Aaron Banda Gutierrez - 1655</p>
          <p>Jofie Batista Farias - 1455</p>
          <p>Luis</p>
          <p>Henrry Eduardo Hernandez Pinela - 16550460</p>
        </div>
    </div>
  );
}

export default AboutUs;