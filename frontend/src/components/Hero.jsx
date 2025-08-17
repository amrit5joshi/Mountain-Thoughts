import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight, CheckCircle, Star, Award, Users, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Star className="w-5 h-5 mr-2 fill-current text-amber-500" />
              Trusted Since 2015 • 50+ Projects Delivered
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
              Transforming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                Nepal's Future
              </span>
              Through Expert Consulting
            </h1>

            {/* Subheading */}
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Mountain Thoughts Pvt. Ltd. delivers comprehensive consulting solutions across 
              environmental, agricultural, and socio-economic sectors with a decade of proven expertise.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-700 font-medium">Environmental Impact Assessment</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-700 font-medium">Value Chain Development</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-700 font-medium">Capacity Building Programs</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-700 font-medium">Government Support Services</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold"
              >
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-10 py-4 rounded-2xl transition-all duration-300 group text-lg font-semibold"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzU1NDI5MzU0fDA&ixlib=rb-4.1.0&q=85" 
                  alt="Professional Consulting"
                  className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Expert Consultation</h3>
                  <p className="text-slate-600 text-lg">Delivering impactful solutions across multiple sectors</p>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-3xl shadow-2xl p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-300 border border-emerald-100">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Globe className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600">25+</div>
                  <div className="text-sm text-slate-600 font-medium">Districts</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300 border border-teal-100">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-teal-600">53+</div>
                  <div className="text-sm text-slate-600 font-medium">Projects</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl shadow-2xl p-6 text-white transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm opacity-90 font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Trusted By */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 text-lg mb-10 font-medium">Trusted by leading organizations across Nepal</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <span className="text-slate-700 font-semibold text-lg">Government of Nepal</span>
            </div>
            <div className="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <span className="text-slate-700 font-semibold text-lg">ICIMOD</span>
            </div>
            <div className="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <span className="text-slate-700 font-semibold text-lg">UNDP</span>
            </div>
            <div className="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <span className="text-slate-700 font-semibold text-lg">Forest Directorate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;