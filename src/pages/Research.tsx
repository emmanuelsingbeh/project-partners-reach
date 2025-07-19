import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  FileText,
  BarChart3,
  Globe,
  BookOpen,
  Download,
  Calendar,
  Users,
  ClipboardList,
  Microscope,
  PieChart,
  Landmark,
  Network,
  Activity,
  Users2,
  Mic,
  SearchCheck,
  HeartPulse,
  GraduationCap,
  TrendingUp,
  Leaf,
  ShieldCheck,
  VenetianMask,
  Gavel,
  Cpu,
} from 'lucide-react';
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useNavigate } from 'react-router-dom';

// Animation config
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

interface ResearchArea {
  icon: ReactNode;
  title: string;
  description: string;
  points: string[];
}

type Methodology = {
  icon: JSX.Element;
  title: string;
  description: string;
  points: string[];
};

const methodologies: Methodology[] = [
  {
    icon: <ClipboardList className="h-6 w-6 text-accent" />,
    title: "Baseline and Endline Studies",
    description: "Comprehensive assessments conducted before and after implementation to measure changes.",
    points: [
      "Pre-implementation baseline data collection",
      "Post-implementation impact assessment",
      "Comparative analysis and reporting",
      "Stakeholder engagement throughout"
    ]
  },
  {
    icon: <SearchCheck className="h-6 w-6 text-accent" />,
    title: "Monitoring and Evaluation (M&E)",
    description: "Ongoing tracking and final evaluation of program activities and outputs.",
    points: [
      "Development of indicators and M&E plans",
      "Data collection tools and templates",
      "Performance tracking and dashboarding",
      "Final project evaluations"
    ]
  },
  {
    icon: <FileText className="h-6 w-6 text-accent" />,
    title: "Surveys and Data Collection",
    description: "Design and execution of surveys for qualitative and quantitative data.",
    points: [
      "Questionnaire design and pretesting",
      "Enumerator training and supervision",
      "Household and community-level data collection",
      "Use of digital tools (e.g. Kobo, ODK)"
    ]
  },
  {
    icon: <Users2 className="h-6 w-6 text-accent" />,
    title: "Focus Group Discussions (FGDs)",
    description: "Structured group interviews to gather qualitative insights.",
    points: [
      "Topic guide development",
      "Participant segmentation (age, gender, location)",
      "Moderation and note-taking techniques",
      "Transcription and thematic coding"
    ]
  },
  {
    icon: <Mic className="h-6 w-6 text-accent" />,
    title: "Key Informant Interviews (KIIs)",
    description: "In-depth interviews with stakeholders and subject matter experts.",
    points: [
      "Identification of key stakeholders",
      "Semi-structured interview guides",
      "Audio recording and transcription",
      "Narrative synthesis and triangulation"
    ]
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-accent" />,
    title: "Data Analysis & Reporting",
    description: "Transforming raw data into actionable insights and recommendations.",
    points: [
      "Descriptive and inferential statistics",
      "Data visualization and dashboarding",
      "Report writing and policy briefs",
      "Stakeholder dissemination workshops"
    ]
  }
];

const researchAreas: ResearchArea[] = [
  {
    icon: <HeartPulse className="h-6 w-6 text-accent" />,
    title: "Health and Nutrition",
    description: "Improving access to healthcare and balanced nutrition.",
    points: [
      "Maternal and child health studies",
      "Malnutrition and food security analysis",
      "WASH (Water, Sanitation, Hygiene) assessments"
    ]
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-accent" />,
    title: "Education and Capacity Building",
    description: "Strengthening learning systems and human capital.",
    points: [
      "Literacy and numeracy performance tracking",
      "School enrollment and dropout trend analysis",
      "Teacher training and infrastructure evaluations"
    ]
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    title: "Economic Development",
    description: "Creating sustainable livelihoods and reducing poverty.",
    points: [
      "Livelihoods and skills mapping",
      "Access to finance and savings behavior",
      "Income generation program assessments"
    ]
  },
  {
    icon: <Leaf className="h-6 w-6 text-accent" />,
    title: "Environmental Sustainability",
    description: "Preserving ecosystems and promoting climate action.",
    points: [
      "Natural resource management research",
      "Climate vulnerability assessments",
      "Sustainable agriculture studies"
    ]
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
    title: "Social Protection",
    description: "Ensuring support for vulnerable populations.",
    points: [
      "Cash transfer and safety net evaluations",
      "Child protection program monitoring",
      "Disability inclusion assessments"
    ]
  },
  {
    icon: <VenetianMask className="h-6 w-6 text-accent" />,
    title: "Gender and Social Inclusion",
    description: "Promoting equity across identity groups.",
    points: [
      "Gender mainstreaming in development",
      "Barriers to women's participation",
      "LGBTQ+ and disability inclusion tracking"
    ]
  },
  {
    icon: <Gavel className="h-6 w-6 text-accent" />,
    title: "Governance and Policy",
    description: "Advancing evidence-based policy and civic engagement.",
    points: [
      "Public accountability mechanisms",
      "Citizen engagement metrics",
      "Policy impact assessments"
    ]
  },
  {
    icon: <Cpu className="h-6 w-6 text-accent" />,
    title: "Technology and Innovation",
    description: "Leveraging digital tools to accelerate development.",
    points: [
      "ICT access and digital literacy",
      "Use of mobile data collection",
      "AI and big data in research"
    ]
  }
];

