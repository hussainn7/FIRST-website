import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Database, ArrowRight } from 'lucide-react';

const projects = [
  {
    icon: LineChart,
    title: "Annual Survey of Females in AI, DL, and ML",
    description: "Comprehensive research study tracking the representation and impact of women in artificial intelligence, deep learning, and machine learning fields.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    icon: Database,
    title: "Non-profit Organizations Database",
    description: "Curated database of organizations focused on supporting women in healthcare, life sciences, medicine, and STEM fields.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  }
];

const Projects = () => {
  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-purple-900 mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Initiatives that drive change and create opportunities for women in STEM
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <project.icon className="absolute top-4 right-4 h-12 w-12 text-purple-900" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-purple-900 mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;