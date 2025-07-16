import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Monrovia, Liberia", "West Africa"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+231 XXX XXX XXX", "+231 XXX XXX XXX"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@projectpartners.org", "contact@projectpartners.org"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM"]
    }
  ];

  const departments = [
    {
      department: "Training Programs",
      email: "training@projectpartners.org",
      contact: "Barzee Sumo - Training Coordinator"
    },
    {
      department: "Research & Data",
      email: "research@projectpartners.org", 
      contact: "Dr. Utham - Research Manager"
    },
    {
      department: "Consultancy Services",
      email: "consultancy@projectpartners.org",
      contact: "Levi Tuwleh - Program Officer"
    },
    {
      department: "Volunteer Program",
      email: "volunteers@projectpartners.org",
      contact: "Emmanuel Singbeh - IT Support"
    },
    {
      department: "General Inquiries",
      email: "info@projectpartners.org",
      contact: "Main Office"
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us to discuss your training, research, or consultancy needs. We're here to help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Department Contacts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Contact the right department for specialized assistance and faster response times
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">{dept.department}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{dept.contact}</p>
                    <p className="text-accent font-medium">{dept.email}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactSection />
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Find Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Located in the heart of Monrovia, we're easily accessible and ready to serve you
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">Map integration coming soon</p>
                    <p className="text-sm text-muted-foreground mt-2">Monrovia, Liberia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose the best way to reach us based on your needs
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm opacity-90">For urgent inquiries</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm opacity-90">For detailed inquiries</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm opacity-90">For in-person consultation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;