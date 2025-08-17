import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Shield, TrendingUp, Users, Building, Leaf, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Shield,
      title: "Environmental Impact Assessment",
      subtitle: "Comprehensive EIA & IEE Studies",
      description: "Expert environmental assessment services ensuring sustainable development practices across all project phases with cutting-edge methodologies.",
      features: ["Flora & Fauna Studies", "Climate Change Adaptation", "Regulatory Compliance", "Risk Assessment"],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Value Chain Development",
      subtitle: "NTFP & Agricultural Value Chains",
      description: "Strategic value chain analysis and development support to transform enterprises and improve rural livelihoods through innovative approaches.",
      features: ["Market Analysis", "Enterprise Development", "Feasibility Studies", "Business Planning"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      icon: Users,
      title: "Capacity Building Programs",
      subtitle: "Training & Skill Development",
      description: "Comprehensive training programs including MToT, SIYB, and specialized capacity building initiatives for sustainable growth.",
      features: ["Master Training Programs", "SIYB Training", "Organizational Development", "Skills Enhancement"],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      icon: Building,
      title: "Local Government Support",
      subtitle: "Municipal & Rural Development",
      description: "Strengthening local governance through RIAP, LAPA, and comprehensive municipal planning support for effective service delivery.",
      features: ["Revenue Improvement Plans", "Adaptation Planning", "Project Reports", "Governance Strengthening"],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200"
    },
    {
      id: 5,
      icon: Leaf,
      title: "Agriculture & Forestry",
      subtitle: "Sustainable Resource Management",
      description: "Specialized consulting in agriculture, forestry, and sustainable resource management practices for long-term environmental health.",
      features: ["Crop Management", "Forest Planning", "Sustainable Practices", "Resource Optimization"],
      color: "from-teal-500 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      textColor: "text-teal-700",
      borderColor: "border-teal-200"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 relative overflow-hidden" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-emerald-100/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
            Comprehensive Consulting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We provide end-to-end consulting services across multiple sectors, helping organizations 
            achieve sustainable development goals through evidence-based solutions and innovative approaches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Large Featured Service */}
          <div className="lg:col-span-2">
            <Card className={`h-full ${services[0].bgColor} border-2 ${services[0].borderColor} shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden`}>
              <CardContent className="p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${services[0].color} rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{services[0].title}</h3>
                    <p className={`text-lg ${services[0].textColor} font-semibold`}>{services[0].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-xl text-slate-700 mb-10 leading-relaxed">
                  {services[0].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {services[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
                      <div className={`w-3 h-3 bg-gradient-to-r ${services[0].color} rounded-full`}></div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`bg-gradient-to-r ${services[0].color} hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg`}
                >
                  Learn More
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Side Services */}
          <div className="space-y-10">
            {services.slice(1, 3).map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className={`${service.bgColor} border-2 ${service.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className={`text-sm ${service.textColor} font-semibold mb-4`}>{service.subtitle}</p>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    <Button 
                      variant="outline" 
                      className={`${service.textColor} border-2 ${service.borderColor} hover:bg-white/70 font-semibold group-hover:translate-x-1 transition-all duration-200 rounded-xl`}
                    >
                      Explore
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom Row Services */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {services.slice(3).map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`${service.bgColor} border-2 ${service.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden`}>
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className={`w-18 h-18 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-9 h-9 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className={`text-sm ${service.textColor} font-semibold mb-4`}>{service.subtitle}</p>
                      <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                            <span className="text-xs text-slate-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        className={`border-2 ${service.borderColor} ${service.textColor} hover:bg-white/70 font-semibold group-hover:translate-x-1 transition-all duration-200 rounded-xl`}
                      >
                        View Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-emerald-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Let our expert team help you achieve your development goals with tailored consulting solutions 
                that drive real impact and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-50 hover:text-emerald-700 px-10 py-4 rounded-2xl transition-all duration-300 text-lg font-semibold"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;