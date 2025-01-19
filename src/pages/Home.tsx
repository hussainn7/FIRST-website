import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Calendar, Users, Brain, Target, Lightbulb, Goal, LineChart, Database, Code, ArrowRight } from 'lucide-react';

import Advisors from './Advisors';

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
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center bg-[#6B21A8] text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
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
            Female in Research, Science, & Technology
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

      {/* About Section */}
      <motion.section
        id="about"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-12 text-[#6B21A8]">
            About Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                content: "To empower and support women in research, science, and technology fields through community, education, and opportunities.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              },
              {
                icon: Lightbulb,
                title: "Vision",
                content: "A world where women are equally represented and leading innovation in STEM fields across all sectors.",
                image: "https://images.unsplash.com/photo-1703533136832-2e91ef1a746f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                icon: Goal,
                title: "Objectives",
                content: "Create networking opportunities, provide mentorship, and facilitate knowledge sharing among women in STEM.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  variants={imageHoverVariants}
                  whileHover="hover"
                  className="h-48 overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <item.icon className="h-8 w-8 text-[#6B21A8] mr-3" />
                    <h3 className="text-2xl font-semibold text-[#6B21A8]">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        id="events"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 bg-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-12 text-[#6B21A8]">
            Upcoming Events
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                date: "March 5, 2025",
                title: "FIRST Boston Event",
                location: "Boston",
                type: "in-person",
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
                description: "Join us for an exciting networking event in the heart of Boston's innovation district."
              },
              {
                date: "April 2, 2025",
                title: "Females & AI",
                location: "Virtual",
                type: "virtual",
                link: "https://bit.ly/FemaleAI",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
                description: "Explore the intersection of AI and gender diversity in tech with leading experts."
              },
              {
                date: "April 16, 2025",
                title: "FIRST San Diego Event",
                location: "San Diego",
                type: "in-person",
                image: "https://plus.unsplash.com/premium_photo-1670992114120-4e481a5c89c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Connect with fellow women in STEM at our San Diego networking mixer."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <motion.div
                    variants={imageHoverVariants}
                    whileHover="hover"
                    className="md:w-1/3 h-64 md:h-auto overflow-hidden"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-[#6B21A8] mr-3" />
                      <p className="text-[#6B21A8] font-semibold">{event.date}</p>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#6B21A8] mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-[#6B21A8]">
                        {event.location}
                      </span>
                      {event.type === 'virtual' && event.link && (
                        <motion.a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-[#6B21A8] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Register Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-12 text-[#6B21A8]">
            Our Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  variants={imageHoverVariants}
                  whileHover="hover"
                  className="h-64 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <project.icon className="h-8 w-8 text-[#6B21A8] mr-3" />
                    <h3 className="text-2xl font-semibold text-[#6B21A8]">{project.title}</h3>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex items-center text-[#6B21A8] font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
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
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="../hussain.jpeg"
                    alt="James Gillespie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#6B21A8] mb-2 text-center">James Gillespie</h4>
                <p className="text-purple-600 text-center">Leadership</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Technology */}
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
      
      <motion.section
        id="advisors"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 bg-purple-100"
      >
        <Advisors />
      </motion.section>

    </div>
  );
};

export default Home;