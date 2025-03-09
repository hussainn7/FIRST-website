import React from 'react';
import { Users, Code, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

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
      image: "./Mikaela Morelli.jpg",
      linkedin: "https://www.linkedin.com/in/mikaelamorelli"
    },
    {
      name: "Ryder Erman",
      role: "Director of Operations",
      image: "./Ryder Erman.jpg",
      linkedin: "https://www.linkedin.com/in/ryder-erman/"
    }
  ],
  technology: [
    {
      name: "Hussain Syed",
      role: "Technology Lead",
      image: "./Hussain Syed.jpg",
      linkedin: "https://www.linkedin.com/in/hussainn7/"
    },
    {
      name: "Aasrith Ravulapati",
      role: "Technology",
      linkedin: "https://www.linkedin.com/in/aasrith-ravulapati-5463b426b/"
    },
    {
      name: "Koshel Sharma",
      role: "Technology",
      image: "./Koshel Sharma.jpg",
      linkedin: "https://www.linkedin.com/in/koshel-sharma-4450642a0/"
    }
  ]
};

interface TeamMemberCardProps {
  member: TeamMember;
  isLeadership?: boolean;
  isTechnology?: boolean;
}

const TeamMemberCard = ({ member, isLeadership = false, isTechnology = true }: TeamMemberCardProps) => {
  return (
    <div className="group relative">
      {/* Circular image with gradient border */}
      <div className="relative mx-auto w-48 h-48 mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-spin-slow"></div>
        <div className="absolute inset-1 bg-white rounded-full">
          <img
            src={member.image || 'https://via.placeholder.com/200'}
            alt={member.name}
            className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <h3 className="text-xl font-semibold text-purple-900 mb-2">{member.name}</h3>
        <p className="text-purple-600 mb-4">{member.role}</p>
        
        {isLeadership && member.linkedin && isTechnology==false && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors duration-300"
          >
            <Linkedin className="h-5 w-5 text-purple-600" />
          </a>
        )}

        {isTechnology && member.linkedin && isLeadership==false &&(
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-purple-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals driving our mission forward
          </p>
        </motion.div>

        {/* Leadership Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-semibold text-purple-900 ml-4">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {teamMembers.leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard member={member} isLeadership={true} isTechnology={false} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="pb-24"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="bg-purple-100 p-3 rounded-full">
              <Code className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-semibold text-purple-900 ml-4">Technology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {teamMembers.technology.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard member={member} isTechnology={true} isLeadership={false} />
                </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Team;