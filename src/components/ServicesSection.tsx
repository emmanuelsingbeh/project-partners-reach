import { useState } from 'react';
import { BookOpen, Users, Search, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ServicesSection = () => {
  const services = [
    {
      id: 'training',
      title: 'Training Programs',
      icon: BookOpen,
      description: 'Comprehensive professional development and capacity building programs',
      content: {
        overview: 'Our training programs are designed to build capacity and enhance skills across various sectors. We offer both in-person and online learning opportunities.',
        features: [
          'Research Methodology and Data Analysis',
          'Project Management and Monitoring & Evaluation',
          'Digital Literacy and Technology Skills',
          'Leadership and Organizational Development',
          'Grant Writing and Fundraising',
          'Community Engagement and Advocacy'
        ],
        highlight: 'All training programs include practical assignments, group projects, and certification upon completion.'
      }
    },
    {
      id: 'consultancy',
      title: 'Consultancy Services',
      icon: Users,
      description: 'Expert consultancy for organizations seeking evidence-based solutions',
      content: {
        overview: 'We provide strategic consultancy services to help organizations achieve their goals through data-driven decision making and best practices.',
        features: [
          'Organizational Assessment and Strategic Planning',
          'Program Design and Implementation Support',
          'Monitoring, Evaluation, and Learning (MEL)',
          'Policy Analysis and Development',
          'Stakeholder Engagement and Partnership Building',
          'Change Management and Capacity Assessment'
        ],
        highlight: 'Our consultancy approach is collaborative, ensuring knowledge transfer and sustainable capacity building.'
      }
    },
    {
      id: 'research',
      title: 'Research & Data',
      icon: Search,
      description: 'Rigorous research and data analysis for informed decision-making',
      content: {
        overview: 'We conduct high-quality research studies and provide comprehensive data analysis services to support evidence-based programming.',
        features: [
          'Baseline and Endline Studies',
          'Impact Assessments and Evaluations',
          'Market Research and Feasibility Studies',
          'Data Collection and Management',
          'Statistical Analysis and Reporting',
          'Literature Reviews and Systematic Reviews'
        ],
        highlight: 'Our research follows international standards and ethical guidelines, ensuring credible and actionable insights.'
      }
    },
    {
      id: 'volunteering',
      title: 'Volunteer Opportunities',
      icon: Heart,
      description: 'Join our network of dedicated volunteers making a difference',
      content: {
        overview: 'Be part of meaningful projects that create positive impact in communities while developing your professional skills.',
        features: [
          'Research Assistant Positions',
          'Training Support and Facilitation',
          'Community Outreach and Engagement',
          'Data Collection and Analysis',
          'Content Development and Communications',
          'Event Planning and Coordination'
        ],
        highlight: 'Volunteers receive training, mentorship, and certificates of appreciation for their contributions.'
      }
    }
  ];

  const handleRegistration = () => {
    // This would typically make a POST request to /register endpoint
    console.log('Registration clicked - would redirect to external registration system');
  };

  const handleInquiry = () => {
    // This would typically make a POST request to /inquiry endpoint
    console.log('Inquiry clicked - would open inquiry form');
  };

  const handleJoinVolunteers = () => {
    // This would typically make a POST request to /volunteer-application endpoint
    console.log('Volunteer application clicked - would open application form');
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for capacity building, research, and community development
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="training" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="service-tab flex items-center space-x-2 py-3"
                >
                  <service.icon className="h-4 w-4" />
                  <span className="hidden lg:inline">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                            <service.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.content.overview}
                        </p>
                        <div className="bg-accent/5 p-4 rounded-lg mb-6">
                          <p className="text-sm text-primary font-medium">
                            💡 {service.content.highlight}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4">Key Features:</h4>
                        <ul className="space-y-3 mb-6">
                          {service.content.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3">
                          {service.id === 'training' && (
                            <Button 
                              onClick={handleRegistration}
                              className="bg-primary hover:bg-primary/90 group"
                            >
                              Register Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          )}
                          {service.id === 'consultancy' && (
                            <Button 
                              onClick={handleInquiry}
                              className="bg-primary hover:bg-primary/90 group"
                            >
                              Make Inquiry
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          )}
                          {service.id === 'research' && (
                            <Button 
                              variant="outline"
                              className="border-primary text-primary hover:bg-primary hover:text-white"
                            >
                              View Recent Research
                            </Button>
                          )}
                          {service.id === 'volunteering' && (
                            <Button 
                              onClick={handleJoinVolunteers}
                              className="bg-accent hover:bg-accent/90 group"
                            >
                              Join Our Team
                              <Heart className="ml-2 h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {services.map((service) => (
            <Card key={service.id} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    <service.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.content.overview}
                </p>
                <div className="bg-accent/5 p-3 rounded-lg mb-4">
                  <p className="text-xs text-primary font-medium">
                    💡 {service.content.highlight}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.content.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  {service.id === 'training' && (
                    <Button 
                      size="sm"
                      onClick={handleRegistration}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Register Now
                    </Button>
                  )}
                  {service.id === 'consultancy' && (
                    <Button 
                      size="sm"
                      onClick={handleInquiry}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Make Inquiry
                    </Button>
                  )}
                  {service.id === 'volunteering' && (
                    <Button 
                      size="sm"
                      onClick={handleJoinVolunteers}
                      className="bg-accent hover:bg-accent/90"
                    >
                      Join Our Team
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;