import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Mountain-Peak, Founder & CEO",
      description: "Sarah is an acknowledged global thought leader in the mountain and high-altitude agriculture industry. She has spoken at sustainability-driven forums and events worldwide, and has 12+ years of experience consulting and spearheading numerous mountain agriculture initiatives.",
      expertise: "concept development, strategic planning, high-altitude assessments",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b765?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzU1NDI5Mzg5fDA&ixlib=rb-4.1.0&q=85&w=400&h=400"
    },
    {
      id: 2,
      name: "Marcus Alpine-Stone, Director of Mountain Consulting",
      description: "Marcus oversees high-altitude project development and helps clients determine the right farming methods, crop selection, and climate management for mountain environments. He has a professional background in sustainable mountain technologies and alpine agriculture systems.",
      expertise: "mountain farm design, equipment & technology, feasibility studies",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fHx8MTc1NTQyOTM5NHww&ixlib=rb-4.1.0&q=85&w=400&h=400"
    },
    {
      id: 3,
      name: "Dr. Elena Summit, Lead Mountain Agronomist",
      description: "Elena advises on high-altitude growing and operations-related questions for our clients. She also oversees research and climate modeling activities for Mountain Designer. Elena has more than 18 years of experience working in mountain agriculture, including alpine hydroponics and soil management.",
      expertise: "mountain crop management, climate resilience, high-altitude algorithms",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzU1NDI5Mzg5fDA&ixlib=rb-4.1.0&q=85&w=400&h=400"
    },
    {
      id: 4,
      name: "Carlos Ridge, Mountain Systems Engineer",
      description: "Carlos advises on optimization of operation and energy performance of mountain farming facilities and high-altitude agriculture systems. He has obtained hands-on experience in the operation, design, and construction of mountain farms while living in the Andes.",
      expertise: "altitude climate control, resource analysis, mountain technology assessment",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fHx8MTc1NTQyOTM5NHww&ixlib=rb-4.1.0&q=85&w=400&h=400"
    },
    {
      id: 5,
      name: "Priya Himalaya, Operations & Finance Associate",
      description: "Priya manages the company's business operations and financial reporting in addition to overseeing the financial health and long term financial planning of the company. Her professional experience spans across mountain agriculture, sustainable technology, and environmental finance.",
      expertise: "financial planning, operations management, mountain project economics",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzU1NDI5Mzg5fDA&ixlib=rb-4.1.0&q=85&w=400&h=400"
    },
    {
      id: 6,
      name: "Alex Plateau, Asia-Pacific Representative",
      description: "Alex is Mountain's Asia-Pacific Representative, leading sustainable mountain agriculture initiatives across the region. With a Master's in Mountain Ecology from Colorado University and extensive field experience, Alex focuses on advancing high-altitude farming and climate-resilient food systems.",
      expertise: "regional development, stakeholder engagement, mountain ecology",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fHx8MTc1NTQyOTM5NHww&ixlib=rb-4.1.0&q=85&w=400&h=400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Experts in Climate-Smart Mountain Agriculture
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Mountain's global team brings 50+ years of combined experience designing sustainable, high-impact 
              mountain agriculture projects—from alpine farms and high-altitude systems to mountain regenerative 
              agriculture and climate adaptation strategy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We turn complex mountain visions into actionable plans through feasibility studies, terrain assessments, 
              altitude-specific business modeling, and climate-smart mountain technology guidance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a government shaping mountain food policy, a developer integrating high-altitude farming, 
              or a founder launching a mountain farm, we deliver tailored, future-ready solutions. Partner with Mountain 
              to build smarter, more resilient mountain agriculture—globally and locally.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <Card key={member.id} className="bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 group">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-emerald-600 mb-1">Expertise:</p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;