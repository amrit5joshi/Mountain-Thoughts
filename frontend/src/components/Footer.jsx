import React, { useState } from 'react';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight, ExternalLink, Send, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { name, email, message });
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Development Goals?
                </span>
              </h3>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Let's discuss how Mountain Thoughts can help you achieve sustainable development 
                outcomes with our expert consulting services and innovative solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h4 className="text-2xl font-bold mb-8 text-center">Get Started Today</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all duration-300"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all duration-300"
                  required
                />
                <textarea 
                  placeholder="Tell us about your project..."
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent resize-none transition-all duration-300"
                  required
                ></textarea>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                >
                  Start Conversation
                  <Send className="ml-3 h-6 w-6" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl">MT</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Mountain Thoughts</h1>
                <p className="text-emerald-200 font-medium">Professional Consulting</p>
              </div>
            </div>
            
            <p className="text-emerald-100 leading-relaxed mb-8 max-w-md text-lg">
              Mountain Thoughts Pvt. Ltd. is a professional consulting organization established in 2015, 
              committed to sustainable development through research, capacity building, and strategic 
              partnerships across Nepal's diverse sectors.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:text-emerald-300 transition-colors duration-200">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-200 border border-white/20">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-emerald-100 group-hover:text-white text-lg">Mahalaxmi Municipality-5, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center space-x-4 group hover:text-emerald-300 transition-colors duration-200">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-200 border border-white/20">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="text-emerald-100 group-hover:text-white text-lg">01-5007006 / +977-9858421062</span>
              </div>
              <div className="flex items-center space-x-4 group hover:text-emerald-300 transition-colors duration-200">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-200 border border-white/20">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="text-emerald-100 group-hover:text-white text-lg">mthoughts2072@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200 flex items-center group text-lg">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-4 group-hover:bg-emerald-300 transition-colors duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    <span className="text-sm leading-relaxed">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Resources</h3>
            <ul className="space-y-4">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200 flex items-center group">
                    <ExternalLink className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="text-sm leading-relaxed">{resource}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-20 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-6 mb-8 lg:mb-0">
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20">
                <Linkedin className="h-6 w-6 text-emerald-200 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-sky-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20">
                <Twitter className="h-6 w-6 text-emerald-200 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20">
                <Facebook className="h-6 w-6 text-emerald-200 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-pink-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20">
                <Instagram className="h-6 w-6 text-emerald-200 group-hover:text-white" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-emerald-200 text-lg flex items-center justify-center lg:justify-end">
                © 2025 Mountain Thoughts Pvt. Ltd. Made with 
                <Heart className="w-5 h-5 mx-2 text-red-400 fill-current" />
                in Nepal
              </p>
              <p className="text-emerald-300 text-sm mt-2">
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