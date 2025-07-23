// 👇 Your original imports
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Heart, Star, CheckCircle, Linkedin, Facebook, MessageSquare, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import emmanuelImg from '@/assets/es.jpg';
import josephImg from '@/assets/jw.jpg';
import barzeeImg from '@/assets/bs.png';

// 👇 Main component
const About = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  // ...teamMembers, testimonials, and rest of the component unchanged...

  // Inside your modal rendering (only fix):
  // Replace lines like:
  // <p>{selectedMember.fullPortfolio.education}</p>
  // with:
  // Array.isArray(...) ? (...) : (...render string...)

  const renderField = (field: any) => {
    if (Array.isArray(field)) {
      return (
        <ul className="list-disc list-inside space-y-2">
          {field.map((item: string, index: number) => (
            <li key={index} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-muted-foreground">{field}</p>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ... All your JSX untouched except below fix inside modal ... */}

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
                <Button onClick={() => setSelectedMember(null)} variant="ghost" className="text-muted-foreground text-2xl leading-none">
                  &times;
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Experience</h4>
                  {renderField(selectedMember.fullPortfolio.experience)}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Education</h4>
                  {renderField(selectedMember.fullPortfolio.education)}
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
                      <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6 text-accent" />
                      </a>
                    )}
                    {selectedMember.social.facebook && (
                      <a href={selectedMember.social.facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-6 w-6 text-accent" />
                      </a>
                    )}
                    {selectedMember.social.whatsapp && (
                      <a href={selectedMember.social.whatsapp} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-6 w-6 text-accent" />
                      </a>
                    )}
                    {selectedMember.social.mail && (
                      <a href={selectedMember.social.mail} target="_blank" rel="noopener noreferrer">
                        <Mail className="h-6 w-6 text-accent" />
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
