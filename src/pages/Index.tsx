import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { ArrowRight, BookOpen, Users, Search, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Index = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Training Programs",
      description: "Professional development and capacity building programs",
      link: "/training"
    },
    {
      icon: Users,
      title: "Consultancy Services", 
      description: "Expert consultancy for evidence-based solutions",
      link: "/consultancy"
    },
    {
      icon: Search,
      title: "Research & Data",
      description: "Rigorous research and data analysis services",
      link: "/research"
    },
    {
      icon: Heart,
      title: "Volunteer Opportunities",
      description: "Join our network of dedicated volunteers",
      link: "/volunteering"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Mary Johnson",
      organization: "Community Health Initiative",
      message: "Project Partners transformed our data collection process. Their training was comprehensive and the results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Samuel Roberts", 
      organization: "Rural Development Foundation",
      message: "The research quality and timeliness of delivery was outstanding. We couldn't have asked for better partners.",
      rating: 5
    },
    {
      name: "Fatima Hassan",
      organization: "Women's Empowerment Network", 
      message: "Their consultancy services helped us redesign our programs for maximum impact. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Services Overview */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for capacity building, research, and community development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-accent group-hover:text-white transition-colors"
                      onClick={() => window.location.href = service.link}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">What Our Client Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from organizations who have experienced the impact of our services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.message}"</p>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-accent">{testimonial.organization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
