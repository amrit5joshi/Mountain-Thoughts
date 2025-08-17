import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Making Mountain Data More Accessible",
      description: "Mountain Designer is the only platform for planning high-altitude farming facilities from start to finish, anywhere in the world. Join the hundreds of entrepreneurs from 40+ countries who have reduced their planning time using our advanced mountain agriculture software.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDB8fHx8MTc1NTQyOTM0OXww&ixlib=rb-4.1.0&q=85",
      buttonText: "Get Started Today",
      buttonVariant: "default"
    },
    {
      id: 2,
      title: "Avoiding Mistakes in Mountain Farming",
      description: "Mountain designed Alpine Harvest's first high-altitude facility, recruited their Lead Agronomist, and researched climate-resistant crop varieties for mountain production. Learn more about some of the 150+ clients we've helped solve unique challenges in mountain agriculture planning.",
      image: "https://images.unsplash.com/photo-1657441919044-06ff5ee50279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGZhcm1pbmd8ZW58MHx8fHwxNzU1NDI5MzU5fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "View Our Portfolio",
      buttonVariant: "outline"
    },
    {
      id: 3,
      title: "2025 Global Mountain Agriculture Report",
      description: "This comprehensive report provides a deep dive into the current trends, challenges, and opportunities shaping the Mountain Agriculture industry worldwide, focusing on high-altitude farming systems and climate adaptation strategies.",
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzU1NDI5MzU0fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "Participate Now",
      buttonVariant: "default"
    },
    {
      id: 4,
      title: "Multi-Stakeholder Mountain Initiatives",
      description: "Mountain and Alpine Research Institute were awarded the 'Climate Adaptation Grant'. The partnership is working together to use Machine Learning and Artificial Intelligence to improve the viability of mountain agriculture under volatile climate conditions.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzI3MDV8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGZhcm1pbmd8ZW58MHx8fHwxNzU1NDI5MzU5fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "Watch Our Recent Panel",
      buttonVariant: "outline"
    },
    {
      id: 5,
      title: "Sustainable Mountain Practices",
      description: "Mountain is advancing sustainability in high-altitude agriculture through a variety of offerings - including sustainability benchmarking, climate adaptation guidelines, our spotlight on mountain innovators, and our Global Mountain Agriculture Report.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzI3MDV8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGZhcm1pbmd8ZW58MHx8fHwxNzU1NDI5MzU5fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "View Our Sustainability Resources",
      buttonVariant: "outline"
    },
    {
      id: 6,
      title: "Work With Mountain",
      description: "Mountain has worked with over 150 clients in 75+ mountain regions around the world. Learn more about our consulting services for entrepreneurs, investors, mountain communities, suppliers, corporations, and more focused on high-altitude agriculture.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzI3MDV8MHwxfHNlYXJjaHw0fHxtb3VudGFpbiUyMGZhcm1pbmd8ZW58MHx8fHwxNzU1NDI5MzU5fDA&ixlib=rb-4.1.0&q=85",
      buttonText: "Submit Consulting Request",
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