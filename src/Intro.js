import React from 'react';
import './Intro.css';
import TypeWriter from './TypeWriter';
import vectorImage from './assets/images/vectorImage.jpg';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-text">
          <p className="bold">Amlan Buragohain</p>
          <TypeWriter 
            texts={[
              "Java",
              "Web Developer",
              "Backend"
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={1000}
            className="typewriter"
          />
          <div className="social-icons">
            <a href="https://github.com/amlanxbghn" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
            <a href="https://x.com/amlanxbghn" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={40} />
            </a>
            <a href="https://www.linkedin.com/in/amlan-buragohain-758557271/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
        <div className="intro-image">
          <img src={vectorImage} alt="Vector Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
