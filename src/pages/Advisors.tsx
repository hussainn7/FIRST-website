import React from 'react';
import { motion } from 'framer-motion';

const advisors = [
  {
    name: "Alexis Balashov",
    position: "Incoming @ BlackRock",
    education: "Economics @ UC Berkeley",
    linkedin: "https://www.linkedin.com/in/alexis-balashov/",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  },
  {
    name: "Elif Sen",
    position: "Growth @Estuary",
    education: "Columbia University",
    linkedin: "https://www.linkedin.com/in/elifcsen",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    name: "Eni Agollari",
    position: "Double Major",
    education: "Neuroscience & Behavior and French & Francophone Studies, University of Notre Dame",
    linkedin: "https://www.linkedin.com/in/eni-agollari-b879a5285/",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Gina Leech",
    position: "Student",
    education: "Economics & Finance UC San Diego | Class of 2026",
    linkedin: "https://www.linkedin.com/in/gina-leech",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80"
  },
  {
    name: "Katherine Kirsch",
    position: "Venture Associate",
    education: "Red Cedar Ventures",
    linkedin: "https://www.linkedin.com/in/hello-katiekirsch",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80"
  },
  {
    name: "Rose Reeb",
    position: "Investment Banking Associate",
    education: "Morgan Stanley",
    linkedin: "https://www.linkedin.com/in/rosereeb",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80"
  },
  {
    name: "Dimitra Charalampopoulou",
    position: "Data Scientist | Software Engineer",
    education: "Intel | MsBA, Data Science @ USC",
    linkedin: "https://www.linkedin.com/in/dimitra-haralampopoulou",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80"
  }
];

const Advisors = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 text-purple-900"
      >
        Our Advisors
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map((advisor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={advisor.image}
                alt={advisor.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">{advisor.name}</h3>
              <p className="text-purple-700 font-medium mb-1">{advisor.position}</p>
              <p className="text-gray-600 mb-4">{advisor.education}</p>
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                View LinkedIn Profile
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Advisors;