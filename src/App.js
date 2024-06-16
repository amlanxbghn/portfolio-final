import React, { useState } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import About from './about';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Intro />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Intro />;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
