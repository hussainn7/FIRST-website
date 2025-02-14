import React from 'react';
import { Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-purple-900 text-white py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FIRST</h3>
            <p className="text-purple-200 text-lg">Female in Research, Science, & Technology</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-purple-200 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#events" className="text-purple-200 hover:text-white transition duration-300">Events</a></li>
              <li><a href="#projects" className="text-purple-200 hover:text-white transition duration-300">Projects</a></li>
              <li><a href="#team" className="text-purple-200 hover:text-white transition duration-300">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/groups/firststem/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition duration-300"
              >
                <Facebook className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/firststem"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition duration-300"
              >
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-800 flex justify-between items-center">
          <p className="text-purple-200">&copy; {new Date().getFullYear()} FIRST. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-purple-800 rounded-full hover:bg-purple-700 transition duration-300"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;