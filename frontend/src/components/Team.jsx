import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Star, Award, Briefcase, GraduationCap } from 'lucide-react';

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
      color: "from-emerald-500 to-teal-600"
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
      color: "from-blue-500 to-cyan-600"
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
      color: "from-purple-500 to-indigo-600"
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
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden" id="team">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Users className="w-5 h-5 mr-2" />
            Our Team
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
            Meet The Experts Behind
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
              Our Success
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our diverse team of professionals brings decades of combined expertise across 
            environmental science, agriculture, engineering, and socio-economic development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Featured Team Member */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img 
                      src={teamMembers[0].image} 
                      alt={teamMembers[0].name}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${teamMembers[0].color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Award className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm font-semibold text-slate-700">Managing Director</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <div className={`w-4 h-4 bg-gradient-to-r ${teamMembers[0].color} rounded-full mr-4`}></div>
                      <Badge className="bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">
                        {teamMembers[0].experience}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                      {teamMembers[0].name}
                    </h3>
                    <p className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${teamMembers[0].color} mb-3`}>
                      {teamMembers[0].role}
                    </p>
                    <div className="flex items-center mb-6">
                      <GraduationCap className="w-5 h-5 text-slate-500 mr-2" />
                      <p className="text-slate-500 font-medium">{teamMembers[0].education}</p>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                      {teamMembers[0].description}
                    </p>

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-slate-700 mb-4 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-emerald-600" />
                        Key Expertise:
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {teamMembers[0].expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200 hover:shadow-md transition-all duration-200"
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
          <div className="space-y-12">
            {teamMembers.slice(1, 3).map((member) => (
              <Card key={member.id} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-3xl object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.color} rounded-full border-3 border-white flex items-center justify-center`}>
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 truncate">{member.name}</h3>
                        <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-semibold">
                          {member.experience}
                        </Badge>
                      </div>
                      <p className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${member.color} mb-2`}>
                        {member.role}
                      </p>
                      <div className="flex items-center mb-4">
                        <GraduationCap className="w-4 h-4 text-slate-500 mr-2" />
                        <p className="text-sm text-slate-500 font-medium">{member.education}</p>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.slice(0, 2).map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-600 rounded-full text-xs font-medium border border-slate-200"
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
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {teamMembers.slice(3).map((member) => (
            <Card key={member.id} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-3xl object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${member.color} rounded-full border-3 border-white flex items-center justify-center`}>
                      <Star className="w-5 h-5 text-white fill-current" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                      <Badge className={`bg-gradient-to-r ${member.color} text-white px-4 py-2 font-semibold`}>
                        {member.experience}
                      </Badge>
                    </div>
                    <p className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${member.color} mb-2`}>
                      {member.role}
                    </p>
                    <div className="flex items-center mb-5">
                      <GraduationCap className="w-5 h-5 text-slate-500 mr-2" />
                      <p className="text-slate-500 font-medium">{member.education}</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {member.description}
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm font-bold text-slate-700 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-emerald-600" />
                        Specializations:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200 border border-emerald-200"
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
          <Card className="bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 border-0 shadow-2xl overflow-hidden max-w-5xl mx-auto relative">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"></div>
            </div>
            
            <CardContent className="p-12 lg:p-16 text-center text-white relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Extended Expert Network
              </h3>
              <p className="text-emerald-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Beyond our core team, we maintain a roster of 39+ specialized experts including Ph.D. 
                holders in Environmental Science, Forestry, Agriculture, and other critical fields to serve your unique needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
                  Meet Our Experts
                </button>
                <button className="px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm text-lg">
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