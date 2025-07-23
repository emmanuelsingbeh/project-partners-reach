import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Heart, Star, CheckCircle, Linkedin, Facebook, MessageSquare, Mail, } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import emmanuelImg from '@/assets/es.jpg';
import josephImg from '@/assets/jw.jpg';
import barzeeImg from '@/assets/bs.png';

const About = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const teamMembers = [
    {
      name: "Levi Tuwleh",
      title: "Program/M&E Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
      bio: "Experienced program management and monitoring & evaluation specialist",
      fullPortfolio: {
        experience: "8+ years in program management and M&E",
        education: "Master's in Development Studies",
        achievements: ["Led 15+ community development programs", "Established M&E frameworks for 3 NGOs"],
        skills: ["Program Management", "M&E Systems", "Data Analysis", "Community Engagement"]
      },
      social: {
        linkedin: "https://linkedin.com/in/levituwleh",
        facebook: "https://facebook.com/levi.tuwleh",
        whatsapp: "https://wa.me/12345678901"
      }
    },
    {
      name: "Dr. Utham",
      title: "Research and Development Manager/Data Analyst",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
      bio: "PhD researcher and data analyst specializing in evidence-based solutions",
      fullPortfolio: {
        experience: "12+ years in research and data analysis",
        education: "PhD in Statistics, MSc in Data Science",
        achievements: ["Published 25+ research papers", "Led data initiatives across West Africa"],
        skills: ["Statistical Analysis", "Research Design", "Scientific Writing", "Data Visualization"]
      },
      social: {
        linkedin: "https://linkedin.com/in/drutham",
        facebook: "https://facebook.com/drutham",
        whatsapp: "https://wa.me/12345678902"
      }
    },
    {
      name: "Joseph Worlo",
      title: "Logistics/Supply Chain Specialist",
      image: josephImg,
      bio: "Expert in logistics coordination and supply chain management",
      fullPortfolio: {
        experience: ["Executive Director - Liberia Institute of Procurement and Supply Chain Professionals","10+ years in logistics and supply chain"],
        education: ["Detail in Linkedin Profile"],
        achievements: ["Procurement Officer, Ministry of State", "Team-Lead - Alliance of Educators Against Illicit Drugs"],
        skills: ["Supply Chain Management", "Logistics Coordination", "Vendor Management", "Cost Optimization"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/joseph-m-worlo-742752360?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiEdHQjoLTAqOeUxl%2BKRlmQ%3D%3D",
        mail: "mailto:josephworlo99@gmail.com",
        whatsapp: "https://wa.me/+231778010356"
      
      }
    },
    {
      name: "Barzee Sumo",
      title: "Field Data Collection/Training Coordinator",
      image: barzeeImg,
      bio: "Specialist in field data collection and training coordination",
      fullPortfolio: {
        experience: "7+ years in field data collection and training",
        education: ["Details in Linkedin Profile"],
        achievements: ["Coordinated 50+ field surveys", "Trained 200+ data collectors"],
        skills: ["Field Operations", "Training Design", "Data Collection", "Team Leadership"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/barzee-sumo-1482a6152?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9bsa%2BS0iS2WGMn5SgeRueQ%3D%3D",
        mail: "mailto:sumo4009@gmail.com",
        whatsapp: "https://wa.me/+231776793733"
      }
    },
    {
      name: "Alpha Daoda Kanneh",
      title: "GIS/Remote Sensing Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
      bio: "GIS expert and remote sensing specialist",
      fullPortfolio: {
        experience: "9+ years in GIS and remote sensing",
        education: "MSc in GIS and Remote Sensing",
        achievements: ["Mapped 100+ communities", "Developed GIS training curricula"],
        skills: ["GIS Analysis", "Remote Sensing", "Spatial Analysis", "Mapping Technology"]
      },
      social: {
        linkedin: "https://linkedin.com/in/alphakanneh",
        facebook: "https://facebook.com/alpha.kanneh",
        whatsapp: "https://wa.me/12345678905"
      }
    },
    {
      name: "Emmanuel Singbeh",
      title: "IT and Data Systems Support Officer",
      image: emmanuelImg,
      bio: "IT specialist and data systems support expert",
      fullPortfolio: {
        experience: "6+ years in IT and data systems",
        education: "BSc in Computer Science, Certified Data Systems Administrator",
        achievements: [
          "Implemented 10+ data management systems",
          "Provided IT training to 500+ users"
        ],
        skills: ["System Administration", "Database Management", "IT Training", "Technical Support"]
      },
      social: {
        linkedin: "https://linkedin.com/in/emmanuelsingbeh",
        facebook: "https://facebook.com/emmanuel.singbeh",
        whatsapp: "https://wa.me/12345678906"
      }
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

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Empowering individuals, professionals, and organisations with evidence-based insights through high-quality research, data-driven solutions, and capacity-building services.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="professional-hover border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower individuals, professionals, and organisations with evidence-based insights through high-quality research, data-driven solutions, and capacity-building services.
                  </p>
                </CardContent>
              </Card>

              <Card className="professional-hover border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading hub in Liberia for innovative research support, data excellence, and scientific capacity-building.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-primary text-center mb-8">Our Core Values</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Heart, title: "Integrity", description: "We maintain the highest ethical standards in all our work" },
                  { icon: Users, title: "Collaboration", description: "We believe in the power of partnership and teamwork" },
                  { icon: Target, title: "Excellence", description: "We strive for exceptional quality in everything we deliver" },
                  { icon: Eye, title: "Innovation", description: "We embrace new approaches and cutting-edge solutions" }
                ].map((value, index) => (
                  <Card key={index} className="text-center professional-hover border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team brings together expertise in research, training, and community development
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="team-card border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0 team-card-content">
                    <div className="relative group cursor-pointer">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-contain bg-gray-100"
                        style={{ objectPosition: 'center top' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                        <div className="p-4 w-full pointer-events-auto">
                          <Button
                            onClick={() => handleMemberClick(member)}
                            className="w-full bg-accent hover:bg-accent/90 text-white transform transition-transform hover:scale-105"
                          >
                            View Portfolio
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-primary mb-1">{member.name}</h4>
                      <p className="text-accent font-medium mb-3">{member.title}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">What Our Clients Say</h3>
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

        {/* Team Member Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
            style={{ backdropFilter: 'blur(5px)' }}
          >
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-20 h-20 rounded-full object-contain bg-gray-100 mr-4"
                      style={{ objectPosition: 'center top' }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{selectedMember.name}</h3>
                      <p className="text-accent font-medium">{selectedMember.title}</p>
                    </div>
                  </div>
                  <Button onClick={closeModal} variant="ghost" className="text-muted-foreground text-2xl leading-none">
                    &times;
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Experience</h4>
                    <p className="text-muted-foreground">{selectedMember.fullPortfolio.experience}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Education</h4>
                    <p className="text-muted-foreground">{selectedMember.fullPortfolio.education}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Key Achievements</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      {selectedMember.fullPortfolio.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Core Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.fullPortfolio.skills.map((skill: string, index: number) => (
                        <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Connect with {selectedMember.name.split(' ')[0]}</h4>
                    <div className="flex space-x-4">
                      {selectedMember.social.linkedin && (
                        <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="LinkedIn">
                          <Linkedin className="h-6 w-6" />
                        </a>
                      )}
                       {selectedMember.social.mail && (
                       <a href={selectedMember.social.mail} className="text-accent hover:text-accent/80" aria-label="Email">
                      <Mail className="h-6 w-6" />
                      </a>
                      )}
                      {selectedMember.social.whatsapp && (
                        <a href={selectedMember.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="WhatsApp">
                          <MessageSquare className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default About;