import React from 'react';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  const services = [
    "Environmental Impact Assessment",
    "Value Chain Development", 
    "Capacity Building & Training",
    "Local Government Support",
    "Agriculture & Forestry Consulting"
  ];

  const resources = [
    "Case Studies",
    "Research Reports", 
    "Blog Articles",
    "Events & Workshops",
    "Knowledge Base",
    "Project Reports & Publications"
  ];

  const quickLinks = [
    "About Us",
    "Our Team", 
    "Services",
    "Projects",
    "Contact"
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Development Goals?
                </span>
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                Let's discuss how Mountain Thoughts can help you achieve sustainable development 
                outcomes with our expert consulting services.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h4 className="text-xl font-semibold mb-6 text-center">Get Started Today</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <textarea 
                  placeholder="Tell us about your project..."
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent resize-none"
                ></textarea>
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">MT</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Mountain Thoughts</h1>
                <p className="text-xs text-slate-400 -mt-1">Professional Consulting</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Mountain Thoughts Pvt. Ltd. is a professional consulting organization established in 2015, 
              committed to sustainable development through research, capacity building, and strategic 
              partnerships across Nepal's diverse sectors.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group hover:text-cyan-400 transition-colors duration-200">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-slate-300 group-hover:text-white">Mahalaxmi Municipality-5, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-cyan-400 transition-colors duration-200">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-slate-300 group-hover:text-white">01-5007006 / +977-9858421062</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-cyan-400 transition-colors duration-200">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-slate-300 group-hover:text-white">mthoughts2072@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group">
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-4 mb-6 lg:mb-0">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Twitter className="h-5 w-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Facebook className="h-5 w-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Instagram className="h-5 w-5 text-slate-300 group-hover:text-white" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-slate-400 text-sm">
                © 2025 Mountain Thoughts Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                VAT No: 609687815 | Reg. No: 15547/443/072/073
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;