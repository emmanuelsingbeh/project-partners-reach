import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Heart, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import emmanuelImg from '@/assets/es.jpg';

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
      social: { linkedin: "#", twitter: "#", email: "levi@projectpartners.org" }
    },
    // ... (other members as before)
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
      social: { linkedin: "#", twitter: "#", email: "emmanuel@projectpartners.org" }
    }
  ];

  const testimonials = [
    {
      name: "Dr. Mary Johnson",
      organization: "Community Health Initiative",
      message: "Project Partners transformed our data collection process. Their training was comprehensive and the results exceeded our expectations.",
      rating: 5
    },
    // ... others as before
  ];

  const handleMemberClick = (member: any) => {
    // console.log('Clicked member:', member.name); // Uncomment if debugging
    setSelectedMember(member);
  };

  const closeModal = () => setSelectedMember(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* ... Your Hero, Mission, Vision, Values sections unchanged */}

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
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-auto">
                        <div className="p-4 w-full">
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

        {/* Testimonials Section unchanged */}

        {/* Team Member Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
            style={{ backdropFilter: 'blur(5px)' }}
            onClick={closeModal} // close modal if click outside content
          >
            <div
              className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg"
              onClick={e => e.stopPropagation()} // prevent close when clicking inside modal
            >
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
