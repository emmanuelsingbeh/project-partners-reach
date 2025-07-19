import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Training = () => {
  const navigate = useNavigate();

  const handleRegistration = (programTitle: string) => {
    console.log(`Registration for: ${programTitle}`);
    alert(`Registration process initiated for ${programTitle}. You will be redirected to the registration system.`);
    navigate(`/training-registration/${encodeURIComponent(programTitle)}`);
  };

  const trainingPrograms = [
    {
      title: "Research Methodology and Data Analysis",
      duration: "6 Weeks",
      level: "Beginner to Advanced",
      participants: "Max 25",
      description: "Comprehensive training on research design, data collection, and statistical analysis techniques.",
      modules: [
        "Research Design and Planning",
        "Data Collection Methods",
        "Statistical Analysis",
        "Report Writing",
        "Research Ethics"
      ],
      price: "Contact for pricing",
      featured: true
    },
    {
      title: "Project Management and M&E",
      duration: "4 Weeks",
      level: "Intermediate",
      participants: "Max 20",
      description: "Learn project management best practices and monitoring & evaluation frameworks.",
      modules: [
        "Project Planning",
        "Implementation Management",
        "M&E Framework Design",
        "Performance Indicators",
        "Impact Assessment"
      ],
      price: "Contact for pricing",
      featured: true
    },
    {
      title: "Digital Literacy and Technology Skills",
      duration: "3 Weeks",
      level: "Beginner",
      participants: "Max 30",
      description: "Essential digital skills for modern workplace efficiency and data management.",
      modules: [
        "Computer Basics",
        "Microsoft Office Suite",
        "Data Management Software",
        "Online Collaboration Tools",
        "Digital Security"
      ],
      price: "Contact for pricing",
      featured: true
    },
    {
      title: "Leadership and Organizational Development",
      duration: "5 Weeks",
      level: "Intermediate to Advanced",
      participants: "Max 15",
      description: "Develop leadership skills and organizational management capabilities.",
      modules: [
        "Leadership Styles",
        "Team Management",
        "Strategic Planning",
        "Change Management",
        "Conflict Resolution"
      ],
      price: "Contact for pricing",
      featured: true
    },
    {
      title: "Grant Writing and Fundraising",
      duration: "4 Weeks",
      level: "Intermediate",
      participants: "Max 20",
      description: "Master the art of proposal writing and effective fundraising strategies.",
      modules: [
        "Proposal Writing",
        "Budget Development",
        "Donor Research",
        "Fundraising Strategies",
        "Compliance and Reporting"
      ],
      price: "Contact for pricing",
      featured: true
    },
    {
      title: "Community Engagement and Advocacy",
      duration: "3 Weeks",
      level: "Beginner to Intermediate",
      participants: "Max 25",
      description: "Learn effective community engagement techniques and advocacy strategies.",
      modules: [
        "Stakeholder Mapping",
        "Community Mobilization",
        "Advocacy Planning",
        "Communication Strategies",
        "Partnership Building"
      ],
      price: "Contact for pricing",
      featured: true
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from experienced professionals with real-world expertise"
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description: "Hands-on training with real case studies and practical exercises"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive recognized certificates upon successful completion"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Weekend and evening classes available to fit your schedule"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Training Programs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Build your capacity with our comprehensive professional development programs designed for sustainable impact.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => {
                const section = document.getElementById('our-training-programs');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Why Choose Our Training?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Training Programs */}
        <section id="our-training-programs" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Training Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to enhance your professional skills and career development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${program.featured ? 'ring-2 ring-accent ring-opacity-50' : ''}`}>
                  <CardContent className="p-6">
                    {program.featured && (
                      <Badge className="bg-accent text-white mb-4">Featured Program</Badge>
                    )}

                    <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-accent mr-2" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-accent mr-2" />
                        <span>{program.participants}</span>
                      </div>
                      <div className="col-span-2">
                        <Badge variant="outline">{program.level}</Badge>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-2">Modules Covered:</h4>
                      <ul className="space-y-1">
                        {program.modules.slice(0, 3).map((module, moduleIndex) => (
                          <li key={moduleIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{module}</span>
                          </li>
                        ))}
                        {program.modules.length > 3 && (
                          <li className="text-sm text-accent">+ {program.modules.length - 3} more modules</li>
                        )}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-primary">{program.price}</span>
                      </div>
                      <Button 
                        onClick={() => handleRegistration(program.title)}
                        className={`w-full ${program.featured ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'} text-white group`}
                      >
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Skills?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of professionals who have transformed their careers through our training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/student-portal" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 w-full sm:w-auto"
                >
                  Student Portal
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
