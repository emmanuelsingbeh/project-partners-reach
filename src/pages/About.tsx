import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Users,
  Target,
  Eye,
  Heart,
  Star,
  CheckCircle,
  Linkedin,
  MessageSquare,
  Mail,
} from 'lucide-react';
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
      name: 'Emmanuel Saydee',
      title: 'Executive Director',
      bio: 'Public Health Researcher, Data Analyst & Strategic Leader',
      image: emmanuelImg,
      fullPortfolio: {
        experience: [
          'Over 7 years in research and policy design.',
          'Led multi-sectoral collaborations and capacity-building initiatives.',
          'Consultant for NGOs, academia, and government bodies.',
        ],
        education:
          'BSc Public Health, Certified M&E Professional, ongoing MSc Health Economics.',
        achievements: [
          'Founded LIRG and led it to national recognition.',
          'Published several policy-relevant research papers.',
        ],
        skills: [
          'Research & Evaluation',
          'Policy Design',
          'Stakeholder Engagement',
          'Strategic Planning',
        ],
        social: {
          linkedin: 'https://linkedin.com/in/emmanuel-saydee',
          email: 'mailto:emmanuel@example.com',
          whatsapp: 'https://wa.me/231777000000',
        },
      },
    },
    {
      name: 'Joseph Walker',
      title: 'Director of Programs',
      bio: 'Project Manager & Capacity Development Expert',
      image: josephImg,
      fullPortfolio: {
        experience: [
          'Managed donor-funded programs in education and health.',
          'Specialist in program design, coordination, and evaluation.',
        ],
        education: 'BA Sociology, M&E certifications.',
        achievements: ['Developed training curricula used by 10+ institutions.'],
        skills: [
          'Program Design',
          'Training Facilitation',
          'Grant Management',
        ],
        social: {
          linkedin: '',
          email: 'mailto:joseph@example.com',
          whatsapp: '',
        },
      },
    },
    {
      name: 'Barsee Z. Woyee',
      title: 'Director of Operations',
      bio: 'Business Strategist & Organizational Growth Specialist',
      image: barzeeImg,
      fullPortfolio: {
        experience: [
          'Over a decade in nonprofit operations and logistics.',
          'Expertise in organizational development and resource management.',
        ],
        education: 'BBA Management, PMP Certified.',
        achievements: [
          'Optimized operations for 15+ organizations.',
          'Pioneered monitoring tools adopted across projects.',
        ],
        skills: [
          'Operations Management',
          'Team Leadership',
          'Budgeting & Procurement',
        ],
        social: {
          linkedin: '',
          email: '',
          whatsapp: '',
        },
      },
    },
  ];

  const testimonials = [
    {
      name: 'Korto Johnson',
      organization: 'HealthPlus Liberia',
      message:
        'LIRG’s training transformed our data handling. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Daniel Tweh',
      organization: 'YouthBridge Initiative',
      message: 'Insightful research and practical strategies!',
      rating: 4,
    },
    {
      name: 'Amara Kollie',
      organization: 'EduCare Liberia',
      message:
        'The M&E framework we developed with LIRG improved our project impact.',
      rating: 5,
    },
  ];

  const handleMemberClick = (member: any) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Empowering individuals, professionals, and organisations with
              evidence-based insights through high-quality research,
              data-driven solutions, and capacity-building services.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 mb-16">
            <Card className="professional-hover border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower individuals… capacity‑building services.
                </p>
              </CardContent>
            </Card>
            <Card className="professional-hover border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading hub in Liberia… capacity‑building.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: 'Integrity',
                  description: 'Highest ethical standards',
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description: 'Power of partnership',
                },
                {
                  icon: Target,
                  title: 'Excellence',
                  description: 'Exceptional quality',
                },
                {
                  icon: Eye,
                  title: 'Innovation',
                  description: 'Cutting‑edge solutions',
                },
              ].map((v, i) => (
                <Card
                  key={i}
                  className="text-center professional-hover border-0 shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <v.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {v.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {v.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Meet Our Team
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team brings together expertise in research, training,
              and community development
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <Card
                key={i}
                className="team-card border-0 shadow-lg overflow-hidden cursor-pointer"
              >
                <CardContent
                  className="p-0"
                  onClick={() => handleMemberClick(member)}
                >
                  <div className="relative group">
                    <img
                      src={
                        typeof member.image === 'string'
                          ? member.image
                          : (member.image as any).src
                      }
                      alt={member.name}
                      className="w-full h-64 object-contain bg-gray-100"
                      style={{ objectPosition: 'center top' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-white"
                        onClick={() => handleMemberClick(member)}
                      >
                        View Portfolio
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-primary mb-1">
                      {member.name}
                    </h4>
                    <p className="text-accent font-medium mb-3">
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              What Our Clients Say
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from organizations who have experienced the impact of our
              services
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-4">
                    "{t.message}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-accent">{t.organization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
            style={{ backdropFilter: 'blur(5px)' }}
          >
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <img
                      src={
                        typeof selectedMember.image === 'string'
                          ? selectedMember.image
                          : (selectedMember.image as any).src
                      }
                      alt={selectedMember.name}
                      className="w-20 h-20 rounded-full bg-gray-100 mr-4"
                      style={{ objectPosition: 'center top' }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {selectedMember.name}
                      </h3>
                      <p className="text-accent font-medium">
                        {selectedMember.title}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground text-2xl"
                    onClick={closeModal}
                  >
                    &times;
                  </Button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Experience
                    </h4>
                    {Array.isArray(selectedMember.fullPortfolio.experience) ? (
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {selectedMember.fullPortfolio.experience.map(
                          (e: string, i: number) => (
                            <li key={i}>{e}</li>
                          )
                        )}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">
                        {selectedMember.fullPortfolio.experience}
                      </p>
                    )}
                  </div>
                  {selectedMember.fullPortfolio.education && (
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        Education
                      </h4>
                      <p className="text-muted-foreground">
                        {selectedMember.fullPortfolio.education}
                      </p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedMember.fullPortfolio.achievements.map(
                        (a: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-accent mr-2" />
                            <span className="text-muted-foreground">{a}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.fullPortfolio.skills.map(
                        (s: string, idx: number) => (
                          <span
                            key={idx}
                            className="bg-accent/10 px-3 py-1 rounded-full text-sm text-accent"
                          >
                            {s}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Connect with {selectedMember.name.split(' ')[0]}
                    </h4>
                    <div className="flex space-x-4">
                      {selectedMember.social.linkedin && (
                        <a
                          href={selectedMember.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-6 w-6 text-accent" />
                        </a>
                      )}
                      {selectedMember.social.email && (
                        <a href={selectedMember.social.email}>
                          <Mail className="h-6 w-6 text-accent" />
                        </a>
                      )}
                      {selectedMember.social.whatsapp && (
                        <a
                          href={selectedMember.social.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageSquare className="h-6 w-6 text-accent" />
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
