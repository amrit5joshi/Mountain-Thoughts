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
              Mountain Thoughts Pvt. Ltd. was established in 2015 as a national level professional, autonomous 
              organization committed to counseling, study, research, and capacity building for Government Organizations, 
              NGOs, INGOs, private sector, and individuals through comprehensive study, research, training, workshops, 
              and strategic campaigns.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Our core working areas include Education, Agriculture, Forestry, Environment, Socio-economic development, 
              GESI (Gender Equality and Social Inclusion), Tourism, Engineering, Health, Value Chain Development, 
              Enterprise and Entrepreneurship Development. We have extensive experience in coordination and consultation 
              with Government and Non-government agencies across Nepal.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              From feasibility studies and master plan preparation to capacity building training and project 
              implementation, Mountain Thoughts helps organizations and individuals achieve sustainable development 
              goals through evidence-based solutions and strategic partnerships.
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