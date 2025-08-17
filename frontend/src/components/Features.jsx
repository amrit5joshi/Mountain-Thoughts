import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Environmental Impact Assessment & Research",
      description: "Comprehensive Environmental Impact Assessment (EIA) and Initial Environmental Examination (IEE) studies for various development projects. We conduct detailed environmental research, flora and fauna studies, and climate change adaptation planning to ensure sustainable development practices.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDB8fHx8MTc1NTQyOTM0OXww&ixlib=rb-4.1.0&q=85",
      buttonText: "View EIA Services",
      buttonVariant: "default"
    },
    {
      id: 2,
      title: "Value Chain Development & Enterprise Support",
      description: "Specialized expertise in NTFP (Non-Timber Forest Products) value chain development, agricultural value chains, and enterprise development. We help identify opportunities, conduct feasibility studies, and provide comprehensive support for sustainable business development in rural Nepal.",
      image: "https://images.unsplash.com/photo-1657441919044-06ff5ee50279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGZhcm1pbmd8ZW58MHx8fHwxNzU1NDI5MzU5fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "Explore Value Chains",
      buttonVariant: "outline"
    },
    {
      id: 3,
      title: "Capacity Building & Training Programs",
      description: "Master Training of Trainees (MToT), entrepreneurship development programs, SIYB (Start and Improve Your Business) training, and specialized capacity building for local governments, cooperatives, and community organizations across multiple sectors.",
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzU1NDI5MzU0fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "Training Programs",
      buttonVariant: "default"
    },
    {
      id: 4,
      title: "Local Government Support & Planning",
      description: "Revenue Improvement Action Plans (RIAP), Local Adaptation Plans for Action (LAPA), detailed project reports (DPR), and comprehensive municipal planning support. We work closely with local governments across Nepal to strengthen governance and service delivery.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzI3MDV8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGZhcm1pbmd8ZW58MHx8fHwxNzU1NDI5MzU5fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "Government Services",
      buttonVariant: "outline"
    },
    {
      id: 5,
      title: "Agriculture & Forestry Consulting",
      description: "Specialized consulting in agriculture, forestry, medicinal plants, and sustainable resource management. From crop insurance facilitation to forest management plans and agricultural feasibility studies, we provide comprehensive sector expertise.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzI3MDV8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGZhcm1pbmd8ZW58MHx8fHwxNzU1NDI5MzU5fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "Agriculture Services",
      buttonVariant: "outline"
    },
    {
      id: 6,
      title: "Work With Mountain Thoughts",
      description: "Mountain Thoughts has successfully completed 50+ major projects with Government, NGOs, INGOs, and private sector clients across Nepal. Our multidisciplinary team of 40+ experts is ready to support your development initiatives with professional excellence.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzI3MDV8MHwxfHNlYXJjaHw0fHxtb3VudGFpbiUyMGZhcm1pbmd8ZW58MHx8fHwxNzU1NDI5MzU5fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "Partner With Us",
      buttonVariant: "default"
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Button 
                  variant={feature.buttonVariant}
                  className={`w-full transition-all duration-300 ${
                    feature.buttonVariant === 'default' 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {feature.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;