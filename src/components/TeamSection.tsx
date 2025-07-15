import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Executive Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      bio: "10+ years in development research and policy analysis",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@projectpartners.org"
      }
    },
    {
      name: "Michael Chen",
      title: "Head of Training",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in capacity building and adult learning methodologies",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@projectpartners.org"
      }
    },
    {
      name: "Dr. Amara Okafor",
      title: "Research Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Data Science with focus on social impact research",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amara@projectpartners.org"
      }
    },
    {
      name: "James Rodriguez",
      title: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Community engagement specialist and program manager",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@projectpartners.org"
      }
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Meet Our Team</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team brings together expertise in research, training, and community development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="team-card border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0 team-card-content">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white hover:bg-white/20 w-8 h-8 p-0"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white hover:bg-white/20 w-8 h-8 p-0"
                        >
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white hover:bg-white/20 w-8 h-8 p-0"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
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
  );
};

export default TeamSection;