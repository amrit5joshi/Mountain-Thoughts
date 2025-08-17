import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted Since 2015 • 50+ Projects Delivered
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Transforming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Nepal's Future
              </span>
              Through Expert Consulting
            </h1>

            {/* Subheading */}
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              Mountain Thoughts Pvt. Ltd. delivers comprehensive consulting solutions across 
              environmental, agricultural, and socio-economic sectors with a decade of proven expertise.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">Environmental Impact Assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">Value Chain Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">Capacity Building Programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">Government Support Services</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzU1NDI5MzU0fDA&ixlib=rb-4.1.0&q=85" 
                  alt="Professional Consulting"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Consultation</h3>
                  <p className="text-slate-600">Delivering impactful solutions across multiple sectors</p>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">25+</div>
                  <div className="text-xs text-slate-600">Districts</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">53+</div>
                  <div className="text-xs text-slate-600">Projects</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl shadow-xl p-4 text-white transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-lg font-bold">10+</div>
                  <div className="text-xs opacity-90">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Trusted By */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm mb-8">Trusted by leading organizations across Nepal</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-200">
              <span className="text-slate-700 font-medium">Government of Nepal</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-200">
              <span className="text-slate-700 font-medium">ICIMOD</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-200">
              <span className="text-slate-700 font-medium">UNDP</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-200">
              <span className="text-slate-700 font-medium">Forest Directorate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;