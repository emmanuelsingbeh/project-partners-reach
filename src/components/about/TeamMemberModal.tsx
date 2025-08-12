import { CheckCircle, Linkedin, Facebook, MessageSquare, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  fullPortfolio: {
    experience: string | string[];
    education: string | string[];
    achievements: string[];
    skills: string[];
  };
  social: {
    linkedin?: string;
    mail?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

interface TeamMemberModalProps {
  member: TeamMember;
  onClose: () => void;
}

const TeamMemberModal = ({ member, onClose }: TeamMemberModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
      style={{ backdropFilter: 'blur(5px)' }}
      onClick={onClose}
    >
      <div 
        className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-contain bg-gray-100 mr-4"
                style={{ objectPosition: 'center top' }}
              />
              <div>
                <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                <p className="text-accent font-medium">{member.title}</p>
              </div>
            </div>
            <Button onClick={onClose} variant="ghost" className="text-muted-foreground text-2xl leading-none">
              &times;
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Experience</h4>
              {Array.isArray(member.fullPortfolio.experience) ? (
                <ul className="space-y-1">
                  {member.fullPortfolio.experience.map((exp: string, index: number) => (
                    <li key={index} className="text-muted-foreground">• {exp}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">{member.fullPortfolio.experience}</p>
              )}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Education</h4>
              {Array.isArray(member.fullPortfolio.education) ? (
                <ul className="space-y-1">
                  {member.fullPortfolio.education.map((edu: string, index: number) => (
                    <li key={index} className="text-muted-foreground">• {edu}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">{member.fullPortfolio.education}</p>
              )}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Key Achievements</h4>
              <ul className="space-y-2">
                {member.fullPortfolio.achievements.map((achievement: string, index: number) => (
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
                {member.fullPortfolio.skills.map((skill: string, index: number) => (
                  <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Connect with {member.name.split(' ')[0]}</h4>
              <div className="flex space-x-4">
                {member.social.linkedin && member.social.linkedin !== "#" && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
                {member.social.mail && (
                  <a href={member.social.mail} className="text-accent hover:text-accent/80" aria-label="Email">
                    <Mail className="h-6 w-6" />
                  </a>
                )}
                {member.social.facebook && member.social.facebook !== "#" && (
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="Facebook">
                    <Facebook className="h-6 w-6" />
                  </a>
                )}
                {member.social.whatsapp && member.social.whatsapp !== "#" && (
                  <a href={member.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="WhatsApp">
                    <MessageSquare className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;