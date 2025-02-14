import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, Users, Brain, Target, Lightbulb, Goal, LineChart, Database, Code, ArrowRight, MapPin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageHoverVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center bg-[#6B21A8] text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.2 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            alt="Women in Science"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            Females in Research, Science, & Technology
          </motion.h1>
          <motion.p 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Empowering women to lead the future of innovation
          </motion.p>
          <motion.a
            href="#about"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center space-x-2 bg-white text-[#6B21A8] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-sm"
          >
            Scroll Down
            <div className="mt-2 h-6 w-0.5 bg-white mx-auto"></div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section
        id="team"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 bg-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-12 text-[#6B21A8]">
            Our Team
          </motion.h2>

          {/* Leadership */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-[#6B21A8] mr-4" />
              <h3 className="text-3xl font-semibold text-[#6B21A8]">Leadership</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "James Gillespie",
                  role: "President",
                  // image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
                  linkedin: "https://www.linkedin.com/"
                },
                {
                  name: "Mikaela Morelli",
                  role: "Executive Director",
                  // image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
                  linkedin: "https://www.linkedin.com/in/mikaelamorelli"
                },
                {
                  name: "Ryder Erman",
                  role: "Director of Operations",
                  // image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
                  linkedin: "https://www.linkedin.com/in/ryder-erman/"
                }
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <motion.img
                      // src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-[#6B21A8] mb-2 text-center">{leader.name}</h4>
                  <p className="text-purple-600 text-center">{leader.role}</p>
                  <div className="mt-4 text-center">
                    <motion.a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#6B21A8] hover:text-purple-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View LinkedIn Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Code className="h-8 w-8 text-[#6B21A8] mr-4" />
              <h3 className="text-3xl font-semibold text-[#6B21A8]">Technology</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Hussain Syed",
                  role: "Technology",
                  // image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                },
                { 
                  name: "Aasrith",
                  role: "Technology",
                  // image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                },
                { 
                  name: "Koshel",
                  role: "Technology",
                  // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      // src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-[#6B21A8] mb-2 text-center">{member.name}</h4>
                  <p className="text-purple-600 text-center">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Rest of the sections (About, Events, Projects) remain the same */}
    </div>
  );
};

export default Home;