import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#6B21A8] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          alt="Women in Science"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
          Females in Research, Science, & Technology
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-delay">
          Empowering women to lead the future of innovation
        </p>
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex items-center space-x-2 bg-white text-[#6B21A8] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95"
        >
          Discover More
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-sm">
          Scroll Down
          <div className="mt-2 h-6 w-0.5 bg-white mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;