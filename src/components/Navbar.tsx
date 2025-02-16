<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
import { Menu, X, Beaker } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [activeSection, setActiveSection] = useState('home');
=======
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Projects', href: '#projects' },
<<<<<<< HEAD
    { name: 'Team', href: '#team' },
    { name: 'Advisors', href: '#advisors' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
=======
    { name: 'Team', href: '#team' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-purple-800 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
<<<<<<< HEAD
          <button 
            onClick={() => scrollToSection('#home')}
=======
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
            className="flex items-center space-x-2 hover:text-purple-200 transition duration-300"
          >
            <Beaker className="h-8 w-8" />
            <span className="font-bold text-xl">FIRST</span>
<<<<<<< HEAD
          </button>
=======
          </a>
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
<<<<<<< HEAD
                className={`hover:text-purple-200 transition duration-300 ${
                  activeSection === link.href.slice(1) ? 'text-purple-200 font-semibold' : ''
                }`}
=======
                className="hover:text-purple-200 transition duration-300"
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-purple-200 hover:bg-purple-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-800">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
<<<<<<< HEAD
                className={`block w-full text-left px-3 py-2 rounded-md hover:bg-purple-700 ${
                  activeSection === link.href.slice(1) ? 'bg-purple-700' : ''
                }`}
=======
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-purple-700"
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;