const Research = () => {
  const navigate = useNavigate(); // <--- MUST be inside component

  const researchServices = [
    {
      icon: BarChart3,
      title: "Baseline and Endline Studies",
      description: "Comprehensive baseline assessments and endline evaluations to measure program impact and effectiveness.",
      features: [
        "Pre-implementation baseline data collection",
        "Post-implementation impact assessment",
        "Comparative analysis and reporting",
        "Stakeholder engagement throughout"
      ]
    },
    {
      icon: FileText,
      title: "Impact Assessments and Evaluations",
      description: "Rigorous impact evaluations using internationally recognized methodologies and frameworks.",
      features: [
        "Theory of change development",
        "Mixed-methods evaluation design",
        "Cost-effectiveness analysis",
        "Recommendation development"
      ]
    },
    {
      icon: Globe,
      title: "Market Research and Feasibility Studies",
      description: "In-depth market analysis and feasibility assessments for informed decision-making.",
      features: [
        "Market landscape analysis",
        "Competitor assessment",
        "Financial feasibility modeling",
        "Risk analysis and mitigation"
      ]
    },
    {
      icon: Search,
      title: "Data Collection and Management",
      description: "Professional data collection services with robust quality assurance and management systems.",
      features: [
        "Survey design and implementation",
        "Data quality assurance protocols",
        "Database development and management",
        "Real-time monitoring dashboards"
      ]
    },
    {
      icon: BarChart3,
      title: "Statistical Analysis and Reporting",
      description: "Advanced statistical analysis and comprehensive reporting for evidence-based insights.",
      features: [
        "Descriptive and inferential statistics",
        "Multivariate analysis techniques",
        "Data visualization and dashboards",
        "Executive summary development"
      ]
    },
    {
      icon: BookOpen,
      title: "Literature Reviews and Systematic Reviews",
      description: "Comprehensive literature reviews and systematic reviews following international standards.",
      features: [
        "Systematic search strategies",
        "Critical appraisal of evidence",
        "Meta-analysis when appropriate",
        "Evidence synthesis and recommendations"
      ]
    }
  ];

  const recentResearch = [
    {
      title: "Impact of Digital Literacy Training on Rural Communities",
      description: "A comprehensive study examining the effects of digital literacy programs on economic opportunities in rural Liberia.",
      date: "2024",
      category: "Impact Assessment",
      status: "Published",
      downloadUrl: "#"
    },
    {
      title: "Healthcare Access Barriers in Post-Conflict Settings",
      description: "Systematic review of healthcare accessibility challenges and potential solutions in post-conflict environments.",
      date: "2024",
      category: "Systematic Review",
      status: "In Progress",
      downloadUrl: null
    },
    {
      title: "Community-Based Natural Resource Management Effectiveness",
      description: "Evaluation of community-led conservation initiatives and their impact on environmental sustainability.",
      date: "2023",
      category: "Evaluation",
      status: "Published",
      downloadUrl: "#"
    },
    {
      title: "Youth Employment Program Baseline Study",
      description: "Baseline assessment for a national youth employment initiative focusing on skills development and job creation.",
      date: "2023",
      category: "Baseline Study",
      status: "Published",
      downloadUrl: "#"
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
              Research & Data Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Rigorous research and comprehensive data analysis services to support evidence-based programming and informed decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Recent Research
              </Button>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Research Areas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We focus on the most pressing issues affecting communities and development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeIn}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                      <p className="text-muted-foreground mb-3 text-sm">{area.description}</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {area.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Services */}
        <section id="services" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Research Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive research services following international standards and ethical guidelines
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Methodology Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Research Methodology</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We employ diverse research methodologies to ensure robust and credible findings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeIn}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                      <p className="text-muted-foreground mb-3">{method.description}</p>

                      <ul className="list-disc list-inside space-y-1 pl-5 marker:text-green-600">
                        {method.points.map((point, idx) => (
                          <li key={idx} className="text-muted-foreground">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Research */}
        <section id="research" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Recent Research</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our latest research publications and ongoing studies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {recentResearch.map((research, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge 
                        variant="outline" 
                        className={research.status === 'Published' ? 'border-green-500 text-green-600' : 'border-orange-500 text-orange-600'}
                      >
                        {research.status}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {research.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-3">{research.title}</h3>
                    <p className="text-muted-foreground mb-4">{research.description}</p>

                    {research.downloadUrl ? (
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-white" onClick={() => window.open(research.downloadUrl, '_blank')}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        Download Not Available
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: Need Research Support? */}
        <section className="py-16 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Need Research Support?</h2>
            <p className="mb-8 text-lg max-w-xl mx-auto">
              Whether you need consultancy or want to discuss your specific research requirements, we’re here to help.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => navigate('/contact')}
              >
                <Users className="mr-2 h-5 w-5" />
                Discuss Your Need
              </Button>

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => navigate('/consultancy')}
              >
                <Search className="mr-2 h-5 w-5" />
                Research Consultancy
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
