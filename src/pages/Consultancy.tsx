import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, TrendingUp, FileText, Lightbulb, CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Consultancy = () => {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const consultancyServices = [
    {
      icon: TrendingUp,
      title: "Organizational Assessment and Strategic Planning",
      description: "Comprehensive organizational analysis and strategic development for sustainable growth.",
      features: [
        "Organizational capacity assessment",
        "Strategic planning facilitation",
        "SWOT analysis and market positioning",
        "Performance improvement strategies"
      ]
    },
    {
      icon: FileText,
      title: "Program Design and Implementation Support",
      description: "Expert guidance in designing and implementing effective programs for maximum impact.",
      features: [
        "Program logic model development",
        "Implementation roadmap creation",
        "Risk assessment and mitigation",
        "Quality assurance frameworks"
      ]
    },
    {
      icon: Users,
      title: "Monitoring, Evaluation, and Learning (MEL)",
      description: "Robust M&E systems design and implementation for evidence-based decision making.",
      features: [
        "M&E framework development",
        "Indicator selection and tracking",
        "Data collection system design",
        "Learning and adaptation strategies"
      ]
    },
    {
      icon: Lightbulb,
      title: "Policy Analysis and Development",
      description: "Evidence-based policy research, analysis, and development support.",
      features: [
        "Policy research and analysis",
        "Stakeholder consultation facilitation",
        "Policy brief development",
        "Implementation guidance"
      ]
    },
    {
      icon: Users,
      title: "Stakeholder Engagement and Partnership Building",
      description: "Strategic partnership development and stakeholder engagement planning.",
      features: [
        "Stakeholder mapping and analysis",
        "Partnership strategy development",
        "Collaboration framework design",
        "Relationship management systems"
      ]
    },
    {
      icon: TrendingUp,
      title: "Change Management and Capacity Assessment",
      description: "Organizational change facilitation and capacity building strategies.",
      features: [
        "Change readiness assessment",
        "Capacity gap analysis",
        "Change management planning",
        "Training needs assessment"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion of your needs and challenges."
    },
    {
      step: "02",
      title: "Proposal Development",
      description: "We create a customized proposal outlining our approach and methodology."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our team works collaboratively with yours to deliver results."
    },
    {
      step: "04",
      title: "Knowledge Transfer",
      description: "We ensure sustainable capacity building and knowledge transfer."
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send data to backend
    console.log('Inquiry submitted:', inquiryForm);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setInquiryForm({
      name: '',
      organization: '',
      email: '',
      phone: '',
      serviceType: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInquiryForm({
      ...inquiryForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Consultancy Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert consultancy for organizations seeking evidence-based solutions and sustainable capacity building.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Consultancy Approach</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide strategic consultancy services with a collaborative approach, ensuring knowledge transfer and sustainable capacity building.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Consultancy Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive consultancy solutions tailored to your organization's unique needs and challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultancyServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Make an Inquiry</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to discuss your consultancy needs? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-accent mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-muted-foreground">consultancy@projectpartners.org</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-accent mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary">Phone</h4>
                      <p className="text-muted-foreground">+231 XXX XXX XXX</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-primary mb-4">What to Expect:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Initial consultation within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Customized proposal within 3-5 business days</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Flexible engagement options</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Inquiry Form */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-primary">Name *</label>
                        <Input
                          name="name"
                          value={inquiryForm.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-primary">Organization</label>
                        <Input
                          name="organization"
                          value={inquiryForm.organization}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-primary">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={inquiryForm.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-primary">Phone</label>
                        <Input
                          name="phone"
                          value={inquiryForm.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-primary">Service of Interest</label>
                      <select
                        name="serviceType"
                        value={inquiryForm.serviceType}
                        onChange={handleInputChange}
                        className="w-full mt-1 p-2 border border-border rounded-md bg-background"
                      >
                        <option value="">Select a service</option>
                        <option value="organizational-assessment">Organizational Assessment</option>
                        <option value="program-design">Program Design</option>
                        <option value="mel">Monitoring & Evaluation</option>
                        <option value="policy-analysis">Policy Analysis</option>
                        <option value="stakeholder-engagement">Stakeholder Engagement</option>
                        <option value="change-management">Change Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-primary">Message *</label>
                      <Textarea
                        name="message"
                        value={inquiryForm.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Please describe your consultancy needs and objectives..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Submit Inquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consultancy;