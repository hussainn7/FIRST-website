import React from 'react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
import { Target, Lightbulb, Goal } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering women in STEM through community, education, and opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-purple-900"
        >
          About Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
          {[
            {
              icon: Target,
              title: "Mission",
<<<<<<< HEAD
              content: "To empower and support women in research, science, and technology fields through community, education, and opportunities.",
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
=======
              content: "To empower and support women in research, science, and technology fields through community, education, and opportunities."
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
            },
            {
              icon: Lightbulb,
              title: "Vision",
<<<<<<< HEAD
              content: "A world where women are equally represented and leading innovation in STEM fields across all sectors.",
              image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&q=80"
=======
              content: "A world where women are equally represented and leading innovation in STEM fields across all sectors."
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
            },
            {
              icon: Goal,
              title: "Objectives",
<<<<<<< HEAD
              content: "Create networking opportunities, provide mentorship, and facilitate knowledge sharing among women in STEM.",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <item.icon className="absolute top-4 right-4 h-8 w-8 text-purple-900" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-purple-900 mb-4">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
=======
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
>>>>>>> 482bbe777b16166198126b1a01e07ace311fb80c
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;