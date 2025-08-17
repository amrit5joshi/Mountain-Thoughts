import React from 'react';
import { mockStats } from '../mock';
import { Users, Building, Globe, Calendar, TrendingUp, Award, Target, Zap } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      value: mockStats.clientsServed + '+',
      label: 'Happy Clients',
      description: 'Organizations served across Nepal',
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 2,
      value: mockStats.projectsCompleted + '+',
      label: 'Projects Delivered',
      description: 'Successful consulting assignments',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      value: mockStats.districtsReached + '+',
      label: 'Districts Covered',
      description: 'Nationwide project presence',
      icon: Globe,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      value: mockStats.yearsExperience + '+',
      label: 'Years Excellence',
      description: 'Proven expertise & reliability',
      icon: Award,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-white/20">
            <TrendingUp className="w-5 h-5 mr-2" />
            Our Impact
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Driving Results That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Matter
            </span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            A decade of excellence in delivering transformative consulting solutions 
            across government, private sector, and development organizations throughout Nepal.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group-hover:shadow-2xl relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative mb-8 inline-flex`}>
                    <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl opacity-20 group-hover:opacity-40 filter blur-xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Stats */}
                  <div className="text-center relative z-10">
                    <div className={`text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="text-emerald-200 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl filter blur-2xl transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-12 lg:p-16 border border-white/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Zap className="w-12 h-12 text-emerald-400 mr-4" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  Join Our Success Story
                </h3>
              </div>
              <p className="text-emerald-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Partner with Mountain Thoughts and become part of Nepal's sustainable development journey. 
                Let's create lasting impact together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-3 h-6 w-6 inline" />
                </button>
                <button className="px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm text-lg">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;