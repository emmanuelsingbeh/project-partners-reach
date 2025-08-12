import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import TeamSection from '@/components/about/TeamSection';
import { Users, Target, Eye, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      name: "Dr. Mary Johnson",
      organization: "Community Health Initiative",
      message: "Project Partners transformed our data collection process. Their training was comprehensive and the results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Samuel Roberts",
      organization: "Rural Development Foundation",
      message: "The research quality and timeliness of delivery was outstanding. We couldn't have asked for better partners.",
      rating: 5
    },
    {
      name: "Fatima Hassan",
      organization: "Women's Empowerment Network",
      message: "Their consultancy services helped us redesign our programs for maximum impact. Highly recommended!",
      rating: 5
    }
  ];

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Project Partners Research & Data Solutions Hub",
      "description": "Leading research and training organization in Liberia providing evidence-based solutions for sustainable development.",
      "mission": "To empower individuals, professionals, and organisations with evidence-based insights through high-quality research, data-driven solutions, and capacity-building services.",
      "vision": "To be a leading hub in Liberia for innovative research support, data excellence, and scientific capacity-building."
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Us - Leading Research & Training Organization"
        description="Learn about Project Partners Research & Data Solutions Hub (PPRDSH), our mission, vision, values, and expert team providing research, training, and consultancy services in Liberia."
        keywords="about us, research organization, training center, Liberia, team, mission, vision, values, expertise"
        url="https://projectpartners.org/about"
        structuredData={aboutStructuredData}
      />
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-primary/10 to-accent/10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Empowering individuals, professionals, and organisations with evidence-based insights through high-quality research, data-driven solutions, and capacity-building services.
            </p>
          </div>
        </motion.section>

        {/* Mission and Vision */}
        <motion.section 
          className="py-20 bg-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="professional-hover border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To empower individuals, professionals, and organisations with evidence-based insights through high-quality research, data-driven solutions, and capacity-building services.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="professional-hover border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <Eye className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To be a leading hub in Liberia for innovative research support, data excellence, and scientific capacity-building.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <motion.h3 
                className="text-2xl font-bold text-primary text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Core Values
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Heart, title: "Integrity", description: "We maintain the highest ethical standards in all our work" },
                  { icon: Users, title: "Collaboration", description: "We believe in the power of partnership and teamwork" },
                  { icon: Target, title: "Excellence", description: "We strive for exceptional quality in everything we deliver" },
                  { icon: Eye, title: "Innovation", description: "We embrace new approaches and cutting-edge solutions" }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center professional-hover border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <value.icon className="h-8 w-8 text-accent" />
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <TeamSection />

        {/* Testimonials */}
        <motion.section 
          className="py-20 bg-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary mb-4">What Our Clients Say</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from organizations who have experienced the impact of our services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.message}"</p>
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-accent">{testimonial.organization}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
};

export default About;