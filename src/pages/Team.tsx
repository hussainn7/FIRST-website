import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code } from 'lucide-react';

const teamMembers = {
  leadership: [
    {
      name: "James Gillespie",
      role: "Leadership",
    }
  ],
  technology: [
    {
      name: "Hussain Syed",
      role: "Technology",
    },
    {
      name: "Aasrith",
      role: "Technology",
    },
    {
      name: "Koshel",
      role: "Technology",
    }
  ]
};

const Team = () => {
  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-purple-900"
        >
          Our Team
        </motion.h1>

        {/* Leadership Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-semibold text-purple-900">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-900 mb-2">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center mb-8">
            <Code className="h-8 w-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-semibold text-purple-900">Technology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.technology.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-900 mb-2">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Team;