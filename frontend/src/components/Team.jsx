import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Krishna Datta Bhatta",
      role: "Managing Director",
      experience: "16+ Years",
      education: "M.A. Sociology",
      expertise: ["Project Management", "Strategic Planning", "Multi-sector Consulting"],
      description: "Leads Mountain Thoughts' strategic direction with extensive experience in managing diverse consulting projects across multiple sectors.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fHx8MTc1NTQyOTM5NHww&ixlib=rb-4.1.0&q=85&w=400&h=400",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      name: "Shashi Joshi",
      role: "Executive Officer",
      experience: "8+ Years", 
      education: "M.A. Sociology",
      expertise: ["Executive Operations", "Project Coordination", "Organizational Management"],
      description: "Oversees day-to-day operations ensuring smooth execution of projects across the organization's diverse consulting portfolio.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b765?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzU1NDI5Mzg5fDA&ixlib=rb-4.1.0&q=85&w=400&h=400",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 3,
      name: "Nabina Shrestha",
      role: "Forest Expert",
      experience: "3+ Years",
      education: "M.Sc. Wildlife & Forestry",
      expertise: ["Wildlife Conservation", "Environmental Assessment", "Forest Management"],
      description: "Provides specialized expertise in forest management, wildlife conservation, and environmental assessment projects.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzU1NDI5Mzg5fDA&ixlib=rb-4.1.0&q=85&w=400&h=400",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      name: "Ajay Shahi",
      role: "Program Coordinator",
      experience: "3+ Years",
      education: "BSc. Agriculture",
      expertise: ["Agricultural Programs", "Stakeholder Coordination", "Rural Development"],
      description: "Manages agricultural projects and coordinates with stakeholders to ensure effective implementation of rural development initiatives.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fHx8MTc1NTQyOTM5NHww&ixlib=rb-4.1.0&q=85&w=400&h=400",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 5,
      name: "Prakash Gaire",
      role: "Engineer",
      experience: "7+ Years",
      education: "Master in Engineering",
      expertise: ["Engineering Design", "Infrastructure Projects", "Technical Feasibility"],
      description: "Provides technical engineering support for infrastructure projects and conducts comprehensive feasibility studies.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI2fDB8MXxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fHx8MTc1NTQyOTM5NHww&ixlib=rb-4.1.0&q=85&w=400&h=400",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden" id="team">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Meet The Experts Behind
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Our Success
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of professionals brings decades of combined expertise across 
            environmental science, agriculture, engineering, and socio-economic development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Team Member */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image */}
                  <div className="lg:w-1/2 relative">
                    <img 
                      src={teamMembers[0].image} 
                      alt={teamMembers[0].name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${teamMembers[0].color} opacity-20`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className={`w-3 h-3 bg-gradient-to-r ${teamMembers[0].color} rounded-full mr-3`}></div>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                        {teamMembers[0].experience}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                      {teamMembers[0].name}
                    </h3>
                    <p className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${teamMembers[0].color} mb-2`}>
                      {teamMembers[0].role}
                    </p>
                    <p className="text-sm text-slate-500 mb-4">{teamMembers[0].education}</p>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {teamMembers[0].description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Key Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {teamMembers[0].expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Team Members */}
          <div className="space-y-8">
            {teamMembers.slice(1, 3).map((member) => (
              <Card key={member.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r ${member.color} rounded-full border-2 border-white`}></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-900 truncate">{member.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {member.experience}
                        </Badge>
                      </div>
                      <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${member.color} mb-1`}>
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-500 mb-3">{member.education}</p>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Row Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.slice(3).map((member) => (
            <Card key={member.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r ${member.color} rounded-full border-2 border-white flex items-center justify-center`}>
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                      <Badge className={`bg-gradient-to-r ${member.color} text-white`}>
                        {member.experience}
                      </Badge>
                    </div>
                    <p className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${member.color} mb-1`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-500 mb-4">{member.education}</p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-700">Specializations:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expert Roster CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center text-white">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Extended Expert Network
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Beyond our core team, we maintain a roster of 39+ specialized experts including Ph.D. 
                holders in Environmental Science, Forestry, Agriculture, and other critical fields to serve your unique needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  Meet Our Experts
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                  Join Our Team
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;