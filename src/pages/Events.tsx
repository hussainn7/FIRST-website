import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, MapPin } from 'lucide-react';

const events = [
  {
    date: "March 5, 2025",
    title: "FIRST Boston Event",
    location: "Boston",
    type: "in-person",
    description: "Join us for an inspiring evening of networking and knowledge sharing in the heart of Boston's innovation district.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80",
    icon: MapPin
  },
  {
    date: "April 2, 2025",
    title: "Females & AI",
    location: "Virtual",
    type: "virtual",
    description: "Explore the future of artificial intelligence with leading women in the field. Join us for this virtual summit.",
    link: "https://bit.ly/FemaleAI",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    icon: Video
  },
  {
    date: "April 16, 2025",
    title: "FIRST San Diego Event",
    location: "San Diego",
    type: "in-person",
    description: "Connect with fellow STEM professionals in San Diego for an afternoon of inspiration and collaboration.",
    image: "https://images.unsplash.com/photo-1596496181935-7801d2065877?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-purple-900 mb-6">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at our upcoming events and connect with other women in STEM
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-purple-900 font-semibold shadow-md">
                  {event.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-purple-700 mb-4">
                  <event.icon className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                {event.type === 'virtual' && event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    Register Now
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