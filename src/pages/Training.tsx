import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Clock, Users } from 'lucide-react';

const Training = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to anchor if hash is present in the URL
  useEffect(() => {
    if (location.hash === '#our-training-programs') {
      const el = document.getElementById('our-training-programs');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300); // delay to ensure element is rendered
      }
    }
  }, [location]);

  return (
    <div>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Our Trainings</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our programs designed to equip you with practical knowledge and skills.
          </p>
          <Button 
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => navigate('/training-registration')}
          >
            Register for Training
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section id="our-training-programs" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Our Training Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Sample Training Cards */}
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Analysis & Visualization</h3>
              <p className="text-muted-foreground mb-4">
                Learn to analyze data using Excel, Power BI, and other tools.
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/training-registration')}
              >
                Register
              </Button>
            </div>

            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Monitoring & Evaluation</h3>
              <p className="text-muted-foreground mb-4">
                Develop M&E frameworks and understand impact measurement.
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/training-registration')}
              >
                Register
              </Button>
            </div>

            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-muted-foreground mb-4">
                Gain practical project planning and execution skills.
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/training-registration')}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
