import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Professional Consulting & Research Services for 
            <br />
            <span className="text-emerald-600">Sustainable Development</span>
            <br />
            in Nepal and Beyond.
          </h1>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Mountain is a global consulting firm specializing in climate-smart agriculture, mountain farming systems, 
              controlled environment agriculture (CEA), and sustainable farming practices. We help governments, agricultural 
              businesses, and entrepreneurs design and scale profitable, resilient, and sustainable farming solutions in 
              mountainous and challenging terrain.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Our expertise lies in high-altitude agriculture development—from feasibility studies, climate assessments, 
              and terrain analysis to specialized farming systems and strategic implementation. We combine data-driven 
              insights with mountain agriculture expertise and local knowledge to de-risk investments and accelerate 
              sustainable farming adoption.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Whether you're developing mountain farming initiatives, high-altitude agriculture projects, or sustainable 
              food systems in challenging environments, Mountain helps future-proof your agricultural ventures and lead 
              the transition to resilient mountain farming.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;