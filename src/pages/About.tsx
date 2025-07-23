import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Heart, Star, CheckCircle, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import emmanuelImg from '@/assets/es.jpg';
import josephImg from '@/assets/jw.jpg';
import barzeeImg from '@/assets/bs.png';

const About = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  const closeModal = () => setSelectedMember(null);

  const teamMembers = [
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
        facebook: "emmanuel.singbeh@example.com",
        whatsapp: "https://wa.me/12345678906"
      }
    },
    {
      name: "Joseph Worlo",
      title: "Logistics/Supply Chain Specialist",
      image: josephImg,
      bio: "Expert in logistics coordination and supply chain management",
      fullPortfolio: {
        experience: [
          "Executive Director - Liberia Institute of Procurement and Supply Chain Professionals",
          "10+ years in logistics and supply chain"
        ],
        education: "MBA in Supply Chain Management",
        achievements: [
          "Procurement Officer, Ministry of State",
          "Team-Lead - Alliance of Educators Against Illicit Drugs"
        ],
        skills: ["Supply Chain Management", "Logistics Coordination", "Vendor Management", "Cost Optimization"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/joseph-m-worlo-742752360",
        facebook: "josephworlo99@gmail.com",
        whatsapp: "https://wa.me/+231778010356"
      }
    },
    {
      name: "Barzee Sumo",
      title: "Field Data Collection/Training Coordinator",
      image: barzeeImg,
      bio: "Specialist in field data collection and training coordination",
      fullPortfolio: {
        experience: [
          "7+ years in field data collection and training",
          "Associate Research Assistant, University of North Carolina (UNC)"
        ],
        education: "Master of Public Health",
        achievements: [
          "Public Health Leader, Lecturer impacting healthcare systems in Liberia and beyond",
          "Trained 200+ data collectors"
        ],
        skills: ["Field Operations", "Training Design", "Data Collection", "Team Leadership"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/barzee-sumo-1482a6152",
        facebook: "sumo4009@gmail.com",
        whatsapp: "https://wa.me/+231776793733"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto">We are a dedicated team of professionals working to improve communities through data, research, and innovation.</p>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <Target className="text-primary mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p>To empower communities and organizations with data-driven solutions that foster development and sustainability.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Eye className="text-primary mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p>Creating a future where data informs every impactful decision across Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Our Core Values</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <Heart />, title: "Integrity" },
            { icon: <Star />, title: "Excellence" },
            { icon: <Users />, title: "Teamwork" },
            { icon: <Target />, title: "Impact" },
            { icon: <Eye />, title: "Transparency" },
            { icon: <CheckCircle />, title: "Accountability" }
          ].map((value, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent>
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="font-semibold">{value.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 bg-muted">
        <h2 className="text-center text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-xl" onClick={() => setSelectedMember(member)}>
              <CardContent className="flex flex-col items-center p-6">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                <h4 className="text-lg font-semibold text-center">{member.name}</h4>
                <p className="text-sm text-muted-foreground text-center">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4" style={{ backdropFilter: 'blur(5px)' }}>
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
                  <p className="text-muted-foreground">{Array.isArray(selectedMember.fullPortfolio.experience) ? selectedMember.fullPortfolio.experience.join(', ') : selectedMember.fullPortfolio.experience}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Education</h4>
                  <p className="text-muted-foreground">{selectedMember.fullPortfolio.education}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Key Achievements</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    {selectedMember.fullPortfolio.achievements.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
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

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Connect with {selectedMember.name.split(' ')[0]}
                  </h4>
                  <div className="flex space-x-4">
                    {selectedMember.social.linkedin && (
                      <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {selectedMember.social.facebook && (
                      <a href={`mailto:${selectedMember.social.facebook}`} className="text-accent hover:text-accent/80" aria-label="Email">
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

      <Footer />
    </div>
  );
};

export default About;
