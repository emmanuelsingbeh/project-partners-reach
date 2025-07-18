import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Users, BookOpen, Globe, Camera, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient'; 

const Volunteering = () => {
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    skills: '',
    motivation: '',
    availability: ''
  });

  const volunteerOpportunities = [
    {
      icon: BookOpen,
      title: "Research Assistant Positions",
      description: "Support our research team with data collection, analysis, and report writing.",
      timeCommitment: "10-15 hours/week",
      skills: ["Data analysis", "Research methodology", "Report writing"],
      benefits: ["Research training", "Mentorship", "Portfolio building"]
    },
    {
      icon: Users,
      title: "Training Support and Facilitation",
      description: "Assist in delivering training programs and workshops to community members.",
      timeCommitment: "8-12 hours/week",
      skills: ["Public speaking", "Training delivery", "Group facilitation"],
      benefits: ["Training certification", "Leadership skills", "Teaching experience"]
    },
    {
      icon: Globe,
      title: "Community Outreach and Engagement",
      description: "Help connect with communities and facilitate stakeholder engagement activities.",
      timeCommitment: "12-20 hours/week",
      skills: ["Communication", "Community work", "Cultural sensitivity"],
      benefits: ["Network building", "Community impact", "Cultural exchange"]
    },
    {
      icon: BookOpen,
      title: "Data Collection and Analysis",
      description: "Participate in field data collection and support statistical analysis activities.",
      timeCommitment: "15-25 hours/week",
      skills: ["Data collection", "Statistical software", "Field work"],
      benefits: ["Technical skills", "Field experience", "Data analysis training"]
    },
    {
      icon: Camera,
      title: "Content Development and Communications",
      description: "Create content for social media, newsletters, and communication materials.",
      timeCommitment: "5-10 hours/week",
      skills: ["Content writing", "Social media", "Graphic design"],
      benefits: ["Portfolio development", "Digital marketing skills", "Creative expression"]
    },
    {
      icon: Calendar,
      title: "Event Planning and Coordination",
      description: "Support the organization of workshops, conferences, and community events.",
      timeCommitment: "10-20 hours/week",
      skills: ["Event planning", "Project coordination", "Logistics"],
      benefits: ["Event management skills", "Professional networking", "Project experience"]
    }
  ];

  const volunteerBenefits = [
    {
      icon: BookOpen,
      title: "Professional Development",
      description: "Gain valuable skills and experience in research, development, and project management"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Receive guidance and support from experienced professionals in your field of interest"
    },
    {
      icon: CheckCircle,
      title: "Certificates & Recognition",
      description: "Earn certificates of appreciation and professional references for your contributions"
    },
    {
      icon: Globe,
      title: "Impact & Purpose",
      description: "Make a meaningful difference in communities while building your professional network"
    }
  ];

  const requirements = [
    "Commitment to our mission and values",
    "Reliability and strong work ethic",
    "Good communication skills",
    "Willingness to learn and adapt",
    "Basic computer literacy",
    "Minimum 3-month commitment"
  ];

  const handleApplicationSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { fullName, email, phone, skills, motivation, availability } = applicationForm;

  const { error } = await supabase.from('volunteer_applications').insert([
    {
      full_name: fullName,
      email,
      phone,
      skills,
      motivation,
      availability,
    },
  ]);

  if (error) {
    console.error('Supabase insert error:', error.message);
    alert('❌ Submission failed: ' + error.message);
    return;
  }

  alert('✅ Thank you for your application! We will contact you soon.');

  setApplicationForm({
    fullName: '',
    email: '',
    phone: '',
    skills: '',
    motivation: '',
    availability: '',
  });
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
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
              Volunteer Opportunities
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our network of dedicated volunteers making a positive difference in communities while developing your professional skills.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-5 w-5" />
              Explore Opportunities
            </Button>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Why Volunteer With Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Volunteering with Project Partners offers unique opportunities for personal and professional growth while creating positive impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {volunteerBenefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section id="opportunities" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Current Volunteer Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find the perfect volunteer role that matches your skills, interests, and availability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerOpportunities.map((opportunity, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <opportunity.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{opportunity.title}</h3>
                    <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-primary mb-2">Time Commitment:</p>
                      <p className="text-sm text-muted-foreground">{opportunity.timeCommitment}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-primary mb-2">Preferred Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-medium text-primary mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {opportunity.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-3 w-3 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                      onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Volunteer Requirements</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We welcome volunteers from diverse backgrounds who share our commitment to positive impact
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">General Requirements</h3>
                    <ul className="space-y-3">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">What We Provide</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Comprehensive orientation and training</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Ongoing supervision and support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Professional development opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Certificates and professional references</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Transportation support when needed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Form */}
        <section id="application" className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Volunteer Application</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to make a difference? Fill out the application form below and join our volunteer team.
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-primary">Full Name *</label>
                      <Input
                        name="fullName"
                        value={applicationForm.fullName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={applicationForm.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary">Phone Number</label>
                    <Input
                      name="phone"
                      value={applicationForm.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary">Skills and Experience *</label>
                    <Textarea
                      name="skills"
                      value={applicationForm.skills}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1"
                      placeholder="Please describe your relevant skills, qualifications, and experience..."
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary">Motivation *</label>
                    <Textarea
                      name="motivation"
                      value={applicationForm.motivation}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1"
                      placeholder="Why do you want to volunteer with us? What impact do you hope to make?"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary">Availability *</label>
                    <Textarea
                      name="availability"
                      value={applicationForm.availability}
                      onChange={handleInputChange}
                      required
                      rows={2}
                      className="mt-1"
                      placeholder="Please describe your availability (days, times, duration)..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3">
                    <Heart className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteering;