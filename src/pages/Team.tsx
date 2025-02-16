import React from 'react';
import { Users, Code, Linkedin } from 'lucide-react';

const teamMembers = {
  leadership: [
    {
      name: "James Gillespie",
      role: "President",
      image: "./M.James.png",
      linkedin: "https://www.linkedin.com/in/jamesjgillespie/"
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
  ],
  technology: [
    {
      name: "Hussain Syed",
      role: "Technology Lead",
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
  ]
};

const TeamMemberCard = ({ member, isLeadership = false }) => {
  return (
    <div className="group relative">
      {/* Circular image with gradient border */}
      <div className="relative mx-auto w-48 h-48 mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-spin-slow"></div>
        <div className="absolute inset-1 bg-white rounded-full">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <h3 className="text-xl font-semibold text-purple-900 mb-2">{member.name}</h3>
        <p className="text-purple-600 mb-4">{member.role}</p>
        
        {isLeadership && member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors duration-300"
          >
            <Linkedin className="h-5 w-5 text-purple-600" />
          </a>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="pt-24 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals driving our mission forward
          </p>
        </div>

        {/* Leadership Section */}
        <section className="mb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-semibold text-purple-900 ml-4">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {teamMembers.leadership.map((member, index) => (
              <TeamMemberCard key={index} member={member} isLeadership={true} />
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="pb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-purple-100 p-3 rounded-full">
              <Code className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-semibold text-purple-900 ml-4">Technology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {teamMembers.technology.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;