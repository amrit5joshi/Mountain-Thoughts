import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, ArrowRight, Download } from 'lucide-react';
import { mockBlogPosts, mockEvents, mockResearchReports } from '../mock';

const Latest = () => {
  return (
    <section className="py-20 bg-gray-50" id="knowledge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Latest
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, research, and events in mountain agriculture and climate-smart farming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-emerald-500 pb-2">
              On The Blog
            </h3>
            <div className="space-y-6">
              {mockBlogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {post.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-emerald-600 border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {mockEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg mb-2">
                      <Calendar className="h-5 w-5" />
                      <span>
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {new Date(event.date).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">{event.location}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-500 pb-2">
              New Research
            </h3>
            <div className="space-y-6">
              {mockResearchReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={report.image} 
                      alt={report.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(report.date).toLocaleDateString()}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {report.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {report.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;