import React from 'react';
import { mockStats } from '../mock';
import { Users, Building, Globe, Calendar, TrendingUp, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      value: mockStats.clientsServed + '+',
      label: 'Happy Clients',
      description: 'Organizations served across Nepal',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      value: mockStats.projectsCompleted + '+',
      label: 'Projects Delivered',
      description: 'Successful consulting assignments',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 3,
      value: mockStats.districtsReached + '+',
      label: 'Districts Covered',
      description: 'Nationwide project presence',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      value: mockStats.yearsExperience + '+',
      label: 'Years Excellence',
      description: 'Proven expertise & reliability',
      icon: Award,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Driving Results That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Matter
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A decade of excellence in delivering transformative consulting solutions 
            across government, private sector, and development organizations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group-hover:shadow-2xl">
                  {/* Icon */}
                  <div className={`relative mb-6 inline-flex`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl opacity-20 group-hover:opacity-40 filter blur-xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Stats */}
                  <div className="text-center">
                    <div className={`text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="text-sm text-slate-300 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl filter blur-2xl transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Join Our Success Story
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with Mountain Thoughts and become part of Nepal's sustainable development journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;