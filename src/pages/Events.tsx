import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, MapPin } from 'lucide-react';

const events = [
  {
    date: "March 5, 2025",
    title: "FIRST Boston Event",
    location: "Boston",
    type: "in-person",
    icon: MapPin
  },
  {
    date: "April 2, 2025",
    title: "Females & AI",
    location: "Virtual",
    type: "virtual",
    link: "https://bit.ly/FemaleAI",
    icon: Video
  },
  {
    date: "April 16, 2025",
    title: "FIRST San Diego Event",
    location: "San Diego",
    type: "in-person",
    icon: MapPin
  }
];

const Events = () => {
  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">Join us at our upcoming events and connect with other women in STEM</p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <Calendar className="h-12 w-12 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-purple-900">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <div className="flex items-center mt-2 text-purple-700">
                    <event.icon className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                {event.type === 'virtual' && event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
                  >
                    Register
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;