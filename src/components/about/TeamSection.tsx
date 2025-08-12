import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TeamMemberModal from './TeamMemberModal';
import { useState } from 'react';
import emmanuelImg from '@/assets/es.jpg';
import josephImg from '@/assets/jw.jpg';
import barzeeImg from '@/assets/bs.png';

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

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Levi Tuwleh",
      title: "Founder and CEO",
      image: "/lovable-uploads/a17c477d-88b7-4d64-a8be-53f3f9dad3b0.png",
      bio: "Founder and CEO of PPRDSH, Ph.D. student in Epidemiology and Biostatistics",
      fullPortfolio: {
        experience: "Accomplished early-career researcher in public health with specialty in infectious disease epidemiology and applied behavioral research",
        education: ["Ph.D. student in Epidemiology and Biostatistics, University of Port Harcourt", "MPH and MSc in Epidemiology", "Bachelor of Science in Biology, William V. S. Tubman University, Liberia"],
        achievements: [
          "Co-authored several peer-reviewed articles",
          "Ranks among the top 10 in Epidemiology and Public Health at Obafemi Awolowo University on AD Scientific Index",
          "Ranks among the top 10 in Epidemiology and Public Health in Nigeria on AD Scientific Index"
        ],
        skills: ["Project Management", "Scientific Writing", "Data Analysis", "Infectious Disease Epidemiology", "Applied Behavioral Research"]
      },
      social: {
        linkedin: "#",
        mail: "mailto:levi@projectpartners.org",
        whatsapp: "#"
      }
    },
    {
      name: "Dr. Uthman Tinuoye Jamiu",
      title: "Research and Development Manager/Data Analyst",
      image: "/lovable-uploads/3e19a793-899a-4443-9112-495a4a4f9ed6.png",
      bio: "Developmental Psychologist, Behavioral Analyst, Data Analyst, and Deception Diagnosis specialist",
      fullPortfolio: {
        experience: "Expert in developmental psychology, behavioral analysis, data analysis, and deception diagnosis",
        education: "Advanced qualifications in Psychology and Data Analysis",
        achievements: [
          "Specialized in developmental psychology research",
          "Expert in behavioral analysis and assessment",
          "Advanced skills in deception diagnosis techniques"
        ],
        skills: ["Developmental Psychology", "Behavioral Analysis", "Data Analysis", "Deception Diagnosis", "Research Methodology"]
      },
      social: {
        linkedin: "#",
        mail: "mailto:uthman@projectpartners.org",
        whatsapp: "#"
      }
    },
    {
      name: "Alpha Daoda Kanneh",
      title: "Development Practitioner | Environmental Management Graduate Student",
      image: "/lovable-uploads/3b3909fe-e5e9-46aa-b444-53f2064c2a60.png",
      bio: "Purpose-driven development practitioner with expertise in Geography, Remote Sensing & GIS, and Environmental Management",
      fullPortfolio: {
        experience: [
          "National Assistant Secretary General - Organization of Liberian Communities in Nigeria (OLICON)",
          "Field coordination across humanitarian and community-based projects",
          "Applied skills in data analysis, photography, and problem solving"
        ],
        education: [
          "MSc in Environmental Control & Management (in view) – Obafemi Awolowo University",
          "Postgraduate Diploma in Remote Sensing & GIS – ARCSSTE-E", 
          "BSc in Geography – Obafemi Awolowo University"
        ],
        achievements: [
          "Leadership role in Organization of Liberian Communities in Nigeria",
          "Extensive experience in humanitarian aid projects",
          "Applied expertise across multiple development initiatives"
        ],
        skills: ["Monitoring & Evaluation (M&E)", "Remote Sensing & GIS Data Analysis", "Humanitarian Aid Photography", "Data Collection & Analysis", "Graphic Design"]
      },
      social: {
        linkedin: "#",
        mail: "mailto:emaildkanneh@gmail.com",
        whatsapp: "https://wa.me/+2348107498665"
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

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
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
                  <div className="relative group cursor-pointer" onClick={() => handleMemberClick(member)}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover bg-gray-100"
                      style={{ 
                        objectPosition: member.name === 'Alpha Daoda Kanneh' ? 'center 30%' :
                                      member.name === 'Emmanuel Singbeh' ? 'center 25%' :
                                      member.name === 'Levi Tuwleh' ? 'center 20%' :
                                      'center top'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <Button
                          type="button"
                          className="w-full bg-accent hover:bg-accent/90 text-white transform transition-transform hover:scale-105"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleMemberClick(member);
                          }}
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

      {/* Team Member Modal */}
      {selectedMember && (
        <TeamMemberModal member={selectedMember} onClose={closeModal} />
      )}
    </>
  );
};

export default TeamSection;