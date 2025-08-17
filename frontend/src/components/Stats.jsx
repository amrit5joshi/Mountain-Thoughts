import React from 'react';
import { mockStats } from '../mock';
import { Users, Building, Globe, Calendar } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      value: mockStats.clientsServed + '+',
      label: 'Clients Served',
      description: 'Mountain agriculture projects worldwide',
      icon: Users,
      color: 'text-emerald-600'
    },
    {
      id: 2,
      value: mockStats.projectsCompleted + '+',
      label: 'Projects Completed',
      description: 'Major consulting assignments completed',
      icon: Building,
      color: 'text-blue-600'
    },
    {
      id: 3,
      value: mockStats.districtsReached + '+',
      label: 'Districts Reached',
      description: 'Development projects across Nepal',
      icon: Globe,
      color: 'text-purple-600'
    },
    {
      id: 4,
      value: mockStats.yearsExperience + '+',
      label: 'Years Experience',
      description: 'Combined team expertise in mountain farming',
      icon: Calendar,
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by mountain communities, governments, and agricultural innovators worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <IconComponent className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;