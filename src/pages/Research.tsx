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
} from 'lucide-react';
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { HeartPulse, GraduationCap, TrendingUp, Leaf, ShieldCheck, VenetianMask, Gavel, Cpu } from 'lucide-react';


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
// Methodology data
const methodology = [
  {
    icon: <ClipboardList className="h-6 w-6 text-accent" />,
    title: "Surveys & Questionnaires",
    description: "Structured tools used to gather quantifiable data from participants.",
    points: [
      "Standardized questions for comparability",
      "Large sample sizes for statistical power",
      "Efficient for collecting numerical data"
    ]
  },
  {
    icon: <Microscope className="h-6 w-6 text-accent" />,
    title: "Field Observations",
    description: "In-person visits and contextual observations for qualitative insights.",
    points: [
      "Captures non-verbal behaviors and environmental factors",
      "Useful in natural or uncontrolled settings",
      "Ideal for early-stage discovery"
    ]
  },
  {
    icon: <PieChart className="h-6 w-6 text-accent" />,
    title: "Focus Group Discussions",
    description: "Group dialogue sessions designed to explore community perspectives.",
    points: [
      "Interactive discussions among stakeholders",
      "Facilitates opinion-sharing and debate",
      "Generates qualitative data"
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: "Key Informant Interviews",
    description: "One-on-one expert interviews for deep context and nuanced understanding.",
    points: [
      "Gathers insights from sector experts or leaders",
      "Explores sensitive or complex issues",
      "Flexible and in-depth"
    ]
  },
  {
    icon: <Landmark className="h-6 w-6 text-accent" />,
    title: "Case Studies",
    description: "In-depth analysis of specific programs or events over time.",
    points: [
      "Context-rich and detailed",
      "Highlights best practices and challenges",
      "Combines multiple data sources"
    ]
  },
  {
    icon: <Network className="h-6 w-6 text-accent" />,
    title: "Mixed Methods",
    description: "Integrating both qualitative and quantitative approaches.",
    points: [
      "Balanced data triangulation",
      "Strengthens credibility of findings",
      "Combines depth with generalizability"
    ]
  }
];


// Research Areas data
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

  const researchAreasList = [
    "Health and Nutrition",
    "Education and Capacity Building",
    "Economic Development",
    "Environmental Sustainability",
    "Social Protection",
    "Gender and Social Inclusion",
    "Governance and Policy",
    "Technology and Innovation"
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
              <p className="text-muted-foreground text-sm">{area.description}</p>
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
      <h2 className="text-3xl font-bold text-primary mb-4">Our Research Methodology</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        We employ diverse research methodologies to ensure robust and credible findings.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {methodology.map((method, index) => (
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
              <p className="text-muted-foreground text-sm">{method.description}</p>
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
                    
                    <div className="flex justify-between items-center">
                      <Badge className="bg-accent/10 text-accent">{research.category}</Badge>
                      {research.downloadUrl && (
                        <Button size="sm" variant="outline" className="group">
                          <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                          Download
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Research Support?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you generate the evidence you need for informed decision-making and impactful programming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = '/contact'}
              >
                <Users className="mr-2 h-5 w-5" />
                Discuss Your Needs
              </Button>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                onClick={() => window.location.href = '/consultancy'}
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