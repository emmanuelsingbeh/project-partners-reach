import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Heart, Star, CheckCircle, Linkedin, MessageSquare, Mail } from 'lucide-react';
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
        email: "mailto:levi.tuwleh@example.com",
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
        email: "mailto:drutham@example.com",
        whatsapp: "https://wa.me/12345678902"
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
        achievements: ["Procurement Officer, Ministry of State", "Team-Lead - Alliance of Educators Against Illicit Drugs"],
        skills: ["Supply Chain Management", "Logistics Coordination", "Vendor Management", "Cost Optimization"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/joseph-m-worlo-742752360",
        email: "mailto:josephworlo99@gmail.com",
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
        achievements: [
          "Public Health Leader, and a dedicated Lecturer impacting healthcare systems in Liberia and beyond",
          "Trained 200+ data collectors"
        ],
        skills: [
          "Public Health Leader, and a dedicated Lecturer impacting healthcare systems in Liberia and beyond",
          "Field Operations", "Training Design", "Data Collection", "Team Leadership"
        ]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/barzee-sumo-1482a6152",
        email: "mailto:sumo4009@gmail.com",
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
        email: "mailto:alpha.kanneh@example.com",
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
        email: "mailto:emmanuel.singbeh@example.com",
        whatsapp: "https://wa.me/12345678906"
      }
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
        {/* Your About page content like Hero, Mission, Vision, Team section, etc. */}
        
        {/* Team Member Modal */}
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
                    {Array.isArray(selectedMember.fullPortfolio.experience) ? (
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {selectedMember.fullPortfolio.experience.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{selectedMember.fullPortfolio.experience}</p>
                    )}
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

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Connect with {selectedMember.name.split(' ')[0]}</h4>
                    <div className="flex space-x-4">
                      {selectedMember.social.linkedin && (
                        <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="LinkedIn">
                          <Linkedin className="h-6 w-6" />
                        </a>
                      )}
                      {selectedMember.social.email && (
                        <a href={selectedMember.social.email} className="text-accent hover:text-accent/80" aria-label="Email">
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
