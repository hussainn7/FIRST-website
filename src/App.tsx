import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
<<<<<<< HEAD
import About from './pages/About';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Team from './pages/Team';
=======
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
import Advisors from './pages/Advisors';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navbar />
<<<<<<< HEAD
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="advisors">
        <Advisors />
      </div>
=======
      <Home />
      <Advisors />
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
      <Footer />
    </div>
  );
}

export default App;