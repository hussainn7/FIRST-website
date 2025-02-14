import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Advisors from './pages/Advisors';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navbar />
      <Home />
      <Advisors />
      <Footer />
    </div>
  );
}

export default App;