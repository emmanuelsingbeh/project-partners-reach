import { Users, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Project Partners Research and Data Solutions Hub is dedicated to empowering communities 
            through comprehensive research, professional training, and innovative data solutions.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="professional-hover border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide high-quality research, training, and consultancy services that empower 
                organizations and communities to make data-driven decisions for sustainable development 
                and positive social impact.
              </p>
            </CardContent>
          </Card>

          <Card className="professional-hover border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading hub for research and data solutions in our region, fostering 
                a community of skilled professionals and volunteers who drive meaningful change 
                through evidence-based approaches.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Integrity", description: "We maintain the highest ethical standards in all our work" },
              { icon: Users, title: "Collaboration", description: "We believe in the power of partnership and teamwork" },
              { icon: Target, title: "Excellence", description: "We strive for exceptional quality in everything we deliver" },
              { icon: Eye, title: "Innovation", description: "We embrace new approaches and cutting-edge solutions" }
            ].map((value, index) => (
              <Card key={index} className="text-center professional-hover border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;