import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Shield, TrendingUp, Users, Building, Leaf, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Shield,
      title: "Environmental Impact Assessment",
      subtitle: "Comprehensive EIA & IEE Studies",
      description: "Expert environmental assessment services ensuring sustainable development practices across all project phases.",
      features: ["Flora & Fauna Studies", "Climate Change Adaptation", "Regulatory Compliance", "Risk Assessment"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Value Chain Development",
      subtitle: "NTFP & Agricultural Value Chains",
      description: "Strategic value chain analysis and development support to transform enterprises and improve rural livelihoods.",
      features: ["Market Analysis", "Enterprise Development", "Feasibility Studies", "Business Planning"],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      id: 3,
      icon: Users,
      title: "Capacity Building Programs",
      subtitle: "Training & Skill Development",
      description: "Comprehensive training programs including MToT, SIYB, and specialized capacity building initiatives.",
      features: ["Master Training Programs", "SIYB Training", "Organizational Development", "Skills Enhancement"],
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      id: 4,
      icon: Building,
      title: "Local Government Support",
      subtitle: "Municipal & Rural Development",
      description: "Strengthening local governance through RIAP, LAPA, and comprehensive municipal planning support.",
      features: ["Revenue Improvement Plans", "Adaptation Planning", "Project Reports", "Governance Strengthening"],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    },
    {
      id: 5,
      icon: Leaf,
      title: "Agriculture & Forestry",
      subtitle: "Sustainable Resource Management",
      description: "Specialized consulting in agriculture, forestry, and sustainable resource management practices.",
      features: ["Crop Management", "Forest Planning", "Sustainable Practices", "Resource Optimization"],
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Consulting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end consulting services across multiple sectors, helping organizations 
            achieve sustainable development goals through evidence-based solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Large Featured Service */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{services[0].title}</h3>
                    <p className="text-indigo-200">{services[0].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
                  {services[0].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {services[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="secondary" 
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Side Services */}
          <div className="space-y-8">
            {services.slice(1, 3).map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className={`${service.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className={`text-sm ${service.textColor} font-medium mb-3`}>{service.subtitle}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className={`${service.textColor} hover:bg-white/70 p-0 font-semibold group-hover:translate-x-1 transition-transform duration-200`}
                    >
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom Row Services */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {services.slice(3).map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className={`text-sm ${service.textColor} font-medium mb-3`}>{service.subtitle}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                            <span className="text-xs text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`border-2 ${service.textColor} hover:bg-slate-50 font-semibold group-hover:translate-x-1 transition-all duration-200`}
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let our expert team help you achieve your development goals with tailored consulting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;