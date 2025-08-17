import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, ArrowRight, Download, MapPin, ExternalLink, BookOpen } from 'lucide-react';
import { mockBlogPosts, mockEvents, mockResearchReports } from '../mock';

const Latest = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="insights">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Insights & Updates
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Latest From
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Mountain Thoughts
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest insights, research findings, and upcoming events 
            in sustainable development and professional consulting.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 gap-12">
          {/* Blog Section */}
          <div className="xl:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Latest Articles
              </h3>
              <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-8">
              {mockBlogPosts.map((post, index) => (
                <Card key={post.id} className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden ${index === 0 ? 'shadow-2xl' : 'shadow-lg'}`}>
                  <CardContent className="p-0">
                    <div className={`flex ${index === 0 ? 'flex-col lg:flex-row' : 'flex-col sm:flex-row'} h-full`}>
                      {/* Image */}
                      <div className={`${index === 0 ? 'lg:w-1/2' : 'sm:w-1/3'} relative overflow-hidden`}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className={`w-full ${index === 0 ? 'h-64 lg:h-full' : 'h-48 sm:h-full'} object-cover group-hover:scale-105 transition-transform duration-500`}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className={`${index === 0 ? 'lg:w-1/2 p-8 lg:p-10' : 'sm:w-2/3 p-6'} flex flex-col justify-center`}>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h4 className={`${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'} font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 leading-tight`}>
                          {post.title}
                        </h4>
                        
                        <p className={`text-slate-600 leading-relaxed mb-6 ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                          {post.excerpt}
                        </p>
                        
                        <Button 
                          variant="ghost" 
                          className="self-start text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 font-semibold group-hover:translate-x-2 transition-transform duration-200"
                        >
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Events Section */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {mockEvents.map((event) => (
                  <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200">
                    <CardContent className="p-6">
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {event.title}
                      </h4>
                      
                      <div className="flex items-center text-sm text-slate-500 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                      
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {event.description}
                      </p>
                      
                      <Button 
                        size="sm"
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Research Section */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Download className="w-5 h-5 mr-2 text-purple-600" />
                Research Reports
              </h3>
              <div className="space-y-4">
                {mockResearchReports.map((report) => (
                  <Card key={report.id} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200">
                    <CardContent className="p-6">
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={report.image} 
                          alt={report.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                          Research Publication
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                        {report.title}
                      </h4>
                      
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {report.description}
                      </p>
                      
                      <Button 
                        size="sm"
                        variant="outline"
                        className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 border-0 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
                <p className="text-sm text-indigo-100 mb-6">
                  Get the latest insights and updates from Mountain Thoughts delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button 
                    className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3 rounded-lg"
                  >
                    Subscribe Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;