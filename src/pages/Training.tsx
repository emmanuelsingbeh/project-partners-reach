import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const trainingPrograms = [
  {
    title: 'Data Analysis with Python',
    description: 'Master data analysis using Python and real-world datasets.',
  },
  {
    title: 'Project Management Essentials',
    description: 'Learn project planning, execution, and agile methodologies.',
  },
  {
    title: 'ICT for Development (ICT4D)',
    description: 'Harness technology to drive social and economic development.',
  },
  {
    title: 'Monitoring & Evaluation (M&E)',
    description: 'Develop skills in program evaluation and impact measurement.',
  },
];

const Training = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register-training', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Registration submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to submit registration.');
      }
    } catch (error) {
      alert('An error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 text-center bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Explore Our Training Programs</h1>
          <p className="text-muted-foreground text-lg">
            Our expert-led courses are designed to build capacity and empower professionals across sectors.
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingPrograms.map((program, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-background">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Register Your Interest</h2>
          <form onSubmit={handleRegistration} className="space-y-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Tell us why you're interested (optional)"
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full">
              Submit Registration
            </Button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Skills?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of professionals who have transformed their careers through our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <a href="/student-portal" className="w-full sm:w-auto">
              <Button className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                Student Portal
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;