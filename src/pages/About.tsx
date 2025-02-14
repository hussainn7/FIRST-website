import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Goal } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-purple-900"
        >
          About Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Mission",
              content: "To empower and support women in research, science, and technology fields through community, education, and opportunities."
            },
            {
              icon: Lightbulb,
              title: "Vision",
              content: "A world where women are equally represented and leading innovation in STEM fields across all sectors."
            },
            {
              icon: Goal,
              title: "Objectives",
              content: "Create networking opportunities, provide mentorship, and facilitate knowledge sharing among women in STEM."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <item.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-purple-900">{item.title}</h2>
              <p className="text-gray-600">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;