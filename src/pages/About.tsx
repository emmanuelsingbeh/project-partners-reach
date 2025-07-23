import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Heart, Star, CheckCircle, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import josephImg from '@/assets/team/joseph.png';
import barzeeImg from '@/assets/team/barzee.png';
import emmanuelImg from '@/assets/team/emmanuel.png';

const teamMembers = [
  {
    name: 'Joseph Worlo',
    title: 'Logistics/Supply Chain Specialist',
    image: josephImg,
    bio: 'Expert in logistics coordination and supply chain management',
    fullPortfolio: {
      experience: 'Executive Director - Liberia Institute of Procurement and Supply Chain Professionals; 10+ years in logistics and supply chain',
      education: 'Details in LinkedIn Profile',
      achievements: ['Procurement Officer, Ministry of State', 'Team-Lead - Alliance of Educators Against Illicit Drugs'],
      skills: ['Supply Chain Management', 'Logistics Coordination', 'Vendor Management', 'Cost Optimization']
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/joseph-m-worlo-742752360?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiEdHQjoLTAqOeUxl%2BKRlmQ%3D%3D',
      mail: 'mailto:josephworlo99@gmail.com',
      whatsapp: 'https://wa.me/+231778010356'
    }
  },
  {
    name: 'Barzee Sumo',
    title: 'Field Data Collection/Training Coordinator',
    image: barzeeImg,
    bio: 'Specialist in field data collection and training coordination',
    fullPortfolio: {
      experience: '7+ years in field data collection and training',
      education: 'Details in LinkedIn Profile',
      achievements: ['Coordinated 50+ field surveys', 'Trained 200+ data collectors'],
      skills: ['Field Operations', 'Training Design', 'Data Collection', 'Team Leadership']
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/barzee-sumo-1482a6152?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9bsa%2BS0iS2WGMn5SgeRueQ%3D%3D',
      mail: 'mailto:sumo4009@gmail.com',
      whatsapp: 'https://wa.me/+231776793733'
    }
  },
  {
    name: 'Emmanuel Singbeh',
    title: 'IT and Data Systems Support Officer',
    image: emmanuelImg,
    bio: 'IT specialist and data systems support expert',
    fullPortfolio: {
      experience: '6+ years in IT and data systems',
      education: 'BSc in Computer Science, Certified Data Systems Administrator',
      achievements: ['Implemented 10+ data management systems', 'Provided IT training to 500+ users'],
      skills: ['System Administration', 'Database Management', 'IT Training', 'Technical Support']
    },
    social: {
      linkedin: 'https://linkedin.com/in/emmanuelsingbeh',
      mail: 'mailto:emmanuelsingbeh@gmail.com',
      whatsapp: 'https://wa.me/+231775738306'
    }
  }
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* ... other sections like Hero, Mission, Vision, etc. ... */}

        <section className="bg-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-muted mb-10 max-w-2xl mx-auto">
              Our dedicated professionals bring diverse expertise and a shared passion for community impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group relative shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-center transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                    <p className="text-accent font-medium">{member.title}</p>
                    <p className="text-sm text-muted mt-2">{member.bio}</p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <Button
                        onClick={() => handleMemberClick(member)}
                        className="w-full bg-accent hover:bg-accent/90 text-white transform transition-transform hover:scale-105"
                      >
                        View Portfolio
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for Full Portfolio */}
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
          <DialogContent className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-primary text-2xl">{selectedMember?.name}</DialogTitle>
              <p className="text-accent">{selectedMember?.title}</p>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <p><strong>Experience:</strong> {selectedMember?.fullPortfolio.experience}</p>
              <p><strong>Education:</strong> {selectedMember?.fullPortfolio.education}</p>
              <div>
                <strong>Achievements:</strong>
                <ul className="list-disc list-inside ml-4">
                  {selectedMember?.fullPortfolio.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Skills:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedMember?.fullPortfolio.skills.map((skill, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Connect with {selectedMember?.name.split(' ')[0]}</h4>
                <div className="flex space-x-4">
                  {selectedMember?.social.linkedin && (
                    <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                  {selectedMember?.social.mail && (
                    <a href={selectedMember.social.mail} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="Email">
                      <Mail className="h-6 w-6" />
                    </a>
                  )}
                  {selectedMember?.social.whatsapp && (
                    <a href={selectedMember.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="WhatsApp">
                      <MessageSquare className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </>
  );
}
