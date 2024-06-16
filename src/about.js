import React from 'react';
import './about.css'; // Change the import to match the file name

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I am a Computer Science Freshman at <a href="https://www.scaler.com/school-of-technology/" target="_blank" rel="noopener noreferrer">
          Scaler School of Technology
        </a>, currently based in Bangalor. I am a Web developer with expertise in JavaScript and React.
        I love building interactive and user-friendly web applications.
      </p>
    </div>
  );
};

export default About;
